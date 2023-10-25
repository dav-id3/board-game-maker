export interface Message {
  topic: string; // = "message"
  data: {
    name: string;
    text: string;
  };
}
