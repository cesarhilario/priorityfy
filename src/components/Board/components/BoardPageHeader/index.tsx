"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "@/components/LogoutButton";
import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useItemsStore } from "@/store/useItemsStore";

export function BoardPageHeader() {
  const { items } = useItemsStore();
  const assignedItemsCount = items.filter((item) => item.quadrant > 0).length;

  return (
    <header className="flex flex-col items-start m-4">
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
          <LogoutButton />
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
    </header>
  );
}
