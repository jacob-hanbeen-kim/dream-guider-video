import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../constants';
import {fadeUp, fadeLeft, fadeRight, fadeIn, envelope} from '../animations';
import {Logo} from '../shared/Logo';
import {QRCorner} from '../shared/QRCorner';
import {Eyebrow} from '../shared/Eyebrow';

export const Slide02TwoPaths: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const wrap = envelope(frame, durationInFrames);

  const cardBase: React.CSSProperties = {
    borderRadius: 28,
    padding: '64px 56px',
    display: 'flex',
    flexDirection: 'column',
    border: `3px solid ${COLORS.ink}`,
    boxShadow: `12px 12px 0 ${COLORS.ink}`,
    flex: 1,
  };

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
          label="SCENE 02 · HOW YOU SERVE"
          style={{...fadeUp(frame, 0, 22)}}
        />

        {/* Title */}
        <h2
          style={{
            ...fadeUp(frame, 8, 32),
            fontFamily: FONTS.display,
            fontSize: 76,
            fontWeight: 400,
            lineHeight: 1.05,
            color: COLORS.ink,
            marginTop: 24,
            letterSpacing: '-0.01em',
          }}
        >
          프로그램별{' '}
          <span style={{color: COLORS.yellowDeep}}>참여 방식</span>
        </h2>

        {/* Two path cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            marginTop: 44,
            flex: 1,
          }}
        >
          {/* Career Day */}
          <div style={{...fadeLeft(frame, 20, 52), ...cardBase, background: COLORS.yellow}}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: FONTS.mono,
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: COLORS.ink,
                padding: '12px 22px',
                border: `2px solid ${COLORS.ink}`,
                borderRadius: 999,
                alignSelf: 'flex-start',
                background: COLORS.cream,
                marginBottom: 32,
              }}
            >
              Career Day
            </span>
            <h3
              style={{
                fontFamily: FONTS.display,
                fontSize: 64,
                lineHeight: 1.05,
                margin: '0 0 28px',
                color: COLORS.ink,
              }}
            >
              직업 체험
              <br />
              로테이션
            </h3>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: 34,
                lineHeight: 1.5,
                color: COLORS.ink,
                margin: '0 0 36px',
              }}
            >
              40분 활동 × 3회 로테이션
              <br />
              다양한 직업을 아이들과 함께!
            </p>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 24,
                letterSpacing: '0.08em',
                color: COLORS.inkSoft,
                marginTop: 'auto',
                borderTop: `2px dashed ${COLORS.ink}`,
                paddingTop: 24,
              }}
            >
              SHORT BURSTS · 3 GROUPS
            </div>
          </div>

          {/* Eco Challenge */}
          <div
            style={{...fadeRight(frame, 35, 68), ...cardBase, background: COLORS.greenSoft}}
          >
            <span
              style={{
                display: 'inline-block',
                fontFamily: FONTS.mono,
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: COLORS.ink,
                padding: '12px 22px',
                border: `2px solid ${COLORS.ink}`,
                borderRadius: 999,
                alignSelf: 'flex-start',
                background: COLORS.cream,
                marginBottom: 32,
              }}
            >
              Eco Challenge
            </span>
            <h3
              style={{
                fontFamily: FONTS.display,
                fontSize: 64,
                lineHeight: 1.05,
                margin: '0 0 28px',
                color: COLORS.ink,
              }}
            >
              2시간
              <br />
              집중 프로젝트
            </h3>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: 34,
                lineHeight: 1.5,
                color: COLORS.ink,
                margin: '0 0 36px',
              }}
            >
              전담 학년과 함께 끝까지
              <br />
              하나의 작품을 완성합니다.
            </p>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 24,
                letterSpacing: '0.08em',
                color: COLORS.inkSoft,
                marginTop: 'auto',
                borderTop: `2px dashed ${COLORS.ink}`,
                paddingTop: 24,
              }}
            >
              DEEP DIVE · 1 GRADE
            </div>
          </div>
        </div>

        {/* Commons bar */}
        <div
          style={{
            ...fadeUp(frame, 60, 88),
            display: 'flex',
            gap: 32,
            alignItems: 'center',
            background: COLORS.ink,
            color: COLORS.cream,
            borderRadius: 28,
            padding: '24px 40px',
            marginTop: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 24,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: COLORS.yellow,
                marginBottom: 4,
              }}
            >
              공통 일정
            </div>
            <div
              style={{fontFamily: FONTS.display, fontSize: 34, color: 'white', whiteSpace: 'nowrap'}}
            >
              12:00 PM 도착
            </div>
          </div>
          <div style={{width: 2, height: 48, background: '#5a4f33'}} />
          <div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 24,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: COLORS.yellow,
                marginBottom: 4,
              }}
            >
              시작
            </div>
            <div
              style={{fontFamily: FONTS.display, fontSize: 34, color: 'white', whiteSpace: 'nowrap'}}
            >
              12:30 PM Start
            </div>
          </div>
        </div>
      </div>

      <Logo />
      <QRCorner />
    </AbsoluteFill>
  );
};
