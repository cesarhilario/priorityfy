import type { Item } from "@/store/useItemsStore";

export type CurrentComparison = {
  itemA: Item;
  itemB: Item;
  indexA: number;
  indexB: number;
};
