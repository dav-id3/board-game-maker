export interface CardState {
  topic: string; // = "cardState"
  data: {
    id: string | number;
    activeDrags: boolean;
    defaultPosition: {
      x: number;
      y: number;
    };
    deltaPosition: {
      x: number;
      y: number;
    };
    controlledPosition: {
      x: number;
      y: number;
    };
  };
}
