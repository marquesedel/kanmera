"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export function withAuth(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkSession = async () => {
        const { data } = await supabase.auth.getSession();

        if (!data.session) {
          // Redireciona para a página de login se não houver sessão
          router.push("/login");
        } else {
          setIsAuthenticated(true); // Define como autenticado
        }
      };

      checkSession();
    }, [router]);

    // Exibe um estado de carregamento enquanto verifica a sessão
    if (!isAuthenticated) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };
}