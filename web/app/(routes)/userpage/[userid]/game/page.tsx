import React from "react";
import { GameTable } from "./GameTable";
import { getServerSession } from "next-auth/next";
import { isRenderableProps } from "../../../utils";
import { CardState } from "./type";
import prisma from "../../../../../lib/prismadb";

export default async function GamePage() {
  const session = await getServerSession();

  const getInitialState = async () => {
    const feed = await prisma.cardStates.findMany();
    if (feed === null) {
      return [];
    } else {
      console.log(feed);
      return feed.map((value, i) => ({
        topic: "cardState",
        data: {
          id: value.id,
          itemType: value.itemType,
          isFlipped: value.isFlipped,
          zIndex: value.zIndex,
          activeDrags: false,
          defaultPosition: {
            x: 0, //+ Number(value.id) * 160,
            y: 0, //+ Number(value.id) * 160,
          },
          deltaPosition: {
            x: value.x,
            y: value.y,
          },
          controlledPosition: {
            x: 0,
            y: 0,
          },
        },
      }));
    }
  };
  const initialState: CardState[] = await getInitialState();

  return (
    <>
      {isRenderableProps(initialState) && (
        //@ts-ignore
        <GameTable initialCardState={initialState} />
      )}
    </>
  );
}
