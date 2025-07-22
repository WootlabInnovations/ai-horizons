"use client";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { ToastProvider } from "@/src/components/ToastProvider";

const MultiStepForm = dynamic(
  () => import("@/src/components/application/MultiStepApplicationForm"),
  { ssr: false }
);
const ApplicationStatusDashboard = dynamic(
  () => import("@/src/components/application/ApplicationStatusDashboard"),
  {
    ssr: false,
  }
);

const queryClient = new QueryClient();

export default function ApplyPage() {
  const [applicationId, setApplicationId] = useState<string | null>(null);

  const handleSubmitted = (id: string) => {
    setApplicationId(id);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`min-h-screen bg-white py-10`}>
        <ToastProvider />
        <h1 className={`text-3xl text-center font-bold mb-6`}>
      Elevate Application
        </h1>
        {!applicationId ? (
          <MultiStepForm onSuccess={handleSubmitted} />
        ) : (
          <ApplicationStatusDashboard applicationId={applicationId} />
        )}
      </main>
    </QueryClientProvider>
  );
}
