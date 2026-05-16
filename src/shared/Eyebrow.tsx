import React from 'react';
import type {CSSProperties} from 'react';
import {COLORS, FONTS} from '../constants';

interface EyebrowProps {
  label: string;
  dotColor?: string;
  style?: CSSProperties;
}

export const Eyebrow: React.FC<EyebrowProps> = ({label, dotColor = COLORS.yellowDeep, style}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: FONTS.mono,
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.18em',
      color: COLORS.inkSoft,
      textTransform: 'uppercase',
      ...style,
    }}
  >
    <span
      style={{
        width: 14,
        height: 14,
        borderRadius: 999,
        background: dotColor,
        display: 'inline-block',
        flexShrink: 0,
      }}
    />
    {label}
  </div>
);
