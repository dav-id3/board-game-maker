export type CardState = {
  topic: string;
  data: {
    id: string | number;
    tableId: string;
    itemType: "card" | "deck" | "handsArea";
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
};
