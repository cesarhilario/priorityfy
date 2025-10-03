import { z } from "zod/v4";

const loginFormSchema = z.object({
  email: z
    .email({
      message: "Email inválido.",
    })
    .trim(),
  password: z
    .string({
      error: "Senha é obrigatória.",
    })
    .trim(),
});

type LoginFormSchemaType = z.infer<typeof loginFormSchema>;

export { loginFormSchema, type LoginFormSchemaType };
