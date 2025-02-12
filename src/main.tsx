import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ProjectOne from './ProjectOne.tsx'
import ProjectThree from './ProjectThree.tsx'
import ProjectTwo from './ProjectTwo.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project-one",
    element: <ProjectOne/>
  },
  {
    path: "/project-two",
    element: <ProjectTwo/>
  },
  {
    path: "/project-three",
    element: <ProjectThree/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
