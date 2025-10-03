import { useMemo } from "react";
import { useItemsStore } from "@/store/useItemsStore";

export function useExcludedItems() {
  const { items } = useItemsStore();

  const excludedItems = useMemo(() => {
    return items.filter((item) => item.quadrant === 4);
  }, [items]);

  return { excludedItems };
}
