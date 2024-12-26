"use client";

import { withAuth } from "@/lib/withAuth";

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4 text-muted-foreground">
        This page is protected and requires authentication.
      </p>
    </main>
  );
}

export default withAuth(HomePage);