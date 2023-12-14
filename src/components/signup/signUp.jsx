import { Googlesign } from "../signin/signIn";

export const SignUp = () => {
  return (
    <form>
      <h1
        className="
            text-[#000]
            text-[20px]
font-[700]
leading-[1.5rem]"
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
      </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Full name"
        className="block"
      />

      <label
        htmlFor="email"
        className="      text-[#262626]
      text[.8rem]
font-[400]"
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
        className="text-[#262626] text[.8rem] font-[400]"
      >
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="block"
      />

      <section className="flex">
        <input type="checkbox" name="" id="" />
        <p
          className="text-[#262626] text-[12px] font-[400] leading-[1.25rem]"
        >
          Terms and conditions agreement should start with an introduction that
          lets users know they’re reading a terms and conditions agreement
        </p>
      </section>
      <button
        className="rounded-[4px] bg-[#C4C4C4] text-[#FFF] text-center text-[14px] font-[500] leading-[1.5rem]  uppercase"
      >
        Sign up
      </button>

      <section className="flex items-center justify-around ">
        <hr />
        <p
          className="text-[#9D9D9D] text-center text-[14px] font-[500] leading-[1.5rem] uppercase"
        >
          OR
        </p>
        <hr />
      </section>

      <Googlesign />
    </form>
  );
};
