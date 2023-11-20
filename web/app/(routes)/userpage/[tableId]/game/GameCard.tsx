"use client";

import Draggable from "react-draggable"; // The default
import { useState } from "react";
import React, { ReactNode, ReactElement } from "react";
import { useCardState } from "./useCardState";
import { CardState } from "./type";
import { FC } from "react";
import { DraggableEventHandler } from "react-draggable";
import { MouseEventHandler } from "react";
import { on } from "events";
import Image from "next/image";

type Props = {
  cardState: CardState;
  onDrag: DraggableEventHandler | undefined;
  onMouseDown: ((e: MouseEvent) => void) | undefined;
  onDoubleClick: MouseEventHandler<HTMLDivElement> | undefined;
  handleContentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const rotatingCard =
  "relative w-full h-full [transform-style:preserve-3d] [transform:rotateY(180deg)] duration-1000";
const notRotatingCard =
  "relative w-full h-full [transform-style:preserve-3d] duration-1000";

export const GameCard: FC<Props> = ({
  cardState,
  onDrag,
  onMouseDown,
  onDoubleClick,
  handleContentChange,
}) => {
  const nodeRef = React.useRef(null);
  const cardStyle = cardState.data.isFlipped ? rotatingCard : notRotatingCard;
  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        onDrag={onDrag}
        onMouseDown={onMouseDown}
        position={{
          x: cardState.data.deltaPosition.x,
          y: cardState.data.deltaPosition.y,
        }}
      >
        <div
          style={{
            zIndex: cardState.data.zIndex,
            width: cardState.data.dimension.width + "px",
            height: cardState.data.dimension.height + "px",
          }}
          ref={nodeRef}
          className={`absolute rounded-2xl bg-transparent left-0 right-0 [perspective:1000px] group`}
          onDoubleClick={onDoubleClick}
        >
          <div className={cardStyle}>
            <div className="absolute rounded-[11px] w-full h-full bg-white border border-gray-300 [backfaceVisibility:hidden]">
              <div className="flex flex-col items-center justify-center ">
                <div className="mt-0.5 text-white text-[9px] font-mono bg-black transition-all rounded-md w-[80px] h-[12px] flex items-center justify-center">
                  Card {cardState.data.id}
                </div>
                <div
                  className="rounded-[5px] mt-0.5 border border-gray-300"
                  style={{
                    height: cardState.data.dimension.height * 0.45 + "px",
                    width: cardState.data.dimension.width * 0.92 + "px",
                  }}
                />
                <textarea
                  className="rounded-[5px] mt-1 text-[9px] overflow-auto border border-gray-300"
                  rows={3}
                  value={cardState.data.content}
                  onChange={(e) => handleContentChange(e)}
                  style={{
                    width: cardState.data.dimension.width * 0.92 + "px",
                  }}
                />
                <div className="absolute text-[6.5px] bottom-0">
                  x: {cardState.data.deltaPosition.x.toFixed(0)}, y:{" "}
                  {cardState.data.deltaPosition.y.toFixed(0)}
                </div>
              </div>
            </div>
            <div className="absolute rounded-[8px] w-full h-full bg-white border border-gray-300 [transform:rotateY(180deg)] [backfaceVisibility:hidden]">
              <Image
                src="/card_back.png"
                alt="nextjs"
                className="select-none pointer-events-none absolute top-0 right-0 bottom-0 left-0"
                width={cardState.data.dimension.width}
                height={cardState.data.dimension.height}
                priority
              />
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
