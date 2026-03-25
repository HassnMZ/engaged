import { motion } from 'framer-motion'

const SPARKLE_POSITIONS = [
  { top: '-18%', left: '5%' },
  { top: '-22%', left: '30%' },
  { top: '-15%', right: '10%' },
  { top: '50%', left: '-8%' },
  { top: '50%', right: '-8%' },
  { bottom: '-18%', left: '15%' },
  { bottom: '-20%', right: '20%' },
  { top: '10%', right: '-5%' },
]

function Sparkle({ style, delay }) {
  return (
    <motion.svg
      style={{ position: 'absolute', width: 14, height: 14, ...style }}
      viewBox="0 0 14 14"
      fill="none"
      animate={{
        scale: [0, 1.2, 0],
        opacity: [0, 1, 0],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: 1.8,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5 + Math.random() * 1,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8Z"
        fill="#f7e7a1"
      />
    </motion.svg>
  )
}

export default function SparkleText({ children, className = '', style = {} }) {
  return (
    <span className={`relative inline-block ${className}`} style={style}>
      {SPARKLE_POSITIONS.map((pos, i) => (
        <Sparkle key={i} style={pos} delay={i * 0.22} />
      ))}
      {children}
    </span>
  )
}
