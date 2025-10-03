"use client";
import { Conditional } from "@/components/Conditional";
import { Spinner } from "@/components/Spinner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppLoading } from "@/store/useAppLoading";
import { RegisterForm } from "./components/RegisterForm";

export function RegisterCard() {
  const { isLoading } = useAppLoading();

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Seja Bem vindo</CardTitle>
      </CardHeader>
      <CardContent>
        <Conditional.If condition={!isLoading}>
          <RegisterForm />
        </Conditional.If>
        <Conditional.ElseIf condition={isLoading}>
          <div className="flex items-center justify-center py-6">
            <Spinner />
          </div>
        </Conditional.ElseIf>
      </CardContent>
    </Card>
  );
}
