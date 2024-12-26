"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export function withAuth<T = {}>(Component: React.ComponentType<T>) {
  return function AuthenticatedComponent(props: T) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkSession = async () => {
        const { data } = await supabase.auth.getSession();

        if (!data.session) {
          // Redireciona para a página de login se não houver sessão
          router.push("/login");
        } else {
          setIsAuthenticated(true); // Define como autenticado
        }
        setIsLoading(false); // Finaliza o estado de carregamento
      };

      checkSession();
    }, [router]);

    // Exibe um estado de carregamento enquanto verifica a sessão
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
      return null; // Garante que nada seja renderizado se não autenticado
    }

    return <Component {...props} />;
  };
}