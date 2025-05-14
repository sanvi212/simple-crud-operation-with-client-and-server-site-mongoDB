import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router";
import { router } from './router/Router.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
/>
  </StrictMode>,
)
