import Image from "next/image";

import { cn } from "@/lib/utils";
import { RegisterCard } from "@/components/RegisterCard";

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-zinc-800">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center justify-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-md">
            <Image
              src="/priorityfy-logo-light.png"
              width={24}
              height={24}
              alt="Priorityfy Logo"
              className="inline-block size-6 rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold">Jump Source - Priorityfy</h2>
        </div>
        <div className={cn("flex flex-col gap-4")}>
          <RegisterCard />
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            Ao clicar em continuar, você concorda com nossos{" "}
            <a href="/terms-of-use">Termos de uso</a> e{" "}
            <a href="/privacy-policy">Política de Privacidade</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
