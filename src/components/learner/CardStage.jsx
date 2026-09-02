import { useEffect } from 'react'
import { MODULES } from '../../data/modules.js'
import { useProgress } from '../../data/progressStore.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function CardStage({ moduleId, cardIndex, onNext, onBack }) {
  const module = MODULES.find((m) => m.id === moduleId)
  const card = module.cards[cardIndex]
  const { lang, t } = useLanguage()
  const { markCardViewed } = useProgress()
  const isRtl = lang === 'ar'

  useEffect(() => {
    markCardViewed(moduleId, card.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId, card.id])

  const keyPoints = card.keyPoints && card.keyPoints.length > 0 ? card.keyPoints : null

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-2">
        {module.cards.map((c, i) => {
          const isCurrent = i === cardIndex
          const isVisited = i < cardIndex
          return (
            <span
              key={c.id}
              aria-hidden="true"
              className={
                'h-2 rounded-full transition-all ' +
                (isCurrent
                  ? 'w-6 bg-orange'
                  : isVisited
                  ? 'w-2 bg-orange'
                  : 'w-2 bg-navy-200')
              }
            />
          )
        })}
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-navy">{card.title[lang]}</h2>
        <p className="text-navy leading-relaxed">{card.body[lang]}</p>
      </div>

      {keyPoints && (
        <div className="flex flex-col gap-2 rounded-xl border border-navy-200 bg-cream p-4">
          <h3 className="text-navy text-base">{t('keyPointsHeading')}</h3>
          <ul className="flex flex-col gap-2 ps-5 list-disc marker:text-orange">
            {keyPoints.map((kp, i) => (
              <li key={i} className="text-navy leading-relaxed">
                {kp[lang]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => onBack()}
          className="flex items-center gap-2 rounded-lg border border-navy-200 px-4 py-3 text-navy"
        >
          <span aria-hidden="true">{isRtl ? '→' : '←'}</span>
          <span>{t('back')}</span>
        </button>
        <button
          type="button"
          onClick={() => onNext()}
          className="flex items-center gap-2 rounded-lg bg-orange px-5 py-3 text-white"
        >
          <span>{t('continue')}</span>
          <span aria-hidden="true">{isRtl ? '←' : '→'}</span>
        </button>
      </div>
    </div>
  )
}
