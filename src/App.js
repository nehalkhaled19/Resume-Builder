import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Resume from './Components/Resume/Resume'
import PersonalDetails from './Components/Resume/PersonalDetails'
import Education    from './Components/Resume/Education'
import Experience from './Components/Resume/Experience'
import Projects from './Components/Resume/Projects'
import Skills from './Components/Resume/Skills'
import FormContectProvider from './ContextForm'
import CV from './Components/DownloadResume/CV'

export default function App() {
// Function to remove the item from local storage
const removeItemFromLocalStorage = () => {
  localStorage.removeItem('experienceNum');
  localStorage.removeItem('projectNum');
  localStorage.removeItem('educationNum');
};

// Attach the beforeunload event listener to the window
window.addEventListener('beforeunload', removeItemFromLocalStorage);


  const roots = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        {
          path: 'resume', element: <Resume />, children: [
            { index: true, element: <PersonalDetails /> },
            { path: 'education', element: <Education/> },
            { path: 'experience', element: <Experience /> },
            { path: 'projects', element: <Projects /> },
            { path: 'skills', element: <Skills /> },
            { path: 'cv', element: <CV /> },


          ]
        }

      ]
    }
  ])
  return <>
  <FormContectProvider>
    <RouterProvider router={roots}></RouterProvider>
    </FormContectProvider>
  </>
}
