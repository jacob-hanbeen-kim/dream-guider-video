import React from 'react';
import { Img, staticFile } from 'remotion';

export const Logo: React.FC<{ light?: boolean }> = () => (
  <div
    style={{
      position: 'absolute',
      right: 100,
      top: 20,
      zIndex: 10,
    }}
  >
    <Img src={staticFile('saehan-logo.png')} style={{ height: 100, width: 'auto' }} />
  </div>
);
