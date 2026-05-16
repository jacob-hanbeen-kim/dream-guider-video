import React from 'react';
import {COLORS, FONTS} from '../constants';

export const SlideTag: React.FC<{n: number; light?: boolean}> = ({n, light}) => (
  <div
    style={{
      position: 'absolute',
      right: 110,
      bottom: 70,
      fontFamily: FONTS.mono,
      fontSize: 24,
      letterSpacing: '0.22em',
      color: light ? COLORS.ink : COLORS.inkSoft,
      textTransform: 'uppercase',
      zIndex: 5,
      whiteSpace: 'nowrap',
    }}
  >
    {String(n).padStart(2, '0')} / 11
  </div>
);
