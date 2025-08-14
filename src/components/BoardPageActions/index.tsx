"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useItemsStore } from "@/store/useItemsStore";
import { ThemeToggle } from "../providers/ThemeProvider/components/ThemeToggle";
import { Button } from "../ui/button";

export function BoardPageActions() {
  const { items } = useItemsStore();
  const assignedItemsCount = items.filter((item) => item.quadrant > 0).length;

  return (
    <div className="flex flex-col items-start m-4">
      <div className="flex items-center justify-between w-full mb-4">
        <Link href="/items">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Button>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href={`${assignedItemsCount === 0 ? "/board" : "/metrics"}`}>
            <Button
              className="flex items-center gap-2"
              disabled={assignedItemsCount === 0}
            >
              Métricas <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
