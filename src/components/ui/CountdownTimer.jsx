import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ENGAGEMENT_DATE } from '../../constants/timeline'

function pad(n) {
  return String(Math.max(0, n)).padStart(2, '0')
}

function getTimeLeft() {
  const now = new Date()
  const diff = ENGAGEMENT_DATE - now
  if (diff <= 0) return null
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

function Box({ value, label, delay }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 'clamp(52px, 13vw, 68px)',
          height: 'clamp(52px, 13vw, 68px)',
          border: '1px solid rgba(212,175,55,0.5)',
          background: 'rgba(13,11,8,0.6)',
          borderRadius: '6px',
          backdropFilter: 'blur(4px)',
        }}
      >
        <span
          className="gold-gradient-text"
          style={{ fontSize: 'clamp(22px, 5vw, 30px)', fontVariantNumeric: 'tabular-nums' }}
        >
          {value}
        </span>
      </div>
      <span style={{ fontSize: 'clamp(8px, 2vw, 10px)', letterSpacing: '2px', color: 'rgba(212,175,55,0.6)' }}>
        {label}
      </span>
    </motion.div>
  )
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!timeLeft) {
    return (
      <motion.p
        className="gold-gradient-text text-center"
        style={{ fontSize: 'clamp(14px, 3.5vw, 18px)', letterSpacing: '3px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        TODAY IS THE DAY
      </motion.p>
    )
  }

  return (
    <div className="flex gap-3 items-end justify-center mt-4">
      <Box value={pad(timeLeft.days)} label="DAYS" delay={0.3} />
      <Box value={pad(timeLeft.hours)} label="HRS" delay={0.45} />
      <Box value={pad(timeLeft.minutes)} label="MIN" delay={0.6} />
      <Box value={pad(timeLeft.seconds)} label="SEC" delay={0.75} />
    </div>
  )
}
