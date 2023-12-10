import shopLogo from "../../assets/images/about-us/services-stall.svg";
import servicesDiscount from "../../assets/images/about-us/services-discount.svg";
import servicesFreeCargo from "../../assets/images/about-us/services-free-cargo.svg";
import servicesCustomerService from "../../assets/images/about-us/services-customer-service.svg";
import arrowRight from "../../assets/images/about-us/arrow-right.svg";

export const Services = () => {
  return (
    <div>
      <p
        className="text-[#262626]
text-[1.4rem]
font-[400]"
      >
        Know our service
      </p>
      <h1
        className=" text-[#262626]
text-[2.2rem] font-[600]"
      >
        We offer the best service that will{" "}
        <span
          className="text-[#3E60C9]
text-[2.5rem]
font-[600]"
        >
          make it easier
        </span>
      </h1>
      <article
        className="text-[#555]
text-[1.2rem]
font-[400]
leading-[2rem]"
      >
        Discover unparalleled convenience with our top-tier service, designed to
        make your shopping experience smoother than ever.Experience shopping
        made effortless through our exceptional service that puts your needs at
        the forefront. Elevate your shopping journey with our unmatched service,
        redefining convenience and satisfaction.
      </article>

      <section>
        <div>
          <div>
            <img src={shopLogo} alt="shop logo" />
          </div>
          <p
            className="text-[#111]
text-center
text-[.7rem]
font-[600]
leading-[2rem]"
          >
            Full category shop
          </p>
          <article
            className="text-[#111]
text-center
opacity-[0.5]
text-[.8rem]
font-[400]
leading-[1.5rem]"
          >
            Explore our comprehensive online store where you&apos;ll find a
            diverse range of products ...
          </article>
          <button
            className="  rounded-[4px]
bg-[#4172DC] flex py-[.6rem] px-[1.25rem]
justify-space-between gap-[.7rem]
items-center "
          >
            <a
              href="#"
              className=" text-white text-[.8rem]
font-[700]
leading-[1.3rem]
uppercase "
            >
              Read more{" "}
            </a>
            <img src={arrowRight} alt="" />{" "}
          </button>
        </div>

        <div>
          <div>
            <img src={servicesDiscount} alt="discount" />
          </div>
          <p
            className="text-[#111]
text-center
text-[.7rem]
font-[600]
leading-[2rem]"
          >
            Extraordinary discount
          </p>
          <article
            className="text-[#111]
text-center
opacity-[0.5]
text-[.8rem]
font-[400]
leading-[1.5rem]"
          >
            Experience unparalleled savings on a wide selection of premium
            products enhance...
          </article>
          <button
            className="  rounded-[4px]
bg-[#4172DC] flex py-[.6rem] px-[1.25rem]
justify-space-between gap-[.7rem]
items-center "
          >
            <a
              href="#"
              className=" text-white text-[.8rem]
font-[700]
leading-[1.3rem]
uppercase "
            >
              Read more{" "}
            </a>
            <img src={arrowRight} alt="" />{" "}
          </button>
        </div>

        <div>
          <div>
            <img src={servicesFreeCargo} alt="Free cargo" />
          </div>
          <p
            className="text-[#111]
text-center
text-[.7rem]
font-[600]
leading-[2rem]"
          >
            Free Cargo
          </p>
          <article
            className="text-[#111]
text-center
opacity-[0.5]
text-[.8rem]
font-[400]
leading-[1.5rem]"
          >
            Enjoy the convenience of free cargo services, ensuring your
            purchases are delivere to your...
          </article>
          <button
            className="  rounded-[4px]
bg-[#4172DC] flex py-[.6rem] px-[1.25rem]
justify-space-between gap-[.7rem]
items-center "
          >
            <a
              href="#"
              className=" text-white text-[.8rem]
font-[700]
leading-[1.3rem]
uppercase "
            >
              Read more{" "}
            </a>
            <img src={arrowRight} alt="" />{" "}
          </button>
        </div>

        <div>
          <div>
            <img src={servicesCustomerService} alt="Customer services" />
          </div>
          <p
            className="text-[#111]
text-center
text-[.7rem]
font-[600]
leading-[2rem]"
          >
            24-hour customer service
          </p>
          <article
            className="text-[#111]
text-center
opacity-[0.5]
text-[.8rem]
font-[400]
leading-[1.5rem]"
          >
            Our commitment to exceptional customer means our 24 hour customer
            service is available...
          </article>
          <button
            className="  rounded-[4px]
bg-[#4172DC] flex py-[.6rem] px-[1.25rem]
justify-space-between gap-[.7rem]
items-center "
          >
            <a
              href="#"
              className=" text-white text-[.8rem]
font-[700]
leading-[1.3rem]
uppercase "
            >
              Read more{" "}
            </a>
            <img src={arrowRight} alt="" />{" "}
          </button>
        </div>
      </section>
    </div>
  );
};
