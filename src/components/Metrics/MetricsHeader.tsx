"use client";

import { ArrowLeft, Calculator } from "lucide-react";
import Link from "next/link";
import type { Item } from "@/store/useItemsStore";
import { ThemeToggle } from "../providers/ThemeProvider/components/ThemeToggle";
import { Button } from "../ui/button";

export function MetricsHeader({
  assignedItems,
  completedItems,
  handleMeasure,
}: {
  assignedItems: Item[];
  completedItems: Item[];
  handleMeasure: () => void;
}) {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link href="/board">
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Button>
      </Link>
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Métricas dos Itens</h1>
        <ThemeToggle />
      </div>
      <Button
        onClick={handleMeasure}
        className="flex items-center gap-2"
        disabled={completedItems.length === 0}
      >
        <Calculator className="w-4 h-4" /> Medir ({completedItems.length}/
        {assignedItems.length})
      </Button>
    </div>
  );
}
