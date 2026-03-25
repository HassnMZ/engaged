import { useState, useCallback } from 'react'
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

  // Called when user taps the envelope
  const handleEnvelopeOpen = useCallback(() => {
    if (isEnvelopeOpen) return
    setIsEnvelopeOpen(true)
    setTimeout(() => advance(), ENVELOPE_OPEN_DELAY)
  }, [isEnvelopeOpen, advance])

  // Tap anywhere to skip — disabled on scene 0 (envelope) and final scene
  const handleGlobalTap = useCallback(() => {
    if (sceneIndex > 0 && sceneIndex < TOTAL_SCENES - 1) advance()
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
        onEnvelopeOpen={handleEnvelopeOpen}
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
