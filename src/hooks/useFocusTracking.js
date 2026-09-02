/**
 * @file Tracks the learner leaving and returning to the page (tab-switch,
 * app-switch, window-blur) while a component using this hook is mounted.
 * Intended to be used ONLY inside components that should be scoped to a
 * single stage of the learner flow (video/assessment) - it works purely by
 * being mounted/unmounted, no extra gating needed.
 *
 * Listens on BOTH the "visibilitychange" (document.hidden) and window
 * "blur"/"focus" events, since different browsers/OSes only reliably fire
 * one or the other depending on how focus was lost (switching tabs,
 * switching apps, minimizing, etc). Because both can fire for the SAME
 * real-world departure, a single "away since" ref is used as a guard so a
 * departure is only opened once and only closed once, no matter how many of
 * the four events fire in between.
 */

import { useEffect, useRef } from 'react'

export function useFocusTracking(onDeparture) {
  const onDepartureRef = useRef(onDeparture)
  onDepartureRef.current = onDeparture

  const awaySinceRef = useRef(null)

  useEffect(() => {
    function handleAway() {
      if (awaySinceRef.current !== null) {
        // Already marked away by the other event pair - ignore the duplicate signal.
        return
      }
      awaySinceRef.current = new Date().toISOString()
    }

    function handleBack() {
      if (awaySinceRef.current === null) {
        // Not currently away (or already closed by the other event pair) - ignore.
        return
      }
      const leftAt = awaySinceRef.current
      awaySinceRef.current = null
      const returnedAt = new Date().toISOString()
      const durationMs = new Date(returnedAt).getTime() - new Date(leftAt).getTime()
      onDepartureRef.current?.({ leftAt, returnedAt, durationMs })
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        handleAway()
      } else {
        handleBack()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('blur', handleAway)
    window.addEventListener('focus', handleBack)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('blur', handleAway)
      window.removeEventListener('focus', handleBack)
    }
  }, [])
}
