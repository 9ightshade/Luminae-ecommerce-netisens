import trendyGirls from "../../assets/images/about-us/trendy-girls.png";

export const Concerns = () => {
  return (
    <div className="bg-[#262626] md:flex md:w-[80%] mx-auto mt-[3em]">
      <div className="py-[1em] px-[1em] basis-1/2">
        <h1 className="text-white text-[2rem] font-[700]">
          Tell us about your{" "}
          <span className="text-[#FFC94B] text-[2rem] font-[700]">
            Concerns
          </span>
        </h1>

        <form action="" method="post">
          <label
            htmlFor="name"
            className="text-white text-[.8rem] font-[400]">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name here"
            id="name"
            className="bg-transparent mt-[.8em] mb-[.8em] block rounded-[4px] border-[#D9D9D9] p-[1em] border w-[100%] "
          />

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email here"
            id="email"
            className="bg-transparent block mt-[.8em] mb-[.8em] rounded-[4px] border-[#D9D9D9] p-[1em] border w-[100%]  "
          />

          <label htmlFor="description" className="text-white">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="bg-transparent block mt-[1em] rounded-[4px] border-[#D9D9D9] p-[1em] border w-[100%] "
            placeholder="Tell us about your concerns"
          ></textarea>

          <input
            type="button"
            value="SEND"
            className="block cursor-pointer transition-all active:bg-[#417cfb] bg-[#4172DC] text-[#FFF] text-center text-[.8rem] font-[500] mb-[3em] my-[1.3em] uppercase rounded-[4px] py-[1rem] px-[2rem] w-[100%]"/>
        </form>
      </div>

      <div className="hidden md:block basis-1/2">
        <img src={trendyGirls} alt="trendy girls" className="w-[100%] h-[100%]" />
      </div>
    </div>
  );
};
