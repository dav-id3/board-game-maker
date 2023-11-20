export interface CardState {
  topic: string;
  data: {
    id: string | number;
    tableId: string;
    itemType: string; // = "card" or "deck"
    isFlipped: boolean;
    zIndex: number;
    content: string;
    dimension: {
      width: number;
      height: number;
    };
    deltaPosition: {
      x: number;
      y: number;
    };
  };
}
