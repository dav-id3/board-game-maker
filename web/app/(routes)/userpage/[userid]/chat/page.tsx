import React from "react";
import { Chat } from "./Chat";
import { getServerSession } from "next-auth/next";
import { isRenderableProps } from "../../../utils";

export default async function ChatPage() {
  const session = await getServerSession();

  return (
    <div>
      {isRenderableProps(session?.user?.name) && (
        //@ts-ignore
        <Chat userid={session?.user?.name} />
      )}
    </div>
  );
}
