import React from 'react'
import Home from './component/Home/Home'
import { SearchProvider } from './component/Home/SearchContext'


const Homepage = () => {
  return (
    <SearchProvider>
      <Home />
    </SearchProvider>

  )
}

export default Homepage