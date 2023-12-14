export const Changepassword = () => {
    
    return (
      <form>
        <h1 className="text-[#000] text-[1.25rem] font-[600] text-center">
          Forgot password
        </h1>

        <p className="text-[#555] text-center text-[1rem] font-[400] leading-[1.5rem]">
          Enter your email adress to reacquisition to your password.
        </p>

        <label
          htmlFor="email"
          className="text-[#262626] text[.8rem] font-[400]"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="block"
        />

        <label
          htmlFor="password"
          className="text-[#262626] text-[.8rem] font-[400]"
        >
          New Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="New Password"
          className="block"
        />

        <button
          type="submit"
          className="rounded-[4px] focus:bg-[#4172DC] hover:bg-[#4172DC] bg-[#C4C4C4] text-[#FFF] text-center text-[14px] font-[500] leading-[1.5rem] uppercase"
        >
          Reset password
        </button>

        <p className="text-[#262626] md:hidden text-[14px] text-center font-[500] leading-[1.5rem] lowercase">
          Don’t have an account?
          <span className="text-[#FF7A00] text-[16px] font-[700] leading-[1.5rem] lowercase">
            Sign Up
          </span>
        </p>
      </form>
    );


}