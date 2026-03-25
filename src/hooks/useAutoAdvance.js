import { useEffect, useRef, useCallback } from 'react'
import { SCENE_DURATIONS, TOTAL_SCENES } from '../constants/timeline'

export function useAutoAdvance(sceneIndex, setSceneIndex) {
  const timerRef = useRef(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const advance = useCallback(() => {
    setSceneIndex(i => {
      if (i < TOTAL_SCENES - 1) return i + 1
      return i
    })
  }, [setSceneIndex])

  const skipTo = useCallback((index) => {
    clearTimer()
    setSceneIndex(Math.max(0, Math.min(index, TOTAL_SCENES - 1)))
  }, [clearTimer, setSceneIndex])

  useEffect(() => {
    const duration = SCENE_DURATIONS[sceneIndex]
    if (!isFinite(duration)) return
    clearTimer()
    timerRef.current = setTimeout(advance, duration)
    return clearTimer
  }, [sceneIndex, advance, clearTimer])

  return { advance, skipTo }
}
