// Card.ts

export interface GameCard {
  id: number;
  image: string;
  name: string;
  description: string;
  position: Position;
  isFaceUp: boolean;
}

export type Position = {
  x: number;
  y: number;
};

export const createCard = (id: number, image: string, name: string, description: string): GameCard => ({
  id,
  image,
  name,
  description,
  position: { x: 0, y: 0 },
  isFaceUp: true,
});
