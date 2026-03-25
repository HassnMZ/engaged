import { motion } from 'framer-motion'
import SparkleText from '../ui/SparkleText'

export default function Scene03Names() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <SparkleText>
          <span style={{ fontFamily: '"Great Vibes", cursive', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.25 }}>
            <span className="gold-gradient-text" style={{ fontSize: 'clamp(44px, 11vw, 76px)' }}>Hassan</span>
            <span className="gold-gradient-text" style={{ fontSize: 'clamp(28px, 7vw, 48px)', opacity: 0.75 }}>&amp;</span>
            <span className="gold-gradient-text" style={{ fontSize: 'clamp(44px, 11vw, 76px)' }}>Merhan</span>
          </span>
        </SparkleText>
      </motion.div>

      <motion.p
        style={{
          fontSize: 'clamp(10px, 2.5vw, 13px)',
          letterSpacing: '5px',
          color: 'rgba(212,175,55,0.5)',
          marginTop: '16px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        ✦ &nbsp; FOREVER &nbsp; ✦
      </motion.p>
    </div>
  )
}
