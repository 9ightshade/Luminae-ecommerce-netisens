import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { Blog } from './pages/Blog.jsx';
import { Home } from './pages/Home.jsx';
import { SearchFail } from './components/Searchfail/Searchfail.jsx';
import { Error } from './pages/Error.jsx';
import { About } from './pages/About.jsx';
import { LoginPage } from './pages/login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
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
    element: <LoginPage/>
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
