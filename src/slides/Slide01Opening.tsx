import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';
import { fadeUp, fadeIn, envelope } from '../animations';
import { Logo } from '../shared/Logo';
import { QRCorner } from '../shared/QRCorner';

export const Slide01Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const wrap = envelope(frame, durationInFrames);

  return (
    <AbsoluteFill
      style={{ opacity: wrap, background: COLORS.cream, overflow: 'hidden' }}
    >
      {/* Background decoration — large yellow circle top-right */}
      <div
        style={{
          position: 'absolute',
          right: -280,
          top: -280,
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: COLORS.yellow,
          opacity: fadeIn(frame, 0, 35),
        }}
      />
      {/* Coral accent circle bottom-right */}
      <div
        style={{
          position: 'absolute',
          right: -100,
          bottom: -180,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: COLORS.coral,
          opacity: 0.85 * fadeIn(frame, 10, 45),
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '110px 110px 160px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            ...fadeUp(frame, 5, 28),
            fontFamily: FONTS.mono,
            fontSize: 28,
            letterSpacing: '0.32em',
            textTransform: 'uppercase' as const,
            color: COLORS.ink,
            marginBottom: 52,
          }}
        >
          2026 SAEHAN SUMMER ACADEMY
        </div>

        {/* Hero title */}
        <div style={{ maxWidth: 1300 }}>
          <h1
            style={{
              ...fadeUp(frame, 15, 45),
              fontFamily: FONTS.display,
              fontSize: 120,
              lineHeight: 1.02,
              color: COLORS.ink,
              letterSpacing: '-0.015em',
            }}
          >
            드림 가이더 모집
            <br />
            <span style={{ color: COLORS.yellowDeep }}>DREAM GUIDER</span>
          </h1>

          {/* Slogan */}
          <div
            style={{
              ...fadeUp(frame, 38, 65),
              marginTop: 52,
              fontFamily: FONTS.display,
              fontSize: 52,
              lineHeight: 1.3,
              color: COLORS.ink,
              maxWidth: 1100,
            }}
          >
            나의 오늘이
            <br />
            아이들의 내일이 되는 시간.
          </div>
        </div>
      </div>

      {/* Bottom tagline */}
      <div
        style={{
          ...fadeUp(frame, 58, 82),
          position: 'absolute',
          left: 110,
          bottom: 150,
          fontFamily: FONTS.mono,
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: '0.05em',
          color: COLORS.ink,
          zIndex: 3,
        }}
      >
        Dream a Dream.{' '}
        <span style={{ color: COLORS.coral }}>Become a Dream.</span>
      </div>

      <Logo />
      <QRCorner />
    </AbsoluteFill>
  );
};
