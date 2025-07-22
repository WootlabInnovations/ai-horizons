"use client";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "@/src/components/ToastProvider";

const ApplicationStatusDashboard = dynamic(
  () => import("@/src/components/application/ApplicationStatusDashboard"),
  {
    ssr: false,
  }
);

const queryClient = new QueryClient();

export default function AplicationDashboardPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`min-h-screen bg-white py-10`}>
        <ToastProvider />

        <ApplicationStatusDashboard />
      </main>
    </QueryClientProvider>
  );
}
