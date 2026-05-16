import {interpolate, spring} from 'remotion';
import type {CSSProperties} from 'react';

const CLAMP = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

function ease(frame: number, f0: number, f1: number, v0: number, v1: number): number {
  return interpolate(frame, [f0, f1], [v0, v1], CLAMP);
}

export function fadeIn(frame: number, from = 0, to = 20): number {
  return ease(frame, from, to, 0, 1);
}

/** Fade in + slide up from below */
export function fadeUp(frame: number, from = 0, to = 25, dist = 44): CSSProperties {
  return {
    opacity: ease(frame, from, to, 0, 1),
    transform: `translateY(${ease(frame, from, to, dist, 0)}px)`,
  };
}

/** Fade in + slide from left */
export function fadeLeft(frame: number, from = 0, to = 25, dist = 70): CSSProperties {
  return {
    opacity: ease(frame, from, to, 0, 1),
    transform: `translateX(${ease(frame, from, to, -dist, 0)}px)`,
  };
}

/** Fade in + slide from right */
export function fadeRight(frame: number, from = 0, to = 25, dist = 70): CSSProperties {
  return {
    opacity: ease(frame, from, to, 0, 1),
    transform: `translateX(${ease(frame, from, to, dist, 0)}px)`,
  };
}

/**
 * Spring pop: scale from 1 to peak then settle, optionally changes color.
 * Returns a scale value.
 */
export function springPop(frame: number, fps: number, trigger = 0, from = 1, to = 1.08): number {
  if (frame < trigger) return from;
  return spring({
    frame: frame - trigger,
    fps,
    config: {stiffness: 220, damping: 16, mass: 1},
    from,
    to,
  });
}

/**
 * A bar height animation — grows from 0 to finalPct (as a string like "64%")
 */
export function barGrow(frame: number, from = 30, to = 70, finalPct: number): number {
  return ease(frame, from, to, 0, finalPct);
}

/**
 * Slide-level fade-in / fade-out envelope.
 * Keeps a slide at full opacity in the middle, fades edges.
 */
export function envelope(frame: number, total: number, inLen = 14, outLen = 14): number {
  if (frame < inLen) return ease(frame, 0, inLen, 0, 1);
  if (frame > total - outLen) return ease(frame, total - outLen, total, 1, 0);
  return 1;
}
