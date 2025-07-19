"use client";
import { useState } from "react";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import * as yup from "yup";

import { Step1, Step2, Step3, Step4, Step5 } from "./StepComponent";
import { validationSchemas } from "@/src/utils/validationSchemas";

const steps = [
  "Personal Info",
  "Background",
  "Path Selection",
  "Portfolio",
  "Review",
];
const stepComponents = [Step1, Step2, Step3, Step4, Step5];

export default function MultiStepApplicationForm({
  onSuccess,
}: {
  onSuccess: (id: string) => void;
}) {
  const [step, setStep] = useState(0);
  const methods = useForm({
    resolver: yupResolver(
      validationSchemas[`step${step + 1}`] as yup.ObjectSchema<any>
    ),
  });

  const { handleSubmit, setValue } = methods;
  const StepComponent = stepComponents[step];

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/applications/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applicationData: data }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result?.error || "Submission failed");

      toast.success("Application submitted!");
      onSuccess(result.data[0]?.id);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`p-4 max-w-xl mx-auto`}
      >
        <h2 className={`text-xl font-bold mb-4`}>{steps[step]}</h2>

        {(() => {
          if (step === 2 || step === 3) {
            return <StepComponent setValue={setValue} />;
          }
          return <StepComponent setValue={() => null} />;
        })()}

        <div className={`flex justify-beeen mt-6`}>
          {step > 0 && (
            <button type="button" onClick={back} className={`text-blue-500`}>
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className={`bg-blue-600 text-white px-4 py-2 rounded`}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className={`bg-green-600 text-white px-4 py-2 rounded`}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
