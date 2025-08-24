import { useCallback } from "react";
import { type Item, useItemsStore } from "@/store/useItemsStore";

type UseExportRankingProps = {
  processedItems: Item[];
};

export function useExportRanking({ processedItems }: UseExportRankingProps) {
  const { priorityMode } = useItemsStore();

  const exportRanking = useCallback(() => {
    const csvContent = [
      [
        "Posição",
        "Nome",
        "Descrição",
        "Quadrante",
        "Desejo",
        "Duração (min)",
        "Score",
        "Modo",
      ],
      ...processedItems.map((item, index) => [
        index + 1,
        item.name,
        item.description || "",
        item.quadrant,
        item.desire,
        item.durationInMinutes,
        item.score.toFixed(2),
        priorityMode === "desire" ? "Desejo" : "Tempo",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ranking-priorityfy-${priorityMode}-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }, [processedItems, priorityMode]);

  return { exportRanking };
}
