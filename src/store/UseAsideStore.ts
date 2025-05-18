import { create } from "zustand";

interface IUseAsideStore {
    isAsideOpen: boolean,
    toggleAside: () => void
}

export const useAsideStore = create<IUseAsideStore>((set) => ({
    isAsideOpen: false,
    toggleAside: () => set((state) => ({ isAsideOpen: !state.isAsideOpen }))
}))