"use client";

import { useState } from "react";
import React, { ReactNode, ReactElement } from "react";
import { useCardState } from "./useCardState";
import { CardState } from "./type";
import { FC } from "react";
import { GameCard } from "./GameCard";
import { GameDeck } from "./GameDeck";
import { DraggableEvent, DraggableData } from "react-draggable";
import { GameHandsArea } from "./GameHandsArea";

type Props = {
  initialCardState: CardState[];
};
export const isCardInHandsArea = (card: CardState, allItems: CardState[]) => {
  const handsArea = allItems.filter(
    (value: CardState) => value.data.itemType === "handsArea"
  );
  let isInHandsArea = false;
  handsArea.map((handsAreaState: CardState) => {
    if (
      !(
        card.data.deltaPosition.x >= handsAreaState.data.deltaPosition.x &&
        card.data.deltaPosition.y >= handsAreaState.data.deltaPosition.y &&
        card.data.deltaPosition.y + card.data.dimension.height <=
          handsAreaState.data.deltaPosition.y +
            handsAreaState.data.dimension.height &&
        card.data.deltaPosition.x + card.data.dimension.width <=
          handsAreaState.data.deltaPosition.x +
            handsAreaState.data.dimension.width &&
        card.data.itemType === "card"
      )
    ) {
      isInHandsArea = true;
    }
  });
  return isInHandsArea;
};

export const GameTable: FC<Props> = ({ initialCardState }) => {
  const [selectedId, setSelectedId] = useState<string | number>(0);
  const { cardState, sendCardState } = useCardState(initialCardState);

  const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];

    let sentCardState: CardState = {
      topic: "cardState",
      data: {
        id: selectedId,
        tableId: targetCardState.data.tableId,
        itemType: targetCardState.data.itemType,
        isFlipped: targetCardState.data.isFlipped,
        zIndex: targetCardState.data.zIndex,
        content: targetCardState.data.content,
        dimension: {
          width: targetCardState.data.dimension.width,
          height: targetCardState.data.dimension.height,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x + ui.deltaX,
          y: targetCardState.data.deltaPosition.y + ui.deltaY,
        },
      },
    };
    sendCardState(sentCardState);
  };

  const handleFlip = () => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    const sentCardState: CardState = {
      topic: "cardState",
      data: {
        id: selectedId,
        tableId: targetCardState.data.tableId,
        itemType: targetCardState.data.itemType,
        isFlipped: !targetCardState.data.isFlipped,
        zIndex: targetCardState.data.zIndex,
        content: targetCardState.data.content,
        dimension: {
          width: targetCardState.data.dimension.width,
          height: targetCardState.data.dimension.height,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x,
          y: targetCardState.data.deltaPosition.y,
        },
      },
    };
    sendCardState(sentCardState, isCardInHandsArea(sentCardState, cardState));
  };
  const handleMoveToFront = (selectedId: string | number) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];

    let maxZIndex = 0;
    cardState.forEach((value: CardState) => {
      if (value.data.zIndex > maxZIndex && value.data.itemType === "card") {
        maxZIndex = value.data.zIndex;
      }
    });

    const sentCardState: CardState = {
      topic: "cardState",
      data: {
        id: selectedId,
        tableId: targetCardState.data.tableId,
        itemType: targetCardState.data.itemType,
        isFlipped: targetCardState.data.isFlipped,
        zIndex: maxZIndex + 1,
        content: targetCardState.data.content,
        dimension: {
          width: targetCardState.data.dimension.width,
          height: targetCardState.data.dimension.height,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x,
          y: targetCardState.data.deltaPosition.y,
        },
      },
    };

    sendCardState(sentCardState);
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
        tableId: targetCardState.data.tableId,
        itemType: targetCardState.data.itemType,
        isFlipped: targetCardState.data.isFlipped,
        zIndex: targetCardState.data.zIndex,
        content: e.target.value,
        dimension: {
          width: targetCardState.data.dimension.width,
          height: targetCardState.data.dimension.height,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x,
          y: targetCardState.data.deltaPosition.y,
        },
      },
    });
  };

  const handleShuffle = (deckState: CardState) => {
    const targetCardState = cardState.filter(
      (value: CardState) =>
        value.data.deltaPosition.x >= deckState.data.deltaPosition.x &&
        value.data.deltaPosition.y >= deckState.data.deltaPosition.y &&
        value.data.dimension.height <= deckState.data.dimension.height &&
        value.data.dimension.width <= deckState.data.dimension.width &&
        value.data.itemType === "card"
    );

    const zIndexes = targetCardState.map(
      (value: CardState) => value.data.zIndex
    );
    const shuffledZIndexes = zIndexes.sort((a, b) => 0.5 - Math.random());

    targetCardState.forEach((value: CardState, index: number) => {
      sendCardState({
        topic: "cardState",
        data: {
          id: value.data.id,
          tableId: value.data.tableId,
          itemType: value.data.itemType,
          isFlipped: value.data.isFlipped,
          zIndex: shuffledZIndexes[index],
          content: value.data.content,
          dimension: {
            width: value.data.dimension.width,
            height: value.data.dimension.height,
          },
          deltaPosition: {
            x: value.data.deltaPosition.x,
            y: value.data.deltaPosition.y,
          },
        },
      });
    });
  };

  return (
    <>
      {cardState.map((value: CardState) =>
        value.data.itemType === "card" ? (
          <GameCard
            key={value.data.id}
            cardState={value}
            onDrag={handleDrag}
            onMouseDown={() => {
              setSelectedId(value.data.id);
              handleMoveToFront(value.data.id);
            }}
            onDoubleClick={handleFlip}
            handleContentChange={handleContentChange}
          />
        ) : value.data.itemType === "deck" ? (
          <GameDeck
            key={value.data.id}
            cardState={value}
            onDrag={handleDrag}
            onMouseDown={() => {
              setSelectedId(value.data.id);
            }}
            onClick={() => handleShuffle(value)}
          />
        ) : value.data.itemType === "handsArea" ? (
          <GameHandsArea
            key={value.data.id}
            cardState={value}
            onDrag={handleDrag}
            onMouseDown={() => {
              setSelectedId(value.data.id);
            }}
            onClick={() => handleShuffle(value)}
          />
        ) : (
          <>{value.data.itemType}</>
        )
      )}
    </>
  );
};

interface RemWrapperProps {
  style: {
    transform: string;
  };
  children: ReactNode;
  remBaseline?: number;
}

const RemWrapper: React.FC<RemWrapperProps> = ({
  children,
  remBaseline = 16,
  style,
}: RemWrapperProps) => {
  const child = React.Children.only(children) as ReactElement;
  const translateTransformToRem = (
    transform: string,
    remBaseline: number = 16
  ): string => {
    const convertedValues = transform
      .replace("translate(", "")
      .replace(")", "")
      .split(",")
      .map((px) => px.replace("px", ""))
      .map((px) => parseInt(px, 10) / remBaseline)
      .map((x) => `${x}rem`);
    const [x, y] = convertedValues;

    return `translate(${x}, ${y})`;
  };

  const editedStyle = {
    ...child.props.style,
    ...style,
    transform: translateTransformToRem(style.transform, remBaseline),
  };

  return React.cloneElement(child, {
    ...child.props,
    style: editedStyle,
  });
};
