import { create } from "zustand"

interface DialogStore {
    title: string;
    setTitle: (title: string) => void
}

export const useDialogDesc = create<DialogStore>((set) => ({
    title: "",
    setTitle: (title) => set({ title: title })

}))