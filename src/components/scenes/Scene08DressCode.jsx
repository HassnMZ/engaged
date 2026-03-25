import { motion } from 'framer-motion'

export default function Scene08DressCode() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center gap-3">
      <motion.p
        style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', letterSpacing: '5px', color: 'rgba(212,175,55,0.55)', margin: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        DRESS CODE
      </motion.p>

      <motion.p
        className="gold-gradient-text"
        style={{ fontSize: 'clamp(26px, 7vw, 50px)', letterSpacing: 'clamp(3px, 1.5vw, 8px)', margin: 0 }}
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        MINIMAL
      </motion.p>

      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div style={{ width: '40px', height: '1px', background: 'rgba(212,175,55,0.4)' }} />
        <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(212,175,55,0.4)' }}>ELEGANT</span>
        <div style={{ width: '40px', height: '1px', background: 'rgba(212,175,55,0.4)' }} />
      </motion.div>
    </div>
  )
}
