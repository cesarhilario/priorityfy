import { create } from "zustand";

interface AppLoadingState {
  isLoading: boolean;
  toggleLoading: (loading: boolean) => void;
  setIsLoading: (loading: boolean) => void;
}

export const useAppLoading = create<AppLoadingState>((set) => ({
  isLoading: false,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
