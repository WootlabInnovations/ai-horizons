/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { quizQuestions } from "@/src/lib/quizData";
import { useEffect, useState } from "react";

export default function PathQuiz({
  defaultAnswers = [],
  onAnswerChange,
}: {
  defaultAnswers?: any[];
  onAnswerChange: (answers: any[]) => void;
}) {
  const [step, setStep] = useState(defaultAnswers.length);
  const [answers, setAnswers] = useState<any[]>(defaultAnswers);

  useEffect(() => {
    onAnswerChange(answers);
  }, [answers, onAnswerChange]);

  const handleAnswer = (option: any) => {
    const updated = [...answers.slice(0, step), option];
    setAnswers(updated);

    if (step + 1 < quizQuestions.length) {
      setStep(step + 1);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const current = quizQuestions[step];
  const progress = ((step + 1) / quizQuestions.length) * 100;

  return (
    <div className="p-4 max-w-md mx-auto space-y-6">
      <div className="h-2 bg-gray-300 rounded">
        <div
          className="bg-blue-500 h-2 rounded transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h3 className="text-lg font-semibold mb-2">{current.question}</h3>

      <ul className="space-y-3">
        {current.options.map((opt: any, idx: number) => {
          const isSelected = answers[step]?.value === opt.value;
          return (
            <li key={idx}>
              <button
                type="button"
                onClick={() => handleAnswer(opt)}
                className={`w-full p-3 border rounded transition-all ${
                  isSelected
                    ? "bg-blue-100 border-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                {opt.text}
              </button>
            </li>
          );
        })}
      </ul>

      {step > 0 && (
        <button
          type="button"
          onClick={goBack}
          className="text-blue-500 underline text-sm"
        >
          ← Go Back
        </button>
      )}
    </div>
  );
}
