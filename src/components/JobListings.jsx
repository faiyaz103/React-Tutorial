import React from 'react'
import jobs from '../jobs.json'
import JobListingSing from './JobListingSing';

const JobListings = () => {
  
    const recentJobs=jobs.slice(0,3); //First 3 job will be shown

  return (
    <>
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* <!-- Job Listing --> */}
          {recentJobs.map((job) =>(
            <JobListingSing key={job.id} job={job}/>
          ))}
          
          
    
        </div>
      </div>
    </section>
    </>
  )
}

export default JobListings