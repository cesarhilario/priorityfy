"use client";
import { Conditional } from "@/components/Conditional";
import { useAppLoading } from "@/store/useAppLoading";
import { Spinner } from "../Spinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { LoginForm } from "./components/LoginForm";
import { LoginSeparator } from "./components/LoginSeparator";
import { SocialLogin } from "./components/SocialLogin";

export function LoginCard() {
  const { isLoading } = useAppLoading();

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Bem vindo de volta</CardTitle>
        <CardDescription>Entrar com sua conta Google</CardDescription>
      </CardHeader>
      <CardContent>
        <Conditional>
          <Conditional.If condition={!isLoading}>
            <SocialLogin />
            <LoginSeparator />
            <LoginForm />
          </Conditional.If>
          <Conditional.ElseIf condition={isLoading}>
            <div className="flex items-center justify-center py-6">
              <Spinner />
            </div>
          </Conditional.ElseIf>
        </Conditional>
      </CardContent>
    </Card>
  );
}
