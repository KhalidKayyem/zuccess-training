import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function ResultStage({ result, onRetake, onContinue }) {
  const { t } = useLanguage()
  const { score, passed, correctCount, total } = result

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-6 py-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-navy-700">{t('yourScoreLabel')}</p>
          <h1 className="text-6xl font-bold text-navy">{score}%</h1>
          {typeof correctCount === 'number' && typeof total === 'number' && (
            <p className="text-navy-700">
              {correctCount} / {total}
            </p>
          )}
        </div>

        <p className="max-w-md text-navy-700">
          {passed ? t('passMessage') : t('failMessage')}
        </p>

        {passed ? (
          <button
            type="button"
            onClick={onContinue}
            className="mt-2 rounded-full bg-orange px-8 py-3 font-semibold text-white"
          >
            {t('continue')}
          </button>
        ) : (
          <button
            type="button"
            onClick={onRetake}
            className="mt-2 rounded-full bg-orange px-8 py-3 font-semibold text-white"
          >
            {t('retakeCta')}
          </button>
        )}
      </div>
    </div>
  )
}
