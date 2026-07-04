import React from "react";
import { Composition, Still } from "remotion";
import { Clip, clipDefaultProps } from "./Clip";
import { DesignedCover } from "./DesignedCover";
import { DesignedCoverClip7 } from "./DesignedCoverClip7";
import { DesignedCoverAny, coverAnyDefaultProps } from "./DesignedCoverAny";

const FPS = 30;

const calc = ({ props }: { props: typeof clipDefaultProps }) => {
  // A cold-open teaser prepends its beat to the clip, so the composition runs longer.
  const cold = props.clip.coldOpen
    ? Math.max(0, props.clip.coldOpen.endSec - props.clip.coldOpen.startSec)
    : 0;
  return {
    durationInFrames: Math.max(
      1,
      Math.round((props.clip.outSec - props.clip.inSec + cold) * (props.fps || FPS))
    ),
  };
};

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
      {/* clip7 designed cover — "Demand these 3 numbers" */}
      <Still id="Clip7Cover4x5" component={DesignedCoverClip7} width={1080} height={1350} />
      {/* Parameterized designed cover — clip7-quality thumbnail for ANY clip from manifest props
          (render-designed-covers.mjs builds the props per clip; no bespoke cover files needed). */}
      <Still id="DesignedCoverAny4x5" component={DesignedCoverAny} width={1080} height={1350} defaultProps={coverAnyDefaultProps} />
      <Still id="DesignedCoverAny9x16" component={DesignedCoverAny} width={1080} height={1920} defaultProps={coverAnyDefaultProps} />
    </>
  );
};
