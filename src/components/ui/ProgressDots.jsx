import { TOTAL_SCENES } from '../../constants/timeline'

export default function ProgressDots({ current, onSkipTo }) {
  return (
    <div
      className="fixed left-1/2 z-50 flex gap-2 items-center"
      style={{
        transform: 'translateX(-50%)',
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      {Array.from({ length: TOTAL_SCENES }, (_, i) => (
        <button
          key={i}
          onClick={(e) => { e.stopPropagation(); onSkipTo(i) }}
          style={{
            background: 'none',
            border: 'none',
            padding: '4px',
            cursor: 'pointer',
          }}
          aria-label={`Go to scene ${i + 1}`}
        >
          <div
            style={{
              width: i === current ? 8 : i < current ? 6 : 5,
              height: i === current ? 8 : i < current ? 6 : 5,
              borderRadius: '50%',
              background: i <= current ? '#d4af37' : 'transparent',
              border: `1px solid ${i <= current ? '#d4af37' : 'rgba(212,175,55,0.4)'}`,
              transition: 'all 0.3s ease',
            }}
          />
        </button>
      ))}
    </div>
  )
}
