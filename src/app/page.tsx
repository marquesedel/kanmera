"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Kanmera App</h1>
      <p className="text-lg mb-6">Testing Tailwind CSS and shadcn/ui</p>
      <Button onClick={() => alert("Button clicked!")}>
        Click Me!
      </Button>
    </main>
  );
}