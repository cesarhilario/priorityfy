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
