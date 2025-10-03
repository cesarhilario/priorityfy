import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { signUpWithEmailPassword } from "@/lib/firebase/auth";
import type { GenericError } from "@/types";
import {
  type RegisterFormSchema,
  registerFormSchema,
} from "../schema/RegisterFormSchema";

export function useRegisterForm() {
  const router = useRouter();

  const registerForm = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (data: RegisterFormSchema) => {
    try {
      const { user } = await signUpWithEmailPassword(data.email, data.password);
      if (user) {
        toast.success("Registro realizado com sucesso!", {
          duration: 3000,
          onAutoClose: () => {
            router.push("/login");
          },
        });
      }
    } catch (err) {
      const error = err as GenericError;
      if (error.code === "auth/email-already-in-use") {
        toast.error(
          "Este e-mail já está em uso. Faça login ou use outro e-mail."
        );

        return;
      }

      toast.error("Erro ao registrar. Tente novamente.");
    }
  };

  return { onSubmit, registerForm };
}
