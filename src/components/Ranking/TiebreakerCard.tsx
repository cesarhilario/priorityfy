import { Zap } from "lucide-react";
import { getQuadrantInfo } from "@/functions/getQuadrantInfo";
import { formatDuration } from "@/helpers/formatDuration";
import { useBubbleSortComparison } from "@/hooks/useBubbleSortComparison";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function TiebreakerCard() {
  const { currentComparison, handleChoice, isChoiceDisabled } = useBubbleSortComparison();

  return (
    <section>
      {currentComparison && (
        <Card className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle className="text-center text-amber-800 dark:text-amber-300 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Desempate Necessário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-6 text-amber-700 dark:text-amber-300">
              Os itens abaixo têm o mesmo score. Qual você prefere priorizar?
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[currentComparison.itemA, currentComparison.itemB].map(
                (item) => (
                  <Card
                    key={item.id}
                    className={`transition-all border-2 ${
                      isChoiceDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-600 hover:scale-105"
                    }`}
                    onClick={() => !isChoiceDisabled && handleChoice(item)}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                      {item.description && (
                        <p className="text-muted-foreground text-sm mb-3">
                          {item.description}
                        </p>
                      )}
                      <div className="space-y-2">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs ${
                            getQuadrantInfo(item.quadrant).color
                          }`}
                        >
                          {getQuadrantInfo(item.quadrant).name}
                        </span>
                        <div className="text-sm text-muted-foreground">
                          <p>Desejo: {item.desire}/5</p>
                          <p>
                            Duração: {formatDuration(item.durationInMinutes)}
                          </p>
                          <p className="font-medium">
                            Score: {item.score.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
