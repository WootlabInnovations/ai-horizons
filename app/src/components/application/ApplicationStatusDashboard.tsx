/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { applicationStates } from "@/src/constants/applicationStates";
import { supabase } from "../../lib/supabaseClient";

export default function ApplicationStatusDashboard() {
  const [application, setApplication] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplication = async () => {
      const email = localStorage.getItem("user_email")?.trim();
      if (!email) {
        console.warn("Email not found in localStorage");
        return;
      }

      const { data, error } = await supabase
        .from("applications")
        .select("*")
        .eq("email", email)
        .maybeSingle();

      console.log("Application data:", data);

      if (error) {
        console.error("Error fetching application:", error.message);
      } else {
        setApplication(data);
      }

      setLoading(false);
    };

    fetchApplication();
  }, []);

  const currentState =
    application?.status &&
    applicationStates[application.status as keyof typeof applicationStates];

  return (
    <div className="p-6 max-w-3xl mx-auto border rounded-lg shadow bg-white mt-10">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Application Status Dashboard
      </h3>

      {loading ? (
        <p className="text-gray-600 text-center">Loading...</p>
      ) : application ? (
        <>
          <div className="mb-6">
            <div className="flex items-center gap-3 text-lg">
              <span
                className={`icon-${currentState?.icon || "info"} text-${
                  currentState?.color || "gray"
                }-600`}
              />
              <strong className={`text-${currentState?.color || "gray"}-700`}>
                {currentState?.label || "Status not available"}
              </strong>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Your selected path:{" "}
              <span className="font-medium">{application.selected_path}</span>
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Personal Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <p>
                <strong>Name:</strong> {application.first_name}{" "}
                {application.last_name}
              </p>
              <p>
                <strong>Email:</strong> {application.email}
              </p>
              <p>
                <strong>Phone:</strong> {application.phone}
              </p>
              <p>
                <strong>Country:</strong> {application.country}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-700">
              Application Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <p>
                <strong>Education:</strong> {application.education}
              </p>
              <p>
                <strong>Current Status:</strong> {application.current_status}
              </p>
              <p>
                <strong>Availability:</strong> {application.availability}
              </p>
              <p>
                <strong>Commitment:</strong>{" "}
                {application.commitment ? "Yes" : "No"}
              </p>
              <p className="sm:col-span-2">
                <strong>Experience:</strong> {application.experience}
              </p>
              <p className="sm:col-span-2">
                <strong>Motivation:</strong> {application.motivation}
              </p>
              <p className="sm:col-span-2">
                <strong>Skills:</strong>{" "}
                {application.skills?.join(", ") || "N/A"}
              </p>
            </div>
          </div>

          <div className="mb-6 text-sm text-gray-600">
            <p>
              <strong>Subscribed to Newsletter:</strong>{" "}
              {application.newsletter ? "Yes" : "No"}
            </p>
            <p>
              <strong>Application Date:</strong>{" "}
              {new Date(application.created_at).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded text-white font-medium transition">
              Edit Application
            </button>
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-medium transition">
              Withdraw
            </button>
          </div>
        </>
      ) : (
        <p className="text-red-500 text-center">
          No application found for this email.
        </p>
      )}
    </div>
  );
}
