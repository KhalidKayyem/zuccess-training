import { MODULES } from '../../data/modules.js'
import { useProgress } from '../../data/progressStore.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Badge from './Badge.jsx'

export default function AchievementStage({ moduleId, onViewCertificate, onBack }) {
  const { lang, t } = useLanguage()
  const isRtl = lang === 'ar'
  const backArrow = isRtl ? '→' : '←'
  const module = MODULES.find((m) => m.id === moduleId)
  const { issueCertificate, getModuleProgress } = useProgress()
  const progress = getModuleProgress(moduleId)

  const badgeYear = new Date(
    progress.certificateIssuedAt || progress.assessment.attempts.at(-1)?.at || Date.now(),
  ).getFullYear()

  function handleViewCertificate() {
    issueCertificate(moduleId)
    onViewCertificate()
  }

  return (
    <div className="flex flex-col gap-8">
      <button
        type="button"
        onClick={onBack}
        className="flex w-fit items-center gap-2 text-sm text-navy-700"
      >
        <span aria-hidden="true">{backArrow}</span>
        <span>{t('back')}</span>
      </button>

      <div className="flex flex-col items-center gap-6 py-6 text-center">
        <Badge moduleTitle={module.title[lang]} year={badgeYear} size={160} />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-navy">
            {t('achievementBadgeEarned')}
          </h2>
          <h3 className="text-lg text-navy-700">{module.title[lang]}</h3>
        </div>

        <p className="max-w-md text-navy-700">{t('achievementCongrats')}</p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleViewCertificate}
            className="rounded-full bg-orange px-8 py-3 font-semibold text-white"
          >
            {t('viewCertificateCta')}
          </button>
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border-2 border-navy px-8 py-3 font-semibold text-navy"
          >
            {t('backToModulesCta')}
          </button>
        </div>
      </div>
    </div>
  )
}
