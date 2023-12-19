export const Changepassword = () => {
  return (
    <form className="w-[90%] max-w-[500px] mt-[7em] mx-[auto]">
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
        <span className="text-[#FF7A00] text-[16px] font-[700] lowercase">
          Sign Up
        </span>
      </p>
    </form>
  );
};
