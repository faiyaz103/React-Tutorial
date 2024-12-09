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
import JobPageSing from './pages/JobPageSing';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            < Route index element={<HomePage/>} />
            < Route path='/jobs' element={<JobsPage/>} />
            < Route path='/jobs/:id' element={<JobPageSing/>} />
            < Route path='*' element={<NotFoundPage/>} />
        </Route>
    )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App