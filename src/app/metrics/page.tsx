"use client";

import { Conditional } from "@/components/Conditional";
import { MetricItemsList } from "@/components/Metrics/MetricItemsList";
import { MetricsHeader } from "@/components/Metrics/MetricsHeader";
import { NoAssignedItemsCard } from "@/components/Metrics/NoAssignedItemsCard";
import { TierSystemCard } from "@/components/Metrics/TierSystemCard";
import { PriorityModeSelector } from "@/components/PriorityModeSelector";
import { useMetrics } from "@/hooks/useMetrics";

export default function MetricsPage() {
  const {
    assignedItems,
    completedItems,
    priorityMode,
    handlePriorityModeChange,
    handleMeasure,
  } = useMetrics();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 max-w-4xl">
        <MetricsHeader
          assignedItems={assignedItems}
          completedItems={completedItems}
          handleMeasure={handleMeasure}
        />

        <PriorityModeSelector
          priorityMode={priorityMode}
          handlePriorityModeChange={handlePriorityModeChange}
        />

        <Conditional>
          <Conditional.If condition={assignedItems.length === 0}>
            <NoAssignedItemsCard />
          </Conditional.If>
          <Conditional.Else>
            <MetricItemsList />
          </Conditional.Else>
        </Conditional>

        <TierSystemCard priorityMode={priorityMode} />
      </div>
    </div>
  );
}
