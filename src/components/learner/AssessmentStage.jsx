import { useRef, useState } from 'react'
import { MODULES } from '../../data/modules.js'
import { useProgress } from '../../data/progressStore.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { useFocusTracking } from '../../hooks/useFocusTracking.js'

export default function AssessmentStage({ moduleId, onComplete, onBack }) {
  const { lang, t } = useLanguage()
  const isRtl = lang === 'ar'
  const { recordAssessmentAttempt } = useProgress()

  const module = MODULES.find((m) => m.id === moduleId)
  const questions = module.assessment.questions

  // Accumulates every focus-loss event across the WHOLE attempt (all
  // questions), not just the current one. This component remounts fresh on
  // retake via the parent's changing `key` prop, so a plain ref that starts
  // empty on mount naturally scopes the accumulation to one attempt.
  const focusEventsRef = useRef([])

  useFocusTracking((event) => {
    focusEventsRef.current.push(event)
  })

  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selectedOptionId, setSelectedOptionId] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const currentQuestion = questions[questionIndex]
  const isLastQuestion = questionIndex === questions.length - 1
  const wasCorrect = selectedOptionId === currentQuestion.correctOptionId

  const backArrow = isRtl ? '→' : '←'
  const forwardArrow = isRtl ? '←' : '→'

  function handleSelectOption(optionId) {
    if (submitted) return
    setSelectedOptionId(optionId)
  }

  function handleSubmit() {
    if (selectedOptionId === null) return
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selectedOptionId }))
    setSubmitted(true)
  }

  function handleAdvance() {
    if (!isLastQuestion) {
      setQuestionIndex((i) => i + 1)
      setSelectedOptionId(null)
      setSubmitted(false)
      return
    }

    const updatedAnswers = { ...answers, [currentQuestion.id]: selectedOptionId }
    const total = questions.length
    const correctCount = questions.filter((q) => updatedAnswers[q.id] === q.correctOptionId).length
    const score = Math.round((correctCount / total) * 100)
    const passed = score >= module.assessment.passingScore

    recordAssessmentAttempt(moduleId, {
      score,
      passed,
      answers: updatedAnswers,
      focusEvents: focusEventsRef.current,
    })
    onComplete({ score, passed, correctCount, total })
  }

  return (
    <div className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="flex w-fit items-center gap-2 text-sm text-navy-400 transition-colors hover:text-navy"
      >
        <span aria-hidden="true">{backArrow}</span>
        <span>{t('back')}</span>
      </button>

      <p className="rounded-xl bg-navy-100 p-3 text-sm text-navy-700">{t('focusTrackingNotice')}</p>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-navy-400">
          {t('questionWord')} {questionIndex + 1} {t('ofWord')} {questions.length}
        </p>
        <h2 className="text-xl text-navy">{currentQuestion.prompt[lang]}</h2>
      </div>

      <div className="flex flex-col gap-3">
        {currentQuestion.options.map((option) => {
          const isCorrectOption = option.id === currentQuestion.correctOptionId
          const isSelectedOption = option.id === selectedOptionId

          let optionClasses =
            'w-full rounded-xl border px-4 py-3 text-start transition-colors '

          if (!submitted) {
            optionClasses += isSelectedOption
              ? 'border-navy bg-navy-100 text-navy'
              : 'border-navy-200 bg-white text-navy hover:border-navy-400'
          } else if (isCorrectOption) {
            optionClasses += 'border-emerald-600 bg-emerald-50 text-emerald-900'
          } else if (isSelectedOption) {
            optionClasses += 'border-rose-600 bg-rose-50 text-rose-900'
          } else {
            optionClasses += 'border-navy-100 bg-navy-100/40 text-navy-400'
          }

          return (
            <button
              key={option.id}
              type="button"
              disabled={submitted}
              onClick={() => handleSelectOption(option.id)}
              className={optionClasses}
            >
              <span className="flex items-center justify-between gap-3">
                <span>{option.text[lang]}</span>
                {submitted && isCorrectOption && (
                  <span className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                    <span aria-hidden="true">✓</span>
                    {wasCorrect && isSelectedOption && <span>{t('correctLabel')}</span>}
                  </span>
                )}
                {submitted && !isCorrectOption && isSelectedOption && (
                  <span className="flex items-center gap-2 text-sm font-medium text-rose-700">
                    <span aria-hidden="true">✕</span>
                    <span>{t('incorrectLabel')}</span>
                  </span>
                )}
              </span>
            </button>
          )
        })}
      </div>

      {submitted && (
        <p className="rounded-xl bg-navy-100/40 p-4 text-sm text-navy-700">
          {currentQuestion.explanation[lang]}
        </p>
      )}

      {!submitted ? (
        <button
          type="button"
          disabled={selectedOptionId === null}
          onClick={handleSubmit}
          className="w-full rounded-xl bg-orange px-4 py-3 text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t('submitCta')}
        </button>
      ) : (
        <button
          type="button"
          onClick={handleAdvance}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-4 py-3 text-white"
        >
          <span>{isLastQuestion ? t('seeResultsCta') : t('nextQuestionCta')}</span>
          <span aria-hidden="true">{forwardArrow}</span>
        </button>
      )}
    </div>
  )
}
