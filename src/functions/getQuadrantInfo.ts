export function getQuadrantInfo(quadrant: number) {
  const info = {
    1: {
      name: "Urgente e Importante",
      color: "bg-red-100 text-red-800 dark:bg-red-950/30 dark:text-red-300",
    },
    2: {
      name: "Importante, Não Urgente",
      color:
        "bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-300",
    },
    3: {
      name: "Urgente, Não Importante",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-950/30 dark:text-blue-300",
    },
    4: {
      name: "Não Urgente, Não Importante",
      color: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
    },
  };
  return (
    info[quadrant as keyof typeof info] || {
      name: "Não Atribuído",
      color: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300",
    }
  );
}
