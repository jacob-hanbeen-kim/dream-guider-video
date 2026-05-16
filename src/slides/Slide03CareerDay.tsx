import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS, FONTS } from '../constants';
import { fadeUp, fadeIn, envelope, springPop } from '../animations';
import { Logo } from '../shared/Logo';
import { QRCorner } from '../shared/QRCorner';
import { Eyebrow } from '../shared/Eyebrow';

const JOBS = [
  { emoji: '℞', bg: COLORS.coralSoft, name: '약사', en: '예시 · 사탕 조제' },
  { emoji: '♥', bg: COLORS.skySoft, name: '의사', en: '예시 · 청진기 체험' },
  { emoji: '▲', bg: COLORS.greenSoft, name: '요리사', en: '예시 · 데코레이션' },
  { emoji: '●', bg: COLORS.yellow, name: '엔지니어', en: '예시 · 만들기 활동' },
];

export const Slide03CareerDay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const wrap = envelope(frame, durationInFrames);

  // "어떤 직업이라도" spring emphasis — narration hits ~3s = frame 90
  const anyJobScale = springPop(frame, fps, 88, 1, 1.06);
  const anyJobColor = frame >= 88 ? COLORS.coral : COLORS.inkSoft;

  return (
    <AbsoluteFill
      style={{ opacity: wrap, background: COLORS.cream, overflow: 'hidden' }}
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
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 40,
          }}
        >
          <div style={{ flex: 1 }}>
            <Eyebrow
              label="SCENE 03 · CAREER DAY"
              style={{ ...fadeUp(frame, 0, 22) }}
            />
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
              당신의 삶이 가장
              <br />
              <span style={{ color: COLORS.yellowDeep }}>생생한 교과서</span>입니다.
            </h2>
          </div>

          {/* Pill badge */}
          {/* <div
            style={{
              ...fadeUp(frame, 18, 42),
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              background: COLORS.yellow,
              color: COLORS.ink,
              border: `3px solid ${COLORS.ink}`,
              padding: '16px 28px',
              borderRadius: 999,
              fontFamily: FONTS.display,
              fontSize: 36,
              boxShadow: `8px 8px 0 ${COLORS.ink}`,
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                background: COLORS.coral,
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            모든 직업 환영
          </div> */}
        </div>

        {/* Lead paragraph — "어떤 직업이라도" springs at frame 88 */}
        <div style={{...fadeUp(frame, 25, 52), marginTop: 28, maxWidth: 1500}}>
          <div
            style={{
              display: 'block',
              transform: `scale(${anyJobScale})`,
              transformOrigin: 'left center',
              color: anyJobColor,
              fontFamily: FONTS.display,
              fontSize: 40,
              lineHeight: 1.5,
              transition: 'color 0.1s',
            }}
          >
            어떤 직업이라도 좋습니다.
          </div>
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: 40,
              lineHeight: 1.5,
              color: COLORS.inkSoft,
            }}
          >
            아이들에게 40분 동안 보여주실 '나의 직업 이야기'와
            <br />
            함께 해볼 작은 체험·역할극 하나면 충분합니다.
          </div>
        </div>

        {/* Example label */}
        <div
          style={{
            ...fadeUp(frame, 50, 70),
            marginTop: 28,
            fontFamily: FONTS.mono,
            fontSize: 24,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: COLORS.inkSoft,
          }}
        >
          예시 — EXAMPLES
        </div>

        {/* Job cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            marginTop: 16,
          }}
        >
          {JOBS.map((job, i) => (
            <div
              key={job.name}
              style={{
                ...fadeUp(frame, 62 + i * 15, 90 + i * 15),
                background: 'white',
                border: `3px solid ${COLORS.ink}`,
                borderRadius: 28,
                padding: '28px 28px 24px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: `8px 8px 0 ${COLORS.ink}`,
              }}
            >
              <div
                style={{
                  background: job.bg,
                  borderRadius: 18,
                  marginBottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: FONTS.display,
                  fontSize: 72,
                  color: COLORS.ink,
                  height: 140,
                }}
              >
                {job.emoji}
              </div>
              <div
                style={{ fontFamily: FONTS.display, fontSize: 38, color: COLORS.ink }}
              >
                {job.name}
              </div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 24,
                  letterSpacing: '0.16em',
                  color: COLORS.inkSoft,
                  textTransform: 'uppercase',
                  marginTop: 4,
                }}
              >
                {job.en}
              </div>
            </div>
          ))}
        </div>

        {/* Note strip */}
        <div
          style={{
            ...fadeUp(frame, 140, 165),
            marginTop: 32,
            background: COLORS.ink,
            color: COLORS.cream,
            borderRadius: 28,
            padding: '26px 36px',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <span
            style={{
              background: COLORS.yellow,
              color: COLORS.ink,
              fontFamily: FONTS.mono,
              fontWeight: 700,
              letterSpacing: '0.12em',
              padding: '8px 18px',
              borderRadius: 999,
              fontSize: 24,
            }}
          >
            PREP
          </span>
          <span
            style={{ fontFamily: FONTS.body, fontSize: 28, color: COLORS.cream }}
          >
            활동에 필요한 간단한 재료·도구만 개별 지참해 주세요. 직업 종류는 제한 없습니다.
          </span>
        </div>
      </div>

      <Logo />
      <QRCorner />
    </AbsoluteFill>
  );
};
