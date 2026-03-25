import { motion } from 'framer-motion'

export default function Scene04Engaged() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center gap-6">
      {/* Top rule */}
      <motion.div
        style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 'min(200px, 50vw)', opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p style={{ fontSize: 'clamp(11px, 3vw, 16px)', letterSpacing: 'clamp(1px, 0.6vw, 3px)', color: 'rgba(212,175,55,0.6)', margin: 0 }}>
          WE ARE
        </p>
        <p
          className="gold-gradient-text"
          style={{ fontSize: 'clamp(22px, 5.5vw, 44px)', letterSpacing: 'clamp(2px, 1.2vw, 6px)', margin: '8px 0 0', fontWeight: 'normal' }}
        >
          GETTING ENGAGED
        </p>
      </motion.div>

      {/* Bottom rule */}
      <motion.div
        style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 'min(200px, 50vw)', opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      />

      <motion.p
        style={{ fontSize: 'clamp(18px, 5vw, 28px)', color: 'rgba(212,175,55,0.8)', margin: 0 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        ♥
      </motion.p>
    </div>
  )
}
