"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Item } from "@/store/useItemsStore";
import { quadrantData } from "./data/quadrantData";

type EisenhowerQuadrantProps = {
  handleDragStart: (e: React.DragEvent, itemId: string) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent, quadrant: number) => void;
  getItemsByQuadrant: (quadrant: number) => Item[];
};

export function EisenhowerQuadrants({
  handleDragStart,
  handleDragOver,
  handleDrop,
  getItemsByQuadrant,
}: EisenhowerQuadrantProps) {
  return (
    <div className="m-4 ">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {[1, 2, 3, 4].map((quadrant) => {
          const quadrantItems = getItemsByQuadrant(quadrant);
          return (
            <Card
              key={quadrant}
              className={`${
                quadrantData[quadrant as keyof typeof quadrantData].color
              } h-[350px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, quadrant)}
            >
              <CardHeader className="pb-4 border-b border-current/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">
                      {
                        quadrantData[
                          quadrant as keyof typeof quadrantData
                        ].priority.split(" ")[0]
                      }
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">
                        {
                          quadrantData[quadrant as keyof typeof quadrantData]
                            .title
                        }
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">
                        {
                          quadrantData[
                            quadrant as keyof typeof quadrantData
                          ].subtitle.split(" - ")[0]
                        }
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-white/80 dark:bg-zinc-800/80"
                  >
                    {quadrantItems.length}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4 h-[250px] overflow-y-auto">
                <div>
                  {quadrantItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      draggable
                      onDragStart={(e) => handleDragStart(e, item.id)}
                      className="group p-3 m-2 bg-white/80 dark:bg-zinc-800/80 border border-white/50 dark:border-zinc-700/50 rounded-lg cursor-move hover:shadow-md transition-all duration-200 hover:scale-105 backdrop-blur-sm text-left focus:outline-none"
                      aria-label={`Arrastar item: ${item.name}`}
                    >
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </button>
                  ))}
                  {quadrantItems.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center opacity-50">
                        <div className="w-8 h-8 border-2 border-dashed border-current rounded-lg mx-auto mb-2"></div>
                        <p className="text-xs text-muted-foreground">
                          Arraste itens aqui
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
