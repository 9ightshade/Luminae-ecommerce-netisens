import { NavLink } from "react-router-dom";
import googleLogo from "../../assets/images/forms/google-logo.png";
import warningPolygon from "../../assets/images/forms/warning-polygon.svg";
import { useState } from "react";
import { MyContext } from "../../MyContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";




export const SignIn = () => {
//declared states for form inputs
const {password, setPassword}= useContext(MyContext);
const {email, setEmail} = useContext(MyContext);
const [checkbox, setCheckbox] = useState(false);
let navigate = useNavigate();
const {handleauth} = useContext(MyContext);

//func to prevent default form submit 
const handleSubmit = (e)=>{
  e.preventDefault();
}


  return (
    <form  className="w-[94%] max-w-[700px] py-[4em] space-y-[1em] mx-[auto] " onSubmit={handleSubmit}>
      <h1 className="text-[#000] text-[1.25rem] mb-[1em] font-[600]">
        Sign in
      </h1>

      <label htmlFor="email" className="text-[#262626] text[.8rem] font-[400]">
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
        className="text-[#262626] text-[.8rem] font-[400]"
      >
        Password
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e)=>{setPassword(e.target.value)}}
          className="block rounded-[4px] border-[#D9D9D9] p-[.7em] border-[1px] w-[100%]"
        />
      </label>

      <section className="flex items-center justify-between">
        <label
          htmlFor="checkbox"
          className="text-[#262626] flex items-center gap-[.6em] text-[.9rem] font-[400]">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onClick={() =>{setCheckbox(!checkbox)}}
            className=""

          />
          Remember for 30 days
        </label>

       <NavLink to="/forgotpassword" > <p className="text-[#4172DC] text-[12px] font-[400]">Forgot password</p></NavLink>
      </section>

      <button
        type="submit"
        className="rounded-[4px] w-[100%] focus:bg-[#4172DC] hover:bg-[#4172DC] bg-[#C4C4C4] text-[#FFF] text-center text-[.8rem] font-[500] p-[1em] uppercase"
        onClick={()=>{handleauth(2)}}
      >
        sign in
      </button>

      <section className="flex items-center justify-around ">
        <hr />
        <p className="text-[#9D9D9D] text-center text-[14px] font-[500] leading-[1.5rem] uppercase">
          OR
        </p>
        <hr />
      </section>

      <Googlesign />

      <p className="text-[#262626] text-[.8rem] font-[500] text-center lowercase">
        Don’t have an account?
        <span className="text-[#FF7A00] text-[16px] font-[700] leading-[1.5rem] lowercase">
        <NavLink to ="/signUp">Sign Up</NavLink>
        </span>
      </p>

      <section className="hidden ">
        <img src={warningPolygon} alt="warning" />
        <p className="text-[#FF2E00] text-[14px] font-[400] leading-[1.5rem]">
          Sign up to save $9 for free shipping with Ausff company through
          australlian territory
        </p>
      </section>
    </form>
  );
};


export const Googlesign = () => {
    
    return (
      <div>
        <button
          className="flex justify-center items-center p-[1em] gap-[.8em] rounded-[4px] text-[#FFF] text-[.8rem] font-[500] w-[100%] lowercase bg-[#434343]"
        >
          <img src={googleLogo} alt="google logo" />
          <p>Sign in by google</p>
        </button>
      </div>
    );
}