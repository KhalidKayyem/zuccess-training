import { useState } from 'react'
import { MODULES } from '../../data/modules.js'
import { useProgress } from '../../data/progressStore.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import Badge from './Badge.jsx'

function hashString(str) {
  let hash = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

export default function Certificate({ moduleId, onBack }) {
  const { lang, t } = useLanguage()
  const isRtl = lang === 'ar'
  const backArrow = isRtl ? '→' : '←'
  const module = MODULES.find((m) => m.id === moduleId)
  const { getModuleProgress, learner } = useProgress()
  const progress = getModuleProgress(moduleId)

  const [wideLogoError, setWideLogoError] = useState(false)
  const [iconLogoError, setIconLogoError] = useState(false)
  const [zahidLogoError, setZahidLogoError] = useState(false)

  if (!module) {
    return null
  }

  const issuedAt = progress.certificateIssuedAt ? new Date(progress.certificateIssuedAt) : null
  const isValidIssuedAt = issuedAt !== null && !Number.isNaN(issuedAt.getTime())
  const formattedDate = isValidIssuedAt
    ? new Intl.DateTimeFormat(isRtl ? 'ar' : 'en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        numberingSystem: 'latn',
      }).format(issuedAt)
    : null

  const verificationCode =
    'ZT-' +
    hashString(learner.name.en + '|' + learner.groupId + '|' + moduleId)
      .toString(36)
      .toUpperCase()
      .padStart(8, '0')

  const badgeYear = new Date(progress.certificateIssuedAt || Date.now()).getFullYear()

  const bestScore = progress.assessment.bestScore
  const passingScore = module.assessment.passingScore

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
        <button
          type="button"
          onClick={onBack}
          className="flex w-fit items-center gap-2 text-sm text-navy-700"
        >
          <span aria-hidden="true">{backArrow}</span>
          <span>{t('back')}</span>
        </button>

        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-orange px-6 py-2.5 font-semibold text-white"
        >
          {t('printCertificateCta')}
        </button>
      </div>

      <div
        className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-8 rounded border-2 border-navy bg-white p-6 print:hidden sm:aspect-[1.4/1] sm:flex-row sm:gap-6 sm:p-10"
        style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
      >
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-2">
            {!wideLogoError && (
              <img
                src="/logos/zuccess_logo_without_bg-30.png"
                alt=""
                className="h-8 w-auto"
                onError={() => setWideLogoError(true)}
              />
            )}
          </div>

          <div className="flex flex-col gap-1 text-start">
            <h1 className="text-2xl font-bold text-navy sm:text-3xl">
              {t('certificateOfAchievementHeading')}
            </h1>
          </div>

          <div className="flex flex-col gap-1 text-start">
            <p className="text-sm text-navy-700">{t('presentedToLabel')}</p>
            <h2 className="text-xl font-bold text-navy sm:text-2xl">{learner.name[lang]}</h2>
          </div>

          <div className="flex flex-col gap-1 text-start">
            <h3 className="text-lg font-semibold text-navy">{module.title[lang]}</h3>
            {typeof bestScore === 'number' && (
              <p className="text-sm text-navy-700">
                {t('yourScoreLabel')} {bestScore}% &middot; {passingScore}% {t('passingScoreLabel')}
              </p>
            )}
          </div>

          {formattedDate && (
            <div className="flex flex-col gap-1 text-start">
              <p className="text-sm text-navy-700">{t('completionDateLabel')}</p>
              <p className="font-semibold text-navy">{formattedDate}</p>
            </div>
          )}

          <div className="flex flex-col gap-1 text-start">
            <p className="text-sm text-navy-700">
              {t('verificationIdLabel')}: <span className="font-semibold text-navy">{verificationCode}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-end gap-4 sm:items-end sm:justify-between">
          <div className="hidden sm:block">
            {!zahidLogoError && (
              <img
                src="/logos/zahid_logo.png"
                alt={t('zahidGroupName')}
                className="h-8 w-auto"
                onError={() => setZahidLogoError(true)}
              />
            )}
            {zahidLogoError && (
              <span className="font-display text-xs font-bold text-navy">{t('zahidGroupName')}</span>
            )}
          </div>

          <div className="flex flex-col items-center gap-4">
            <Badge moduleTitle={module.title[lang]} year={badgeYear} size={72} />

            <div className="flex flex-col items-center gap-2 border-t border-navy-200 pt-3">
              {!iconLogoError && (
                <img
                  src="/logos/zuccess_logo_without_bg-06.png"
                  alt=""
                  className="h-8 w-8"
                  onError={() => setIconLogoError(true)}
                />
              )}
              <p className="text-xs text-navy-700">{t('signatureCaption')}</p>
            </div>
          </div>
        </div>
      </div>

      {/*
        Print-only composition. On screen this stays hidden; only "print:*"
        variants take effect in the print stylesheet. All values below are the
        same computed variables used by the on-screen certificate above -
        nothing here is recomputed or re-derived.
      */}
      <div
        className="hidden print:flex print:h-[7.5in] print:w-full print:max-w-none print:flex-col print:gap-10 print:rounded print:border-4 print:border-navy print:bg-white print:p-12"
        style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}
      >
        {/* Zone 1: co-brand lockups opposite each other, heading centered below */}
        <div className="print:flex print:flex-col print:items-center print:gap-4">
          <div className="print:flex print:w-full print:items-center print:justify-between print:gap-4">
            <div className="print:flex print:items-center print:gap-2">
              {!zahidLogoError && (
                <img
                  src="/logos/zahid_logo.png"
                  alt={t('zahidGroupName')}
                  className="print:h-16 print:w-auto"
                  onError={() => setZahidLogoError(true)}
                />
              )}
              {zahidLogoError && (
                <span className="print:text-base print:font-bold print:text-navy">
                  {t('zahidGroupName')}
                </span>
              )}
            </div>

            <div className="print:flex print:items-center print:gap-2">
              {!wideLogoError && (
                <img
                  src="/logos/zuccess_logo_without_bg-30.png"
                  alt=""
                  className="print:h-16 print:w-auto"
                  onError={() => setWideLogoError(true)}
                />
              )}
            </div>
          </div>

          <h1 className="print:whitespace-nowrap print:text-center print:text-5xl print:font-bold print:text-navy">
            {t('certificateOfAchievementHeading')}
          </h1>
        </div>

        {/* Zone 2: presented-to / name / module / score - grows to fill remaining
            height between zone 1 and zone 3, keeping the bottom row anchored
            near the bottom of the 7.5in frame instead of everything stacking
            at the top */}
        <div className="print:flex print:flex-1 print:flex-col print:items-center print:justify-center print:gap-3 print:text-center">
          <p className="print:text-xl print:text-navy-700">{t('presentedToLabel')}</p>
          <h2 className="print:text-4xl print:font-bold print:text-navy">{learner.name[lang]}</h2>
          <h3 className="print:text-xl print:font-semibold print:text-navy">{module.title[lang]}</h3>
          {typeof bestScore === 'number' && (
            <p className="print:text-lg print:text-navy-700">
              {t('yourScoreLabel')} {bestScore}% &middot; {passingScore}% {t('passingScoreLabel')}
            </p>
          )}
        </div>

        {/* Zone 3: date / badge / verification+signature, three balanced columns */}
        <div className="print:grid print:grid-cols-3 print:items-center print:gap-4">
          <div className="print:flex print:flex-col print:gap-1 print:text-start">
            {formattedDate && (
              <>
                <p className="print:text-base print:text-navy-700">{t('completionDateLabel')}</p>
                <p className="print:text-lg print:font-semibold print:text-navy">{formattedDate}</p>
              </>
            )}
          </div>

          <div className="print:justify-self-center">
            <Badge moduleTitle={module.title[lang]} year={badgeYear} size={100} />
          </div>

          <div className="print:flex print:flex-col print:items-end print:justify-self-end print:gap-3 print:text-end">
            <p className="print:text-base print:text-navy-700">
              {t('verificationIdLabel')}:{' '}
              <span className="print:font-semibold print:text-navy">{verificationCode}</span>
            </p>
            <div className="print:flex print:flex-col print:items-end print:gap-2 print:border-t print:border-navy-200 print:pt-3">
              {!iconLogoError && (
                <img
                  src="/logos/zuccess_logo_without_bg-06.png"
                  alt=""
                  className="print:h-10 print:w-10"
                  onError={() => setIconLogoError(true)}
                />
              )}
              <p className="print:text-sm print:text-navy-700">{t('signatureCaption')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
