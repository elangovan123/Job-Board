"use client";
import React, { useState } from 'react'
import { useSearch } from './SearchContext';

function SearchBar() {

  const { search, setSearch } = useSearch();

  return (
    <div className="flex justify-center pt-10 px-4">
      <div className="relative w-full max-w-xl">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </span>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search job type location or company..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
    </div>
  )
}

export default SearchBar