import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {COLORS, FONTS} from '../constants';
import {fadeUp, fadeLeft, fadeRight, envelope} from '../animations';
import {Logo} from '../shared/Logo';
import {QRCorner} from '../shared/QRCorner';
import {Eyebrow} from '../shared/Eyebrow';

export const Slide09EventHelper: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const wrap = envelope(frame, durationInFrames);

  const cardBase: React.CSSProperties = {
    borderRadius: 28,
    padding: '56px 56px 48px',
    display: 'flex',
    flexDirection: 'column',
    border: `3px solid ${COLORS.ink}`,
    boxShadow: `12px 12px 0 ${COLORS.ink}`,
    position: 'relative',
    overflow: 'hidden',
  };

  const deco: React.CSSProperties = {
    position: 'absolute',
    right: -90,
    top: -90,
    width: 320,
    height: 320,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.18)',
  };

  const deco2: React.CSSProperties = {
    position: 'absolute',
    right: 80,
    top: 140,
    width: 140,
    height: 140,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.18)',
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
          label="SCENE 09 · EVENT HELPER"
          dotColor={COLORS.coral}
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
          여름의 <span style={{color: COLORS.coral}}>하이라이트</span>,
          <br />
          이벤트 헬퍼.
        </h2>

        {/* Event cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            flex: 1,
            marginTop: 44,
          }}
        >
          {/* Olympic Day */}
          <div
            style={{
              ...fadeLeft(frame, 22, 55),
              ...cardBase,
              background: COLORS.coral,
              color: 'white',
            }}
          >
            <div style={deco} />
            <div style={deco2} />
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 26,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                opacity: 0.95,
              }}
            >
              6 · 19 · 2026 · FRI
            </div>
            <div
              style={{
                fontFamily: FONTS.display,
                fontSize: 96,
                lineHeight: 0.95,
                margin: '16px 0 36px',
                letterSpacing: '-0.01em',
              }}
            >
              Olympic
              <br />
              Day
            </div>
            <div
              style={{
                background: 'rgba(0,0,0,0.18)',
                borderRadius: 18,
                padding: '28px 32px',
                fontFamily: FONTS.body,
                fontSize: 30,
                lineHeight: 1.5,
                marginTop: 'auto',
              }}
            >
              스테이션별 게임을 운영하고,
              <br />
              아이들의 경기 진행을 심판으로 도와주세요.
            </div>
          </div>

          {/* Water Day */}
          <div
            style={{
              ...fadeRight(frame, 38, 72),
              ...cardBase,
              background: COLORS.sky,
              color: 'white',
            }}
          >
            <div style={deco} />
            <div style={deco2} />
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 26,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                opacity: 0.95,
              }}
            >
              7 · 10 · 2026 · FRI
            </div>
            <div
              style={{
                fontFamily: FONTS.display,
                fontSize: 96,
                lineHeight: 0.95,
                margin: '16px 0 36px',
                letterSpacing: '-0.01em',
              }}
            >
              Water
              <br />
              Day
            </div>
            <div
              style={{
                background: 'rgba(0,0,0,0.18)',
                borderRadius: 18,
                padding: '28px 32px',
                fontFamily: FONTS.body,
                fontSize: 30,
                lineHeight: 1.5,
                marginTop: 'auto',
              }}
            >
              물놀이 세팅을 함께 하고,
              <br />
              안전 요원 역할을 서포트합니다.
            </div>
          </div>
        </div>
      </div>

      <Logo />
      <QRCorner />
    </AbsoluteFill>
  );
};
