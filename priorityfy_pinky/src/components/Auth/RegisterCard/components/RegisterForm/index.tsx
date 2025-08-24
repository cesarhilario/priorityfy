"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRegisterForm } from "./hooks/useRegisterForm";

export function RegisterForm() {
  const { onSubmit, registerForm } = useRegisterForm();

  return (
    <Form {...registerForm}>
      <form
        className="space-y-4"
        onSubmit={registerForm.handleSubmit(onSubmit)}
      >
        <FormField
          control={registerForm.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Digite seu email"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="confirmEmail"
          render={({ field }) => (
            <FormItem className="mt-4">
              <FormLabel>Confirmação de Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="Confirme seu email"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-4">
              <div className="flex flex-col gap-3">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Digite sua senha"
                    required
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={registerForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="mt-4">
              <div className="flex flex-col gap-3">
                <FormLabel>Confirmação de Senha</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Confirme sua senha"
                    required
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Cadastrar-se
        </Button>
        <div className="text-center text-sm">
          Ja tenho uma conta{" "}
          <Link href="/login" className="underline underline-offset-4">
            Entrar
          </Link>
        </div>
      </form>
    </Form>
  );
}
