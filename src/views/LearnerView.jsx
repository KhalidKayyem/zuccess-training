import { useEffect, useState } from 'react'
import { MODULES } from '../data/modules.js'
import { useProgress } from '../data/progressStore.js'
import ModuleList from '../components/learner/ModuleList.jsx'
import ModuleOverview from '../components/learner/ModuleOverview.jsx'
import VideoStage from '../components/learner/VideoStage.jsx'
import CardStage from '../components/learner/CardStage.jsx'
import AssessmentStage from '../components/learner/AssessmentStage.jsx'
import ResultStage from '../components/learner/ResultStage.jsx'
import AchievementStage from '../components/learner/AchievementStage.jsx'
import Certificate from '../components/learner/Certificate.jsx'

const SESSION_KEY = 'zuccess-learner-flow'

function resumeCardIndex(mod, progress) {
  const idx = mod.cards.findIndex((c) => !progress.cardsViewed.includes(c.id))
  return idx === -1 ? 0 : idx
}

function readSessionFlow() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    if (typeof parsed.step !== 'string') return null
    if (parsed.moduleId !== null && parsed.moduleId !== undefined) {
      const exists = MODULES.some((m) => m.id === parsed.moduleId)
      if (!exists) return null
    }
    let step = parsed.step
    if (step === 'assessment' || step === 'result') {
      step = 'overview'
    }
    return {
      step,
      moduleId: parsed.moduleId ?? null,
      cardIndex: typeof parsed.cardIndex === 'number' ? parsed.cardIndex : 0,
    }
  } catch {
    return null
  }
}

export default function LearnerView() {
  const { getModuleProgress } = useProgress()

  const initial = readSessionFlow()
  const [step, setStep] = useState(initial ? initial.step : 'list')
  const [moduleId, setModuleId] = useState(initial ? initial.moduleId : null)
  const [cardIndex, setCardIndex] = useState(initial ? initial.cardIndex : 0)
  const [attemptResult, setAttemptResult] = useState(null)
  const [attemptKey, setAttemptKey] = useState(0)

  const module = moduleId ? MODULES.find((m) => m.id === moduleId) : null

  useEffect(() => {
    if (step !== 'list' && !module) {
      setStep('list')
      setModuleId(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, module])

  useEffect(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ step, moduleId, cardIndex }))
    } catch {
      // Ignore storage errors silently.
    }
  }, [step, moduleId, cardIndex])

  function handleSelectModule(id) {
    setModuleId(id)
    setStep('overview')
  }

  function handleOverviewAdvance(stage) {
    if (stage === 'cards') {
      setCardIndex(resumeCardIndex(module, getModuleProgress(moduleId)))
    }
    setStep(stage)
  }

  function handleOverviewBack() {
    setStep('list')
  }

  function handleVideoContinue() {
    setCardIndex(resumeCardIndex(module, getModuleProgress(moduleId)))
    setStep('cards')
  }

  function handleVideoBack() {
    setStep('overview')
  }

  function handleCardNext() {
    if (cardIndex < module.cards.length - 1) {
      setCardIndex(cardIndex + 1)
    } else {
      setStep('assessment')
    }
  }

  function handleCardBack() {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1)
    } else {
      setStep(module.hasVideo ? 'video' : 'overview')
    }
  }

  function handleAssessmentComplete(result) {
    setAttemptResult(result)
    setStep('result')
  }

  function handleAssessmentBack() {
    setStep('cards')
    setCardIndex(module.cards.length - 1)
  }

  function handleRetake() {
    setAttemptKey((k) => k + 1)
    setStep('assessment')
  }

  function handleResultContinue() {
    setStep('achievement')
  }

  function handleAchievementViewCertificate() {
    setStep('certificate')
  }

  function handleAchievementBack() {
    setStep('list')
  }

  function handleCertificateBack() {
    setStep('achievement')
  }

  if (step === 'certificate') {
    return <Certificate moduleId={moduleId} onBack={handleCertificateBack} />
  }

  return (
    <main className="mx-auto flex w-full max-w-screen-sm flex-1 flex-col px-4 py-6 sm:max-w-screen-md sm:px-6 sm:py-8">
      {step === 'list' && <ModuleList onSelectModule={handleSelectModule} />}

      {step === 'overview' && module && (
        <ModuleOverview moduleId={moduleId} onAdvance={handleOverviewAdvance} onBack={handleOverviewBack} />
      )}

      {step === 'video' && module && (
        <VideoStage moduleId={moduleId} onContinue={handleVideoContinue} onBack={handleVideoBack} />
      )}

      {step === 'cards' && module && (
        <CardStage moduleId={moduleId} cardIndex={cardIndex} onNext={handleCardNext} onBack={handleCardBack} />
      )}

      {step === 'assessment' && module && (
        <AssessmentStage
          key={attemptKey}
          moduleId={moduleId}
          onComplete={handleAssessmentComplete}
          onBack={handleAssessmentBack}
        />
      )}

      {step === 'result' && attemptResult && (
        <ResultStage result={attemptResult} onRetake={handleRetake} onContinue={handleResultContinue} />
      )}

      {step === 'achievement' && module && (
        <AchievementStage
          moduleId={moduleId}
          onViewCertificate={handleAchievementViewCertificate}
          onBack={handleAchievementBack}
        />
      )}
    </main>
  )
}
