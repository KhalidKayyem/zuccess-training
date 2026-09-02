import { useState } from 'react'
import { EMPLOYEES } from '../data/employees.js'
import { useProgress } from '../data/progressStore.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const MAX_ATTEMPTS = 5

function normalize(value) {
  return value.trim().replace(/\s+/g, ' ').toLowerCase()
}

function findEmployeeByName(typedName) {
  const normalizedTyped = normalize(typedName)
  if (normalizedTyped === '') {
    return null
  }
  return (
    EMPLOYEES.find((employee) => {
      return (
        normalize(employee.name.en) === normalizedTyped ||
        normalize(employee.name.ar) === normalizedTyped
      )
    }) ?? null
  )
}

export default function LoginScreen() {
  const { lang, t } = useLanguage()
  const isRtl = lang === 'ar'
  const { login } = useProgress()

  const [wideLogoError, setWideLogoError] = useState(false)
  const [step, setStep] = useState(1)
  const [nameInput, setNameInput] = useState('')
  const [numberInput, setNumberInput] = useState('')
  const [matchedEmployee, setMatchedEmployee] = useState(null)
  const [failureCount, setFailureCount] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  function handleNameSubmit(event) {
    event.preventDefault()
    const employee = findEmployeeByName(nameInput)
    if (employee === null) {
      setErrorMessage(t('employeeNotFoundError'))
      return
    }
    setMatchedEmployee(employee)
    setErrorMessage('')
    setStep(2)
  }

  function handleNumberSubmit(event) {
    event.preventDefault()
    if (matchedEmployee === null) {
      return
    }
    const normalizedTyped = normalize(numberInput)
    const normalizedActual = normalize(matchedEmployee.employeeNumber)

    if (normalizedTyped === normalizedActual) {
      setErrorMessage('')
      login(matchedEmployee.employeeNumber)
      return
    }

    const nextFailureCount = failureCount + 1
    if (nextFailureCount >= MAX_ATTEMPTS) {
      setMatchedEmployee(null)
      setNameInput('')
      setNumberInput('')
      setFailureCount(0)
      setErrorMessage(t('tooManyAttemptsError'))
      setStep(1)
      return
    }

    setFailureCount(nextFailureCount)
    setNumberInput('')
    setErrorMessage(t('employeeNumberMismatchError'))
  }

  function handleBackToName() {
    setMatchedEmployee(null)
    setNumberInput('')
    setFailureCount(0)
    setErrorMessage('')
    setStep(1)
  }

  return (
    <div className="flex min-h-[calc(100dvh-6.5rem)] flex-col items-center justify-center bg-cream px-4 py-8">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl border border-navy-100 bg-white p-6 text-center shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-3">
          {!wideLogoError && (
            <img
              src="/logos/zuccess_logo_without_bg-30.png"
              alt={t('appName')}
              className="h-14 w-auto"
              onError={() => setWideLogoError(true)}
            />
          )}
          {wideLogoError && (
            <span className="font-display text-lg font-bold text-navy">{t('appName')}</span>
          )}
          <h1 className="text-xl font-bold text-navy sm:text-2xl">{t('loginWelcomeHeading')}</h1>
          <p className="text-sm text-navy-700">{t('tagline')}</p>
        </div>

        <p className="text-xs font-medium text-navy-400">
          {t('stepWord')} {step} {t('ofWord')} 2
        </p>

        {step === 1 && (
          <form className="flex w-full flex-col gap-4" onSubmit={handleNameSubmit}>
            <label className="flex flex-col gap-1.5 text-start">
              <span className="text-sm font-semibold text-navy">{t('loginNameLabel')}</span>
              <input
                type="text"
                value={nameInput}
                onChange={(event) => setNameInput(event.target.value)}
                className="w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-navy focus:border-navy-400 focus:outline-none"
                autoFocus
              />
            </label>

            {errorMessage && <p className="text-start text-sm text-navy-700">{errorMessage}</p>}

            <button
              type="submit"
              className="w-full rounded-full bg-orange px-6 py-2.5 font-semibold text-white"
            >
              {t('continue')}
            </button>
          </form>
        )}

        {step === 2 && (
          <form className="flex w-full flex-col gap-4" onSubmit={handleNumberSubmit}>
            <label className="flex flex-col gap-1.5 text-start">
              <span className="text-sm font-semibold text-navy">{t('loginNumberLabel')}</span>
              <input
                type="text"
                value={numberInput}
                onChange={(event) => setNumberInput(event.target.value)}
                className="w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-navy focus:border-navy-400 focus:outline-none"
                autoFocus
              />
              <span className="text-xs text-navy-400">{t('loginNumberHint')}</span>
            </label>

            {errorMessage && <p className="text-start text-sm text-navy-700">{errorMessage}</p>}

            <button
              type="submit"
              className="w-full rounded-full bg-orange px-6 py-2.5 font-semibold text-white"
            >
              {t('continue')}
            </button>

            <button
              type="button"
              onClick={handleBackToName}
              className="flex w-fit items-center gap-2 self-center text-xs text-navy-400"
            >
              <span aria-hidden="true">{isRtl ? '→' : '←'}</span>
              <span>{t('loginBackToNameCta')}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
