import { motion, useSpring } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

export default function Background() {
  const offset = useParallax(8)

  const springX = useSpring(offset.x, { stiffness: 40, damping: 20 })
  const springY = useSpring(offset.y, { stiffness: 40, damping: 20 })

  return (
    <motion.div
      className="fixed inset-0 z-0"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="absolute inset-[-5%]"
        style={{
          backgroundImage: `linear-gradient(rgba(13,11,8,0.45), rgba(13,11,8,0.65)), url(${import.meta.env.BASE_URL}photo.jpg)`,
          backgroundPosition: 'var(--focal-x) var(--focal-y)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{ scale: [1, 1.12] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
