import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Message } from "./type";

const API_ENDPOINT =
  process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export const useChatService = (initialMessages: Message[]) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const socketRef = useRef();

  useEffect(() => {
    console.log("Connectinng..");
    console.log(API_ENDPOINT);
    // @ts-ignore
    socketRef.current = io(API_ENDPOINT, {
      withCredentials: true,
    });
    // @ts-ignore
    socketRef.current.on("broadcast", (payload: Message) => {
      console.log("Recieved: " + payload);
      if (payload.topic === "message") {
        setMessages((prevMessages) => [...prevMessages, payload]);
      }
    });
    return () => {
      console.log("Disconnecting..");
      // @ts-ignore
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (newMessage: Message) => {
    // @ts-ignore
    socketRef.current.emit("send", newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return { messages, sendMessage };
};
