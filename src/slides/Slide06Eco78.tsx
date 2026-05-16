import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../constants';
import {fadeUp, envelope} from '../animations';
import {Logo} from '../shared/Logo';
import {QRCorner} from '../shared/QRCorner';

const PLUM_SOFT = '#ECDFF1';

export const Slide06Eco78: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const wrap = envelope(frame, durationInFrames);

  return (
    <AbsoluteFill
      style={{opacity: wrap, background: COLORS.cream, overflow: 'hidden'}}
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
        {/* Grade chip + eyebrow */}
        <div
          style={{
            ...fadeUp(frame, 0, 22),
            display: 'flex',
            gap: 24,
            alignItems: 'center',
          }}
        >
          <span
            style={{
              background: COLORS.plum,
              color: 'white',
              fontFamily: FONTS.display,
              fontSize: 38,
              padding: '14px 30px',
              borderRadius: 999,
              lineHeight: 1,
            }}
          >
            Grade 7–8
          </span>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: 24,
              letterSpacing: '0.22em',
              color: COLORS.inkSoft,
              textTransform: 'uppercase',
            }}
          >
            SCENE 06 · ECO CHALLENGE
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            ...fadeUp(frame, 12, 38),
            fontFamily: FONTS.display,
            fontSize: 88,
            lineHeight: 1.0,
            color: COLORS.ink,
            margin: '36px 0 40px',
            letterSpacing: '-0.01em',
          }}
        >
          Environmental{' '}
          <span style={{color: COLORS.plum}}>Shark Tank</span>
          <br />
          <span style={{fontSize: 48, color: COLORS.inkSoft}}>
            환경 문제 해결 아이디어 발표.
          </span>
        </h2>

        {/* Eco grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: 40,
            flex: 1,
          }}
        >
          {/* Mission panel */}
          <div
            style={{
              ...fadeUp(frame, 30, 58),
              background: PLUM_SOFT,
              border: `3px solid ${COLORS.ink}`,
              borderRadius: 28,
              padding: '48px 48px',
              boxShadow: `10px 10px 0 ${COLORS.ink}`,
              display: 'flex',
              flexDirection: 'column',
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
              미션 · MISSION
            </div>
            <h3
              style={{
                fontFamily: FONTS.display,
                fontSize: 52,
                lineHeight: 1.15,
                color: COLORS.ink,
                margin: '0 0 24px',
              }}
            >
              문제를 찾고,
              <br />
              설득력 있는 해결책을 제안합니다.
            </h3>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: 30,
                lineHeight: 1.55,
                color: COLORS.ink,
              }}
            >
              청소년 스스로 문제를 발굴해 포스터로 정리하고,
              <br />
              심사단 앞에서 자신의 아이디어를 피칭합니다.
            </p>
          </div>

          {/* Right stack */}
          <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
            <div
              style={{
                ...fadeUp(frame, 45, 72),
                background: 'white',
                border: `3px solid ${COLORS.ink}`,
                borderRadius: 28,
                padding: '48px 48px',
                boxShadow: `10px 10px 0 ${COLORS.ink}`,
                display: 'flex',
                flexDirection: 'column',
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
                4단계 · PROCESS
              </div>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14}}>
                {['문제 발굴', '해결책 기획', '포스터 제작', '발표 (Pitch)'].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: 30,
                      color: COLORS.ink,
                      paddingLeft: 36,
                      position: 'relative',
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 12,
                        width: 18,
                        height: 18,
                        background: COLORS.plum,
                        borderRadius: '50%',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                ...fadeUp(frame, 60, 88),
                background: 'white',
                border: `3px solid ${COLORS.ink}`,
                borderRadius: 28,
                padding: '36px 48px',
                boxShadow: `10px 10px 0 ${COLORS.ink}`,
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 24,
                  letterSpacing: '0.22em',
                  color: COLORS.inkSoft,
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                가이더의 역할
              </div>
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 28,
                  lineHeight: 1.55,
                  color: COLORS.ink,
                }}
              >
                브레인스토밍을 이끌고, 발표에 피드백을 줍니다.
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
