import { MODULES } from '../../data/modules.js'
import { GROUPS } from '../../data/groups.js'
import { LEARNERS, OVERALL_STATS, GROUP_STATS } from '../../data/learners.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import KpiTile from './KpiTile.jsx'
import BarRow from './BarRow.jsx'

const CORE_MODULE_ID = 'food-hygiene-complete'

export function AdminOverview({ onSelectGroup }) {
  const { t, lang } = useLanguage()

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <KpiTile label={t('totalLearnersLabel')} value={LEARNERS.length} />
        <KpiTile label={t('modulesDeliveredLabel')} value={MODULES.length} />
        <KpiTile label={t('completionsLabel')} value={OVERALL_STATS.completed} />
        <KpiTile
          label={t('completionRateLabel')}
          value={Math.round(OVERALL_STATS.completionRate * 100) + '%'}
        />
        <KpiTile
          label={t('passRateLabel')}
          value={Math.round(OVERALL_STATS.passRate * 100) + '%'}
        />
        <KpiTile label={t('averageScoreLabel')} value={OVERALL_STATS.avgScore + '%'} />
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-navy">{t('completionByGroupHeading')}</h2>
        <div className="flex flex-col gap-3">
          {GROUPS.map((group) => {
            const stats = GROUP_STATS[group.id]
            return (
              <BarRow
                key={group.id}
                label={group.name[lang]}
                percent={stats.completionRate * 100}
                detail={stats.completed + ' / ' + stats.total}
                onClick={() => onSelectGroup(group.id)}
              />
            )
          })}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-navy">{t('averageScoreByGroupHeading')}</h2>
        <div className="flex flex-col gap-3">
          {GROUPS.map((group) => {
            const stats = GROUP_STATS[group.id]
            return (
              <BarRow
                key={group.id}
                label={group.name[lang]}
                percent={stats.avgScore}
                detail={stats.avgScore + '%'}
                onClick={() => onSelectGroup(group.id)}
              />
            )
          })}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-navy">{t('moduleBreakdownHeading')}</h2>
        <div className="overflow-x-auto rounded-lg border border-navy-200">
          <table className="w-full min-w-[640px] border-collapse text-start">
            <thead>
              <tr className="bg-navy-100 text-navy-700">
                <th className="px-4 py-3 text-start font-semibold">{t('nameLabel')}</th>
                <th className="px-4 py-3 text-start font-semibold">{t('assignedLabel')}</th>
                <th className="px-4 py-3 text-start font-semibold">{t('completedStatus')}</th>
                <th className="px-4 py-3 text-start font-semibold">{t('avgScoreLabel')}</th>
              </tr>
            </thead>
            <tbody>
              {MODULES.map((module) => {
                const assigned = module.groupIds.reduce(
                  (sum, gid) => sum + GROUP_STATS[gid].total,
                  0
                )
                const isCoreModule = module.id === CORE_MODULE_ID
                return (
                  <tr key={module.id} className="border-t border-navy-200">
                    <td className="px-4 py-3 text-navy">{module.title[lang]}</td>
                    <td className="px-4 py-3 text-navy">{assigned}</td>
                    <td className="px-4 py-3 text-navy">
                      {isCoreModule ? OVERALL_STATS.completed : t('noDataYetLabel')}
                    </td>
                    <td className="px-4 py-3 text-navy">
                      {isCoreModule ? OVERALL_STATS.avgScore + '%' : t('noDataYetLabel')}
                    </td>
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
