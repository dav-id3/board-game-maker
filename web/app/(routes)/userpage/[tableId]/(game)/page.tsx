import React from "react";
import { GameTable } from "./GameTable";
import { getServerSession } from "next-auth/next";
import { isRenderableProps } from "../../../utils";
import { CardState } from "./type";
import prisma from "../../../../../lib/prismadb";

export default async function GamePage({
  params,
}: {
  params: { tableId: string };
}) {
  const session = await getServerSession();

  const getInitialState = async () => {
    const feed = await prisma.cardStates.findMany({
      where: {
        tableId: params.tableId,
      },
    });
    if (feed === null || feed.length === 0) {
      return [];
    } else {
      return feed.map((value, i) => ({
        topic: "cardState",
        data: {
          id: value.id,
          tableId: value.tableId,
          itemType: value.itemType,
          isFlipped: value.isFlipped,
          zIndex: value.zIndex,
          activeDrags: false,
          deltaPosition: {
            x: value.x,
            y: value.y,
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
