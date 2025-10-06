export interface Position {
  x: number;
  y: number;
}

export interface ResponsivePosition {
  default: Position;
  md?: Position;
  lg?: Position;
}

export interface StoryStep {
  request: {
    text: string;
    position: ResponsivePosition;
  };
  responses: {
    text: string;
    position: ResponsivePosition;
    Component?: React.ComponentType<any>;
    curvature?: {
      cp1Offset: number; // Control point 1 offset multiplier (0.25 default)
      cp2Offset: number; // Control point 2 offset multiplier (0.75 default)
      curveAmount: number; // Base curve intensity (0.15 default, max 60px)
    };
  }[];
}
