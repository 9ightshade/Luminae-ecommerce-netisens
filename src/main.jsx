import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { Blog } from './pages/Blog.jsx';
import { Error } from './pages/Error.jsx';
import { About } from './pages/About.jsx';
import { SignInPage } from './pages/SignInPage.jsx';
import { SignUpPage } from './pages/SignUpPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Blog",
    element: <Blog/>
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/SignIn",
    element: <SignInPage/>
  },
  {
    path: "/SignUp",
    element: <SignUpPage/>
  },
   {
    path: "*",
    element: <Error/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
