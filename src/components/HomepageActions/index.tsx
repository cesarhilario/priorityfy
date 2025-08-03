"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useItemsStore } from "@/store/useItemsStore";
import { ThemeToggle } from "../providers/ThemeProvider/components/ThemeToggle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

export function HomePageActions() {
  const { items, clearAllItems } = useItemsStore();
  return (
    <div className="flex items-center justify-between gap-3 my-4 md:m-0">
      <div className="flex items-center gap-3">
        <ThemeToggle />
        {items.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="text-destructive hover:text-destructive/80 bg-transparent"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Limpar Tudo
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Tem certeza que deseja limpar todos os itens?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Todos os itens cadastrados
                  serão removidos permanentemente.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={clearAllItems}>
                  Sim, limpar tudo
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
      <Link href="/board">
        <Button className="flex items-center gap-2">
          Ir para Matriz <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
}
