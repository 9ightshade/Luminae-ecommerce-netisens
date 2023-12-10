import trendyGirls from "../../assets/images/about-us/trendy-girls.png"

export const Concerns = () => {
  return (
    <div className="bg-[#262626]">
      <h1
        className="text-white
text-[2rem]
font-[700]
leading-[1.25rem]"
      >
        Tell us about your{" "}
        <span
          className="text-[#FFC94B]
text-[2rem]
font-[700]
leading-[1.25rem]"
        >
          Concerns
        </span>
      </h1>
      <section>
        <form action="" method="post">
          <label
            htmlFor="name"
            className="text-white text-[.8rem]
font-[400]
leading-[1.25rem]"
          >
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name here"
            id="name"
            className="bg-transparent block"
          />

          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email here"
            id="email"
            className="bg-transparent block "
          />

          <label htmlFor="description" className="text-white">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="bg-transparent block "
            placeholder="Tell us about your concerns"
          ></textarea>

          <input
            type="button"
            value="SEND"
            className="block rounded-[4px];
bg-[#4172DC]
text-[#FFF]
text-center
text-[.8rem]
font-[500]
leading-[1.25rem]
uppercase
py-[1rem]
px-[2rem]
"
          />
        </form>


        <div>
          <img src={trendyGirls} alt="trendy girls" />
        </div>
      </section>
    </div>
  );
};
