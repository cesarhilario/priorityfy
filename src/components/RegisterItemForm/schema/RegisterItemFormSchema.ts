import { z } from "zod/v4";

const registerItemFormSchema = z.object({
  title: z
    .string()
    .min(3, { error: "Título deve ter pelo menos 3 caracteres." })
    .max(80, { error: "Título deve ter no máximo 80 caracteres." })
    .trim(),
  description: z
    .string()
    .max(150, { error: "Descrição deve ter no máximo 150 caracteres." })
    .trim()
    .optional(),
});

type RegisterItemFormSchemaType = z.infer<typeof registerItemFormSchema>;

export { registerItemFormSchema, type RegisterItemFormSchemaType };
