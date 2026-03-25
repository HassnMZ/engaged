import { motion } from 'framer-motion'

export default function Envelope({ isOpen }) {
  return (
    <motion.div
      animate={{ opacity: isOpen ? [1, 1, 0] : 1 }}
      transition={{ duration: 1.2, delay: isOpen ? 1.5 : 0, times: [0, 0.6, 1] }}
      className="flex flex-col items-center gap-6"
    >
      {/* Envelope */}
      <div
        className="relative"
        style={{ width: 'min(220px, 60vw)', height: 'min(140px, 38vw)', perspective: '700px' }}
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
        <motion.div
          className="absolute rounded-full flex items-center justify-center"
          style={{
            width: 'min(36px, 10vw)',
            height: 'min(36px, 10vw)',
            background: 'radial-gradient(circle, #8b1a1a, #6b0000)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
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

      {/* "Open Invitation" hint */}
      <motion.p
        className="text-center"
        style={{
          fontSize: 'clamp(13px, 3vw, 16px)',
          letterSpacing: '3px',
          color: 'rgba(212,175,55,0.7)',
        }}
        animate={{
          opacity: isOpen ? 0 : [0.4, 0.9, 0.4],
        }}
        transition={
          isOpen
            ? { duration: 0.3 }
            : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        YOUR INVITATION
      </motion.p>
    </motion.div>
  )
}
