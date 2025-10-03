"use client";

import { ArrowLeft, Calculator } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";
import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import type { Item } from "@/store/useItemsStore";

export function MetricsHeader({
  assignedItems,
  completedItems,
  allItemsCompleted,
  handleMeasure,
}: {
  assignedItems: Item[];
  completedItems: Item[];
  allItemsCompleted: boolean;
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
        <LogoutButton />
      </div>
      <Button
        onClick={handleMeasure}
        className="flex items-center gap-2"
        disabled={!allItemsCompleted}
      >
        <Calculator className="w-4 h-4" /> Medir ({completedItems.length}/
        {assignedItems.length})
      </Button>
    </div>
  );
}
