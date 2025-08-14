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
import { useLoginForm } from "./hooks/useLoginForm";

export function LoginForm() {
  const { onSubmit, loginForm } = useLoginForm();

  return (
    <div>
      <Form {...loginForm}>
        <form className="space-y-6" onSubmit={loginForm.handleSubmit(onSubmit)}>
          <FormField
            control={loginForm.control}
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
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href="/reset-password"
                      className="ml-auto text-sm text-zinc-400 underline-offset-4 hover:underline"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
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
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
      <div className="text-center text-sm mt-4">
        Ainda não tem uma conta?{" "}
        <Link href="/register" className="underline underline-offset-4">
          Inscreva-se
        </Link>
      </div>
    </div>
  );
}
