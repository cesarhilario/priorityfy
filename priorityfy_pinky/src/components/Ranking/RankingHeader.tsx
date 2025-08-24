import { ArrowLeft, Clock, Download, Heart } from "lucide-react";
import Link from "next/link";
import { useExportRanking } from "@/hooks/useExportRanking";
import { type Item, useItemsStore } from "@/store/useItemsStore";
import type { CurrentComparison } from "@/types/CurrentComparison";
import { ThemeToggle } from "../providers/ThemeProvider/components/ThemeToggle";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type RankingHeaderProps = {
  processedItems: Item[];
  currentComparison: CurrentComparison | null;
};

export function RankingHeader({
  processedItems,
  currentComparison,
}: RankingHeaderProps) {
  const { priorityMode } = useItemsStore();
  const { exportRanking } = useExportRanking({ processedItems });

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <Link href="/metrics">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Ranking Final</h1>
          <Badge variant="outline" className="flex items-center gap-1">
            {priorityMode === "desire" ? (
              <Heart className="w-3 h-3" />
            ) : (
              <Clock className="w-3 h-3" />
            )}
            Modo {priorityMode === "desire" ? "Desejo" : "Tempo"}
          </Badge>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2">
          {processedItems.length > 0 && !currentComparison && (
            <Button
              variant="outline"
              size="sm"
              onClick={exportRanking}
              className="flex items-center gap-2 bg-transparent"
            >
              <Download className="w-4 h-4" />
              Exportar CSV
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
