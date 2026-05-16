import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../constants';
import {fadeUp, envelope} from '../animations';
import {Logo} from '../shared/Logo';
import {QRCorner} from '../shared/QRCorner';

export const Slide05Eco46: React.FC = () => {
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
              background: COLORS.coral,
              color: 'white',
              fontFamily: FONTS.display,
              fontSize: 38,
              padding: '14px 30px',
              borderRadius: 999,
              lineHeight: 1,
            }}
          >
            Grade 4–6
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
            SCENE 05 · ECO CHALLENGE
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
          Eco City <span style={{color: COLORS.coral}}>Builder</span>
          <br />
          <span style={{fontSize: 48, color: COLORS.inkSoft}}>
            친환경 도시를 직접 설계하고 모형으로 만들어요.
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
              background: COLORS.coralSoft,
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
              아이들이 직접 설계하고
              <br />
              만드는 나만의 도시.
            </h3>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: 30,
                lineHeight: 1.55,
                color: COLORS.ink,
              }}
            >
              환경 문제를 스스로 고민하며 친환경 도시를
              <br />
              디자인하고 모형으로 직접 만들어 봅니다.
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
                활동 · ACTIVITY
              </div>
              <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14}}>
                {['도시 디자인 & 설계', '모형 직접 제작', '환경 문제 탐구'].map((item) => (
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
                        background: COLORS.coral,
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
                가이더의 질문 · GUIDE QUESTIONS
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
                {[
                  '너희 도시는 어떤 문제를 해결하니?',
                  '오염을 줄이려면 어떻게 이동하면 좋을까?',
                  '사람들은 어디서 재활용을 하니?',
                ].map((q) => (
                  <div
                    key={q}
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: 24,
                      lineHeight: 1.45,
                      color: COLORS.ink,
                      paddingLeft: 20,
                      borderLeft: `4px solid ${COLORS.coral}`,
                    }}
                  >
                    "{q}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Logo />
      <QRCorner />
    </AbsoluteFill>
  );
};
