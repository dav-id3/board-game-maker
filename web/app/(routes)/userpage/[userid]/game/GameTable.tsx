"use client";

import Draggable from "react-draggable"; // The default
import { useState } from "react";
import React, { ReactNode, ReactElement } from "react";
import { useCardState } from "./useCardState";
import { CardState } from "./type";
import { FC } from "react";
import { GameCard } from "./GameCard";
import { GameDeck } from "./GameDeck";

type Props = {
  initialCardState: CardState[];
};

export const GameTable: FC<Props> = ({ initialCardState }) => {
  const [selectedId, setSelectedId] = useState<string | number>(0);
  const { cardState, sendCardState } = useCardState(initialCardState);

  const handleDrag = (e, ui) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
        itemType: targetCardState.data.itemType,
        activeDrags: targetCardState.data.activeDrags,
        defaultPosition: {
          x: targetCardState.data.defaultPosition.x,
          y: targetCardState.data.defaultPosition.y,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x + ui.deltaX,
          y: targetCardState.data.deltaPosition.y + ui.deltaY,
        },
        controlledPosition: {
          x: targetCardState.data.controlledPosition.x,
          y: targetCardState.data.controlledPosition.y,
        },
      },
    });
  };
  const onStop = (e, ui) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
        itemType: targetCardState.data.itemType,
        activeDrags: targetCardState.data.activeDrags,
        defaultPosition: {
          x: targetCardState.data.defaultPosition.x + ui.deltaX,
          y: targetCardState.data.defaultPosition.y + ui.deltaX,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x + ui.deltaX,
          y: targetCardState.data.deltaPosition.y + ui.deltaY,
        },
        controlledPosition: {
          x: targetCardState.data.controlledPosition.x,
          y: targetCardState.data.controlledPosition.y,
        },
      },
    });
  };

  const onDrop = (e, ui) => {
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };
  const onDropAreaMouseEnter = (e) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];

    if (targetCardState.data.activeDrags) {
      e.target.classList.add("hovered");
    }
  };
  const onDropAreaMouseLeave = (e) => {
    e.target.classList.remove("hovered");
  };

  // For controlled component
  const adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
        itemType: targetCardState.data.itemType,
        activeDrags: targetCardState.data.activeDrags,
        defaultPosition: {
          x: targetCardState.data.defaultPosition.x,
          y: targetCardState.data.defaultPosition.y,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x,
          y: targetCardState.data.deltaPosition.y,
        },
        controlledPosition: {
          x: targetCardState.data.controlledPosition.x - 10,
          y: targetCardState.data.controlledPosition.y,
        },
      },
    });
  };
  const adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
        itemType: targetCardState.data.itemType,
        activeDrags: targetCardState.data.activeDrags,
        defaultPosition: {
          x: targetCardState.data.defaultPosition.x,
          y: targetCardState.data.defaultPosition.y,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x,
          y: targetCardState.data.deltaPosition.y,
        },
        controlledPosition: {
          x: targetCardState.data.controlledPosition.x,
          y: targetCardState.data.controlledPosition.y - 10,
        },
      },
    });
  };

  const onControlledDrag = (e, position: { x: number; y: number }) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
        itemType: targetCardState.data.itemType,
        activeDrags: targetCardState.data.activeDrags,
        defaultPosition: {
          x: targetCardState.data.defaultPosition.x,
          y: targetCardState.data.defaultPosition.y,
        },
        deltaPosition: {
          x: targetCardState.data.deltaPosition.x,
          y: targetCardState.data.deltaPosition.y,
        },
        controlledPosition: {
          x: position.x,
          y: position.y,
        },
      },
    });
  };

  const onControlledDragStop = (e, ui, position: { x: number; y: number }) => {
    onControlledDrag(e, position);
    onStop(e, ui);
  };
  // const dragHandlers = { onStart: onStart, onStop: onStop };
  // const { deltaPosition, controlledPosition, defaultPosition } = pageState;

  return (
    <div>
      {cardState.map((value: CardState) =>
        value.data.itemType === "card" ? (
          <GameCard
            cardState={value}
            onDrag={handleDrag}
            onMouseDown={() => setSelectedId(value.data.id)}
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
    </div>
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
