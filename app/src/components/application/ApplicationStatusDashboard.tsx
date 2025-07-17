"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { applicationStates } from "@/src/constants/applicationStates";

interface Props {
  applicationId: string;
}

export default function ApplicationStatusDashboard({ applicationId }: Props) {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get(
          `/api/applications/${applicationId}/status`
        );
        setStatus(res.data.status);
      } catch (err) {
        console.error("Error fetching status:", err);
      }
    };
    fetchStatus();
  }, [applicationId]);

  const currentState =
    applicationStates[status as keyof typeof applicationStates];

  return (
    <div className={`p-6 max-w-xl mx-auto border rounded shadow`}>
      <h3 className={`text-xl font-semibold mb-4`}>Application Status</h3>
      <div
        className={`text-${
          currentState?.color || "gray"
        }-700 flex items-center gap-2`}
      >
        <span className={`icon-${currentState?.icon}`}></span>
        <strong>{currentState?.label || "Loading..."}</strong>
      </div>
      <p className={`text-sm mt-2`}>Next Update: July 20, 2025</p>
      <div className={`mt-4 flex gap-3`}>
        <button className={`bg-yellow-500 px-4 py-2 text-white rounded`}>
          Edit Application
        </button>
        <button className={`bg-red-500 px-4 py-2 text-white rounded`}>
          Withdraw
        </button>
      </div>
    </div>
  );
}
