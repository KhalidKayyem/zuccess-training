import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const base = 'rounded-full px-3 py-1 text-sm font-medium transition-colors '

  const enButton = (
    <button
      key="en"
      type="button"
      onClick={() => setLang('en')}
      className={base + (lang === 'en' ? 'bg-navy text-white' : 'text-navy')}
      aria-pressed={lang === 'en'}
    >
      EN
    </button>
  )

  const arButton = (
    <button
      key="ar"
      type="button"
      onClick={() => setLang('ar')}
      className={base + (lang === 'ar' ? 'bg-navy text-white' : 'text-navy')}
      aria-pressed={lang === 'ar'}
    >
      AR
    </button>
  )

  return (
    <div className="inline-flex rounded-full border border-navy-200 p-0.5">
      {lang === 'ar' ? (
        <>
          {arButton}
          {enButton}
        </>
      ) : (
        <>
          {enButton}
          {arButton}
        </>
      )}
    </div>
  )
}
