import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';
import { COLORS, FONTS } from '../constants';
import { fadeUp, fadeRight, envelope, springPop } from '../animations';
import { Logo } from '../shared/Logo';

export const Slide11Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const wrap = envelope(frame, durationInFrames);

  // "여러분이 바로 그 주인공" — narration hits at ~6s = frame 180
  const heroScale = springPop(frame, fps, 175, 1, 1.05);
  const heroColor = frame >= 175 ? COLORS.coral : COLORS.ink;

  return (
    <AbsoluteFill
      style={{ opacity: wrap, background: COLORS.yellow, overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '110px 110px 160px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: 60,
            flex: 1,
          }}
        >
          {/* Left column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Small label */}
            <div
              style={{
                ...fadeUp(frame, 0, 22),
                fontFamily: FONTS.mono,
                fontSize: 26,
                letterSpacing: '0.32em',
                color: COLORS.ink,
                marginBottom: 32,
                textTransform: 'uppercase',
              }}
            >
              JOIN US · 2026
            </div>

            {/* Main heading */}
            <h2
              style={{
                ...fadeUp(frame, 10, 38),
                fontFamily: FONTS.display,
                fontSize: 130,
                lineHeight: 1,
                color: COLORS.ink,
                letterSpacing: '-0.01em',
              }}
            >
              지금 바로
              <br />
              지원하세요.
            </h2>

            {/* Sub */}
            <p
              style={{
                ...fadeUp(frame, 28, 55),
                fontFamily: FONTS.display,
                fontSize: 56,
                lineHeight: 1.25,
                marginTop: 32,
                color: COLORS.ink,
              }}
            >
              드림 가이더가 되어 주세요.
            </p>

            {/* How rows */}
            <div
              style={{
                marginTop: 56,
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
              }}
            >
              {[
                { n: 1, text: <>로비 <b style={{ fontFamily: FONTS.display, fontWeight: 'normal' }}>Signup Sheet</b>에 이름을 적어 주세요.</> },
                { n: 2, text: <>또는 오른쪽 <b style={{ fontFamily: FONTS.display, fontWeight: 'normal' }}>QR 코드를 스캔</b>하세요.</> },
                { n: 3, text: <>문의 — <b style={{ fontFamily: FONTS.display, fontWeight: 'normal' }}>이조이 집사</b> · Kakaotalk <b style={{ fontFamily: FONTS.display, fontWeight: 'normal' }}>jolly0717</b></> },
              ].map(({ n, text }, i) => (
                <div
                  key={n}
                  style={{
                    ...fadeUp(frame, 48 + i * 18, 75 + i * 18),
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 22,
                    fontFamily: FONTS.body,
                    fontSize: 32,
                    color: COLORS.ink,
                  }}
                >
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: COLORS.ink,
                      color: COLORS.yellow,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: FONTS.display,
                      fontSize: 30,
                      flexShrink: 0,
                    }}
                  >
                    {n}
                  </span>
                  <span style={{ paddingTop: 8 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* "여러분이 바로 그 주인공" — spring at frame 175 */}
            <div
              style={{
                ...fadeUp(frame, 158, 180),
                marginTop: 36,
                fontFamily: FONTS.display,
                fontSize: 46,
                color: heroColor,
                transform: `scale(${heroScale})`,
                transformOrigin: 'left center',
                transition: 'color 0.1s',
              }}
            >
              아이들의 꿈을 세우는 일,{' '}
              <span
                style={{
                  color: frame >= 175 ? COLORS.ink : COLORS.inkSoft,
                  fontFamily: FONTS.heavy,
                }}
              >
                여러분이 바로 그 주인공
              </span>
              입니다.
            </div>
          </div>

          {/* Right column — QR card */}
          <div
            style={{
              ...fadeRight(frame, 18, 50),
              background: COLORS.ink,
              color: 'white',
              borderRadius: 28,
              padding: 48,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 28,
              alignSelf: 'center',
            }}
          >
            <div
              style={{
                background: 'white',
                padding: 28,
                borderRadius: 20,
                width: 420,
                height: 420,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Img
                src={staticFile('qr-code.png')}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div
              style={{
                fontFamily: FONTS.display,
                fontSize: 40,
                color: COLORS.yellow,
              }}
            >
              SCAN TO APPLY
            </div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 24,
                letterSpacing: '0.12em',
                color: COLORS.creamDeep,
                textAlign: 'center',
              }}
            >
              SAEHAN SUMMER ACADEMY · 2026
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
