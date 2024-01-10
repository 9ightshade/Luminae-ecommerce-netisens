import {  useState, useEffect} from "react";
import { Home } from "./pages/Home";
import { authContext } from "./context/MyContext.js";
import {
  createBrowserRouter,
  RouterProvider, 
  useNavigate
} from "react-router-dom";

import { Blog } from './pages/Blog.jsx';
import { Error } from './pages/Error.jsx';
import { About } from './pages/About.jsx';
import { SignInPage } from './pages/SignInPage.jsx';
import { SignUpPage } from './pages/SignUpPage.jsx';
import { Changepassword } from './components/signup/forgotten.jsx';
import {app} from './firebase-config.js'
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { ListOfProduct } from "./pages/ListOfProduct.jsx";



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
  {
    path: "/Product",
    element: <ListOfProduct/>
  }
]);


function App() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

let authToken;





//handles authentication


const handleauth =  async (id,  navigate)=>{

const auth = getAuth();

//sign up condition
if( id === 1){ createUserWithEmailAndPassword(auth, email, password)
.then((response)=>{
  let res = response;
  console.log(res);
  navigate('/')
sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
authToken = sessionStorage.getItem('Auth Token');
})
.catch((error)=>{
  console.log(error);
})}

//sign in condition 
else if (id === 2){ signInWithEmailAndPassword(auth, email, password)
.then((response)=>{
let res = response;
console.log("promise fulfilled:", res);
sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
authToken = sessionStorage.getItem('Auth Token');
console.log(authToken);
navigate('/')
  })
.catch((error)=>{
console.log(error);
  })}
}


  return (
    <div>

      <authContext.Provider value={{email, setEmail,password, setPassword, handleauth,authToken }}>
      <RouterProvider router={router} />   
      </authContext.Provider>
    </div>
  );
}

export default App;
