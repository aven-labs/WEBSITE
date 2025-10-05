import MusicPlayer from "../components/landing/Intro/MusicPlayer";
import PhotoTransfer from "../components/landing/Intro/PhotoTransfer";
import MarketingCampaign from "../components/landing/Intro/MarketingCampaign";

export interface StoryStep {
  request: {
    text: string;
    position: {
      x: number;
      y: number;
    };
  };
  responses: {
    text: string;
    position: {
      x: number;
      y: number;
    };
    Component?: React.ComponentType<any>;
    curvature?: {
      cp1Offset: number; // Control point 1 offset multiplier (0.25 default)
      cp2Offset: number; // Control point 2 offset multiplier (0.75 default)
      curveAmount: number; // Base curve intensity (0.15 default, max 60px)
    };
  }[];
}

export const storySteps: StoryStep[] = [
  {
    request: {
      text: "Aven, Play the song I played last night",
      position: { x: 5, y: 20 },
    },
    responses: [
      {
        text: "Playing song",
        position: { x: 75, y: 5 },
        Component: MusicPlayer,
        curvature: {
          cp1Offset: 0.3,
          cp2Offset: 0.7,
          curveAmount: 0.12,
        },
      },
    ],
  },
  {
    request: {
      text: "Send me all the weekend photos from my phone to my laptop",
      position: { x: 5, y: 40 },
    },
    responses: [
      {
        text: "Sending Photos",
        position: { x: 80, y: 60 },
        Component: PhotoTransfer,
        curvature: {
          cp1Offset: 0.25,
          cp2Offset: 0.75,
          curveAmount: 0.18,
        },
      },
    ],
  },
  {
    request: {
      text: "I need to automate my marketing campaign, can do it?",
      position: { x: 5, y: 60 },
    },
    responses: [
      {
        text: "Automating Marketing Campaign",
        position: { x: 58.5, y: 75 },
        Component: MarketingCampaign,
        curvature: {
          cp1Offset: 0.25,
          cp2Offset: 0.75,
          curveAmount: 0.15,
        },
      },
    ],
  },
];
