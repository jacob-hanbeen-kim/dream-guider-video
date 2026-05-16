import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {COLORS, FONTS} from '../constants';
import {fadeUp, envelope} from '../animations';
import {Logo} from '../shared/Logo';
import {QRCorner} from '../shared/QRCorner';
import {Eyebrow} from '../shared/Eyebrow';

const BAR_HEIGHTS = [38, 64, 48, 78, 52, 88, 42, 70, 60, 92];
const BAR_COLORS = [COLORS.yellow, COLORS.coral, COLORS.sky];

const CLAMP = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const Slide07DataProject: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const wrap = envelope(frame, durationInFrames);

  return (
    <AbsoluteFill
      style={{
        opacity: wrap,
        background: `linear-gradient(180deg, ${COLORS.skySoft}, ${COLORS.cream})`,
        overflow: 'hidden',
      }}
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
        {/* Eyebrow */}
        <Eyebrow
          label="SCENE 07 · DATA PROJECT DAY"
          dotColor={COLORS.sky}
          style={{...fadeUp(frame, 0, 22)}}
        />

        {/* Title */}
        <h2
          style={{
            ...fadeUp(frame, 8, 35),
            fontFamily: FONTS.display,
            fontSize: 76,
            fontWeight: 400,
            lineHeight: 1.05,
            color: COLORS.ink,
            marginTop: 24,
            letterSpacing: '-0.01em',
          }}
        >
          데이터로 세상을 읽는 눈,
          <br />
          <span style={{color: COLORS.sky}}>AI와 함께</span> 키웁니다.
        </h2>

        {/* Data grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 48,
            flex: 1,
            marginTop: 56,
            alignItems: 'stretch',
          }}
        >
          {/* Dark data visualization panel */}
          <div
            style={{
              ...fadeUp(frame, 25, 55),
              background: COLORS.ink,
              borderRadius: 28,
              padding: 56,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: `10px 10px 0 ${COLORS.sky}`,
            }}
          >
            {/* Animated bar chart */}
            <div
              style={{
                position: 'absolute',
                bottom: 120,
                left: 60,
                right: 60,
                top: 60,
                display: 'flex',
                alignItems: 'flex-end',
                gap: 18,
              }}
            >
              {BAR_HEIGHTS.map((h, i) => {
                const animH = interpolate(
                  frame,
                  [28 + i * 4, 65 + i * 4],
                  [0, h],
                  CLAMP
                );
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${animH}%`,
                      background: BAR_COLORS[i % BAR_COLORS.length],
                      borderRadius: '10px 10px 0 0',
                    }}
                  />
                );
              })}
            </div>

            {/* Caption */}
            <div style={{position: 'relative', zIndex: 2}}>
              <div
                style={{
                  color: COLORS.cream,
                  fontFamily: FONTS.mono,
                  fontSize: 24,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                SPECIAL SESSION
              </div>
              <div
                style={{
                  color: COLORS.yellow,
                  fontFamily: FONTS.display,
                  fontSize: 56,
                  letterSpacing: 0,
                  marginTop: 8,
                }}
              >
                With Dr. Kichun Lee
              </div>
            </div>
          </div>

          {/* Right panels */}
          <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
            <div
              style={{
                ...fadeUp(frame, 50, 78),
                background: COLORS.skySoft,
                border: `3px solid ${COLORS.ink}`,
                borderRadius: 28,
                padding: '48px 48px',
                boxShadow: `10px 10px 0 ${COLORS.ink}`,
                flex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 24,
                  letterSpacing: '0.22em',
                  color: COLORS.inkSoft,
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                SESSION · 내용
              </div>
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 32,
                  lineHeight: 1.55,
                  color: COLORS.ink,
                }}
              >
                AI 도구를 활용해 데이터를 해석하고,
                <br />
                실제 문제를 단계별로 풀어 봅니다.
              </p>
            </div>

            <div
              style={{
                ...fadeUp(frame, 66, 95),
                background: 'white',
                border: `3px solid ${COLORS.ink}`,
                borderRadius: 28,
                padding: '48px 48px',
                boxShadow: `10px 10px 0 ${COLORS.ink}`,
                flex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 24,
                  letterSpacing: '0.22em',
                  color: COLORS.inkSoft,
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                의의 · WHY IT MATTERS
              </div>
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 32,
                  lineHeight: 1.55,
                  color: COLORS.ink,
                }}
              >
                미래 기술을 통해 세상을 바라보는 눈을
                <br />
                아이들에게 선물하는 시간.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Logo />
      <QRCorner />
    </AbsoluteFill>
  );
};
