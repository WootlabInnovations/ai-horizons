/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { applicationStates } from "@/src/constants/applicationStates";
import { supabase } from "../../lib/supabaseClient";
import { cn } from "../../../../lib/utils";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function toPascalCase(text: string) {
  return text
    .split(/[\s_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function BooleanBadge({ value }: { value: boolean }) {
  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded-full text-xs font-semibold",
        value ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      )}
    >
      {value ? "Yes" : "No"}
    </span>
  );
}

export default function ApplicationStatusDashboard() {
  const [application, setApplication] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

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

  const handleDelete = async () => {
    if (!application?.id) return;

    setDeleting(true);
    const { error } = await supabase
      .from("applications")
      .delete()
      .eq("id", application.id);

    if (error) {
      console.error("Error deleting application:", error.message);
    } else {
      toast.success("Application withdrawn successfully.");
      setApplication(null);
    }

    setDeleting(false);
    setShowModal(false);
  };

  // const handleEdit = () => {
  //   // alert("Redirecting to edit page or show form...");
  // };

  return (
    <div className="p-6 max-w-3xl mx-auto border rounded-xl shadow-lg bg-white mt-10 relative">
      <h3 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Application Status Dashboard
      </h3>

      {loading ? (
        <div className="flex justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-gray-500 mb-4" />
        </div>
      ) : application ? (
        <>
          <div className="mb-8">
            <div className="flex items-center gap-3 text-lg">
              <span
                className={cn(
                  `icon-${currentState?.icon || "info"}`,
                  `text-${currentState?.color || "gray"}-600`
                )}
              />
              <strong
                className={`text-${
                  currentState?.color || "white"
                }-700 capitalize font-semibold text-lg bg-primary rounded-md px-4 py-3`}
              >
                {currentState?.label || "Pending Review"}
              </strong>
            </div>
            <p className="text-md text-black mt-1">
              <span className="font-semibold">Selected Path:</span>{" "}
              {toPascalCase(application.selected_path || "N/A")}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-3 text-gray-800">
              Personal Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <p>
                <strong>Name:</strong> {toPascalCase(application.first_name)}{" "}
                {toPascalCase(application.last_name)}
              </p>
              <p>
                <strong>Email:</strong> {application.email}
              </p>
              <p>
                <strong>Phone:</strong> {application.phone}
              </p>
              <p>
                <strong>Country:</strong>{" "}
                {toPascalCase(application.country || "")}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-3 text-gray-800">
              Application Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <p>
                <strong>Education:</strong>{" "}
                {toPascalCase(application.education || "")}
              </p>
              <p>
                <strong>Current Status:</strong>{" "}
                {toPascalCase(application.current_status || "")}
              </p>
              <p>
                <strong>Availability:</strong>{" "}
                {toPascalCase(application.availability || "")}
              </p>
              <p>
                <strong>Commitment:</strong>{" "}
                <BooleanBadge value={application.commitment} />
              </p>
              <p className="sm:col-span-2">
                <strong>Experience:</strong>{" "}
                {toPascalCase(application.experience || "")}
              </p>
              <p className="sm:col-span-2">
                <strong>Motivation:</strong> {application.motivation}
              </p>
              <p className="sm:col-span-2">
                <strong>Skills:</strong>{" "}
                {application.skills?.map(toPascalCase).join(", ") || "N/A"}
              </p>
            </div>
          </div>

          <div className="mb-8 text-sm text-gray-700">
            <p>
              <strong>Subscribed to Newsletter:</strong>{" "}
              <BooleanBadge value={application.newsletter} />
            </p>
            <p className="mt-2">
              <strong>Application Date:</strong>{" "}
              {new Date(application.created_at).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            {/* <button
              className="bg-primary  px-5 py-2 rounded text-white font-semibold transition cursor-pointer"
              onClick={handleEdit}
            >
              Edit Application
            </button> */}
            <button
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white font-semibold transition cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Withdraw
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 z-50 bg-gray-200 bg-opacity-50 flex items-center justify-center px-4">
              <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full">
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Confirm Withdrawal
                </h4>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete your application? This action
                  cannot be undone.
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                    disabled={deleting}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white font-medium"
                    disabled={deleting}
                  >
                    {deleting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin h-4 w-4" /> Deleting...
                      </span>
                    ) : (
                      "Yes, Delete"
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-red-500 text-center font-semibold">
          No application found for this email.
        </p>
      )}
    </div>
  );
}
