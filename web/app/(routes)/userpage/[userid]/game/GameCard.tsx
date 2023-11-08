"use client";

import Draggable from "react-draggable"; // The default
import { useState } from "react";
import React, { ReactNode, ReactElement } from "react";
import { useCardState } from "./useCardState";
import { CardState } from "./type";
import { FC } from "react";
import { DraggableEventHandler } from "react-draggable";
import { MouseEventHandler } from "react";

type Props = {
  cardState: CardState;
  onDrag: DraggableEventHandler | undefined;
  onMouseDown: ((e: MouseEvent) => void) | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

const rotatingCard =
  "relative w-full h-full [transform-style:preserve-3d] [transform:rotateY(180deg)] duration-1000";
const notRotatingCard =
  "relative w-full h-full [transform-style:preserve-3d] duration-1000";

export const GameCard: FC<Props> = ({
  cardState,
  onDrag,
  onMouseDown,
  onClick,
}) => {
  const cardStyle = cardState.data.isFlipped ? rotatingCard : notRotatingCard;
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
        <div className="absolute rounded-2xl w-[160px] h-[160px] bg-transparent p-0.5 z-10 left-0 right-0 [perspective:1000px] group">
          <div className={cardStyle}>
            <div className="absolute rounded-[14px] w-full h-full bg-white border border-gray-300 [backfaceVisibility:hidden]">
              <div className="flex flex-col items-center justify-center">
                <div className="text-white text-[14px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[100px] h-[30px] flex items-center justify-center">
                  title
                </div>
                <div>content</div>
                <div>
                  x: {cardState.data.deltaPosition.x.toFixed(0)}, y:{" "}
                  {cardState.data.deltaPosition.y.toFixed(0)}
                </div>
                <button onClick={onClick}>flip to back</button>
              </div>
            </div>
            <div className="absolute rounded-[14px] w-full h-full bg-white border border-gray-300 [transform:rotateY(180deg)] [backfaceVisibility:hidden]">
              <div className="flex flex-col items-center justify-center">
                <div className="text-white text-[14px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[100px] h-[30px] flex items-center justify-center">
                  title
                </div>
                <div>this is back</div>
                <div>
                  x: {cardState.data.deltaPosition.x.toFixed(0)}, y:{" "}
                  {cardState.data.deltaPosition.y.toFixed(0)}
                </div>
                <button onClick={onClick}>flip to front</button>
              </div>
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
