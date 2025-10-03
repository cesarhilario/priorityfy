"use client";
import { useMetrics } from "@/hooks/useMetrics";
import { ItemCard } from "./ItemCard";

export function MetricItemsList() {
  const {
    assignedItems,
    metrics,
    handleDurationChange,
    handleDesireChange,
    getUnitValue,
    priorityMode,
  } = useMetrics();

  return (
    <div className="space-y-6">
      {assignedItems.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          metrics={metrics}
          handleDurationChange={handleDurationChange}
          handleDesireChange={handleDesireChange}
          getUnitValue={getUnitValue}
          priorityMode={priorityMode}
        />
      ))}
    </div>
  );
}
