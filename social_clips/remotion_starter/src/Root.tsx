import React from "react";
import { Composition } from "remotion";
import { Clip, clipDefaultProps } from "./Clip";

const FPS = 30;

// Duration is derived from the clip's in/out seconds (passed via --props at render time).
const calc = ({ props }: { props: typeof clipDefaultProps }) => ({
  durationInFrames: Math.max(
    1,
    Math.round((props.clip.outSec - props.clip.inSec) * (props.fps || FPS))
  ),
});

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 9:16 — Shorts / Reels / TikTok */}
      <Composition
        id="Clip9x16"
        component={Clip}
        width={1080}
        height={1920}
        fps={FPS}
        durationInFrames={300}
        defaultProps={clipDefaultProps}
        calculateMetadata={calc}
      />
      {/* 4:5 — LinkedIn / X feed */}
      <Composition
        id="Clip4x5"
        component={Clip}
        width={1080}
        height={1350}
        fps={FPS}
        durationInFrames={300}
        defaultProps={clipDefaultProps}
        calculateMetadata={calc}
      />
    </>
  );
};
