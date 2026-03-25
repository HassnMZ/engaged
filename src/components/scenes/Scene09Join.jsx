import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import DownloadCard from '../ui/DownloadCard'
import CountdownTimer from '../ui/CountdownTimer'
import { useDownload } from '../../hooks/useDownload'

const MAPS_URL = 'https://maps.app.goo.gl/gVtssU3V1rjUHFgF7'

export default function Scene09Join() {
  const cardRef = useRef(null)
  const { download } = useDownload(cardRef)
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async (e) => {
    e.stopPropagation()
    setDownloading(true)
    await download()
    setDownloading(false)
  }

  const handleMaps = (e) => {
    e.stopPropagation()
    window.open(MAPS_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <DownloadCard ref={cardRef} />

      <div className="flex flex-col items-center text-center gap-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p style={{ fontSize: 'clamp(9px, 2.2vw, 11px)', letterSpacing: '4px', color: 'rgba(212,175,55,0.5)', margin: '0 0 10px' }}>
            ✦ &nbsp; YOU ARE CORDIALLY INVITED &nbsp; ✦
          </p>
          <p
            className="gold-gradient-text"
            style={{ fontFamily: '"Great Vibes", cursive', fontSize: 'clamp(32px, 7.5vw, 48px)', margin: 0, lineHeight: 1.3 }}
          >
            Join us to celebrate
          </p>
        </motion.div>

        {/* Time + Countdown */}
        <motion.div
          className="flex flex-col items-center gap-2 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <p style={{
            fontSize: 'clamp(18px, 4.5vw, 26px)',
            letterSpacing: 'clamp(1px, 0.5vw, 2px)',
            color: '#d4af37',
            margin: 0,
            whiteSpace: 'nowrap',
          }}>
            3:30 PM — 7:00 PM
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col gap-3 items-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            onClick={handleDownload}
            disabled={downloading}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              width: '220px',
              background: 'rgba(13,11,8,0.5)',
              border: '1px solid rgba(212,175,55,0.7)',
              color: '#d4af37',
              fontSize: '11px',
              letterSpacing: '3px',
              padding: '13px 24px',
              cursor: downloading ? 'wait' : 'pointer',
              borderRadius: '2px',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(13,11,8,0.5)'}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 1v8M4 6l3 3 3-3" />
              <path d="M1 10v1.5A1.5 1.5 0 002.5 13h9A1.5 1.5 0 0013 11.5V10" />
            </svg>
            {downloading ? 'SAVING...' : 'SAVE INVITATION'}
          </button>

          <button
            onClick={handleMaps}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              width: '220px',
              background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))',
              border: '1px solid rgba(212,175,55,0.5)',
              color: '#d4af37',
              fontSize: '11px',
              letterSpacing: '3px',
              padding: '13px 24px',
              cursor: 'pointer',
              borderRadius: '2px',
              backdropFilter: 'blur(4px)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))'}
          >
            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.5 1C4.015 1 2 3.015 2 5.5c0 3.375 4.5 8.5 4.5 8.5S11 8.875 11 5.5C11 3.015 8.985 1 6.5 1z" />
              <circle cx="6.5" cy="5.5" r="1.5" />
            </svg>
            GET DIRECTIONS
          </button>
        </motion.div>

        {/* Venue footer */}
        <motion.p
          style={{ fontSize: 'clamp(10px, 2.5vw, 13px)', letterSpacing: '1px', color: 'rgba(212,175,55,0.5)', margin: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          5 April 2026 &nbsp;·&nbsp; Katameya Gardens Club
        </motion.p>

      </div>
    </>
  )
}
