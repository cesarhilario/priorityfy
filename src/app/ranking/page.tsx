"use client";

import { Link } from "lucide-react";
import { ExcludedItems } from "@/components/Ranking/ExcludedItems";
import { RankingHeader } from "@/components/Ranking/RankingHeader";
import { RankingList } from "@/components/Ranking/RankingList";
import { RankingSuccessMessageCard } from "@/components/Ranking/RankingSuccessMessageCard";
import { TiebreakerCard } from "@/components/Ranking/TiebreakerCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useBubbleSortComparison } from "@/hooks/useBubbleSortComparison";

export default function RankingPage() {
  const { currentComparison, isProcessing, processedItems } =
    useBubbleSortComparison();

  return (
    <div className="min-h-screen bg-background mx-auto max-w-4xl p-6">
      <RankingHeader
        processedItems={processedItems}
        currentComparison={currentComparison}
      />

      <TiebreakerCard />

      {isProcessing && (
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-primary">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            Processando desempate...
          </div>
        </div>
      )}

      <RankingList />

      {processedItems.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground mb-2">
              Nenhum item elegível para o ranking foi encontrado.
            </p>
            <p className="text-sm text-muted-foreground">
              Apenas itens dos Quadrantes 1, 2 e 3 aparecem no ranking. Itens do
              Quadrante 4 são excluídos por serem candidatos à eliminação.
            </p>
            <Link href="/metrics">
              <Button className="mt-4">Voltar para Métricas</Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {processedItems.length > 0 && !currentComparison && !isProcessing && (
        <RankingSuccessMessageCard />
      )}

      <ExcludedItems />
    </div>
  );
}
