/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { quizQuestions } from "@/src/lib/quizData";
import { useState } from "react";

export default function PathQuiz({
  onFinish,
}: {
  onFinish: (answers: any[]) => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);

  const handleAnswer = (option: any) => {
    const updated = [...answers, option];
    setAnswers(updated);
    if (step + 1 < quizQuestions.length) {
      setStep(step + 1);
    } else {
      onFinish(updated);
    }
  };

  const current = quizQuestions[step];
  const progress = ((step + 1) / quizQuestions.length) * 100;

  return (
    <div className={`p-4 max-w-md mx-auto`}>
      <div className={`h-2 bg-gray-300 rounded mb-4`}>
        <div
          className={`bg-blue-500 h-2 rounded`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <h3 className={`text-lg font-semibold mb-2`}>{current.question}</h3>
      <ul className={`space-y-2`}>
        {current.options.map((opt: any, idx: any) => (
          <li key={idx}>
            <button
              onClick={() => handleAnswer(opt)}
              className={`w-full p-2 border rounded hover:bg-blue-100`}
            >
              {opt.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
