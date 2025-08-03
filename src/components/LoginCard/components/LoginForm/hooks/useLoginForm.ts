import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  type LoginFormSchemaType,
  loginFormSchema,
} from "../schema/LoginFormSchema";

export function useLoginForm() {
  const loginForm = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: LoginFormSchemaType) => {
    console.log("Form submitted:", data);
  };

  return { onSubmit, loginForm };
}
