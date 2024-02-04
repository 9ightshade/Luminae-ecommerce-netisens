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
import { Productdetails } from "./pages/Productdetails.jsx";



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
  },
  {
    path: "/Productdetails",
    element: <Productdetails/>
  }
]);


function App() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [productId, setProductId]  = useState(0);
const [data, setData] = useState([]);
const [cart, addToCart] = useState([]);
let authToken;
let invalidCredentials;




//handles authentication


const handleauth = (id,  navigate)=>{

const auth = getAuth();

//sign up condition
if( id === 1){ createUserWithEmailAndPassword(auth, email, password)
.then((response)=>{
let res = response;
console.log(res);
navigate('/Product')
sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
authToken = sessionStorage.getItem('Auth Token');})
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
navigate('/Product')})
.catch((error)=>{
console.log(error);
invalidCredentials = error;
console.log(`invalidCredentials:${invalidCredentials}`);
console.log(Boolean(invalidCredentials));
  })}
}


  return (
    <div>

      <authContext.Provider value={{email, setEmail,password, setPassword, productId, setProductId, data, setData, cart, addToCart, handleauth,authToken, invalidCredentials }}>
      <RouterProvider router={router} />   
      </authContext.Provider>
    </div>
  );
}

export default App;
