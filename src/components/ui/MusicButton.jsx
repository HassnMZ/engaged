export default function MusicButton({ isPlaying, onToggle }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onToggle() }}
      className="fixed top-5 right-5 z-50 flex items-center justify-center"
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      <div className="relative flex items-center justify-center w-10 h-10">
        {/* Pulse rings only when playing */}
        {isPlaying && (
          <>
            <div className="music-ring absolute inset-0 rounded-full border border-gold/40" />
            <div className="music-ring absolute inset-0 rounded-full border border-gold/30" />
            <div className="music-ring absolute inset-0 rounded-full border border-gold/20" />
          </>
        )}

        {/* Button circle */}
        <div
          className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full"
          style={{
            background: 'rgba(13,11,8,0.7)',
            border: '1px solid rgba(212,175,55,0.5)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {isPlaying ? (
            /* Two animated eighth notes — music is playing */
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#d4af37">
              {/* Note 1 */}
              <ellipse cx="4.5" cy="11.5" rx="2" ry="1.4" />
              <line x1="6.5" y1="11.5" x2="6.5" y2="4" stroke="#d4af37" strokeWidth="1.3" />
              {/* Note 2 */}
              <ellipse cx="10.5" cy="10" rx="2" ry="1.4" />
              <line x1="12.5" y1="10" x2="12.5" y2="2.5" stroke="#d4af37" strokeWidth="1.3" />
              {/* Beam connecting the two */}
              <line x1="6.5" y1="4" x2="12.5" y2="2.5" stroke="#d4af37" strokeWidth="1.3" />
            </svg>
          ) : (
            /* Same notes but with a mute slash */
            <svg width="16" height="16" viewBox="0 0 16 16" fill="rgba(212,175,55,0.45)">
              <ellipse cx="4.5" cy="11.5" rx="2" ry="1.4" />
              <line x1="6.5" y1="11.5" x2="6.5" y2="4" stroke="rgba(212,175,55,0.45)" strokeWidth="1.3" />
              <ellipse cx="10.5" cy="10" rx="2" ry="1.4" />
              <line x1="12.5" y1="10" x2="12.5" y2="2.5" stroke="rgba(212,175,55,0.45)" strokeWidth="1.3" />
              <line x1="6.5" y1="4" x2="12.5" y2="2.5" stroke="rgba(212,175,55,0.45)" strokeWidth="1.3" />
              {/* Mute slash */}
              <line x1="2" y1="13.5" x2="14" y2="2" stroke="rgba(212,175,55,0.7)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          )}
        </div>

      </div>
    </button>
  )
}
