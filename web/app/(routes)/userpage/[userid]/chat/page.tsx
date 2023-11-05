import React from "react";
import { Chat } from "./Chat";
import { getServerSession } from "next-auth/next";
import { isRenderableProps } from "../../../utils";
import prisma from "../../../../../lib/prismadb";
import { Message } from "./type";
import { DefaultSession } from "next-auth";

const getInitialMessages = async (session: DefaultSession | null) => {
  const feed = await prisma.messages.findMany();
  if (feed === null) {
    return [
      {
        topic: "message",
        data: {
          name: "admin",
          text: `${session?.user?.name}さんが入室しました`,
        },
      },
    ];
  } else {
    return feed.map((value) => ({
      topic: "message",
      data: {
        name: value.name,
        text: value.text,
      },
    }));
  }
};

export default async function ChatPage() {
  const session: DefaultSession | null = await getServerSession();
  const initialMessages: Message[] = await getInitialMessages(session);

  return (
    <>
      {isRenderableProps(session?.user?.name) && (
        //@ts-ignore
        <Chat initialMessages={initialMessages} />
      )}
    </>
  );
}
