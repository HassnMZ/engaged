import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ITEMS = 60

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

function getItemStyle(type) {
  if (type === 'petal') {
    return {
      width: randomBetween(8, 14),
      height: randomBetween(6, 10),
      borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
      background: `rgba(${Math.floor(randomBetween(220,255))}, ${Math.floor(randomBetween(150,190))}, ${Math.floor(randomBetween(150,190))}, 0.7)`,
    }
  }
  if (type === 'gold') {
    return {
      width: randomBetween(4, 8),
      height: randomBetween(4, 8),
      borderRadius: '50%',
      background: `rgba(212, 175, ${Math.floor(randomBetween(30,80))}, 0.8)`,
    }
  }
  // star
  return {
    width: 8,
    height: 8,
    background: 'transparent',
    border: '1.5px solid rgba(212,175,55,0.9)',
    transform: 'rotate(45deg)',
  }
}

export default function ConfettiLayer({ active }) {
  const items = useMemo(() => (
    Array.from({ length: ITEMS }, (_, i) => {
      const type = i % 3 === 0 ? 'petal' : i % 3 === 1 ? 'gold' : 'star'
      return {
        id: i,
        type,
        x: randomBetween(0, 100),
        duration: randomBetween(3, 5.5),
        delay: randomBetween(0, 2),
        rotate: randomBetween(-180, 180),
        style: getItemStyle(type),
      }
    })
  ), [])

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden">
          {items.map(item => (
            <motion.div
              key={item.id}
              style={{
                position: 'absolute',
                top: '-20px',
                left: `${item.x}vw`,
                ...item.style,
              }}
              initial={{ y: -20, opacity: 0, rotate: 0 }}
              animate={{
                y: window.innerHeight + 60,
                opacity: [0, 0.9, 0.9, 0],
                rotate: item.rotate,
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                ease: 'easeIn',
                times: [0, 0.1, 0.85, 1],
                repeat: Infinity,
                repeatDelay: randomBetween(0, 1),
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}
