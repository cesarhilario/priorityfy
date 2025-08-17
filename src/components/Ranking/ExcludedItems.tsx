"use client";
import { useExcludedItems } from "@/hooks/useExcludedItems";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function ExcludedItems() {
  const { excludedItems } = useExcludedItems();

  return (
    <Card className="mt-8 bg-zinc-50 border-zinc-200 dark:bg-zinc-950/20 dark:border-zinc-800">
      <CardHeader>
        <CardTitle className="text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
          🗑️ Itens Excluídos do Ranking ({excludedItems.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          Os itens abaixo estão no Quadrante 4 (Não Urgente e Não Importante) e
          foram excluídos do ranking por serem candidatos à eliminação:
        </p>
        <div className="space-y-2">
          {excludedItems.map((item) => (
            <div key={item.id} className="p-2 bg-muted/50 rounded text-sm">
              <span className="font-medium">{item.name}</span>
              {item.description && (
                <span className="text-muted-foreground ml-2">
                  - {item.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
