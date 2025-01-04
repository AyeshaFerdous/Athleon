import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';
import AuthProvider from './Providers/AuthProvider';
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-center"/>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
