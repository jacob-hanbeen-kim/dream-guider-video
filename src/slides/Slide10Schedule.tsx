import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../constants';
import {fadeUp, fadeIn, envelope} from '../animations';
import {Logo} from '../shared/Logo';
import {QRCorner} from '../shared/QRCorner';
import {Eyebrow} from '../shared/Eyebrow';

const ROWS = [
  {color: COLORS.green,  name: 'Eco Challenge',       when: '6/1 · 6/3 · 6/8',                        hrs: '12:30 – 2:30 PM'},
  {color: COLORS.yellow, name: 'Career Day',           when: '6/10 · 6/15 · 6/17 · 6/22 · 6/24 · 7/6', hrs: '12:30 – 2:30 PM'},
  {color: COLORS.coral,  name: 'Olympic Day',          when: '6/19 (금)',                               hrs: '10:00 AM – 2:30 PM'},
  {color: COLORS.sky,    name: 'Water Day',            when: '7/10 (금)',                               hrs: '10:00 AM – 1:30 PM'},
  {color: COLORS.plum,   name: 'Substitute Teacher',  when: '7/15 – 7/17',                             hrs: '8:30 AM – 2:30 PM'},
];

const ROW_STYLE: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '80px 1fr 1.6fr 1fr',
  alignItems: 'center',
  borderBottom: `2px solid ${COLORS.ink}`,
};

export const Slide10Schedule: React.FC = () => {
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
        {/* Eyebrow */}
        <Eyebrow
          label="SCENE 10 · FULL SCHEDULE"
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
          한눈에 보는 <span style={{color: COLORS.yellowDeep}}>전체 일정</span>.
        </h2>

        {/* Schedule table */}
        <div
          style={{
            ...fadeUp(frame, 22, 45),
            marginTop: 44,
            border: `3px solid ${COLORS.ink}`,
            borderRadius: 28,
            overflow: 'hidden',
            background: 'white',
            boxShadow: `12px 12px 0 ${COLORS.ink}`,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header row */}
          <div
            style={{
              ...ROW_STYLE,
              background: COLORS.ink,
              color: COLORS.cream,
            }}
          >
            <div style={{background: COLORS.ink, height: '100%', minHeight: 72}} />
            {['PROGRAM', 'DATE', 'HOURS'].map((h) => (
              <div
                key={h}
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 24,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: COLORS.creamDeep,
                  padding: '16px 22px',
                  borderLeft: `2px solid #3a3120`,
                }}
              >
                {h}
              </div>
            ))}
          </div>

          {/* Data rows — staggered fade in */}
          {ROWS.map((row, i) => (
            <div
              key={row.name}
              style={{
                ...ROW_STYLE,
                opacity: fadeIn(frame, 38 + i * 16, 62 + i * 16),
                flex: 1,
                borderBottom:
                  i < ROWS.length - 1 ? `2px solid ${COLORS.ink}` : 'none',
              }}
            >
              <div
                style={{
                  background: row.color,
                  width: '100%',
                  height: '100%',
                  minHeight: 72,
                }}
              />
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontSize: 34,
                  padding: '18px 28px',
                  color: COLORS.ink,
                }}
              >
                {row.name}
              </div>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 24,
                  padding: '18px 22px',
                  color: COLORS.ink,
                  borderLeft: `2px dashed ${COLORS.inkSoft}`,
                  whiteSpace: 'nowrap',
                }}
              >
                {row.when}
              </div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 22,
                  letterSpacing: '0.1em',
                  padding: '18px 22px',
                  color: COLORS.inkSoft,
                  borderLeft: `2px dashed ${COLORS.inkSoft}`,
                }}
              >
                {row.hrs}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Logo />
      <QRCorner />
    </AbsoluteFill>
  );
};
