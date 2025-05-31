'use client';
import React from 'react'
import SearchBar from './SearchBar';
import SearchList from './SearchList';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <SearchBar />
      <SearchList />
    </div>
  )
}

export default Home