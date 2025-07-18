/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useFormContext } from "react-hook-form";
import DragDropUpload from "./DragDropUpload";
import PathQuiz from "./PathQuiz";

export function Step1() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <input
        {...register("firstName")}
        placeholder="First Name"
        className="border p-2 w-full"
      />
      {typeof errors.firstName?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.firstName.message}</p>
      )}

      <input
        {...register("lastName")}
        placeholder="Last Name"
        className="border p-2 w-full"
      />
      {typeof errors.lastName?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.lastName.message}</p>
      )}

      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
      />
      {typeof errors.email?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      <input
        {...register("phone")}
        placeholder="Phone"
        className="border p-2 w-full"
      />
      {typeof errors.phone?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.phone.message}</p>
      )}

      {/* <input
        {...register("timezone")}
        placeholder="Timezone"
        className="border p-2 w-full"
      />
      {typeof errors.timezone?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.timezone.message}</p>
      )} */}
    </div>
  );
}

export function Step2() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <select {...register("education")} className="border p-2 w-full">
        <option value="">Select education level</option>
        <option value="high-school">High School</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="graduate">Graduate</option>
        <option value="other">Other</option>
      </select>
      {typeof errors.education?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.education.message}</p>
      )}

      <select {...register("experience")} className="border p-2 w-full">
        <option value="">Work Experience</option>
        <option value="0-1">0–1 years</option>
        <option value="1-3">1–3 years</option>
        <option value="3-5">3–5 years</option>
        <option value="5+">5+ years</option>
      </select>
      {typeof errors.experience?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.experience.message}</p>
      )}

      <input
        {...register("skills")}
        placeholder="List skills separated by commas"
        className="border p-2 w-full"
      />
      {typeof errors.skills?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.skills.message}</p>
      )}

      <select {...register("aiExperience")} className="border p-2 w-full">
        <option value="">AI Experience Level</option>
        <option value="none">None</option>
        <option value="basic">Basic</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      {typeof errors.aiExperience?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.aiExperience.message}</p>
      )}
    </div>
  );
}

export function Step3({
  setValue,
}: {
  setValue: (key: string, value: any) => void;
}) {
  const { getValues } = useFormContext();
  const defaultAnswers = getValues("quizAnswers") || [];

  return (
    <PathQuiz
      defaultAnswers={defaultAnswers}
      onAnswerChange={(answers) => setValue("quizAnswers", answers)}
    />
  );
}

export function Step4({
  setValue,
}: {
  setValue: (key: string, value: any) => void;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-4">
      <DragDropUpload onDrop={(files) => setValue("portfolio", files)} />
      {typeof errors.portfolio?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.portfolio.message}</p>
      )}

      <textarea
        {...register("motivation")}
        placeholder="Why are you interested?"
        className="border p-2 w-full"
        rows={4}
      />
      {typeof errors.motivation?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.motivation.message}</p>
      )}

      <input
        {...register("availability")}
        placeholder="Availability"
        className="border p-2 w-full"
      />
      {typeof errors.availability?.message === "string" && (
        <p className="text-red-500 text-sm">{errors.availability.message}</p>
      )}
    </div>
  );
}

export function Step5() {
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow space-y-6">
      <h4 className="text-xl font-bold">Review Your Application</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold text-gray-700 mb-1">Personal Info</h5>
          <p>
            <strong>First Name:</strong> {data.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {data.lastName}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Timezone:</strong> {data.timezone}
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-gray-700 mb-1">Background</h5>
          <p>
            <strong>Education:</strong> {data.education}
          </p>
          <p>
            <strong>Experience:</strong> {data.experience}
          </p>
          <p>
            <strong>Skills:</strong> {data.skills}
          </p>
          <p>
            <strong>AI Experience:</strong> {data.aiExperience}
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-gray-700 mb-1">Path Quiz</h5>
          {Array.isArray(data.quizAnswers) && data.quizAnswers.length > 0 ? (
            <ul className="list-disc list-inside">
              {data.quizAnswers.map((answer: any, i: number) => (
                <li key={i}>
                  <strong>Q{i + 1}:</strong> {answer.text}
                </li>
              ))}
            </ul>
          ) : (
            <p>No answers recorded</p>
          )}
        </div>

        <div>
          <h5 className="font-semibold text-gray-700 mb-1">Portfolio</h5>
          <p>
            <strong>Motivation:</strong> {data.motivation}
          </p>
          <p>
            <strong>Availability:</strong> {data.availability}
          </p>
          {data.portfolio && data.portfolio.length > 0 && (
            <div className="mt-2 grid grid-cols-2 gap-2">
              {data.portfolio.map((file: File, i: number) => (
                <div key={i}>
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`uploaded-${i}`}
                      className="h-20 w-full object-contain rounded border"
                    />
                  ) : (
                    <p className="text-sm text-blue-600 underline truncate">
                      {file.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
