"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { withAuth } from "@/lib/withAuth";

function HomePage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut(); // Realiza o logout no Supabase
      router.push("/login"); // Redireciona para a página de login
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground dark">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Kanmera</h1>
        <p className="text-muted-foreground mt-2">
          Your platform for managing projects efficiently.
        </p>
      </header>
      <section className="flex flex-col items-center space-y-4">
        <button
          onClick={handleLogout}
          className="px-6 py-3 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </section>
    </main>
  );
}

export default withAuth(HomePage);