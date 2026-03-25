import { motion } from 'framer-motion'

export default function Scene06Time() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center gap-3">
      <motion.p
        style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', letterSpacing: '5px', color: 'rgba(212,175,55,0.55)', margin: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        TIME
      </motion.p>

      <motion.p
        className="gold-gradient-text"
        style={{ fontSize: 'clamp(20px, 5.5vw, 42px)', letterSpacing: 'clamp(1px, 0.8vw, 3px)', margin: 0, whiteSpace: 'nowrap' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        3:30 PM — 7:00 PM
      </motion.p>

      <motion.p
        style={{ fontSize: 'clamp(10px, 2.5vw, 13px)', letterSpacing: '3px', color: 'rgba(212,175,55,0.45)', margin: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        SUNDAY AFTERNOON
      </motion.p>
    </div>
  )
}
