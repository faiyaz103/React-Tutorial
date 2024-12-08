import React from 'react'
import { useState, useEffect  } from 'react';
import JobListingSing from './JobListingSing';
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {
  
    // const jobListings=jobs.slice(0,3); //First 3 job will be shown
    // const jobListings = isHome ? jobs.slice(0,3) : jobs;
    const [jobs, setJobs] = useState([]); //Empty array by default
    const [loading, setLoading] = useState(true); //For spinner

    useEffect(()=>{
        //Function Declaration
        const fetchJobs = async()=>{

            const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';

            try {
                
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);

            } catch (error) {
                console.log('Error fetching data', error);
            } finally{
                setLoading(false);
            }
        }

        //Function Calling
        fetchJobs();

    }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        

            {/* <!-- Job Listing --> */}
            {loading ? (<Spinner loading={loading} />) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) =>(
                    <JobListingSing key={job.id} job={job}/>
                ))}
                </div>
            )}          
    
        {/* </div> */}
      </div>
    </section>
  )
}

export default JobListings