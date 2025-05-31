import { useState, useMemo } from "react";
import JobCard from "./JobCard";
import { getJobs } from "./data";
import Pagination from "./Pagination";
import { useSearch } from './SearchContext';

const JOBS_PER_PAGE = 4;

function SearchList() {
  const { search } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);

  const allJobs = getJobs();

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) =>
      `${job.jobType} ${job.company} ${job.location}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
      .sort((a, b) => b.id - a.id);
  }, [search, allJobs]);

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-4">
      <div className="flex flex-col items-center gap-6 w-full">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs found matching your search.</p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}

export default SearchList;
