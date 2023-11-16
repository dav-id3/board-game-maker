"use client";

import Draggable from "react-draggable"; // The default
import React, { ReactNode, ReactElement } from "react";
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

export const GameDeck: FC<Props> = ({
  cardState,
  onDrag,
  onMouseDown,
  onClick,
}) => {
  const nodeRef = React.useRef(null);
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
          ref={nodeRef}
          style={{
            width: cardState.data.dimension.width + "px",
            height: cardState.data.dimension.height + "px",
          }}
          className="absolute rounded-2xl p-0.5 z-0 left-0 right-0 "
        >
          <div className="rounded-[14px] w-full h-full bg-white border border-dashed border-gray-400">
            <div className="flex flex-col items-center justify-center mt-1">
              <button
                onClick={onClick}
                className="text-white text-[11px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[80px] h-[20px] flex items-center justify-center"
              >
                Shuffle deck
              </button>
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
