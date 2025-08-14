"use client";

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
import { useResetPasswordForm } from "./hooks/useResetPasswordForm";

export function ResetPasswordForm() {
  const { onSubmit, resetPasswordForm } = useResetPasswordForm();

  return (
    <div>
      <Form {...resetPasswordForm}>
        <form
          className="space-y-6"
          onSubmit={resetPasswordForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={resetPasswordForm.control}
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
          <Button type="submit" className="w-full">
            Enviar e-mail
          </Button>
        </form>
      </Form>
    </div>
  );
}
