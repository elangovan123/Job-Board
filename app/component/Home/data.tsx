// data/data.tsx

export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  jobType: string;
  description: string;
};

const defaultJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Bangalore",
    jobType: "Full-time",
    description: "Build and maintain modern web applications using React and Next.js."
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "Bangalore",
    company: "Innovatech",
    jobType: "Full-time",
    description: "Develop APIs and server-side logic with Node.js and Express."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Chennai",
    company: "TechCorp",
    jobType: "Full-time",
    description: "Design intuitive and engaging user experiences for web and mobile."
  }, {
    id: 4,
    title: "Frontend Developer",
    location: "Bangalore",
    company: "TechCorp",
    jobType: "Full-time",
    description: "Build and maintain modern web apps using React and Next.js.",
  },
  {
    id: 5,
    title: "Backend Engineer",
    location: "Bangalore",
    company: "Innovatech",
    jobType: "Full-time",
    description: "Develop APIs and server-side logic with Node.js and Express.",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    location: "Chennai",
    company: "DesignHub",
    jobType: "Contract",
    description: "Create user-centered designs for mobile and web apps.",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    location: "Hyderabad",
    company: "CloudMasters",
    jobType: "Full-time",
    description: "Manage CI/CD pipelines and cloud deployments.",
  },
];

// Load jobs from localStorage or fallback to default
export function getJobs(): Job[] {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("jobListings");
    return stored ? JSON.parse(stored) : defaultJobs;
  }
  return defaultJobs;
}

// Add new job and save it to localStorage
export function addJob(job: Omit<Job, "id">): void {
  if (typeof window !== "undefined") {
    const current = getJobs();
    const newId = current.length ? current[current.length - 1].id + 1 : 1;
    const newJob: Job = { id: newId, ...job };
    const updatedJobs = [...current, newJob];
    localStorage.setItem("jobListings", JSON.stringify(updatedJobs));
    console.log("Job saved to localStorage:", newJob);
  }
}
