import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Resume from './Components/Resume/Resume'
import PersonalDetails from './Components/Resume/PersonalDetails'
import EducationDetails from './Components/Resume/EducationDetails'
import Experience from './Components/Resume/Experience'
import Projects from './Components/Resume/Projects'
import Skills from './Components/Resume/Skills'

export default function App() {

  const roots = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        {
          path: 'resume', element: <Resume />, children: [
            { index: true, element: <PersonalDetails /> },
            { path: 'education', element: <EducationDetails /> },
            { path: 'experience', element: <Experience /> },
            { path: 'projects', element: <Projects /> },
            { path: 'skills', element: <Skills /> },

          ]
        }

      ]
    }
  ])
  return <>
    <RouterProvider router={roots}></RouterProvider>
  </>
}
