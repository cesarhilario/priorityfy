import { useRouter } from "next/navigation";
import { useState } from "react";
import { type PriorityMode, useItemsStore } from "@/store/useItemsStore";
import type { Metrics } from "@/types/Metrics";

export function useMetrics() {
  const { items, updateItem, calculateScores, priorityMode, setPriorityMode } =
    useItemsStore();
  const router = useRouter();
  const [metrics, setMetrics] = useState<Metrics>({});

  const assignedItems = items.filter(
    (item) => item.quadrant > 0 && item.quadrant !== 4
  );

  const handleDurationChange = (
    itemId: string,
    value: string,
    unit: string
  ) => {
    if (value === "") {
      setMetrics((prev) => ({
        ...prev,
        [itemId]: {
          ...prev[itemId],
          duration: 0,
          unit,
        },
      }));

      updateItem(itemId, { durationInMinutes: 0 });
      return;
    }

    const numValue = Number.parseFloat(value) || 0;
    let durationInMinutes = numValue;

    switch (unit) {
      case "days":
        durationInMinutes = numValue * 24 * 60;
        break;
      case "hours":
        durationInMinutes = numValue * 60;
        break;
      case "minutes":
        durationInMinutes = numValue;
        break;
    }

    setMetrics((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        duration: durationInMinutes,
        unit,
      },
    }));

    updateItem(itemId, { durationInMinutes });
  };

  const handleDesireChange = (itemId: string, value: string) => {
    if (value === "") {
      setMetrics((prev) => ({
        ...prev,
        [itemId]: {
          ...prev[itemId],
          desire: 0,
        },
      }));
      updateItem(itemId, { desire: 0 });
      return;
    }

    const desire = Math.max(1, Math.min(5, Number.parseInt(value) || 1));
    setMetrics((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        desire,
      },
    }));
    updateItem(itemId, { desire });
  };

  const handlePriorityModeChange = (mode: PriorityMode) => {
    setPriorityMode(mode);
  };

  const handleMeasure = () => {
    calculateScores();
    router.push("/ranking");
  };

  const getUnitValue = (duration: number, unit: string) => {
    if (!duration && duration !== 0) return "";

    switch (unit) {
      case "days":
        return Math.round(duration / (24 * 60));
      case "hours":
        return Math.round(duration / 60);
      case "minutes":
        return duration;
      default:
        return duration;
    }
  };

  const completedItems = assignedItems.filter(
    (item) => item.durationInMinutes > 0 && item.desire > 0
  );

  const allItemsCompleted =
    assignedItems.length > 0 && completedItems.length === assignedItems.length;

  return {
    assignedItems,
    completedItems,
    allItemsCompleted,
    metrics,
    priorityMode,
    handleDurationChange,
    handleDesireChange,
    handlePriorityModeChange,
    handleMeasure,
    getUnitValue,
  };
}
