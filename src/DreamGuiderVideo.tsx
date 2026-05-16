import React from 'react';
import {AbsoluteFill, Series} from 'remotion';
import {SLIDE_DURATIONS} from './constants';
import {Slide01Opening} from './slides/Slide01Opening';
import {Slide02TwoPaths} from './slides/Slide02TwoPaths';
import {Slide03CareerDay} from './slides/Slide03CareerDay';
import {Slide04Eco13} from './slides/Slide04Eco13';
import {Slide05Eco46} from './slides/Slide05Eco46';
import {Slide06Eco78} from './slides/Slide06Eco78';
import {Slide07DataProject} from './slides/Slide07DataProject';
import {Slide08SubstituteTeacher} from './slides/Slide08SubstituteTeacher';
import {Slide09EventHelper} from './slides/Slide09EventHelper';
import {Slide10Schedule} from './slides/Slide10Schedule';
import {Slide11Closing} from './slides/Slide11Closing';

const GOOGLE_FONTS = `
  @import url('https://fonts.googleapis.com/css2?family=Jua&family=Gowun+Dodum&family=Black+Han+Sans&family=Inter:wght@500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
`;

export const DreamGuiderVideo: React.FC = () => (
  <AbsoluteFill style={{background: '#0a0a0a'}}>
    <style>{GOOGLE_FONTS}</style>
    <Series>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[0]}>
        <Slide01Opening />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[1]}>
        <Slide02TwoPaths />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[2]}>
        <Slide03CareerDay />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[3]}>
        <Slide04Eco13 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[4]}>
        <Slide05Eco46 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[5]}>
        <Slide06Eco78 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[6]}>
        <Slide07DataProject />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[7]}>
        <Slide08SubstituteTeacher />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[8]}>
        <Slide09EventHelper />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[9]}>
        <Slide10Schedule />
      </Series.Sequence>
      <Series.Sequence durationInFrames={SLIDE_DURATIONS[10]}>
        <Slide11Closing />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);
