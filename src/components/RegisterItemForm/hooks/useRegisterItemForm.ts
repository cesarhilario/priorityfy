import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useItemsStore } from "@/store/useItemsStore";
import {
  type RegisterItemFormSchemaType,
  registerItemFormSchema,
} from "../schema/RegisterItemFormSchema";

export function useRegisterItemForm() {
  const { addItem } = useItemsStore();
  const form = useForm<RegisterItemFormSchemaType>({
    resolver: zodResolver(registerItemFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: RegisterItemFormSchemaType) => {
    addItem({
      name: values.title,
      description: values.description ?? "",
    });
    form.reset();
  };

  return {
    onSubmit,
    registerItemForm: form,
  };
}
