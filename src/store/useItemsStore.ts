import { create } from "zustand";
import { persist } from "zustand/middleware";
import { calculateScores } from "@/functions/calculateScores";

export type Item = {
  id: string;
  name: string;
  description: string;
  quadrant: number; // 0 = não atribuído, 1-4 = quadrantes da matriz
  durationInMinutes: number; // em minutos
  desire: number; // 1-5
  score: number;
};

export type PriorityMode = "desire" | "time";

interface ItemsStore {
  items: Item[];
  sortedItems: Item[];
  priorityMode: PriorityMode;

  // * Actions
  addItem: (
    item: Omit<
      Item,
      "id" | "quadrant" | "durationInMinutes" | "desire" | "score"
    >
  ) => void;
  updateItem: (id: string, updates: Partial<Item>) => void;
  deleteItem: (id: string) => void;
  moveItemToQuadrant: (id: string, quadrant: number) => void;
  setPriorityMode: (mode: PriorityMode) => void;
  calculateScores: () => void;
  setSortedItems: (items: Item[]) => void;
  clearAllItems: () => void;
}

export const useItemsStore = create<ItemsStore>()(
  persist(
    (set, get) => ({
      items: [],
      sortedItems: [],
      priorityMode: "desire",

      addItem: (itemData) => {
        const newItem: Item = {
          ...itemData,
          id: Date.now().toString(),
          quadrant: 0,
          durationInMinutes: 0,
          desire: 1,
          score: 0,
        };
        set((state) => ({
          items: [...state.items, newItem],
        }));
      },

      updateItem: (id, updates) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, ...updates } : item
          ),
        }));
      },

      deleteItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
          sortedItems: state.sortedItems.filter((item) => item.id !== id),
        }));
      },

      moveItemToQuadrant: (id, quadrant) => {
        get().updateItem(id, { quadrant });
      },

      setPriorityMode: (mode) => {
        set({ priorityMode: mode });
        // Recalcular scores automaticamente quando o modo muda
        get().calculateScores();
      },

      calculateScores: () => {
        const { items, priorityMode } = get();
        const { updatedItems, sortedItems } = calculateScores(
          items,
          priorityMode
        );

        set({
          items: updatedItems,
          sortedItems: sortedItems,
        });
      },

      setSortedItems: (items) => {
        set({ sortedItems: items });
      },

      clearAllItems: () => {
        set({ items: [], sortedItems: [], priorityMode: "desire" });
      },
    }),
    {
      name: "priorityfy-items-storage",
      partialize: (state) => ({
        items: state.items,
        sortedItems: state.sortedItems,
        priorityMode: state.priorityMode,
      }),
    }
  )
);
