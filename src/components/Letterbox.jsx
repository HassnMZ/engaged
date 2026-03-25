import { motion } from 'framer-motion'

export default function Letterbox({ visible }) {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-30 bg-black"
        initial={{ height: '8vh' }}
        animate={{ height: visible ? '8vh' : 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      />
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-30 bg-black"
        initial={{ height: '8vh' }}
        animate={{ height: visible ? '8vh' : 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      />
    </>
  )
}
