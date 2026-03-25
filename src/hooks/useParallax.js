import { useState, useEffect } from 'react'

export function useParallax(strength = 8) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength * 2
      const y = (e.clientY / window.innerHeight - 0.5) * strength
      setOffset({ x, y })
    }

    const handleOrientation = (e) => {
      const x = ((e.gamma || 0) / 30) * strength
      const y = (((e.beta || 0) - 45) / 45) * strength
      setOffset({ x: Math.max(-strength, Math.min(strength, x)), y: Math.max(-strength, Math.min(strength, y)) })
    }

    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('deviceorientation', handleOrientation)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [strength])

  return offset
}
