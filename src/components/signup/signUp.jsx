import { Googlesign } from "../signin/signIn";
// import emailvector from "../../assets/images/forms/email_bg.svg"
import confetti from "../../assets/images/forms/confetti.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
import {app} from "../../firebase-config"
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
export const SignUp = () => {

//declared states for form inputs
const [userName, setUserName] = useState('');
const {email, setEmail} = useContext(MyContext);
const {password, setPassword}= useContext(MyContext);
const [checkbox, setCheckbox] = useState(false);
let navigate = useNavigate();
const handleSubmit= (e)=>{
  e.preventDefault()
}
const handleSignUp =()=>{
console.log(email,password);
  const authentication = getAuth();
  createUserWithEmailAndPassword(authentication, email, password, userName)
  .then((response) =>{
    console.log(response);
    navigate('/')
    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
  })

}


  return (
    <form onSubmit={handleSubmit}
      className="w-[94%] max-w-[700px] py-[4em] relative space-y-[1em] mx-[auto]">
      <h1
        className="
            text-[#000]
            text-[20px] mb-[2em]
font-[700]"
      >
        Sign up
      </h1>
      <label
        htmlFor="username"
        className="
               text-[#262626]
      text[.8rem]
font-[400]
      "
      >
        Name
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Full name"
         onChange={(e)=>{setUserName(e.target.value)}}
          className="block rounded-[4px] border-[#D9D9D9] mb-[1em] p-[.7em] border-[1px] w-[100%]"
        />
      </label>

      <label
        htmlFor="email"
        className="      text-[#262626]
      text[.8rem]
font-[400]"
      >
        Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
         onChange={(e)=>{setEmail(e.target.value)}}
          className="block rounded-[4px] border-[#D9D9D9] mb-[1em] p-[.7em] border-[1px] w-[100%]"
        />
      </label>

      <label
        htmlFor="password"
        className="text-[#262626] text[.8rem] font-[400]"
      >
        Password
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
         onChange={(e)=>{setPassword(e.target.value)}}
          className="block rounded-[4px] border-[#D9D9D9] mb-[1em] p-[.7em] border-[1px] w-[100%]"
        />
      </label>

      <section className="flex gap-[.6em]">
        <input type="checkbox" name="" id="" />
        <p className="text-[#262626] text-[12px] font-[400]">
          Terms and conditions agreement should start with an introduction that
          lets users know they’re reading a terms and conditions agreement
        </p>
      </section>
      <button className="rounded-[4px] transition-all focus:bg-[#4172DC] hover:bg-[#4172DC] py-[1em]  bg-[#C4C4C4] text-[#FFF] text-center text-[14px] font-[500] w-[100%] uppercase"onClick={handleSignUp} >
        Sign up
      </button>

      <section className="flex items-center justify-around ">
        <hr />
        <p className="text-[#9D9D9D] text-center text-[14px] font-[500] leading-[1.5rem] uppercase">
          OR
        </p>
        <hr />
      </section>

      <Googlesign />
    
        <SignUpModal />

    </form>
  );
};


export const SignUpModal = () => {
  return (
    <div className=" hidden w-[90%] py-[6em] px-[3em] md:w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto text-center max-w-[500px] rounded-[8px] bg-white">
      <div className="mx-[auto] w-[20%]">
        <img src={confetti} alt="" className="w-[100%]" />
      </div>
      <p className="text-[#262626] text-[1.2rem] font-[700]">
        Check Your Email
      </p>
      <p className="text-[grey] text-[1rem] font-[600]">
        We have just sent you your new confirmation email to complete your
        registration to{" "}
      </p>
      <p className="text-[black] text-[1.2rem] font-[700]">
        Saina.ghasemi@gmail.com.
      </p>
    </div>
  );
  
}