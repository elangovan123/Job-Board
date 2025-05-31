"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addJob } from "../component/Home/data";

export default function AddJobPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        title: "",
        company: "",
        location: "",
        jobType: "",
        description: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        Object.entries(form).forEach(([key, value]) => {
            if (!value.trim()) newErrors[key] = `${key} is required`;
        });
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess(false);
            return;
        }

        addJob(form);
        console.log("Form submitted:", form);
        setErrors({});
        setSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                router.push("/");
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [success, router]);
    return (
        <main className="max-w-2xl mx-auto mt-12 px-6 py-8 bg-white shadow-lg rounded-lg border border-gray-200">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Post a New Job</h1>

            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Job posted successfully!
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="e.g. Frontend Developer"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                {/* Company */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
                    <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="e.g. OpenAI"
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="e.g. Bangalore"
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>

                {/* Job Type */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Job Type</label>
                    <select
                        name="jobType"
                        value={form.jobType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="">Select Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                    {errors.jobType && <p className="text-red-500 text-sm mt-1">{errors.jobType}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Job Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Describe the job responsibilities and requirements..."
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>

                {/* Submit Button */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow transition"
                    >
                        Post Job
                    </button>
                </div>
            </form>
        </main>

    );
}
