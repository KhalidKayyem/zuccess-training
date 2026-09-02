import { MODULES } from '../../data/modules.js'
import { useProgress } from '../../data/progressStore.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function ModuleOverview({ moduleId, onAdvance, onBack }) {
  const { lang, t } = useLanguage()
  const isRtl = lang === 'ar'
  const { getModuleProgress } = useProgress()

  const module = MODULES.find((m) => m.id === moduleId)
  const progress = getModuleProgress(moduleId)

  if (!module) {
    return null
  }

  const videoDone = !module.hasVideo || progress.videoWatched
  const cardsDone = progress.cardsViewed.length >= module.cards.length
  const assessmentDone = progress.status === 'completed'
  const achievementDone = progress.status === 'completed'

  let nextStage
  if (module.hasVideo && !progress.videoWatched) {
    nextStage = 'video'
  } else if (progress.cardsViewed.length < module.cards.length) {
    nextStage = 'cards'
  } else if (progress.status !== 'completed') {
    nextStage = 'assessment'
  } else {
    nextStage = 'achievement'
  }

  const stageLabels = {
    video: t('stageVideo'),
    cards: t('stageCards'),
    assessment: t('stageAssessment'),
    achievement: t('stageAchievement'),
  }

  const stages = []
  if (module.hasVideo) {
    stages.push({ key: 'video', label: stageLabels.video, done: videoDone })
  }
  stages.push({ key: 'cards', label: stageLabels.cards, done: cardsDone })
  stages.push({ key: 'assessment', label: stageLabels.assessment, done: assessmentDone })
  stages.push({ key: 'achievement', label: stageLabels.achievement, done: achievementDone })

  const ctaVerb = progress.status === 'not-started' ? t('start') : t('continue')
  const ctaLabel = `${ctaVerb} ${stageLabels[nextStage]}`

  const backArrow = isRtl ? '→' : '←'
  const forwardArrow = isRtl ? '←' : '→'

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

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl text-navy sm:text-3xl">{module.title[lang]}</h1>
        <p className="text-navy-400">{module.description[lang]}</p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-5">
        <h2 className="text-lg text-navy">{t('whatsIncludedHeading')}</h2>
        <div className="flex flex-col divide-y divide-navy-100">
          {module.hasVideo && (
            <div className="py-3 text-navy first:pt-0 last:pb-0">{t('includesVideo')}</div>
          )}
          <div className="py-3 text-navy first:pt-0 last:pb-0">
            {module.cards.length} {t('cardsUnit')}
          </div>
          <div className="py-3 text-navy first:pt-0 last:pb-0">
            {module.assessment.questions.length} {t('questionsUnit')} &middot;{' '}
            {module.assessment.passingScore}% {t('passingScoreLabel')}
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-2">
        {stages.map((stage, index) => {
          const isCurrent = !stage.done && stage.key === nextStage
          const circleClasses =
            stage.done || isCurrent ? 'bg-orange text-white' : 'bg-navy-100 text-navy-400'
          return (
            <div key={stage.key} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full items-center">
                {index > 0 && (
                  <span
                    className={`h-0.5 flex-1 ${stages[index - 1].done ? 'bg-orange' : 'bg-navy-200'}`}
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${circleClasses}`}
                >
                  {stage.done ? '✓' : index + 1}
                </span>
                {index < stages.length - 1 && (
                  <span
                    className={`h-0.5 flex-1 ${stage.done ? 'bg-orange' : 'bg-navy-200'}`}
                    aria-hidden="true"
                  />
                )}
              </div>
              <span className="text-center text-xs text-navy-400">{stage.label}</span>
            </div>
          )
        })}
      </div>

      <button
        type="button"
        onClick={() => onAdvance(nextStage)}
        className="flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-white transition-colors hover:bg-orange-600"
      >
        <span>{ctaLabel}</span>
        <span aria-hidden="true">{forwardArrow}</span>
      </button>
    </div>
  )
}
