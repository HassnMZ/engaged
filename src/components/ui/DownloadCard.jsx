import { forwardRef } from 'react'

// Off-screen invitation card captured by html2canvas.
// IMPORTANT: html2canvas cannot render background-clip:text or object-fit on <img>.
// All text uses solid color, and the photo uses a background-image div.
const DownloadCard = forwardRef(function DownloadCard(_, ref) {
  const photoUrl = `${import.meta.env.BASE_URL}photo.jpg`

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 0,
        width: '800px',
        height: '1130px',
        background: '#0d0b08',
        color: '#d4af37',
        fontFamily: 'Georgia, serif',
        overflow: 'hidden',
      }}
    >
      {/* Borders */}
      <div style={{ position: 'absolute', inset: '12px', border: '2px solid #d4af37', borderRadius: '4px' }} />
      <div style={{ position: 'absolute', inset: '19px', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '2px' }} />

      {/* Content column */}
      <div style={{
        position: 'absolute',
        top: '36px',
        left: '40px',
        right: '40px',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <OrnamentalDivider />

        <Gap h={22} />

        {/* Header label */}
        <p style={{ margin: 0, fontSize: '11px', letterSpacing: '7px', color: 'rgba(212,175,55,0.65)' }}>
          ENGAGEMENT INVITATION
        </p>

        <Gap h={18} />
        <HRule width={160} />
        <Gap h={22} />

        {/* Names — solid color, no background-clip */}
        <p style={{
          margin: 0,
          fontFamily: '"Great Vibes", cursive',
          fontSize: '76px',
          lineHeight: 1.15,
          color: '#e8c84a',          // bright gold, solid — no gradient trick
          textShadow: '0 1px 6px rgba(0,0,0,0.6)',
        }}>
          Hassan &amp; Merhan
        </p>

        <Gap h={22} />
        <HRule width={160} />
        <Gap h={18} />

        {/* Tagline */}
        <p style={{ margin: 0, fontSize: '13px', letterSpacing: '5px', color: 'rgba(212,175,55,0.7)' }}>
          WE ARE GETTING ENGAGED
        </p>

        <Gap h={32} />

        {/* Details table */}
        <div style={{ width: '100%', maxWidth: '520px' }}>
          {[
            { label: 'DATE',  value: '5 April 2026' },
            { label: 'TIME',  value: '3:30 PM — 7:00 PM' },
            { label: 'VENUE', value: 'Open Air Garden' },
            { label: '',      value: 'Katameya Gardens Club' },
            { label: '',      value: 'Zahraa El Maadi' },
            { label: 'DRESS', value: 'Minimal' },
          ].map((row, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'baseline',
              padding: '8px 0',
              borderBottom: i < 5 ? '1px solid rgba(212,175,55,0.13)' : 'none',
            }}>
              <span style={{ width: '90px', fontSize: '10px', letterSpacing: '3px', color: 'rgba(212,175,55,0.45)', flexShrink: 0 }}>
                {row.label}
              </span>
              <span style={{ fontSize: '15px', color: '#d4af37', letterSpacing: '0.5px' }}>
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <Gap h={30} />
        <OrnamentalDivider />
      </div>

      {/* Photo strip — background-image div so html2canvas renders it correctly */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '290px',
        overflow: 'hidden',
      }}>
        {/* Fade-to-dark overlay at the top of the strip */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '110px',
          background: 'linear-gradient(to bottom, #0d0b08, transparent)',
          zIndex: 2,
        }} />
        {/* Photo rendered as background-image — html2canvas handles this reliably */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${photoUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 20%',   // upper portion of portrait
          opacity: 0.65,
        }} />
      </div>
    </div>
  )
})

function Gap({ h }) {
  return <div style={{ height: h }} />
}

function HRule({ width = 180 }) {
  return (
    <div style={{ width, height: '1px', background: 'rgba(212,175,55,0.45)' }} />
  )
}

function OrnamentalDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '300px' }}>
      <div style={{ flex: 1, height: '1px', background: 'rgba(212,175,55,0.5)' }} />
      <span style={{ color: '#d4af37', fontSize: '11px', lineHeight: 1 }}>✦</span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(212,175,55,0.5)' }} />
      <span style={{ color: '#d4af37', fontSize: '11px', lineHeight: 1 }}>✦</span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(212,175,55,0.5)' }} />
    </div>
  )
}

export default DownloadCard
