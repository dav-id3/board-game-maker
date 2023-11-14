export interface CardState {
  topic: string; // = "cardState"
  // componentType: string;
  // componentTyoe=Deckの時はDeckならDraggable部分をコンポーネントで別ファイルで分けてシャッフル関数を作る？
  data: {
    id: string | number;
    tableId: string;
    itemType: string; // = "card" or "deck"
    isFlipped: boolean;
    zIndex: number;
    deltaPosition: {
      x: number;
      y: number;
    };
  };
}
