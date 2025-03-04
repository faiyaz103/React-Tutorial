import React from 'react'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Router,
    RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage';
import ErrorPage from './pages/ErrorPage';

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/React-Tutorial' element={<HomePage/>}/>
            <Route path='/jobs' element={<JobsPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
);

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App