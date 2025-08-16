"use client";
import type { PriorityMode } from "@/store/useItemsStore";
import { Conditional } from "../Conditional";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type TierSystemCardProps = {
  priorityMode: PriorityMode;
};

export function TierSystemCard({ priorityMode }: TierSystemCardProps) {
  return (
    <div className="mt-8">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">
            Sistema de Faixas - Modo{" "}
            {priorityMode === "desire" ? "Desejo" : "Tempo"} (DOMINANTE)
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <div className="space-y-3">
            <div>
              <strong>
                Faixas de Score por Quadrante (NUNCA se sobrepõem):
              </strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>
                  🔥 <strong>Quadrante 1</strong>: 1000-1199 pontos
                </li>
                <li>
                  ⭐ <strong>Quadrante 2</strong>: 800-999 pontos
                </li>
                <li>
                  📋 <strong>Quadrante 3</strong>: 600-799 pontos
                </li>
                <li>
                  🗑️ <strong>Quadrante 4</strong>: Excluído
                </li>
              </ul>
            </div>
            <div>
              <strong>
                Composição do Score no Modo{" "}
                {priorityMode === "desire" ? "Desejo" : "Tempo"}:
              </strong>
              <ul className="mt-1 ml-4 list-disc">
                <li>
                  <strong>Base do Quadrante:</strong> Define a faixa (1000, 800
                  ou 600)
                </li>
                <Conditional>
                  <Conditional.If condition={priorityMode === "desire"}>
                    <li>
                      <strong>Bônus de Desejo:</strong> 0-180 pontos (DOMINANTE)
                    </li>
                    <li>
                      <strong>Bônus de Duração:</strong> 1-19 pontos (menor
                      duração = mais pontos)
                    </li>
                  </Conditional.If>
                  <Conditional.Else>
                    <li>
                      <strong>Bônus de Duração:</strong> 1-180 pontos (DOMINANTE
                      - menor duração = mais pontos)
                    </li>
                    <li>
                      <strong>Bônus de Desejo:</strong> 0-19 pontos (impacto
                      mínimo)
                    </li>
                  </Conditional.Else>
                </Conditional>
              </ul>
            </div>
            <div className="p-2 bg-zinc-100 dark:bg-zinc-950/30 rounded text-zinc-800 dark:text-zinc-300">
              <strong>Modo Ativo:</strong>{" "}
              {priorityMode === "desire"
                ? "Priorizando DESEJO - O desejo tem 9x mais impacto que a duração."
                : "Priorizando TEMPO - A duração tem 9x mais impacto que o desejo. Tarefas rápidas SEMPRE vencem!"}
            </div>
            {priorityMode === "time" && (
              <div className="p-2 bg-zinc-100 dark:bg-zinc-950/30 rounded text-zinc-800 dark:text-zinc-300">
                <strong>Exemplo:</strong> Desejo 4 + 10h (score ~890) SEMPRE
                vence Desejo 5 + 20h (score ~880) no modo Tempo.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
