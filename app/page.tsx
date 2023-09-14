import { supabase } from "@/lib/supabase-client";
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((e, session) => {
      if (e === "PASSWORD_RECOVERY") {
        
      }
    })
  }, []);
  return (
    <div>hoge</div>
  )
}
