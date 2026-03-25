import { motion } from 'framer-motion'
import CountdownTimer from '../ui/CountdownTimer'

export default function Scene05Date() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center gap-2">
      <motion.p
        style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', letterSpacing: '5px', color: 'rgba(212,175,55,0.55)', margin: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        DATE
      </motion.p>

      <motion.p
        className="gold-gradient-text"
        style={{ fontSize: 'clamp(24px, 6vw, 38px)', letterSpacing: '3px', margin: 0 }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        5 April 2026
      </motion.p>

      <CountdownTimer />
    </div>
  )
}
