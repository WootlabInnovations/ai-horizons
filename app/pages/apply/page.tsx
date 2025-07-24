"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "@/src/components/ToastProvider";
import { ApplicationForm } from "@/src/components/ui/ApplicationForm";
const queryClient = new QueryClient();
export default function ApplyPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`min-h-screen bg-white py-10`}>
        <ToastProvider />
        <ApplicationForm />
      </main>
    </QueryClientProvider>
  );
}
