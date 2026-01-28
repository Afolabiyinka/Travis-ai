import { create } from "zustand";
import type { ChatType } from "../types/chat";

interface ChatStore {
  prompt: string;
  message: string;
  chats: ChatType[];

  setPromt: (prompt: string) => void;
}
