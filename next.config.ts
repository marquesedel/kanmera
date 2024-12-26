import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Gera arquivos estáticos
  images: {
    unoptimized: true, // Desabilita a otimização de imagens (necessário para exportação)
  },
  basePath: "/nome-do-repositorio", // Substitua "nome-do-repositorio" pelo nome do seu repositório no GitHub
};

export default nextConfig;