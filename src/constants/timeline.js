export const SCENE_DURATIONS = [
  Infinity, // Scene 0: Envelope — waits for user to tap envelope
  3500,    // Scene 1: "THE START OF OUR FOREVER"
  4000,    // Scene 2: "Hassan & Merhan"
  4000,    // Scene 3: "WE ARE GETTING ENGAGED"
  4500,    // Scene 4: Date + countdown
  4000,    // Scene 5: Time
  4500,    // Scene 6: Location
  3500,    // Scene 7: Dress Code
  Infinity, // Scene 8: Join us — no auto-advance (loops after idle)
]

export const ENVELOPE_OPEN_DELAY = 2500  // ms after user taps envelope, before advancing to scene 1
export const ENVELOPE_HINT_DELAY = 3000  // ms before "tap to open" hint appears
export const ENGAGEMENT_DATE = new Date('2026-04-05T15:30:00+02:00')
export const TOTAL_SCENES = SCENE_DURATIONS.length
