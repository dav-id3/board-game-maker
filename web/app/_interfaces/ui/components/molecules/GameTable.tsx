import React from 'react';
import { GameCard, Position } from './GameCard';

interface TableProps {
  cards: GameCard[];
  onCardMove: (cardId: number, newPosition: Position) => void;
}

const Table: React.FC<TableProps> = ({ cards, onCardMove }) => {
  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            position: 'absolute',
            top: `${card.position.y}px`,
            left: `${card.position.x}px`,
            transform: card.isFaceUp ? '' : 'rotate(180deg)',
          }}
          draggable
          onDragEnd={(e) => {
            const newPosition = {
              x: e.clientX,
              y: e.clientY,
            };
            onCardMove(card.id, newPosition);
          }}
        >
          {/* カードの表示 */}
          <img src={card.image} alt={card.name} />
        </div>
      ))}
    </div>
  );
};

export default Table;