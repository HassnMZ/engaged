import { useEffect, useRef, useState, useCallback } from 'react'

export function useMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const base = import.meta.env.BASE_URL
    const audio = new Audio(`${base}music.mp3`)
    audio.loop = true
    audio.volume = 0.7
    audioRef.current = audio
    return () => { audio.pause(); audio.src = '' }
  }, [])

  const tryPlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.play().then(() => setIsPlaying(true)).catch(() => {})
  }, [])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      tryPlay()
    }
  }, [isPlaying, tryPlay])

  // Play on the very first user interaction (tap/click anywhere)
  useEffect(() => {
    const unlock = () => tryPlay()
    document.addEventListener('click', unlock, { once: true })
    document.addEventListener('touchstart', unlock, { once: true })
    return () => {
      document.removeEventListener('click', unlock)
      document.removeEventListener('touchstart', unlock)
    }
  }, [tryPlay])

  return { isPlaying, togglePlay }
}
