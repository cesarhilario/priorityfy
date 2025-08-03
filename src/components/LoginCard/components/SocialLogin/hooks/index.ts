import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { useAppLoading } from "@/store/useAppLoading";

export function useSocialLogin() {
  const router = useRouter();
  const { setIsLoading } = useAppLoading();

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithGoogle();
      const res = await fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: await userCredential?.user?.getIdToken(),
        }),
      });

      if (!res.ok) {
        throw new Error("Falha ao criar sessão");
      }

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLoginWithGoogle,
  };
}
