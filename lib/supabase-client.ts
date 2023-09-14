import { User, createClient } from "@supabase/supabase-js";
import {
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY,
} from "@/constant/env";

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function getCurrentUser(): Promise<User | null> {
  const { data } = await supabase.auth.getSession()
  if (data.session !== null) {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } else {
    return null;
  }
}

export async function signupWithEmail(
  email: string,
  password: string
): Promise<void> {
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
}
export async function loginWithEmail(
  email: string,
  password: string
): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
}
export async function logout(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
