/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useFormContext } from "react-hook-form";
import DragDropUpload from "./DragDropUpload";
import PathQuiz from "./PathQuiz";

export function Step1() {
  const { register } = useFormContext();
  return (
    <div className={`space-y-4`}>
      <input
        {...register("firstName")}
        placeholder="First Name"
        className={`border p-2 w-full`}
      />
      <input
        {...register("lastName")}
        placeholder="Last Name"
        className={`border p-2 w-full`}
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className={`border p-2 w-full`}
      />
      <input
        {...register("phone")}
        placeholder="Phone"
        className={`border p-2 w-full`}
      />
      <input
        {...register("timezone")}
        placeholder="Timezone"
        className={`border p-2 w-full`}
      />
    </div>
  );
}

export function Step2() {
  const { register } = useFormContext();
  return (
    <div className={`space-y-4`}>
      <select {...register("education")} className={`border p-2 w-full`}>
        <option value="">Select education level</option>
        <option value="high-school">High School</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="graduate">Graduate</option>
        <option value="other">Other</option>
      </select>
      <select {...register("experience")} className={`border p-2 w-full`}>
        <option value="">Work Experience</option>
        <option value="0-1">0–1 years</option>
        <option value="1-3">1–3 years</option>
        <option value="3-5">3–5 years</option>
        <option value="5+">5+ years</option>
      </select>
      <input
        {...register("skills")}
        placeholder="List skills separated by commas"
        className={`border p-2 w-full`}
      />
      <select {...register("aiExperience")} className={`border p-2 w-full`}>
        <option value="">AI Experience Level</option>
        <option value="none">None</option>
        <option value="basic">Basic</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
}

export function Step3({
  setValue,
}: {
  setValue: (key: string, value: any) => void;
}) {
  return <PathQuiz onFinish={(answers) => setValue("quizAnswers", answers)} />;
}

export function Step4({
  setValue,
}: {
  setValue: (key: string, value: any) => void;
}) {
  const { register } = useFormContext();
  return (
    <div className={`space-y-4`}>
      <DragDropUpload onDrop={(files) => setValue("portfolio", files)} />
      <textarea
        {...register("motivation")}
        placeholder="Motivation Statement"
        className={`border p-2 w-full`}
      />
      <input
        {...register("availability")}
        placeholder="Availability"
        className={`border p-2 w-full`}
      />
    </div>
  );
}

export function Step5() {
  const { getValues } = useFormContext();
  const data = getValues();
  return (
    <div className={`bg-gray-100 p-4 rounded`}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
