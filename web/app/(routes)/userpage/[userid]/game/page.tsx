"use client";

import Draggable, { DraggableEventHandler } from "react-draggable"; // The default
import { useState } from "react";
import React, { ReactNode, ReactElement } from "react";
import { useCardState } from "./useCardState";
import { CardState } from "./type";
import { send } from "process";

export default function Page({}: {}) {
  const [selectedId, setSelectedId] = useState<string | number>(0);
  const { cardState, sendCardState } = useCardState(
    Array.from(Array(5).keys()).map((value) => ({
      topic: "cardState",
      data: {
        id: value,
        activeDrags: false,
        defaultPosition: {
          x: 0 + Number(value) * 160,
          y: 0 + Number(value) * 160,
        },
        deltaPosition: {
          x: 0 + Number(value) * 160,
          y: 0 + Number(value) * 160,
        },
        controlledPosition: {
          x: 0,
          y: 0,
        },
      },
    }))
  );

  const handleDrag = (e, ui) => {
    const targetCardState = cardState.filter(
      (value: CardState) => value.data.id === selectedId
    )[0];
    sendCardState({
      topic: "cardState",
      data: {
        id: selectedId,
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
        id: id,
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
        id: id,
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
      {cardState.map((value: CardState) => (
        <Draggable
          onDrag={handleDrag}
          onMouseDown={() => setSelectedId(value.data.id)}
          position={{
            x: value.data.deltaPosition.x,
            y: value.data.deltaPosition.y,
          }}
        >
          <div className="absolute rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 ">
            <div className="rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5">
              <div className="text-white text-[14px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[100px] h-[30px] flex items-center justify-center">
                title
              </div>
              <div>content</div>
              <div>
                x: {value.data.deltaPosition.x.toFixed(0)}, y:{" "}
                {value.data.deltaPosition.y.toFixed(0)}
              </div>
              <div>
                def x: {value.data.defaultPosition.x.toFixed(0)}, y:{" "}
                {value.data.defaultPosition.y.toFixed(0)}
              </div>
            </div>
          </div>
        </Draggable>
      ))}

      {/* <Draggable handle="strong" defaultPosition={{ x: 0, y: 0 }}>
        <div className="relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 ">
          <div className="rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5">
            <strong className="text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[100px] h-10 flex items-center justify-center">
              <div>Drag here</div>
            </strong>
            <div>You must click my handle to drag me</div>
          </div>
        </div>
      </Draggable> */}
    </div>
  );
}

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
