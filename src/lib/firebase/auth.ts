import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  type UserCredential,
} from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";

export async function signInWithGoogle(): Promise<UserCredential | null> {
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  try {
    const user = await signInWithPopup(auth, provider);
    return user;
  } catch (error) {
    console.error("Error signing in with Google", error);
  }

  return null;
}

export const signUpWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error signing up with email and password", error);
    throw error;
  }
};

export { signInWithEmailAndPassword };
