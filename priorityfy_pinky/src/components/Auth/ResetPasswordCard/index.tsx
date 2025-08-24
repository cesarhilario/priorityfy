"use client";
import { useAppLoading } from "@/store/useAppLoading";
import { Spinner } from "../Spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Conditional } from "@/components/Conditional";

import { ResetPasswordForm } from "./components/ResetPasswordForm";
import Link from "next/link";

export function ResetPasswordCard() {
  const { isLoading } = useAppLoading();

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Atualizar senha</CardTitle>
        <CardDescription>
          Digite seu endereço de e-mail para que enviemos um link para atualizar
          sua senha
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Conditional.If condition={!isLoading}>
          <ResetPasswordForm />
        </Conditional.If>
        <Conditional.ElseIf condition={isLoading}>
          <div className="flex items-center justify-center py-6">
            <Spinner />
          </div>
        </Conditional.ElseIf>
        <div className="text-center text-sm mt-4">
          Ja tenho uma conta{" "}
          <Link href="/login" className="underline underline-offset-4">
            Entrar
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
