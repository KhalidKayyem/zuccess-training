import { useMemo, useState } from 'react'
import { GROUPS } from '../../data/groups.js'
import { LEARNERS, GROUP_STATS } from '../../data/learners.js'
import { EMPLOYEES } from '../../data/employees.js'
import { readProgressSnapshot } from '../../data/progressStore.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import StatusBadge from './StatusBadge.jsx'
import KpiTile from './KpiTile.jsx'

const MODULE_ID = 'food-hygiene-complete'

// Fixed rank order for sorting by status - NOT alphabetical.
const STATUS_RANK = {
  completed: 0,
  'in-progress': 1,
  failed: 2,
  'not-started': 3,
}

function formatCompletionDate(dateValue, isRtl) {
  if (!dateValue) {
    return null
  }
  const parsed = new Date(dateValue)
  if (Number.isNaN(parsed.getTime())) {
    return null
  }
  return new Intl.DateTimeFormat(isRtl ? 'ar' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    numberingSystem: 'latn',
  }).format(parsed)
}

function formatPercent(fraction) {
  return Math.round(fraction * 100) + '%'
}

function SortIndicator({ sortKey, sortDir, column }) {
  if (sortKey !== column) {
    return null
  }
  return (
    <span aria-hidden="true" className="text-xs text-orange">
      {sortDir === 'asc' ? '▲' : '▼'}
    </span>
  )
}

function SortableHeader({ sortKey, sortDir, onSort, column, label }) {
  return (
    <th scope="col" className="px-4 py-3 text-start">
      <button
        type="button"
        onClick={() => onSort(column)}
        className="flex items-center gap-1.5 text-sm font-semibold text-navy-700 transition-colors hover:text-navy"
      >
        <span>{label}</span>
        <SortIndicator sortKey={sortKey} sortDir={sortDir} column={column} />
      </button>
    </th>
  )
}

export default function GroupDetail({ groupId, onSelectLearner, onBack }) {
  const { lang, t } = useLanguage()
  const isRtl = lang === 'ar'
  const backArrow = isRtl ? '→' : '←'

  const [sortKey, setSortKey] = useState('name')
  const [sortDir, setSortDir] = useState('asc')

  const group = GROUPS.find((g) => g.id === groupId)
  const stats = GROUP_STATS[groupId]

  const rows = useMemo(() => {
    const base = LEARNERS.filter((l) => l.groupId === groupId).map((l) => ({
      id: l.learnerId,
      name: l.name,
      status: l.status,
      bestScore: l.bestScore,
      attempts: l.attempts,
      completedAt: l.completedAt,
      isDemo: false,
    }))

    // The 5 real named employees are a separate identity from the 150
    // synthetic LEARNERS records, each with their own namespaced localStorage
    // progress. Any of them might have real data present in THIS browser (if
    // they were used to log in at some point during this demo session) - or
    // might have none at all (never logged in on this browser). Only surface
    // a row for employees in this group who actually have real recorded
    // progress on ANY module - as extra interactive rows - never folded into
    // GROUP_STATS, and never as empty ghost rows for employees with nothing
    // to show. The columns themselves stay flagship-focused: an employee
    // with progress elsewhere but who never touched the flagship module
    // still gets a row (still clickable, still routes to their full
    // cross-module LearnerDetail view), but shows flagship columns
    // defaulted to not-started/empty rather than fabricating a score.
    const groupEmployees = EMPLOYEES.filter((e) => e.groupId === groupId)
    for (const employee of groupEmployees) {
      const snapshot = readProgressSnapshot(employee.employeeNumber)
      const hasAnyProgress = Object.values(snapshot.modules).some((m) => m.status !== 'not-started')
      if (!hasAnyProgress) {
        continue
      }
      const moduleProgress = snapshot.modules[MODULE_ID]
      base.push({
        id: employee.employeeNumber,
        name: employee.name[lang],
        status: moduleProgress ? moduleProgress.status : 'not-started',
        bestScore: moduleProgress ? moduleProgress.assessment.bestScore : null,
        attempts: moduleProgress ? moduleProgress.assessment.attempts.length : 0,
        completedAt: moduleProgress ? moduleProgress.certificateIssuedAt || null : null,
        isDemo: true,
      })
    }

    return base
  }, [groupId, lang])

  const sortedRows = useMemo(() => {
    const copy = [...rows]
    copy.sort((a, b) => {
      let cmp = 0
      if (sortKey === 'name') {
        cmp = a.name.localeCompare(b.name)
      } else if (sortKey === 'score') {
        const aNull = a.bestScore === null
        const bNull = b.bestScore === null
        if (aNull && bNull) {
          cmp = 0
        } else if (aNull) {
          cmp = 1
        } else if (bNull) {
          cmp = -1
        } else {
          cmp = a.bestScore - b.bestScore
        }
      } else if (sortKey === 'status') {
        cmp = STATUS_RANK[a.status] - STATUS_RANK[b.status]
      }
      return sortDir === 'asc' ? cmp : -cmp
    })
    return copy
  }, [rows, sortKey, sortDir])

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  if (!group || !stats) {
    return null
  }

  return (
    <div className="flex flex-col gap-8">
      <button
        type="button"
        onClick={onBack}
        className="flex w-fit items-center gap-2 text-sm text-navy-400 transition-colors hover:text-navy"
      >
        <span aria-hidden="true">{backArrow}</span>
        <span>{t('back')}</span>
      </button>

      <h1 className="text-2xl font-bold text-navy">{group.name[lang]}</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <KpiTile label={t('totalLearnersLabel')} value={stats.total} />
        <KpiTile label={t('completionsLabel')} value={stats.completed} />
        <KpiTile label={t('completionRateLabel')} value={formatPercent(stats.completionRate)} />
        <KpiTile label={t('passRateLabel')} value={formatPercent(stats.passRate)} />
        <KpiTile label={t('averageScoreLabel')} value={stats.avgScore + '%'} />
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-navy">{t('learnersListHeading')}</h2>

        <div className="overflow-x-auto rounded-2xl border border-navy-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-start">
            <thead>
              <tr className="border-b border-navy-200">
                <SortableHeader sortKey={sortKey} sortDir={sortDir} onSort={handleSort} column="name" label={t('nameLabel')} />
                <SortableHeader sortKey={sortKey} sortDir={sortDir} onSort={handleSort} column="status" label={t('statusLabel')} />
                <SortableHeader sortKey={sortKey} sortDir={sortDir} onSort={handleSort} column="score" label={t('bestScoreLabel')} />
                <th scope="col" className="px-4 py-3 text-start text-sm font-semibold text-navy-700">
                  {t('attemptsLabel')}
                </th>
                <th scope="col" className="px-4 py-3 text-start text-sm font-semibold text-navy-700">
                  {t('completionDateLabel')}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((row) => {
                const formattedDate = formatCompletionDate(row.completedAt, isRtl)
                return (
                  <tr
                    key={row.id}
                    onClick={() => onSelectLearner(row.id)}
                    className="cursor-pointer border-b border-navy-100 transition-colors last:border-b-0 hover:bg-navy-100/40"
                  >
                    <td className="px-4 py-3 text-sm text-navy">
                      <span className="flex items-center gap-2">
                        <span>{row.name}</span>
                        {row.isDemo && (
                          <span className="rounded-full bg-navy-100 px-2 py-0.5 text-xs font-medium text-navy-700">
                            {t('demoLearnerBadge')}
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-4 py-3 text-sm text-navy">
                      {row.bestScore !== null ? row.bestScore + '%' : '-'}
                    </td>
                    <td className="px-4 py-3 text-sm text-navy">{row.attempts}</td>
                    <td className="px-4 py-3 text-sm text-navy">{formattedDate || '-'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
