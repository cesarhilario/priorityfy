import { z } from "zod/v4";
import { SECURE_PASSWORD_REGEX } from "@/constants";

const registerFormSchema = z
  .object({
    email: z
      .email({
        message: "Email inválido.",
      })
      .trim(),
    confirmEmail: z
      .email({
        message: "Confirmação de email inválida.",
      })
      .trim(),
    password: z
      .string({
        error: "Senha é obrigatória.",
      })
      .regex(SECURE_PASSWORD_REGEX, {
        error:
          "Senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.",
      })
      .trim(),
    confirmPassword: z
      .string({
        error: "Confirmação de senha é obrigatória.",
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Os emails não coincidem.",
    path: ["confirmEmail"],
  });

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export { registerFormSchema, type RegisterFormSchema };
