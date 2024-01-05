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
import {app} from './firebase-config.js'
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
// import { useNavigate } from "react-router-dom";
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


//handles authentication


const handleauth = (id)=>{
const authentication = getAuth();
// const navigate = useNavigate();
console.log(id);

//sign up condition
if(id== 1){

  console.log(email,password);
  createUserWithEmailAndPassword(authentication, email, password)
  .then((response) =>{
    console.log(response);
    console.log(response._tokenResponse.refreshToken);
    // navigate('/')
    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
  })
}
//sign in condition
else if(id==2){
  signInWithEmailAndPassword(authentication, email, password)
  .then((response)=>{
   console.log(response);
  //  navigate('/')
  })

}
}

  return (
    <div>
      <MyContext.Provider value={{email, setEmail,password, setPassword, handleauth }}>
      {/* <ListOfProduct/>  */}
      {/* <ProductFilter/> */}
      <RouterProvider router={router} />   
      </MyContext.Provider>
    </div>
  );
}

export default App;
