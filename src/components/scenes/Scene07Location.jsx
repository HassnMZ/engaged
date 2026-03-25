import { motion } from 'framer-motion'

const lines = [
  'Open Air Garden',
  'Katameya Gardens Club',
  'Zahraa El Maadi',
]

export default function Scene07Location() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center gap-3">
      <motion.p
        style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', letterSpacing: '5px', color: 'rgba(212,175,55,0.55)', margin: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        LOCATION
      </motion.p>

      {/* Map pin icon */}
      <motion.svg
        width="20" height="24" viewBox="0 0 20 24"
        fill="none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
      >
        <path
          d="M10 0C4.5 0 0 4.5 0 10C0 17.5 10 24 10 24C10 24 20 17.5 20 10C20 4.5 15.5 0 10 0ZM10 13.5C8.1 13.5 6.5 11.9 6.5 10C6.5 8.1 8.1 6.5 10 6.5C11.9 6.5 13.5 8.1 13.5 10C13.5 11.9 11.9 13.5 10 13.5Z"
          fill="rgba(212,175,55,0.7)"
        />
      </motion.svg>

      <div className="flex flex-col gap-1">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={i === 0 ? 'gold-gradient-text' : ''}
            style={{
              fontSize: i === 0 ? 'clamp(18px, 4.5vw, 28px)' : 'clamp(14px, 3.5vw, 20px)',
              letterSpacing: '2px',
              margin: 0,
              color: i > 0 ? 'rgba(212,175,55,0.75)' : undefined,
            }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.7 }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  )
}
