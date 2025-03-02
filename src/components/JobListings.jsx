import React from 'react'
import JobListing from './JobListing'
import { useEffect, useState } from 'react'

const JobListings = ({isHome = false}) => {

    const [jobs, setJobs] = useState([]);

    useEffect( () => {

        const fetchJobs = async () => {

            const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';
            console.log(`Fetching from ${apiUrl}`);
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                console.log('Fetched data:', data);
                setJobs(data);

            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        };

        fetchJobs();

    }, [] );

  return (
    <>
       <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">

        {/* Conditional Rendering */}
        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}

        </div>
      </div>
    </section>
    </>
  )
}

export default JobListings