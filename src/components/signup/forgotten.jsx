import resetemail from "../../assets/images/forms/reset_email.png";
import x from "../../assets/images/forms/x.svg";
import { NavLink } from "react-router-dom";
export const Changepassword = () => {
  return (
    <form className="w-[90%] relative max-w-[500px] mt-[7em] mx-[auto]">
      <h1 className="text-[#000] text-[1.25rem] font-[600] text-center ">
        Forgot password
      </h1>

      <p className="text-[#555] text-center text-[1rem] font-[400] leading-[1.5rem]">
        Enter your email adress to reacquisition to your password.
      </p>

      <label htmlFor="email" className="text-[#262626] text[.8rem] font-[400]">
        Email
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email address"
          className="block rounded-[4px] border-[#D9D9D9] mb-[1em] border invalid:border-[#FF2E00] w-[100%] p-[.8em]"
        />
      </label>

      <label
        htmlFor="password"
        className="text-[#262626] text-[.8rem] font-[400]"
      >
        New Password
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="New Password"
          className="block invalid:border-[#FF2E00] w-[100%] p-[.8em] rounded-[4px] border-[#D9D9D9] mb-[1em] border-[1px] "
        />
      </label>

      <button
        type="submit"
        className="rounded-[4px] transition-all focus:bg-[#4172DC] hover:bg-[#4172DC] mb-[1em] mt-[1em] bg-[#C4C4C4] text-[#FFF] text-center text-[14px] font-[500] w-[100%] py-[1.5em] uppercase"
      >
        Reset password
      </button>

      <p className="text-[#262626] text-[14px] text-center font-[500] lowercase">
        Don’t have an account?
        <NavLink to="/SignUp" ><span className="text-[#FF7A00] ml-[.4em] text-[16px] font-[700] lowercase">
        Sign Up
        </span></NavLink>
      </p>
      <ResetPassword />
    </form>
  );
};

export const ResetPassword = () => {
  return (
    <div className="w-[95%] hidden py-[1.8em] px-[3em] md:w-[95%] absolute top-[44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto text-center max-w-[500px] rounded-[8px] bg-white">
      <div className="flex justify-end">
        <img src={x} alt="cancel button"/>
      </div>
      <div className="mx-[auto] w-[20%]">
        <img src={resetemail} alt="" className="w-[100%]" />
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
};
