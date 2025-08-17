import { useItemsStore } from "@/store/useItemsStore";

export function useExcludedItems() {
  const { items } = useItemsStore();

  const excludedItems = items.filter((item) => item.quadrant === 4);

  return { excludedItems };
}
