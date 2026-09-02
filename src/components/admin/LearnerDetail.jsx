import { useMemo, useState } from 'react'
import { MODULES } from '../../data/modules.js'
import { GROUPS } from '../../data/groups.js'
import { LEARNERS } from '../../data/learners.js'
import { EMPLOYEES } from '../../data/employees.js'
import { readProgressSnapshot } from '../../data/progressStore.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import StatusBadge from './StatusBadge.jsx'

function StatTile({ label, value }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-navy-100 bg-white p-5">
      <p className="text-sm text-navy-400">{label}</p>
      <p className="text-2xl font-semibold text-navy">{value}</p>
    </div>
  )
}

// Minimal default shape for a module with no persisted progress yet - only
// the fields this view actually reads (mirrors progressStore's internal
// defaultModuleProgress()).
function defaultModuleProgress() {
  return {
    status: 'not-started',
    assessment: { attempts: [], bestScore: null },
  }
}

function getModuleProgressFromSnapshot(snapshot, moduleId) {
  return snapshot.modules[moduleId] ?? defaultModuleProgress()
}

/**
 * Builds one group per module that has at least one assessment attempt in
 * the employee's snapshot: { module, attempts }. Attempts are stored
 * chronologically (oldest first, index 0 = "Attempt 1"), so each attempt is
 * first annotated with its original sequential number out of the module's
 * total, then the array is reversed for DISPLAY ONLY so the most recent
 * attempt renders first while keeping its correct original number. Groups
 * themselves are ordered by that module's own most recent attempt "at"
 * timestamp, descending - string comparison is safe for ISO-8601
 * timestamps. Modules with zero attempts are skipped entirely.
 */
function buildAttemptHistory(snapshot) {
  const groups = []

  for (const module of MODULES) {
    const progress = getModuleProgressFromSnapshot(snapshot, module.id)
    const rawAttempts = progress.assessment.attempts
    if (rawAttempts.length === 0) continue

    const numbered = rawAttempts.map((attempt, index) => ({
      attempt,
      number: index + 1,
      total: rawAttempts.length,
    }))
    const mostRecentAt = rawAttempts[rawAttempts.length - 1].at

    groups.push({ module, attempts: [...numbered].reverse(), mostRecentAt })
  }

  groups.sort((a, b) => (a.mostRecentAt < b.mostRecentAt ? 1 : a.mostRecentAt > b.mostRecentAt ? -1 : 0))

  return groups
}

// Formats a millisecond duration as "Xm Ys" once it reaches a full minute,
// otherwise plain "Ys" - no library, just arithmetic.
function formatDuration(ms) {
  if (ms >= 60000) {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.round((ms % 60000) / 1000)
    return `${minutes}m ${seconds}s`
  }
  return `${Math.round(ms / 1000)}s`
}

export default function LearnerDetail({ learnerId, onBack }) {
  const { lang, t } = useLanguage()
  const isRtl = lang === 'ar'
  const backArrow = isRtl ? '→' : '←'

  const backControl = (
    <button
      type="button"
      onClick={onBack}
      className="flex w-fit items-center gap-2 text-sm text-navy-400 transition-colors hover:text-navy"
    >
      <span aria-hidden="true">{backArrow}</span>
      <span>{t('back')}</span>
    </button>
  )

  // ------------------------------------------------------------------
  // Branch A - any real employee: real, persisted progress-store data for
  // THAT SPECIFIC employee (read via readProgressSnapshot, not the live
  // logged-in session - an admin browsing here is very likely not looking
  // at their own session). Never reads LEARNERS or any other synthetic
  // data for its numbers.
  // ------------------------------------------------------------------
  const employee = EMPLOYEES.find((e) => e.employeeNumber === learnerId)

  // Hooks stay unconditional at the top level (never inside the `if
  // (employee)` branch below) so call order can't vary across renders.
  // No-op / empty when there is no employee to look up.
  const snapshot = employee ? readProgressSnapshot(learnerId) : null
  const attemptHistory = useMemo(() => (snapshot ? buildAttemptHistory(snapshot) : []), [snapshot])

  // Only the single most-recent attempt within each module group starts
  // expanded - every older attempt in every group starts collapsed. Keyed
  // by moduleId + ':' + attempt number so it survives the display-order
  // reversal within a group. LearnerDetail is fully unmounted and
  // remounted by AdminView whenever the viewed learner changes (it always
  // passes through the group screen in between), so this lazy initializer
  // never goes stale for a given mount.
  const [expandedKeys, setExpandedKeys] = useState(() => {
    const initial = new Set()
    for (const moduleGroup of attemptHistory) {
      const mostRecentAttempt = moduleGroup.attempts[0]
      initial.add(moduleGroup.module.id + ':' + mostRecentAttempt.number)
    }
    return initial
  })

  function toggleExpanded(key) {
    setExpandedKeys((current) => {
      const next = new Set(current)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  if (employee) {
    const group = GROUPS.find((g) => g.id === employee.groupId)

    return (
      <div className="flex flex-col gap-8 px-6 py-8 lg:px-10">
        {backControl}

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl text-navy">{employee.name[lang]}</h1>
          {group && (
            <p className="text-sm text-navy-400">
              {t('groupLabel')}: <span className="text-navy-700">{group.name[lang]}</span>
            </p>
          )}
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl text-navy">{t('modulesProgressHeading')}</h2>
          <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-white">
            <table className="w-full min-w-[640px] border-collapse text-start">
              <thead>
                <tr className="border-b border-navy-100 text-sm text-navy-400">
                  <th className="px-5 py-3 text-start font-medium">{t('nameLabel')}</th>
                  <th className="px-5 py-3 text-start font-medium">{t('statusLabel')}</th>
                  <th className="px-5 py-3 text-start font-medium">{t('bestScoreLabel')}</th>
                  <th className="px-5 py-3 text-start font-medium">{t('attemptsLabel')}</th>
                </tr>
              </thead>
              <tbody>
                {MODULES.map((module) => {
                  const progress = getModuleProgressFromSnapshot(snapshot, module.id)
                  return (
                    <tr key={module.id} className="border-b border-navy-100 last:border-b-0">
                      <td className="px-5 py-4 text-navy">{module.title[lang]}</td>
                      <td className="px-5 py-4">
                        <StatusBadge status={progress.status} />
                      </td>
                      <td className="px-5 py-4 text-navy-700">
                        {progress.assessment.bestScore !== null ? `${progress.assessment.bestScore}%` : '-'}
                      </td>
                      <td className="px-5 py-4 text-navy-700">{progress.assessment.attempts.length}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl text-navy">{t('recentAttemptHeading')}</h2>

          {attemptHistory.length === 0 ? (
            <p className="rounded-2xl border border-navy-100 bg-white p-6 text-navy-400">
              {t('noAttemptsYetLabel')}
            </p>
          ) : (
            <div className="flex flex-col gap-6">
              {attemptHistory.map((moduleGroup) => (
                <div key={moduleGroup.module.id} className="flex flex-col gap-3">
                  <h3 className="text-base text-navy">{moduleGroup.module.title[lang]}</h3>

                  <div className="flex flex-col gap-3">
                    {moduleGroup.attempts.map(({ attempt, number, total }) => {
                      const attemptKey = moduleGroup.module.id + ':' + number
                      const isExpanded = expandedKeys.has(attemptKey)
                      const attemptDate = new Date(attempt.at)
                      const isValidAttemptDate = !Number.isNaN(attemptDate.getTime())
                      const formattedAttemptAt = isValidAttemptDate
                        ? new Intl.DateTimeFormat(isRtl ? 'ar' : 'en-GB', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            numberingSystem: 'latn',
                          }).format(attemptDate)
                        : '-'
                      // Defaults to an empty list for older attempt records
                      // saved before focusEvents existed on the attempt
                      // shape - never crashes. Scoped to THIS attempt, not
                      // shared with any other attempt in the group.
                      const attemptFocusEvents = attempt.focusEvents ?? []
                      const attemptTotalFocusLossMs = attemptFocusEvents.reduce(
                        (sum, event) => sum + event.durationMs,
                        0,
                      )

                      return (
                        <div key={attemptKey} className="rounded-2xl border border-navy-100 bg-white">
                          <button
                            type="button"
                            onClick={() => toggleExpanded(attemptKey)}
                            aria-expanded={isExpanded}
                            className="flex w-full flex-wrap items-center justify-between gap-3 p-5 text-start"
                          >
                            <span className="flex flex-wrap items-center gap-3">
                              <span className="text-navy">
                                {t('attemptWord')} {number} {t('ofWord')} {total}
                              </span>
                              <span className="text-sm text-navy-700">{attempt.score}%</span>
                              {attempt.passed ? (
                                <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-700">
                                  <span aria-hidden="true">✓</span>
                                  <span>{t('passedLabel')}</span>
                                </span>
                              ) : (
                                <span className="flex items-center gap-1.5 text-sm font-medium text-rose-700">
                                  <span aria-hidden="true">✕</span>
                                  <span>{t('failedStatus')}</span>
                                </span>
                              )}
                              <span className="text-sm text-navy-400">{formattedAttemptAt}</span>
                            </span>
                            <span aria-hidden="true" className="text-xs text-orange">
                              {isExpanded ? '▲' : '▼'}
                            </span>
                          </button>

                          {isExpanded && (
                            <div className="flex flex-col gap-4 border-t border-navy-100 p-5 pt-4">
                              {moduleGroup.module.assessment.questions.map((question) => {
                                const chosenOptionId = attempt.answers[question.id]
                                const chosenOption = question.options.find((o) => o.id === chosenOptionId)
                                const correctOption = question.options.find((o) => o.id === question.correctOptionId)
                                const wasCorrect = chosenOptionId === question.correctOptionId

                                return (
                                  <div key={question.id} className="flex flex-col gap-3 rounded-2xl border border-navy-100 p-5">
                                    <p className="text-navy">{question.prompt[lang]}</p>

                                    <div className="flex flex-wrap items-center gap-3 text-sm">
                                      <span className="text-navy-400">
                                        {t('selectedAnswerLabel')}: <span className="text-navy-700">{chosenOption ? chosenOption.text[lang] : '-'}</span>
                                      </span>

                                      {wasCorrect ? (
                                        <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                                          <span aria-hidden="true">✓</span>
                                          <span>{t('correctLabel')}</span>
                                        </span>
                                      ) : (
                                        <span className="flex items-center gap-1.5 font-medium text-rose-700">
                                          <span aria-hidden="true">✕</span>
                                          <span>{t('incorrectLabel')}</span>
                                        </span>
                                      )}
                                    </div>

                                    {!wasCorrect && (
                                      <p className="text-sm text-navy-400">
                                        {t('correctAnswerLabel')}: <span className="text-navy-700">{correctOption.text[lang]}</span>
                                      </p>
                                    )}
                                  </div>
                                )
                              })}

                              <div className="flex flex-col gap-3 rounded-2xl border border-navy-100 p-5">
                                <h4 className="text-base text-navy">{t('focusEventsHeading')}</h4>
                                {attemptFocusEvents.length === 0 ? (
                                  <p className="text-sm text-navy-400">{t('noFocusLossesLabel')}</p>
                                ) : (
                                  <>
                                    <p className="text-sm text-navy-700">
                                      {attemptFocusEvents.length} {t('timesAwayLabel')}, {formatDuration(attemptTotalFocusLossMs)} {t('totalLabel')}
                                    </p>
                                    <ul className="flex flex-col gap-1">
                                      {attemptFocusEvents.map((event, index) => (
                                        <li key={index} className="text-sm text-navy-400">
                                          {t('awayForLabel')} {formatDuration(event.durationMs)}
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    )
  }

  // ------------------------------------------------------------------
  // Branch B - synthetic learner (learnerId is not a real employeeNumber):
  // summary only, sourced entirely from LEARNERS. Never reads the
  // progress store - no drilldown, just the graceful explanatory note.
  // ------------------------------------------------------------------
  const record = LEARNERS.find((l) => l.learnerId === learnerId)

  if (!record) {
    return <div className="flex flex-col gap-8 px-6 py-8 lg:px-10">{backControl}</div>
  }

  const group = GROUPS.find((g) => g.id === record.groupId)
  const module = MODULES.find((m) => m.id === record.moduleId)
  const completedDate = record.completedAt ? new Date(record.completedAt) : null
  const isValidCompletedDate = completedDate !== null && !Number.isNaN(completedDate.getTime())
  const formattedCompletedAt = isValidCompletedDate
    ? new Intl.DateTimeFormat(isRtl ? 'ar' : 'en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        numberingSystem: 'latn',
      }).format(completedDate)
    : '-'

  return (
    <div className="flex flex-col gap-8 px-6 py-8 lg:px-10">
      {backControl}

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl text-navy">{record.name}</h1>
        {group && (
          <p className="text-sm text-navy-400">
            {t('groupLabel')}: <span className="text-navy-700">{group.name[lang]}</span>
          </p>
        )}
        <StatusBadge status={record.status} />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatTile label={t('bestScoreLabel')} value={record.bestScore !== null ? `${record.bestScore}%` : '-'} />
        <StatTile label={t('attemptsLabel')} value={record.attempts} />
        <StatTile label={t('completionDateLabel')} value={formattedCompletedAt} />
        <StatTile label={t('assignedModuleLabel')} value={module ? module.title[lang] : '-'} />
      </div>

      <p className="rounded-2xl border border-navy-100 bg-white p-6 text-navy-700">
        {t('syntheticRecordNote')}
      </p>
    </div>
  )
}
