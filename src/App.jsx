// import { ProductFilter } from "./components/List of product/filter folder/ProductFilter";
import { useState } from "react";
import { Home } from "./pages/Home";
import { MyContext } from "./MyContext";
// import { ListOfProduct } from "./pages/ListOfProduct";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Blog } from './pages/Blog.jsx';
import { Error } from './pages/Error.jsx';
import { About } from './pages/About.jsx';
import { SignInPage } from './pages/SignInPage.jsx';
import { SignUpPage } from './pages/SignUpPage.jsx';
import { Changepassword } from './components/signup/forgotten.jsx';


//Routes path
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
    path: "/forgotpassword",
    element: <Changepassword/>
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


function App() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  return (
    <div>
      <MyContext.Provider value={{email, setEmail,password, setPassword }}>
      {/* <ListOfProduct/>  */}
      {/* <ProductFilter/> */}
      <RouterProvider router={router} />   
      </MyContext.Provider>
    </div>
  );
}

export default App;
