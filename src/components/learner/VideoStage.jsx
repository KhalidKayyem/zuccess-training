import { useEffect, useRef, useState } from 'react'
import { MODULES } from '../../data/modules.js'
import { useProgress } from '../../data/progressStore.js'
import { useLanguage } from '../../i18n/LanguageContext.jsx'
import { useFocusTracking } from '../../hooks/useFocusTracking.js'

// ---- Resolve devSkipVideo bypass once at module load, mirroring
// progressStore.js's resolveSkipLoginBypass pattern exactly. ----

function resolveDevSkipVideoBypass() {
  try {
    if (typeof window === 'undefined') {
      return false
    }
    const params = new URLSearchParams(window.location.search)
    return params.get('devSkipVideo') === '1'
  } catch {
    return false
  }
}

const DEV_SKIP_VIDEO = resolveDevSkipVideoBypass()

// A backward seek is always allowed; forward seeking past the furthest
// point actually played is snapped back, with a small tolerance so normal
// timeupdate/seeking jitter doesn't fight the learner.
const SEEK_TOLERANCE_SECONDS = 1

export default function VideoStage({ moduleId, onContinue, onBack }) {
  const { t, lang } = useLanguage()
  const isRtl = lang === 'ar'
  const module = MODULES.find((m) => m.id === moduleId)
  const { markVideoWatched, addVideoFocusEvent, getModuleProgress } = useProgress()

  const furthestPlayedRef = useRef(0)
  const completedRef = useRef(false)
  const [isComplete, setIsComplete] = useState(false)
  const [watchedPercent, setWatchedPercent] = useState(0)

  useFocusTracking((event) => {
    addVideoFocusEvent(moduleId, event)
  })

  useEffect(() => {
    const alreadyWatched = getModuleProgress(moduleId).videoWatched === true
    if (alreadyWatched) {
      completedRef.current = true
      setIsComplete(true)
    }
    // Only run this initialization once per mount, matching the fact that
    // this component unmounts/remounts on navigation away and back.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!module) {
    return null
  }

  function completeIfNeeded() {
    if (completedRef.current) {
      return
    }
    completedRef.current = true
    markVideoWatched(moduleId)
    setIsComplete(true)
  }

  function handleTimeUpdate(e) {
    const video = e.currentTarget
    if (!completedRef.current) {
      furthestPlayedRef.current = Math.max(furthestPlayedRef.current, video.currentTime)
      if (video.duration) {
        const percent = Math.round((furthestPlayedRef.current / video.duration) * 100)
        setWatchedPercent((prev) => (prev === percent ? prev : percent))
      }
    }
    if (video.duration && video.currentTime >= video.duration * 0.95) {
      completeIfNeeded()
    }
  }

  function handleEnded() {
    completeIfNeeded()
  }

  function handleSeeking(e) {
    if (completedRef.current) {
      return
    }
    const video = e.currentTarget
    if (video.currentTime > furthestPlayedRef.current + SEEK_TOLERANCE_SECONDS) {
      video.currentTime = furthestPlayedRef.current
    }
  }

  function handleContinue() {
    onContinue()
  }

  function handleDevSkip() {
    markVideoWatched(moduleId)
    onContinue()
  }

  return (
    <div className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="flex w-fit items-center gap-2 text-sm text-navy-700"
      >
        <span aria-hidden="true">{isRtl ? "→" : "←"}</span>
        <span>{t('back')}</span>
      </button>

      <video
        controls
        preload="metadata"
        className="w-full rounded-lg border border-navy-200 bg-navy-900"
        src={module.videoSrc}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onSeeking={handleSeeking}
      />

      <p className="text-navy-700">{t('videoNextUp')}</p>

      {!isComplete ? (
        <p className="text-sm text-navy-700">
          {`${watchedPercent}% `}
          {t('videoWatchedLabel')}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleContinue}
          disabled={!isComplete}
          className="w-full rounded-lg bg-orange px-6 py-3 text-center text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit sm:px-8"
        >
          {t('continue')}
        </button>

        {DEV_SKIP_VIDEO ? (
          <button
            type="button"
            onClick={handleDevSkip}
            className="w-full rounded-lg border border-navy-200 px-6 py-3 text-center text-sm text-navy-700 sm:w-fit sm:px-8"
          >
            {t('markWatchedCta')}
          </button>
        ) : null}
      </div>
    </div>
  )
}
