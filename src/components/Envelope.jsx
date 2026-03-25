import { motion } from 'framer-motion'
import { ENVELOPE_HINT_DELAY } from '../constants/timeline'

export default function Envelope({ isOpen, onOpen }) {
  return (
    <motion.div
      animate={{ opacity: isOpen ? [1, 1, 0] : 1 }}
      transition={{ duration: 1.2, delay: isOpen ? 1.5 : 0, times: [0, 0.6, 1] }}
      className="flex flex-col items-center gap-6"
    >
      {/* Envelope */}
      <motion.div
        className="relative"
        style={{ width: 'min(220px, 60vw)', height: 'min(140px, 38vw)', perspective: '700px', cursor: isOpen ? 'default' : 'pointer' }}
        onClick={!isOpen ? onOpen : undefined}
        whileHover={!isOpen ? { scale: 1.04 } : {}}
        whileTap={!isOpen ? { scale: 0.97 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Envelope body */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{ background: 'linear-gradient(135deg, #c5a032, #f7e7a1, #d4af37)' }}
        />

        {/* Bottom triangle fold lines (decorative) */}
        <div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom right, #c5a032 50%, transparent 50%)',
            opacity: 0.3,
          }}
        />

        {/* Letter card inside */}
        <motion.div
          className="absolute left-[8%] right-[8%] rounded-sm flex items-center justify-center"
          style={{
            bottom: '8%',
            height: '65%',
            background: 'linear-gradient(180deg, #fffdf5, #f5e9c8)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          }}
          animate={isOpen ? { y: -45, opacity: 1 } : { y: 0, opacity: 0 }}
          transition={{ duration: 0.7, delay: isOpen ? 0.9 : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span style={{ fontSize: 'clamp(10px,3vw,14px)', color: '#c5a032', letterSpacing: '2px', fontFamily: 'Georgia' }}>
            H &amp; M
          </span>
        </motion.div>

        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{
            height: '58%',
            clipPath: 'polygon(0 0, 50% 58%, 100% 0)',
            transformOrigin: 'top center',
            background: 'linear-gradient(160deg, #d4af37, #f7e7a1)',
            transformStyle: 'preserve-3d',
            zIndex: 2,
          }}
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Wax seal */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 3 }}>
          <motion.div
            className="rounded-full flex items-center justify-center"
            style={{
              width: 'min(36px, 10vw)',
              height: 'min(36px, 10vw)',
              background: 'radial-gradient(circle, #8b1a1a, #6b0000)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
              fontSize: 'clamp(8px, 2.5vw, 12px)',
              color: '#f7e7a1',
              letterSpacing: '1px',
            }}
            animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
            transition={{ duration: 0.4, delay: isOpen ? 0.2 : 0 }}
          >
            ♥
          </motion.div>
        </div>
      </motion.div>

      {/* "Tap to open" hint — fades in after ENVELOPE_HINT_DELAY */}
      <motion.p
        className="text-center"
        style={{
          fontSize: 'clamp(13px, 3vw, 16px)',
          letterSpacing: '4px',
          color: '#f7e7a1',
          textShadow: '0 0 18px rgba(212,175,55,0.9), 0 1px 4px rgba(0,0,0,0.8)',
        }}
        initial={{ opacity: 0 }}
        animate={isOpen
          ? { opacity: 0 }
          : { opacity: [0, 0, 0.5, 0.95, 0.5] }
        }
        transition={isOpen
          ? { duration: 0.3 }
          : { duration: 3, delay: ENVELOPE_HINT_DELAY / 1000, repeat: Infinity, ease: 'easeInOut', times: [0, 0.3, 0.5, 0.75, 1] }
        }
      >
        TAP TO OPEN
      </motion.p>
    </motion.div>
  )
}
