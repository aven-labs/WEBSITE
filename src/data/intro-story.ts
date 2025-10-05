import MusicPlayer from "../components/landing/Intro/MusicPlayer";

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
      position: { x: 15, y: 20 },
    },
    responses: [
      {
        text: "Playing song",
        position: { x: 75, y: 25 },
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
      position: { x: 20, y: 40 },
    },
    responses: [
      {
        text: "Sending Photos",
        position: { x: 80, y: 45 },
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
        text: "Connected with Marketing MCP Server",
        position: { x: 70, y: 55 },
        curvature: {
          cp1Offset: 0.2,
          cp2Offset: 0.8,
          curveAmount: 0.1,
        },
      },
      {
        text: "Connected with Marketing Agent",
        position: { x: 70, y: 65 },
        curvature: {
          cp1Offset: 0.3,
          cp2Offset: 0.7,
          curveAmount: 0.15,
        },
      },
      {
        text: "Connected with Marketing Agent from @buildinpublic",
        position: { x: 70, y: 75 },
        curvature: {
          cp1Offset: 0.25,
          cp2Offset: 0.75,
          curveAmount: 0.2,
        },
      },
    ],
  },
];
