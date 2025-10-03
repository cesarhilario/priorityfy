"use client";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRegisterItemForm } from "./hooks/useRegisterItemForm";

export function RegisterItemForm() {
  const { onSubmit, registerItemForm } = useRegisterItemForm();

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Cadastrar Novo Item
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...registerItemForm}>
          <form
            onSubmit={registerItemForm.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={registerItemForm.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium mb-2">
                    Título do Item
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Digite o título do item"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerItemForm.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium mb-2">
                    Descrição
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Digite a descrição do item"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Adicionar Item
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
