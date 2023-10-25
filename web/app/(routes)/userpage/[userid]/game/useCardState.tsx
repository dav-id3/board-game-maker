import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { CardState } from "./type";

const API_ENDPOINT =
  process.env.NEXT_PUBLIC_API_HOST + ":" + process.env.NEXT_PUBLIC_API_PORT;

export const useCardState = (initialCardState: CardState[]) => {
  const [cardState, setCardState] = useState<CardState[]>(initialCardState);

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
      if (payload.topic === "cardState") {
        setCardState((prevCardState) =>
          prevCardState.map((value) =>
            value.data.id === payload.data.id ? payload : value
          )
        );
      }
    });
    return () => {
      console.log("Disconnecting..");
      // @ts-ignore
      socketRef.current.disconnect();
    };
  }, []);

  const sendCardState = (newCardState: CardState) => {
    // @ts-ignore
    socketRef.current.emit("send", newCardState);
    setCardState((prevCardState) =>
      prevCardState.map((value) =>
        value.data.id === newCardState.data.id ? newCardState : value
      )
    );
  };

  return { cardState, sendCardState };
};
