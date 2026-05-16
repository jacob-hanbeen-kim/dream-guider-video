import React from 'react';
import { Img, staticFile } from 'remotion';

/** Real QR code watermark pinned below the logo at top-right of every slide */
export const QRCorner: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      right: 90,
      top: 100,
      width: 170,
      height: 170,
      background: 'white',
      borderRadius: 10,
      padding: 6,
      zIndex: 10,
    }}
  >
    <Img
      src={staticFile('qr-code.png')}
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
    />
  </div>
);
