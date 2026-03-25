import { useState, useEffect, useCallback } from 'react'
import Background from './components/Background'
import Letterbox from './components/Letterbox'
import ParticleSystem from './components/ParticleSystem'
import ConfettiLayer from './components/ConfettiLayer'
import SceneRouter from './components/SceneRouter'
import MusicButton from './components/ui/MusicButton'
import ProgressDots from './components/ui/ProgressDots'
import { useAutoAdvance } from './hooks/useAutoAdvance'
import { useMusic } from './hooks/useMusic'
import { ENVELOPE_OPEN_DELAY, TOTAL_SCENES } from './constants/timeline'

export default function App() {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  const { isPlaying, togglePlay } = useMusic()
  const { advance, skipTo } = useAutoAdvance(sceneIndex, setSceneIndex)

  // Auto-open envelope on mount
  useEffect(() => {
    const t = setTimeout(() => setIsEnvelopeOpen(true), ENVELOPE_OPEN_DELAY)
    return () => clearTimeout(t)
  }, [])

  // Tap anywhere to skip — disabled on final scene
  const handleGlobalTap = useCallback(() => {
    if (sceneIndex < TOTAL_SCENES - 1) advance()
  }, [sceneIndex, advance])

  const showLetterbox = sceneIndex === 0
  const showConfetti = sceneIndex === 3 || sceneIndex === 8

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      onClick={handleGlobalTap}
      style={{ cursor: sceneIndex < TOTAL_SCENES - 1 ? 'pointer' : 'default' }}
    >
      <Background />
      <Letterbox visible={showLetterbox} />
      <ParticleSystem />
      <ConfettiLayer active={showConfetti} />
      <SceneRouter
        sceneIndex={sceneIndex}
        isEnvelopeOpen={isEnvelopeOpen}
      />
      <MusicButton
        isPlaying={isPlaying}
        onToggle={togglePlay}
      />
      <ProgressDots
        current={sceneIndex}
        onSkipTo={skipTo}
      />
    </div>
  )
}
