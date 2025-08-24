"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Item } from "@/store/useItemsStore";

type UnassignedQuadrantProps = {
  handleDragStart: (e: React.DragEvent, itemId: string) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent, quadrant: number) => void;
  getItemsByQuadrant: (quadrant: number) => Item[];
  items: Item[];
  unassignedItems: Item[];
};

export function UnassignedQuadrant({
  handleDragStart,
  handleDragOver,
  handleDrop,
  items,
  unassignedItems,
}: UnassignedQuadrantProps) {
  return (
    <Card
      className="m-4 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-950/20 dark:to-zinc-900/20 border-zinc-200 dark:border-zinc-800 shadow-lg"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, 0)}
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-xl flex items-center gap-3">
          <div className="w-3 h-3 bg-zinc-400 rounded-full"></div>
          Itens Não Atribuídos
          <Badge variant="secondary" className="ml-2">
            {unassignedItems.length}
          </Badge>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Arraste os itens para os quadrantes da matriz abaixo
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3 min-h-[80px] p-4 bg-white/50 dark:bg-zinc-800/30 rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-700">
          {unassignedItems.map((item) => (
            <button
              key={item.id}
              type="button"
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              className="group p-3 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-lg cursor-move hover:shadow-lg transition-all duration-200 hover:scale-105 hover:border-zinc-400 dark:hover:border-zinc-500 max-w-[200px] text-left focus:outline-none"
              aria-label={`Arrastar item: ${item.name}`}
            >
              <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                {item.name}
              </h3>
            </button>
          ))}
          {unassignedItems.length === 0 && (
            <div className="flex-1 flex items-center justify-center py-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <p className="text-muted-foreground text-sm">
                  {items.length === 0
                    ? "Nenhum item cadastrado"
                    : "Todos os itens foram atribuídos"}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
