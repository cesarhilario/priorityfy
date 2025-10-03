import { Trophy } from "lucide-react";
import { useItemsStore } from "@/store/useItemsStore";
import { Card, CardContent } from "../ui/card";

export function RankingSuccessMessageCard() {
  const { priorityMode } = useItemsStore();
  return (
    <Card className="mt-8 bg-zinc-50 border-zinc-200 dark:bg-zinc-950/20 dark:border-zinc-800">
      <CardContent className="text-center py-6">
        <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-300 mb-2">
          Ranking Finalizado!
        </h3>
        <p className="text-zinc-700 dark:text-zinc-400">
          Ranking calculado no modo{" "}
          {priorityMode === "desire" ? "Desejo" : "Tempo"}. Use este ranking
          para priorizar suas tarefas.
        </p>
      </CardContent>
    </Card>
  );
}
