"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Job } from "../../component/Home/data";

export default function ViewPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobListings");
    const jobs: Job[] = storedJobs ? JSON.parse(storedJobs) : [];
    const jobId = parseInt(params.id as string);
    const foundJob = jobs.find((j) => j.id === jobId);
    setJob(foundJob || null);

    const appliedId = localStorage.getItem("appliedJobId");
    if (appliedId === jobId.toString()) {
      setIsApplied(true);
    }
  }, [params.id]);

  const handleApply = () => {
    if (job) {
      localStorage.setItem("appliedJobId", job.id.toString());
      setIsApplied(true);
      alert("Application submitted successfully!");
      router.push("/");
    }
  };

  if (!job) {
    return <div className="p-6">Job not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">{job.title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-gray-600 text-sm font-semibold">Company</p>
          <p className="text-lg font-medium text-gray-900">{job.company}</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm font-semibold">Location</p>
          <p className="text-lg font-medium text-gray-900">{job.location}</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm font-semibold">Job Type</p>
          <p className="text-lg font-medium text-gray-900">{job.jobType}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 text-sm font-semibold mb-1">Job Description</p>
        <p className="text-gray-800 leading-relaxed">{job.description}</p>
      </div>

      <button
        onClick={handleApply}
        disabled={isApplied}
        className={`mt-4 px-6 py-2 rounded font-semibold text-white ${isApplied
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
          }`}
      >
        {isApplied ? "Already Applied" : "Apply Now"}
      </button>
    </div>
  );
}
