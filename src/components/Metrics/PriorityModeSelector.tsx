import { Clock, Heart, Zap } from "lucide-react";
import { Conditional } from "@/components/Conditional";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PriorityMode } from "@/store/useItemsStore";

export function PriorityModeSelector({
  priorityMode,
  handlePriorityModeChange,
}: {
  priorityMode: PriorityMode;
  handlePriorityModeChange: (mode: PriorityMode) => void;
}) {
  return (
    <Card className="mb-6 bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-950/20 dark:to-zinc-900/20 border-zinc-200 dark:border-zinc-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-zinc-800 dark:text-zinc-300">
          <Zap className="w-5 h-5" />
          Modo de Priorização Secundária
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          A Matriz de Eisenhower sempre domina o ranking. Escolha qual fator
          deve ter mais peso dentro de cada quadrante:
        </p>
        <div className="flex gap-4">
          <Button
            variant={priorityMode === "desire" ? "default" : "outline"}
            onClick={() => handlePriorityModeChange("desire")}
            className="flex items-center gap-2"
          >
            <Heart className="w-4 h-4" />
            Priorizar Desejo
            {priorityMode === "desire" && (
              <Badge variant="secondary">Ativo</Badge>
            )}
          </Button>
          <Button
            variant={priorityMode === "time" ? "default" : "outline"}
            onClick={() => handlePriorityModeChange("time")}
            className="flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Priorizar Tempo
            {priorityMode === "time" && (
              <Badge variant="secondary">Ativo</Badge>
            )}
          </Button>
        </div>
        <div className="mt-3 p-3 bg-white/50 dark:bg-zinc-800/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            <Conditional>
              <Conditional.If condition={priorityMode === "desire"}>
                <strong>Modo Desejo:</strong> Tarefas com maior desejo ficam no
                topo dentro do mesmo quadrante. Ideal para focar no que você
                mais quer fazer.
              </Conditional.If>
              <Conditional.Else>
                <strong>Modo Tempo:</strong> Tarefas mais rápidas SEMPRE ficam
                no topo dentro do mesmo quadrante. O tempo domina completamente
                sobre o desejo.
              </Conditional.Else>
            </Conditional>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
