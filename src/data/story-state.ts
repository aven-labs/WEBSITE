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
    componentName?: 'MusicPlayer' | 'PhotoCollage';
  }[];
}

export const storySteps: StoryStep[] = [
  {
    request: {
      text: "Aven, Play the song I played last night",
      position: { x: 15, y: 20 }
    },
    responses: [
      {
        text: "Playing song",
        position: { x: 75, y: 25 },
        componentName: 'MusicPlayer'
      }
    ]
  },
  {
    request: {
      text: "Send me all the weekend photos from my phone to my laptop",
      position: { x: 20, y: 40 }
    },
    responses: [
      {
        text: "Sending Photos",
        position: { x: 80, y: 45 },
        componentName: 'PhotoCollage'
      }
    ]
  },
  {
    request: {
      text: "I need to automate my marketing campaign, can do it?",
      position: { x: 15, y: 60 }
    },
    responses: [
      {
        text: "Connected with Marketing MCP Server",
        position: { x: 75, y: 55 }
      },
      {
        text: "Connected with Marketing Agent",
        position: { x: 75, y: 62.5 }
      },
      {
        text: "Connected with Marketing Agent from @buildinpublic",
        position: { x: 75, y: 70 }
      }
    ]
  }
];