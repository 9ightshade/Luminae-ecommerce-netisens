import luminaeTeam from "../../assets/images/about-us/team.png";
import quote from "../../assets/images/about-us/quote.svg"
export const Intro = () => {
  return (
    <div className="md:flex items-center md:w-[80%]  px-[1em] mx-auto py-[2em] justify-between" >
      <div className="basis-[50%]" >
        <p className="text-[#262626] text-[1.3rem] font-[400]">
          Let&#39;s get to know Luminae
        </p>
        <h1 className=" text-[#262626] text-[2.2rem] font-[600]">
          Providing the best experience to make{" "}
          <span className="text-[#3E60C9] text-[2.5rem] font-[600]">
            your Online Shopping
          </span>{" "}
        </h1>
        <article className="text-[#555] text-[1.2rem] font-[400]">
          At Luminae, we are more than just an online store – we are your
          ultimate destination for an unparalleled shopping experience. Our
          journey began with a simple yet powerful idea: to create a platform
          that not only offers a wide array of products but also fosters a sense
          of community and connection among our customers.
        </article>
        <section className="flex justify-around">
          <div>
            <p className=" text-[#3E60C9] text-center text-[2rem] font-[600] leading-[2.6rem]">
              20+
            </p>
            <p className="text-[#555] text-center text-[1rem] font-[400] leading-[1.7rem]">
              Shopping category
            </p>
          </div>

          <div>
            <p className=" text-[#3E60C9] text-center text-[2rem] font-[600] leading-[2.6rem]">
              10+
            </p>
            <p className="text-[#555] text-center text-[1rem] font-[400] leading-[1.7rem]">
              Different Territory
            </p>
          </div>

          <div>
            <p className=" text-[#3E60C9] text-center text-[2rem] font-[600] leading-[2.6rem]">
              4M+
            </p>
            <p className="text-[#555] text-center text-[1rem] font-[400] leading-[1.7rem]">
              Happy Client
            </p>
          </div>
        </section>
      </div>

      <section  className="hidden md:block">
        <div className="rounded-[50%] relative top-4 bg-[#EAF3FB] mx-[auto] flex justify-center w-[90px] py-[2rem] px-[1.25rem]">
          <img
            src={quote} className=""
            alt="in quotes We have made many people satisfied with our Platform"
          />
        </div>

        <article className="text-[#555] text-center text-[1.25rem] w-full max-w-[300px] font-[400] py-[1.6rem] px-[.8rem] rounded-[10px] bg-[#EAF3FB]">
          We have made many people satisfied with our Platform
        </article>
      </section>
    </div>
  );
};

export const TeamPhoto = () => {
  return (
    <div>
      <img src={luminaeTeam} alt="Luminae team" />
    </div>
  );
};
