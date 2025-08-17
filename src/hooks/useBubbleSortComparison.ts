import { useCallback, useEffect, useState } from "react";
import { type Item, useItemsStore } from "@/store/useItemsStore";
import type { CurrentComparison } from "@/types/CurrentComparison";

export function useBubbleSortComparison() {
  const { sortedItems, setSortedItems } = useItemsStore();
  const [currentComparison, setCurrentComparison] =
    useState<CurrentComparison | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedItems, setProcessedItems] = useState(sortedItems);

  const findNextComparison = useCallback(
    (items: Item[], i: number, j: number) => {
      const n = items.length;

      for (let currentI = i; currentI < n - 1; currentI++) {
        const startJ = currentI === i ? j : 0;
        for (let currentJ = startJ; currentJ < n - currentI - 1; currentJ++) {
          if (items[currentJ].score === items[currentJ + 1].score) {
            setCurrentComparison({
              itemA: items[currentJ],
              itemB: items[currentJ + 1],
              indexA: currentJ,
              indexB: currentJ + 1,
            });
            return;
          }
        }
      }

      // Se não encontrar mais comparações, finaliza o processo
      setCurrentComparison(null);
      setIsProcessing(false);
    },
    []
  );

  const handleChoice = (chosenItem: Item) => {
    if (!currentComparison) return;

    setIsProcessing(true);

    const items = [...processedItems];
    const { itemA, itemB, indexA, indexB } = currentComparison;

    // Adiciona +1 ao score do item escolhido
    if (chosenItem.id === itemA.id) {
      items[indexA] = { ...itemA, score: itemA.score + 1 };
    } else {
      items[indexB] = { ...itemB, score: itemB.score + 1 };
    }

    // Troca posições se necessário (bubble sort)
    if (items[indexA].score < items[indexB].score) {
      [items[indexA], items[indexB]] = [items[indexB], items[indexA]];
    }

    setProcessedItems(items);
    setSortedItems(items);

    // Continua o processo de bubble sort
    setTimeout(() => {
      findNextComparison(items, 0, 0);
    }, 500);
  };

  const startBubbleSort = useCallback(() => {
    const items = [...sortedItems];
    findNextComparison(items, 0, 0);
  }, [sortedItems, findNextComparison]);

  useEffect(() => {
    setProcessedItems([...sortedItems]);
    startBubbleSort();
  }, [sortedItems, startBubbleSort]);

  return {
    currentComparison,
    isProcessing,
    handleChoice,
    processedItems,
  };
}
