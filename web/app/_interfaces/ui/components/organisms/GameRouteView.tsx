"use client";

import React, { use, useState } from 'react';
import GameTable from '../molecules/GameTable';
import GameChat from '../molecules/GameChat';
import { GameCard, Position } from '../molecules/GameCard';

const GameRouteView: React.FC = () => {
  const [cards, setCards] = useState<GameCard[]>([]);

  const handleCardMove = (cardId: number, newPosition: Position) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, position: newPosition } : card
      )
    );
  };

  return (
    <div>
      <GameTable cards={cards} onCardMove={handleCardMove} />
      <GameChat />
    </div>
  );
};

export default GameRouteView;