import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../constants';
import {fadeUp, envelope, springPop} from '../animations';
import {Logo} from '../shared/Logo';
import {QRCorner} from '../shared/QRCorner';
import {Eyebrow} from '../shared/Eyebrow';

const GRADES = ['1학년', '3학년', '5학년', '8학년'];

export const Slide08SubstituteTeacher: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const wrap = envelope(frame, durationInFrames);

  // "단 하루만" spring — narration hits at ~4s = frame 120
  const oneDayScale = springPop(frame, fps, 118, 1, 1.1);
  const oneDayColor = frame >= 118 ? COLORS.yellow : 'white';

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
          label="SCENE 08 · SUBSTITUTE TEACHER"
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
          단 하루의 도움도
          <br />
          <span style={{color: COLORS.yellowDeep}}>큰 힘</span>이 됩니다.
        </h2>

        {/* Date card */}
        <div
          style={{
            ...fadeUp(frame, 28, 56),
            background: COLORS.ink,
            color: COLORS.cream,
            borderRadius: 28,
            padding: '48px 56px',
            display: 'flex',
            alignItems: 'center',
            gap: 48,
            marginTop: 48,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.display,
              fontSize: 88,
              color: 'white',
              lineHeight: 1,
            }}
          >
            7/15<span style={{color: COLORS.yellow}}>(수)</span> –{' '}
            7/17<span style={{color: COLORS.yellow}}>(금)</span>
          </div>
          <div
            style={{width: 2, height: 80, background: '#5a4f33', flexShrink: 0}}
          />
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 26,
              letterSpacing: '0.12em',
              color: COLORS.creamDeep,
            }}
          >
            8:30 AM — 2:30 PM
            <br />
            <span style={{color: COLORS.yellow}}>
              SUBSTITUTE TEACHER · 보조 교사
            </span>
          </div>
        </div>

        {/* "단 하루만" callout — spring pop at frame 118 */}
        <div
          style={{
            ...fadeUp(frame, 48, 75),
            marginTop: 40,
            background: COLORS.coral,
            color: 'white',
            borderRadius: 28,
            padding: '42px 56px',
            display: 'flex',
            alignItems: 'center',
            gap: 36,
            border: `3px solid ${COLORS.ink}`,
            boxShadow: `10px 10px 0 ${COLORS.ink}`,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 24,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}
            >
              FLEXIBLE
            </div>
            <div
              style={{
                fontFamily: FONTS.display,
                fontSize: 64,
                lineHeight: 1.0,
                marginTop: 8,
              }}
            >
              3일 중{' '}
              <span
                style={{
                  display: 'inline-block',
                  transform: `scale(${oneDayScale})`,
                  transformOrigin: 'center bottom',
                  color: oneDayColor,
                  transition: 'color 0.08s',
                }}
              >
                하루만
              </span>{' '}
              <br />
              골라도 신청 가능!
            </div>
          </div>
        </div>

        {/* Grade chips */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            marginTop: 40,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              ...fadeUp(frame, 90, 112),
              alignSelf: 'center',
              marginRight: 8,
              fontFamily: FONTS.body,
              fontSize: 26,
              lineHeight: 1.5,
              color: COLORS.inkSoft,
            }}
          >
            수업 지원 학년 →
          </span>
          {GRADES.map((g, i) => (
            <span
              key={g}
              style={{
                ...fadeUp(frame, 98 + i * 10, 125 + i * 10),
                background: 'white',
                border: `3px solid ${COLORS.ink}`,
                borderRadius: 999,
                padding: '22px 36px',
                fontFamily: FONTS.display,
                fontSize: 38,
                color: COLORS.ink,
                boxShadow: `6px 6px 0 ${COLORS.ink}`,
              }}
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      <Logo />
      <QRCorner />
    </AbsoluteFill>
  );
};
