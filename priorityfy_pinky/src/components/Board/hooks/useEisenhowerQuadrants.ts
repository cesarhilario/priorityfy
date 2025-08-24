import { useState } from "react";
import { useItemsStore } from "@/store/useItemsStore";

export function useEisenhowerQuadrants() {
  const { items, moveItemToQuadrant } = useItemsStore();
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const unassignedItems = items.filter((item) => item.quadrant === 0);

  const getItemsByQuadrant = (quadrant: number) =>
    items.filter((item) => item.quadrant === quadrant);

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, quadrant: number) => {
    e.preventDefault();
    if (draggedItem) {
      moveItemToQuadrant(draggedItem, quadrant);
      setDraggedItem(null);
    }
  };

  return {
    getItemsByQuadrant,
    handleDragOver,
    handleDragStart,
    handleDrop,
    items,
    moveItemToQuadrant,
    unassignedItems,
  };
}
