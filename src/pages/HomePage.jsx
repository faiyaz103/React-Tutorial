import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <JobListings isHome={true} />
    <ViewAllJobs/>
    </>
  )
}

export default HomePage