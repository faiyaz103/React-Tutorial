import React from 'react'
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
    {/* Nav Bar */}
    <Navigation/>

    {/* <!-- Hero --> */}
    {/* <Hero title='This is a title' sub='This is a subtitle' /> */}
    <Hero/>

    {/* <!-- Developers and Employers --> */}
    <HomeCard/>

    {/* <!-- Browse Jobs --> */}
    <JobListings/>

    {/* More Jobs */}
    <ViewAllJobs/>
    </>
  );
};
export default App