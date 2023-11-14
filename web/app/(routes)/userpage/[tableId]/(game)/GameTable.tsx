"use client";

import { useState } from "react";
import React, { ReactNode, ReactElement } from "react";
import { useCardState } from "./useCardState";
import { CardState } from "./type";
import { FC } from "react";
import { GameCard } from "./GameCard";
import { GameDeck } from "./GameDeck";
import { DraggableEvent, DraggableData } from "react-draggable";

type Props = {
  initialCardState: CardState[];
};

export const GameTable: FC<Props> = ({ initialCardState }) => {
  const [selectedId, setSelectedId] = useState<string | number>(0);
  const { cardState, sendCardState } = useCardState(initialCardState);

  const handleDrag = (e: DraggableEvent, ui: DraggableData) => {
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
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x + ui.deltaX,
          y: targetCardState.data.deltaPosition.y + ui.deltaY,
        },
      },
    });
  };

  const handleFlip = () => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
        tableId: targetCardState.data.tableId,
        itemType: targetCardState.data.itemType,
        isFlipped: !targetCardState.data.isFlipped,
        zIndex: targetCardState.data.zIndex,
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x,
          y: targetCardState.data.deltaPosition.y,
        },
      },
    });
  };
  const handleMoveToFront = (selectedId: string | number) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];

    let maxZIndex = 0;
    cardState.forEach((value: CardState) => {
      if (value.data.zIndex > maxZIndex) {
        maxZIndex = value.data.zIndex;
      }
    });

    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
        tableId: targetCardState.data.tableId,
        itemType: targetCardState.data.itemType,
        isFlipped: targetCardState.data.isFlipped,
        zIndex: maxZIndex + 1,
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x,
          y: targetCardState.data.deltaPosition.y,
        },
      },
    });
  };
  const onStop = (e: DraggableEvent, ui: DraggableData) => {
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
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x + ui.deltaX,
          y: targetCardState.data.deltaPosition.y + ui.deltaY,
        },
      },
    });
  };

  return (
    <>
      {cardState.map((value: CardState) =>
        value.data.itemType === "card" ? (
          <GameCard
            cardState={value}
            onDrag={handleDrag}
            onMouseDown={() => {
              setSelectedId(value.data.id);
              handleMoveToFront(value.data.id);
            }}
            onDoubleClick={handleFlip}
          />
        ) : value.data.itemType === "deck" ? (
          <GameDeck
            cardState={value}
            onDrag={handleDrag}
            onMouseDown={() => setSelectedId(value.data.id)}
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
