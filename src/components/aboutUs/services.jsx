import shopLogo from "../../assets/images/about-us/services-stall.svg";
import servicesDiscount from "../../assets/images/about-us/services-discount.svg";
import servicesFreeCargo from "../../assets/images/about-us/services-free-cargo.svg";
import servicesCustomerService from "../../assets/images/about-us/services-customer-service.svg";
import arrowRight from "../../assets/images/about-us/arrow-right.svg";
import luminaeteam from "../../assets/images/about-us/team.png"
export const Services = () => {
  return (
    <div className="flex-row-reverse md:w-[80%] mx-[auto] md:flex justify-between">
      <div className=" md:basis-[50%] md:max-w-[430px]">
        <img src={luminaeteam} alt="" className="w-[100%] h-[100%]" />
      </div>

      <div
        id="services_content"
        className="px-[1em] py-[2em] basis-[50%] max-w-[900px]"
      >
        <p className="text-[#262626] text-[1.5rem] font-[400]">
          Know our service
        </p>
        <h1 className=" text-[#262626] text-[2.5rem] font-[600]">
          We offer the best service that will{" "}
          <span className="text-[#3E60C9] text-[2.5rem] font-[600]">
            make it easier
          </span>
        </h1>
        <article className="text-[#555] text-[1.2rem] font-[400] leading-[2rem]">
          Discover unparalleled convenience with our top-tier service, designed
          to make your shopping experience smoother than ever.Experience
          shopping made effortless through our exceptional service that puts
          your needs at the forefront. Elevate your shopping journey with our
          unmatched service, redefining convenience and satisfaction.
        </article>

        <section className="flex items-center gap-[1em] mt-[2em] flex-wrap">
          <div className=" basis-[45%]">
            <div className="mx-auto w-[50%] max-w-[60px] ">
              <img src={shopLogo} alt="discount" className="w-[100%]" />
            </div>
            <p className="text-[#111] text-center text-[.7rem] font-[600]">
              Extraordinary discount
            </p>
            <article className="text-[#111] text-center opacity-[0.5] text-[.8rem] font-[400]">
              Explore our comprehensive online store where you'll find a diverse
              range of products ...
            </article>
            <button className=" transition-all active:bg-[#417cfb] rounded-[4px] bg-[#4172DC] flex py-[.8em] px-[.8em] mt-[1em] mx-auto gap-[.7em] items-center">
              <a
                href="#"
                className=" text-white text-[.8rem] font-[700] uppercase"
              >
                Read more{" "}
              </a>
              <img src={arrowRight} alt="" />{" "}
            </button>
          </div>

          <div className=" basis-[45%]">
            <div className="mx-auto w-[50%] max-w-[60px] ">
              <img src={servicesDiscount} alt="discount" className="w-[100%]" />
            </div>
            <p className="text-[#111] text-center text-[.7rem] font-[600]">
              Extraordinary discount
            </p>
            <article className="text-[#111] text-center opacity-[0.5] text-[.8rem] font-[400]">
              Experience unparalleled savings on a wide selection of premium
              products enhance...
            </article>
            <button className=" transition-all active:bg-[#417cfb] rounded-[4px] bg-[#4172DC] flex py-[.8em] px-[.8em] mt-[1em] mx-auto justify-space-between gap-[.7rem] items-center">
              <a
                href="#"
                className=" text-white text-[.8rem] font-[700] leading-[1.3rem] uppercase"
              >
                Read more{" "}
              </a>
              <img src={arrowRight} alt="" />{" "}
            </button>
          </div>

          <div className="basis-[45%]">
            <div className="mx-auto w-[50%] max-w-[60px] ">
              <img
                src={servicesFreeCargo}
                alt="Free cargo"
                className="w-[100%]"
              />
            </div>
            <p className="text-[#111] text-center text-[.7rem] font-[600]">
              Free Cargo
            </p>
            <article className="text-[#111] text-center opacity-[0.5] text-[.8rem] font-[400]">
              Enjoy the convenience of free cargo services, ensuring your
              purchases are delivere to your...
            </article>
            <button className="rounded-[4px] bg-[#4172DC] transition-all active:bg-[#417cfb] flex py-[.8em] px-[.8em] gap-[.7rem] items-center mt-[1em] mx-auto ">
              <a
                href="#"
                className=" text-white text-[.8rem] font-[700] leading-[1.3rem] uppercase"
              >
                Read more{" "}
              </a>
              <img src={arrowRight} alt="" />{" "}
            </button>
          </div>

          <div className="basis-[45%]">
            <div className="mx-auto w-[50%] max-w-[60px] ">
              <img
                src={servicesCustomerService}
                alt="Customer services"
                className="w-[100%]"
              />
            </div>
            <p className="text-[#111] text-center text-[.7rem] font-[600]">
              24-hour customer service
            </p>
            <article className="text-[#111] text-center opacity-[0.5] text-[.8rem] font-[400]">
              Our commitment to exceptional customer means our 24 hour customer
              service is available...
            </article>
            <button className="rounded-[4px] bg-[#4172DC] transition-all active:bg-[#417cfb] mx-auto flex mt-[1em] py-[.8em] px-[.8em] gap-[.7em] items-center ">
              <a
                href="#"
                className=" text-white text-[.8rem] font-[700] leading-[1.3rem] uppercase"
              >
                Read more{" "}
              </a>
              <img src={arrowRight} alt="" />{" "}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
