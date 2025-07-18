/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import * as yup from "yup";

import { Step1, Step2, Step3, Step4, Step5 } from "./StepComponent";
import { validationSchemas } from "@/src/utils/validationSchemas";
import { saveApplication } from "@/src/utils/saveApplication";

const steps = [
  "Personal Info",
  "Background",
  "Path Selection",
  "Portfolio",
  "Review",
];

const stepComponents = [Step1, Step2, Step3, Step4, Step5];

const stepFieldGroups: Record<number, string[]> = {
  0: ["firstName", "lastName", "email", "phone", "timezone"],
  1: ["education", "experience", "skills", "aiExperience"],
  2: ["quizAnswers"],
  3: ["portfolio", "motivation", "availability"],
};

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
    mode: "onChange",
  });

  const { handleSubmit, setValue, getValues, trigger } = methods;
  const StepComponent = stepComponents[step];

  const next = async () => {
    const fieldsToValidate = stepFieldGroups[step] || [];
    // const isValid = await trigger(fieldsToValidate);
    const isValid = true;

    if (isValid) {
      setStep((s) => Math.min(s + 1, steps.length - 1));
    } else {
      toast.error("Please complete the required fields.");
    }
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data: any) => {
    try {
      const saved = await saveApplication(data);
      toast.success("Application submitted!");
      onSuccess(saved[0].id);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-xl mx-auto">
        <h2 className="text-xl font-bold mb-4">{steps[step]}</h2>

        <StepComponent setValue={setValue} getValues={getValues} />

        <div className="flex justify-between mt-6 gap-4">
          {step > 0 && (
            <button
              type="button"
              onClick={back}
              className="text-secondary cursor-pointer"
            >
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="bg-primary cursor-pointer text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-primary cursor-pointer text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
