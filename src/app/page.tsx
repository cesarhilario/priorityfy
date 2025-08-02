"use client";
import { ArrowRight, Plus, RotateCcw, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useItemsStore } from "@/store/useItemsStore";

export default function HomePage() {
  const { items, addItem, deleteItem, clearAllItems } = useItemsStore();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addItem({
        name: name.trim(),
        description: description.trim(),
      });
      setName("");
      setDescription("");
    }
  };

  const handleClearAll = () => {
    clearAllItems();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col  h-screen mx-auto p-8 max-w-4xl">
        <div className="flex-grow place-content-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold">Gerenciamento de Itens</h1>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Cadastrar Novo Item
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Nome do Item
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite o nome do item"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium mb-2"
                      >
                        Descrição
                      </label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Digite a descrição do item"
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Adicionar Item
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
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
                            Esta ação não pode ser desfeita. Todos os itens
                            cadastrados serão removidos permanentemente.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction onClick={handleClearAll}>
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

              <Card className="mt-6 max-h-82 overflow-auto">
                <CardHeader>
                  <CardTitle>Lista de Itens ({items.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {items.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">
                        Nenhum item cadastrado ainda
                      </p>
                    ) : (
                      items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            {item.description && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {item.description}
                              </p>
                            )}
                            {item.quadrant > 0 && (
                              <span className="inline-block mt-2 px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                                Quadrante {item.quadrant}
                              </span>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteItem(item.id)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
