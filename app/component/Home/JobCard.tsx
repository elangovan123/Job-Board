"use client";
import Link from 'next/link';

type Job = {
    id: number;
    title: string;
    location: string;
    company: string;
    jobType: string;
    description: string;
};

export default function JobCard({ job }: { job: Job }) {

    return (

        <Link href={`/view/${job.id}`} className="w-[60%] border border-gray-300 rounded-lg p-6 shadow-md bg-white hover:shadow-lg transition-all duration-200">

            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold"><strong>Title:</strong> {job.title}</h2>
                    <span className="text-sm text-gray-500"><strong>Company:</strong> {job.company}</span>
                    <span className="text-sm text-gray-500"><strong>Job Type:</strong> {job.jobType}</span>
                </div>
                <p className="text-gray-600 mb-1">
                    <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-700"><strong>Description:</strong> {job.description}</p>
            </div>

        </Link>
    );
}