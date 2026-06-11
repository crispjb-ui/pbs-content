import React from "react";
import { Composition, Still } from "remotion";
import { Clip, clipDefaultProps } from "./Clip";
import { DesignedCover } from "./DesignedCover";

const FPS = 30;

const calc = ({ props }: { props: typeof clipDefaultProps }) => ({
  durationInFrames: Math.max(
    1,
    Math.round((props.clip.outSec - props.clip.inSec) * (props.fps || FPS))
  ),
});

const coverProps = { ...clipDefaultProps, coverMode: true };

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 9:16 — Shorts / Reels / TikTok */}
      <Composition id="Clip9x16" component={Clip} width={1080} height={1920} fps={FPS}
        durationInFrames={300} defaultProps={clipDefaultProps} calculateMetadata={calc} />
      {/* 4:5 — LinkedIn / X feed */}
      <Composition id="Clip4x5" component={Clip} width={1080} height={1350} fps={FPS}
        durationInFrames={300} defaultProps={clipDefaultProps} calculateMetadata={calc} />
      {/* Cover stills (feed thumbnails) */}
      <Still id="Cover4x5" component={Clip} width={1080} height={1350} defaultProps={coverProps} />
      <Still id="Cover9x16" component={Clip} width={1080} height={1920} defaultProps={coverProps} />
      {/* Designed cover (no video dependency) */}
      <Still id="DesignedCover4x5" component={DesignedCover} width={1080} height={1350} />
    </>
  );
};
