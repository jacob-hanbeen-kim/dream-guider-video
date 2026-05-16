export const COLORS = {
  cream: '#FBF5E4',
  creamDeep: '#F4ECCF',
  ink: '#1F1A12',
  inkSoft: '#4A4234',
  yellow: '#FFCE2E',
  yellowDeep: '#F2B100',
  green: '#2F7D5C',
  greenSoft: '#DCEBDE',
  coral: '#FF6B4A',
  coralSoft: '#FFE2D9',
  sky: '#3D7FB8',
  skySoft: '#DCEBF6',
  plum: '#6E4B8E',
} as const;

export const FONTS = {
  display: '"Jua", "Apple SD Gothic Neo", sans-serif',
  heavy: '"Black Han Sans", "Jua", sans-serif',
  body: '"Gowun Dodum", "Apple SD Gothic Neo", system-ui, sans-serif',
  mono: '"Inter", "Gowun Dodum", system-ui, sans-serif',
} as const;

// Frame durations at 30fps
export const SLIDE_DURATIONS = [
  210, // Slide 01: 7s  — Opening
  240, // Slide 02: 8s  — 참여 방식
  300, // Slide 03: 10s — Career Day
  240, // Slide 04: 8s  — Eco 1-3
  240, // Slide 05: 8s  — Eco 4-6
  270, // Slide 06: 9s  — Eco 7-8
  240, // Slide 07: 8s  — DATA Project Day
  240, // Slide 08: 8s  — Substitute Teacher
  210, // Slide 09: 7s  — Event Helper
  270, // Slide 10: 9s  — Schedule Summary
  210, // Slide 11: 7s  — Closing / QR
] as const;

export const TOTAL_FRAMES = SLIDE_DURATIONS.reduce((a, b) => a + b, 0); // 2670 = 89s
