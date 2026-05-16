import React from 'react';
import {Composition} from 'remotion';
import {DreamGuiderVideo} from './DreamGuiderVideo';
import {TOTAL_FRAMES} from './constants';

export const Root: React.FC = () => (
  <Composition
    id="DreamGuider"
    component={DreamGuiderVideo}
    durationInFrames={TOTAL_FRAMES}
    fps={30}
    width={1920}
    height={1080}
  />
);
