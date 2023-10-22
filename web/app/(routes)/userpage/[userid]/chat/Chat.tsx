"use client";

import { useChatService } from "./useChatService";
import { useState } from "react";
import { Message } from "./type";
import React from "react";
import { FC } from "react";
import { useSession } from "next-auth/react";

type Props = {
  userid: string;
};

export const Chat: FC<Props> = ({ userid }) => {
  const { messages, sendMessage } = useChatService({
    name: "",
    text: `ようこそ、${userid}さん`,
  });

  const { data: session, status } = useSession();
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (session?.user?.name !== undefined && session?.user?.name!) {
      const newMessage: Message = { name: session?.user?.name, text: text };
      sendMessage(newMessage);
      setText("");
    }
  };
  return (
    <div>
      <div className="input">
        <input
          type="text"
          placeholder="メッセージ"
          value={text}
          onChange={handleInputChange}
        />
        <button disabled={!text} onClick={handleButtonClick}>
          送信
        </button>
      </div>
      <ul>
        {messages.map((msg, idx) => {
          return (
            <div>
              <li key={idx}>
                <span>{msg.name}</span>
                <span>{msg.text}</span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
