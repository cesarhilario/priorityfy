import { getQuadrantInfo } from "@/functions/getQuadrantInfo";
import { formatDuration } from "@/helpers/formatDuration";
import { useBubbleSortComparison } from "@/hooks/useBubbleSortComparison";
import { Card, CardContent } from "../ui/card";

export function RankingList() {
  const { processedItems } = useBubbleSortComparison();
  return (
    <div className="space-y-4">
      {processedItems.map((item, index) => (
        <Card
          key={item.id}
          className={`transition-colors ${
            index === 0
              ? "border-amber-300 bg-amber-50 dark:border-amber-600 dark:bg-amber-950/20"
              : ""
          }`}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-white ${
                    index === 0
                      ? "bg-amber-500"
                      : index === 1
                      ? "bg-zinc-400"
                      : index === 2
                      ? "bg-zinc-500"
                      : "bg-zinc-600"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  {item.description && (
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        getQuadrantInfo(item.quadrant).color
                      }`}
                    >
                      {getQuadrantInfo(item.quadrant).name}
                    </span>
                    <span className="px-2 py-1 bg-zinc-100 text-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300 rounded text-xs">
                      Desejo: {item.desire}/5
                    </span>
                    <span className="px-2 py-1 bg-zinc-100 text-zinc-800 dark:bg-zinc-950/30 dark:text-zinc-300 rounded text-xs">
                      {formatDuration(item.durationInMinutes)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {item.score.toFixed(2)}
                </div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
