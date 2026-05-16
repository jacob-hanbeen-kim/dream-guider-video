import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../constants';
import {fadeUp, envelope} from '../animations';
import {Logo} from '../shared/Logo';
import {QRCorner} from '../shared/QRCorner';

export const Slide04Eco13: React.FC = () => {
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
            marginBottom: 0,
          }}
        >
          <span
            style={{
              background: COLORS.green,
              color: 'white',
              fontFamily: FONTS.display,
              fontSize: 38,
              padding: '14px 30px',
              borderRadius: 999,
              lineHeight: 1,
            }}
          >
            Grade 1–3
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
            SCENE 04 · ECO CHALLENGE
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
          Trash to{' '}
          <span style={{color: COLORS.green}}>Treasure</span>
          <br />
          <span
            style={{
              fontSize: 48,
              color: COLORS.inkSoft,
              fontFamily: FONTS.display,
            }}
          >
            버려지는 물건을 새 물건으로!
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
              background: COLORS.greenSoft,
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
              손끝에서 다시 태어나는
              <br />
              작은 보물 만들기.
            </h3>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: 30,
                lineHeight: 1.55,
                color: COLORS.ink,
              }}
            >
              우유팩, 휴지심, 빈 통 — 우리 집 재활용통 속 재료가
              <br />
              아이들 손에서 화분, 동물, 로봇이 됩니다.
            </p>
          </div>

          {/* Right stack */}
          <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
            {/* Activities panel */}
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
                활동 · ACTIVITIES
              </div>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14}}>
                {['우유팩 화분', '휴지심 동물', '재활용 로봇 만들기'].map((item) => (
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
                        background: COLORS.green,
                        borderRadius: '50%',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Guider role panel */}
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
                재료 선택을 돕고, 만드는 과정을 옆에서 안내합니다.
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
