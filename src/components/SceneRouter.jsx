import { AnimatePresence, motion } from 'framer-motion'
import Scene01Envelope from './scenes/Scene01Envelope'
import Scene02Forever from './scenes/Scene02Forever'
import Scene03Names from './scenes/Scene03Names'
import Scene04Engaged from './scenes/Scene04Engaged'
import Scene05Date from './scenes/Scene05Date'
import Scene06Time from './scenes/Scene06Time'
import Scene07Location from './scenes/Scene07Location'
import Scene08DressCode from './scenes/Scene08DressCode'
import Scene09Join from './scenes/Scene09Join'

const SCENES = [
  Scene01Envelope,
  Scene02Forever,
  Scene03Names,
  Scene04Engaged,
  Scene05Date,
  Scene06Time,
  Scene07Location,
  Scene08DressCode,
  Scene09Join,
]

const pageVariants = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const pageTransition = { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }

// Scenes that skip the glass card (envelope scene looks better bare)
const BARE_SCENES = new Set([0])

export default function SceneRouter({ sceneIndex, isEnvelopeOpen, onEnvelopeOpen }) {
  const SceneComponent = SCENES[sceneIndex]
  const bare = BARE_SCENES.has(sceneIndex)

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={sceneIndex}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="w-full flex items-center justify-center pointer-events-auto"
          style={{ maxWidth: '680px', padding: '0 clamp(12px, 4vw, 24px)' }}
        >
          {bare ? (
            <SceneComponent
              isEnvelopeOpen={isEnvelopeOpen}
              onOpen={onEnvelopeOpen}
            />
          ) : (
            <div style={{
              width: '100%',
              borderRadius: '12px',
              border: '1px solid rgba(212,175,55,0.18)',
              background: 'rgba(8, 6, 4, 0.28)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              padding: 'clamp(20px, 5vw, 48px) clamp(16px, 4vw, 48px)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(212,175,55,0.08)',
            }}>
              <SceneComponent
                isEnvelopeOpen={isEnvelopeOpen}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
