import MusicPlayer from "../MusicPlayer";
import PhotoTransfer from "../PhotoTransfer";
import MarketingCampaign from "../MarketingCampaign";
import type { StoryStep } from "@/components/landing/Intro/model/intro";

export const storySteps: StoryStep[] = [
  {
    request: {
      text: "Uplift, Play the song I played last night",
      position: {
        default: { x: 5, y: 50 },
        md: { x: 5, y: 20 },
        lg: { x: 5, y: 20 },
      },
    },
    responses: [
      {
        text: "Playing song",
        position: {
          default: { x: 5, y: 70 },
          md: { x: 70, y: 5 },
          lg: { x: 75, y: 5 },
        },
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
      position: {
        default: { x: 5, y: 20 },
        md: { x: 5, y: 40 },
        lg: { x: 5, y: 40 },
      },
    },
    responses: [
      {
        text: "Sending Photos",
        position: {
          default: { x: 10, y: 30 },
          md: { x: 75, y: 60 },
          lg: { x: 80, y: 60 },
        },
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
      text: "Automate my marketing campaign on X",
      position: {
        default: { x: 5, y: 60 },
        md: { x: 5, y: 60 },
        lg: { x: 5, y: 60 },
      },
    },
    responses: [
      {
        text: "Automating Marketing Campaign",
        position: {
          default: { x: 50, y: 72 },
          md: { x: 55, y: 75 },
          lg: { x: 58.5, y: 75 },
        },
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
