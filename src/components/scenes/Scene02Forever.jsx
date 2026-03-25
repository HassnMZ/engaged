import { motion } from 'framer-motion'

const words = 'THE START OF OUR FOREVER'.split(' ')

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Scene02Forever() {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'clamp(4px, 1.5vw, 10px)',
          columnGap: 'clamp(8px, 2vw, 16px)',
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="gold-gradient-text"
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(16px, 4vw, 28px)',
              letterSpacing: 'clamp(2px, 0.8vw, 5px)',
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        style={{
          width: '80px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          marginTop: '24px',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 1, ease: 'easeOut' }}
      />
    </div>
  )
}
