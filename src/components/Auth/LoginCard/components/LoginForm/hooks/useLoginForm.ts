import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signInWithEmailAndPassword } from "@/lib/firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import type { GenericError } from "@/types";
import {
  type LoginFormSchemaType,
  loginFormSchema,
} from "../schema/LoginFormSchema";

export function useLoginForm() {
  const router = useRouter();
  const loginForm = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormSchemaType) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (user) {
        await fetch("/api/auth/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: await user.getIdToken(),
          }),
        });
        router.push("/items");
      }
    } catch (err) {
      const error = err as GenericError;
      if (error.code === "auth/invalid-credential") {
        toast.error(
          "Erro ao fazer login. Verifique suas credenciais e tente novamente."
        );

        return;
      }

      toast.error("Tivemos um problema. Tente novamente mais tarde.");
    }
  };

  return { onSubmit, loginForm };
}
