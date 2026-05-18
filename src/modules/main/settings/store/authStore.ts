import { create } from "zustand";
import type { User } from "@/modules/main/settings/types/types";

interface UserStore {
  user: User | null;
  isAuthResolved: boolean;

  setUser: (user: User | null) => void;
  setAuthResolved: (value: boolean) => void;

  logout: () => void;
}

export const useUser = create<UserStore>((set) => ({
  user: null,
  isAuthResolved: false,
  setUser: (u) => set({ user: u }),
  setAuthResolved: (value) => {
    set({ isAuthResolved: value });
  },
  logout: () => {
    set({ user: null });
    set({ isAuthResolved: true });
  },
}));
