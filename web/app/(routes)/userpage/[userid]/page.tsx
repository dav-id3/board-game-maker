"use client";

import Draggable, { DraggableEventHandler } from "react-draggable"; // The default
import { useState } from "react";
import React, { ReactNode, ReactElement } from "react";

export default function IndexPage({}: {}) {
  const [pageState, setPageState] = useState<{
    activeDrags: number;
    deltaPosition: {
      x: number;
      y: number;
    };
    controlledPosition: {
      x: number;
      y: number;
    };
    defaultPosition: {
      x: number;
      y: number;
    };
  }>({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: 0,
      y: 0,
    },
    defaultPosition: {
      x: 0,
      y: 0,
    },
  });

  const handleDrag = (e, ui) => {
    const { x, y } = pageState.deltaPosition;
    setPageState((prevPageState) => ({
      ...prevPageState,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    }));
  };
  const onStart = () => {
    setPageState((prevPageState) => ({
      ...prevPageState,
      activeDrags: ++prevPageState.activeDrags,
    }));
  };

  const onStop = (e, ui) => {
    setPageState((prevPageState) => ({
      ...prevPageState,
      activeDrags: --prevPageState.activeDrags,
    }));
    updateDefaultPosition(e, ui);
  };
  const onDrop = (e, ui) => {
    setPageState((prevPageState) => ({
      ...prevPageState,
      activeDrags: --prevPageState.activeDrags,
    }));
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };
  const onDropAreaMouseEnter = (e) => {
    if (pageState.activeDrags) {
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
    const { x, y } = pageState.controlledPosition;
    setPageState((prevPageState) => ({
      ...prevPageState,
      controlledPosition: { x: x - 10, y },
    }));
  };

  const adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = pageState;
    const { x, y } = controlledPosition;
    setPageState((prevPageState) => ({
      ...prevPageState,
      controlledPosition: { x, y: y - 10 },
    }));
  };

  const onControlledDrag = (e, position) => {
    const { x, y } = position;
    setPageState((prevPageState) => ({
      ...prevPageState,
      controlledPosition: { x, y },
    }));
  };

  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };
  const dragHandlers = { onStart: onStart, onStop: onStop };
  const { deltaPosition, controlledPosition, defaultPosition } = pageState;

  const updateDefaultPosition = (e, ui) => {
    setPageState((prevPageState) => ({
      ...prevPageState,
      defaultPosition: {
        x: ui.x,
        y: ui.y,
      },
    }));
  };

  return (
    <div>
      <Draggable defaultPosition={{ x: 0, y: 0 }}>
        <div className="relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 ">
          <div className="rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5">
            I can be dragged anywhere
          </div>
        </div>
      </Draggable>
      <Draggable axis="x" defaultPosition={{ x: 0, y: 0 }}>
        <div className="relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 ">
          <div className="rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5">
            I can only be dragged horizonally (x axis)
          </div>
        </div>
      </Draggable>
      <Draggable axis="y" defaultPosition={{ x: 0, y: 0 }}>
        <div className="relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 ">
          <div className="rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5">
            I can only be dragged vertically (y axis)
          </div>
        </div>
      </Draggable>
      <Draggable
        onDrag={handleDrag}
        defaultPosition={{
          x: pageState.defaultPosition.x,
          y: pageState.defaultPosition.y,
        }}
        {...dragHandlers}
      >
        <div className="relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 ">
          <div className="rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5">
            <div>I track my deltas</div>
            <div>
              x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}
            </div>
            <div>
              default x: {defaultPosition.x.toFixed(0)}, default y:{" "}
              {defaultPosition.y.toFixed(0)}
            </div>
          </div>
        </div>
      </Draggable>
      <Draggable handle="strong" defaultPosition={{ x: 0, y: 0 }}>
        <div className="relative rounded-2xl w-[160px] h-[160px] p-0.5 z-10 left-0 right-0 ">
          <div className="rounded-[14px] w-full h-full bg-gray-50 border border-gray-300 flex flex-col items-center justify-center space-y-3 px-5">
            <strong className="text-white text-[13px] font-mono bg-black hover:bg-gray-700 transition-all rounded-md w-[100px] h-10 flex items-center justify-center">
              <div>Drag here</div>
            </strong>
            <div>You must click my handle to drag me</div>
          </div>
        </div>
      </Draggable>
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
