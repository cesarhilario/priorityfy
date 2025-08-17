import type { Item, PriorityMode } from "@/store/useItemsStore";

type CalculateScoresResult = {
  updatedItems: Item[];
  sortedItems: Item[];
};

export function calculateScores(
  items: Item[],
  priorityMode: PriorityMode
): CalculateScoresResult {
  const updatedItems = items.map((item) => {
    if (item.quadrant === 0) return { ...item, score: 0 };

    // Se for quadrante 4, score = 0 (será filtrado do ranking)
    if (item.quadrant === 4) {
      return { ...item, score: 0 };
    }

    // Faixas de score por quadrante (matriz sempre domina)
    const matrixBaseScore = {
      1: 1000, // Quadrante 1: 1000-1199 (Urgente e Importante)
      2: 800, // Quadrante 2: 800-999 (Importante, Não Urgente)
      3: 600, // Quadrante 3: 600-799 (Urgente, Não Importante)
      4: 0, // Quadrante 4: Excluído
    };

    const baseScore =
      matrixBaseScore[item.quadrant as keyof typeof matrixBaseScore] || 0;

    let desireBonus = 0;
    let durationBonus = 0;

    if (priorityMode === "desire") {
      // Modo Desejo: Desejo tem mais peso que duração
      desireBonus = (item.desire / 5) * 180; // 0-180 pontos
      durationBonus =
        item.durationInMinutes > 0
          ? Math.min(19, Math.max(1, 1440 / item.durationInMinutes))
          : 1; // 1-19 pontos
    } else {
      // Modo Tempo: Duração tem mais peso que desejo
      desireBonus = (item.desire / 5) * 19; // 0-19 pontos

      // Cálculo para duração: quanto MENOR a duração, MAIOR o bônus
      if (item.durationInMinutes > 0) {
        // Duração máxima considerada: 1 semana (10080 minutos)
        const maxDuration = 24 * 60 * 7;
        const normalizedDuration = Math.min(
          item.durationInMinutes,
          maxDuration
        );
        // Inverter: quanto menor a duração, maior o bônus
        durationBonus = 180 - (normalizedDuration / maxDuration) * 179; // 1-180 pontos
      } else {
        durationBonus = 1; // Valor mínimo se duração não definida
      }
    }

    // Score final: Base do quadrante + bônus baseado no modo escolhido
    const finalScore = baseScore + desireBonus + durationBonus;

    return { ...item, score: finalScore };
  });
  // Ordenar por score decrescente, excluindo quadrante 4
  // Defina o mapeamento de prioridade da matriz fora da função de ordenação
  const matrixPriority: { [key: number]: number } = { 1: 4, 2: 3, 3: 2 };

  const sortedItems = updatedItems
    .filter((item) => item.quadrant > 0 && item.quadrant !== 4)
    .sort((a, b) => {
      // Primeiro critério: Score calculado (que já garante a hierarquia da matriz)
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      // Segundo critério de desempate: Prioridade da matriz
      const matrixPriorityA =
        matrixPriority[a.quadrant as keyof typeof matrixPriority] || 0;
      const matrixPriorityB =
        matrixPriority[b.quadrant as keyof typeof matrixPriority] || 0;

      if (matrixPriorityB !== matrixPriorityA) {
        return matrixPriorityB - matrixPriorityA;
      }

      // Terceiro critério baseado no modo de prioridade
      if (priorityMode === "desire") {
        // Modo desejo: desejo primeiro, depois duração (menor duração = melhor)
        if (b.desire !== a.desire) {
          return b.desire - a.desire;
        }
        return a.durationInMinutes - b.durationInMinutes;
      } else {
        // Modo tempo: duração primeiro (menor duração = melhor), depois desejo
        if (a.durationInMinutes !== b.durationInMinutes) {
          return a.durationInMinutes - b.durationInMinutes;
        }
        return b.desire - a.desire;
      }
    });

  return {
    updatedItems,
    sortedItems,
  };
}
