import googleLogo from "../../assets/images/forms/google-logo.png";
import warningPolygon from "../../assets/images/forms/warning-polygon.svg";
export const SignIn = () => {
  return (
    <form action="POST">
      <h1
        className="   
text-[#000]
text-[1.25rem]
font-[600]
"
      >
        Sign in
      </h1>
      <label
        htmlFor="email"
        className="
      text-[#262626]
      text[.8rem]
font-[400]
 "
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email address"
        className="block "
      />

      <label
        htmlFor="password"
        className="
      
text-[#262626]
text-[.8rem]
font-[400]"
      >
        Password
      </label>
      <input type="password" name="password" id="password" />

      <div>
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="text-[#262626] text-[.5rem] font-[400]"
          />
          Remember for 30 days
        </label>

        <p className="text-[#4172DC] text-[12px] font-[400]">Forgot password</p>
      </div>

      <button
        type="submit"
        className="rounded-[4px] focus:bg-[#4172DC] hover:bg-[#4172DC] bg-[#C4C4C4] text-[#FFF] text-center text-[14px] font-[500] leading-[1.5rem] uppercase"
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

      <p className="text-[#262626] md:hidden text-[14px] font-[500] leading-[1.5rem] lowercase">
        Don’t have an account?
        <span className="text-[#FF7A00] text-[16px] font-[700] leading-[1.5rem] lowercase">
          Sign Up
        </span>
      </p>

      <section className="hidden md:flex">
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
          className="flex rounded-[4px] text-[#FFF] text-center text-[14px] font-[500] leading-[1.25rem] lowercase bg-[#434343]"
        >
          <img src={googleLogo} alt="google logo" />
          <p>Sign in by google</p>
        </button>
      </div>
    );
}