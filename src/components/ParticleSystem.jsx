import { useMemo } from 'react'
import { motion } from 'framer-motion'

const PARTICLE_COUNT = 25

export default function ParticleSystem() {
  const particles = useMemo(() => (
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 10,
      size: Math.random() > 0.6 ? 3 : 2,
    }))
  ), [])

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: '#d4af37',
          }}
          animate={{
            y: [0, -(window.innerHeight + 50)],
            opacity: [0, 0.35, 0.35, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            times: [0, 0.15, 0.85, 1],
          }}
        />
      ))}
    </div>
  )
}
