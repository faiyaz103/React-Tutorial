import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Router,
    RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage'

import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPageSing , {jobLoader} from './pages/JobPageSing';
import AddJobPage from './pages/AddJobPage';

const App = () => {

    const addJob = async (newJob)=>{

        const res= await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        });

        return;

        // console.log(newJob);
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                < Route index element={<HomePage/>} />
                < Route path='/jobs' element={<JobsPage/>} />
                < Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
                < Route path='/jobs/:id' element={<JobPageSing/>} loader={jobLoader} />
                < Route path='*' element={<NotFoundPage/>} />
            </Route>
        )
    );


  return <RouterProvider router={router} />;
};
export default App