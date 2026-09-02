import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { useProgress } from '../data/progressStore.js'
import LanguageToggle from './LanguageToggle'

export default function TopBar() {
  const { t, lang } = useLanguage()
  const { learner, logout } = useProgress()
  const [wideLogoError, setWideLogoError] = useState(false)
  const [iconLogoError, setIconLogoError] = useState(false)
  const [zahidLogoError, setZahidLogoError] = useState(false)

  const zahidFullLogo = !zahidLogoError ? (
    <img
      src="/logos/zahid_logo.png"
      alt={t('zahidGroupName')}
      className="h-14 w-auto sm:h-16"
      onError={() => setZahidLogoError(true)}
    />
  ) : (
    <span className="font-display text-sm font-bold leading-tight text-navy sm:text-base">
      {t('zahidGroupName')}
    </span>
  )

  const zahidMark = !zahidLogoError ? (
    <img
      src="/logos/zahid_logo.png"
      alt={t('zahidGroupName')}
      className="aspect-[608/596] w-16 object-cover object-top"
      onError={() => setZahidLogoError(true)}
    />
  ) : (
    <span className="flex h-16 w-16 items-center justify-center font-display text-lg font-bold text-navy">
      Z
    </span>
  )

  const zuccessWideLogo = !wideLogoError ? (
    <img
      src="/logos/zuccess_logo_without_bg-30.png"
      alt={t('appName')}
      className="h-16 w-auto"
      onError={() => setWideLogoError(true)}
    />
  ) : (
    <span className="font-display text-lg font-bold text-navy">{t('appName')}</span>
  )

  const zuccessIcon = !iconLogoError ? (
    <img
      src="/logos/zuccess_logo_without_bg-06.png"
      alt={t('appName')}
      className="h-16 w-16"
      onError={() => setIconLogoError(true)}
    />
  ) : (
    <span className="font-display text-lg font-bold text-navy">{t('appName')}</span>
  )

  return (
    <header className="sticky top-0 z-10 border-b border-navy-100 bg-white print:hidden">
      {/* sm and wider: one row, three zones - Zahid start, toggle centered, Zuccess + account end */}
      <div className="mx-auto hidden max-w-screen-md grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4 sm:grid">
        <div className="justify-self-start">{zahidFullLogo}</div>
        <div className="justify-self-center">
          <LanguageToggle />
        </div>
        <div className="flex flex-col items-end justify-self-end gap-2">
          {zuccessWideLogo}
          {learner !== null && (
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap text-sm font-semibold text-navy">
                {learner.name[lang]}
              </span>
              <button
                type="button"
                onClick={logout}
                className="whitespace-nowrap text-sm font-semibold text-orange"
              >
                {t('logoutCta')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Below sm: a tall Zahid lockup + toggle + Zuccess logo can't share one row,
          so the Zahid mark is cropped to just its "Z" and the toggle drops to its own row. */}
      <div className="mx-auto flex max-w-screen-sm flex-col gap-2 px-4 py-3 sm:hidden">
        <div className="flex items-center justify-between">
          {zahidMark}
          {zuccessIcon}
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <span aria-hidden="true" />
          <div className="justify-self-center">
            <LanguageToggle />
          </div>
          {learner !== null ? (
            <button
              type="button"
              onClick={logout}
              className="justify-self-end whitespace-nowrap text-sm font-semibold text-orange"
            >
              {t('logoutCta')}
            </button>
          ) : (
            <span aria-hidden="true" />
          )}
        </div>
      </div>
    </header>
  )
}
