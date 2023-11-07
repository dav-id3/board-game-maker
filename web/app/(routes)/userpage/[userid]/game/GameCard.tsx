"use client";

import Draggable from "react-draggable"; // The default
import { useState } from "react";
import React, { ReactNode, ReactElement } from "react";
import { useCardState } from "./useCardState";
import { CardState } from "./type";
import { FC } from "react";
import { DraggableEventHandler } from "react-draggable";

type Props = {
  cardState: CardState;
  onDrag: DraggableEventHandler | undefined;
  onMouseDown: ((e: MouseEvent) => void) | undefined;
};

export const GameCard: FC<Props> = ({ cardState, onDrag, onMouseDown }) => {
  return (
    <>
      <Draggable
        onDrag={onDrag}
        onMouseDown={onMouseDown}
        position={{
          x: cardState.data.deltaPosition.x,
          y: cardState.data.deltaPosition.y,
        }}
      >
        <div className="absolute group rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 ">
          <div className="rounded-[14px] w-full h-full bg-white border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5 group-click:[transform:rotateY(180deg)]">
            <div className="text-white text-[14px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[100px] h-[30px] flex items-center justify-center">
              title
            </div>
            <div>content</div>
            <div>
              x: {cardState.data.deltaPosition.x.toFixed(0)}, y:{" "}
              {cardState.data.deltaPosition.y.toFixed(0)}
            </div>
            <div>
              def x: {cardState.data.defaultPosition.x.toFixed(0)}, y:{" "}
              {cardState.data.defaultPosition.y.toFixed(0)}
            </div>
          </div>
        </div>
      </Draggable>
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
