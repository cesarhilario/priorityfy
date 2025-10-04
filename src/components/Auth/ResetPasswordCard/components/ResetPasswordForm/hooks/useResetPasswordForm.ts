import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { GenericError } from "@/types";
import {
  type ResetPasswordFormSchemaType,
  resetPasswordFormSchema,
} from "../schema/ResetPasswordFormSchema";

export function useResetPasswordForm() {
  const router = useRouter();

  const resetPasswordForm = useForm<ResetPasswordFormSchemaType>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data: ResetPasswordFormSchemaType) => {
    try {
      const result = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
        }),
      });

      const response = await result.json();
      if (result.ok) {
        toast.success("Um e-mail foi enviado para você!", {
          onAutoClose: () => {
            router.push("/login");
          },
        });
      } else {
        throw new Error((response as GenericError).message || "Failed to send reset email");
      }
    } catch (err) {
      const error = err as GenericError;
      if (error.code === "auth/user-not-found") {
        toast.error("O e-mail fornecido não está registrado.");
        return;
      }
      toast.error("Tivemos um problema. Tente novamente mais tarde.");
    }
  };

  return { onSubmit, resetPasswordForm };
}
