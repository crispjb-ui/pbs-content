import { Composition } from "remotion";
import { MyComposition, TOTAL_FRAMES } from "./Composition";
import { Post45Composition, POST45_TOTAL_FRAMES } from "./Post45";
import { BreakingNewsComposition, BREAKING_NEWS_TOTAL_FRAMES } from "./BreakingNews";
import { Post51Composition, POST51_TOTAL_FRAMES } from "./Post51";
import { PBSAdComposition, PBS_AD_TOTAL_FRAMES } from "./PBSAd";
import { MotoRaceComposition, MOTO_RACE_TOTAL_FRAMES } from "./MotoRace";
import { PBSWorkPlatformComposition, PBS_WORK_PLATFORM_TOTAL } from "./PBSWorkPlatform";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="StopLossCarousel"
        component={MyComposition}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="ContractDecoder"
        component={Post45Composition}
        durationInFrames={POST45_TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="BreakingNews"
        component={BreakingNewsComposition}
        durationInFrames={BREAKING_NEWS_TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="340BExplainer"
        component={Post51Composition}
        durationInFrames={POST51_TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="MotoRace"
        component={MotoRaceComposition}
        durationInFrames={MOTO_RACE_TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="PBSWorkPlatform"
        component={PBSWorkPlatformComposition}
        durationInFrames={PBS_WORK_PLATFORM_TOTAL}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="PBSAdvertisement"
        component={PBSAdComposition}
        durationInFrames={PBS_AD_TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
