export interface CardState {
  topic: string; // = "cardState"
  // componentType: string;
  // componentTyoe=Deckの時はDeckならDraggable部分をコンポーネントで別ファイルで分けてシャッフル関数を作る？
  data: {
    id: string | number;
    itemType: string; // = "card" or "deck"
    isFlipped: boolean;
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
