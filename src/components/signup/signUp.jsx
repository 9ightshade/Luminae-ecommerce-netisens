import { Googlesign } from "../signin/signIn";
// import emailvector from "../../assets/images/forms/email_bg.svg"
import confetti from "../../assets/images/forms/confetti.png"
import eyeicon from "../../assets/images/forms/show_pass.svg"
import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../context/MyContext";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {

//declared states for form inputs
const [userName, setUserName] = useState('');
const {email, setEmail} = useContext(authContext);
const {password, setPassword}= useContext(authContext);
const [checkbox, setCheckbox] = useState(false);
const [showpass, setShowpass] = useState(false);
const {handleauth, userAlreadyExist}= useContext(authContext);



let navigate = useNavigate();
const handleSubmit= (e)=>{
  e.preventDefault()
}

console.log(Boolean(`userAlreadyExist:${userAlreadyExist}`));
  return (

<div>
<p className="text-center" >
  {userAlreadyExist?"User Already Exist":"Welcome New User"}
</p>
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
      >Password
      </label>
<div className="flex" >
<input
          type={showpass?"text":"password"}
          name="password"
          id="password"
          onChange={(e)=>{setPassword(e.target.value)}}
          className="block rounded-[4px] border-[#D9D9D9] border-r-0 p-[.7em] border w-[100%]"
        />
        <div className="border border-[#D9D9D9] border-l-0 pt-[.9em] px-[.7em] rounded-[4px]" >
        <img src={eyeicon} alt="toggle password visiblity" onClick={()=>{setShowpass(!showpass)}} />
        </div>
</div>



      <section className="flex gap-[.6em]">
        <input type="checkbox" name="" id="" />
        <p className="text-[#262626] text-[12px] font-[400]">
          Terms and conditions agreement should start with an introduction that
          lets users know they’re reading a terms and conditions agreement
        </p>
      </section>
      <button className="rounded-[4px] transition-all focus:bg-[#4172DC] hover:bg-[#4172DC] py-[1em]  bg-[#C4C4C4] text-[#FFF] text-center text-[14px] font-[500] w-[100%] uppercase"onClick={()=>{handleauth(1,navigate)}}>
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
</div>
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