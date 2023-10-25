import React from "react";
import { getServerSession } from "next-auth/next";
import { isRenderableProps } from "../../utils";
import ChatPage from "./chat/page";
import GamePage from "./game/page";

export default async function UserPage() {
  const session = await getServerSession();

  return (
    <>
      {isRenderableProps(session?.user?.name) && (
        <div className="h-5/6 grid grid-cols-5 gap-4">
          <div className="col-span-4 h-full">
            <GamePage />
          </div>
          <div className="col-span-1  h-full pt-5 pr-5">
            <div className="rounded-[14px] w-full h-full bg-white border border-gray-200 sm:space-y-0 px-3">
              <ChatPage />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
