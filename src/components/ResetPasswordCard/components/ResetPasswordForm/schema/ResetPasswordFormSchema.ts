import { z } from "zod/v4";

const resetPasswordFormSchema = z.object({
  email: z
    .email({
      message: "Email inválido.",
    })
    .trim(),
});

type ResetPasswordFormSchemaType = z.infer<typeof resetPasswordFormSchema>;

export { resetPasswordFormSchema, type ResetPasswordFormSchemaType };
