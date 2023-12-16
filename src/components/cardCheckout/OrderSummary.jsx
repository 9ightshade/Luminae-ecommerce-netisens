import warningpolygon from "../../assets/images/forms/warning-polygon.svg";
import checkout from "../../assets/images/cartcheckout/checkout.svg";
export const OrderSummary = () => {
    return (
      <section  >
        <section className="bg-[#E9E9E9] py-[2em]  ">
          <section className="w-[60%] mx-[auto] flex flex-col space-y-[.6em] ">
            <h2 className="text-[#262626] text-[1rem] font-[700]">
              Order Summary
            </h2>
            <div className="flex justify-between">
              <p className="text-[#555] text-[.8rem] font-[400]">Price </p>
              <p className="text-[#262626] text-[.8rem] font-[400]">$99.23</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#555] text-[.8rem] font-[400]">Shipping</p>
              <p className="text-[#262626] text-[.8rem] font-[400]">$0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#555] text-[.8rem] font-[400]">Tax</p>
              <p className="text-[#262626] text-[.8rem] font-[400]">$0 </p>
            </div>
            <p className="text-[#555] text-[.8rem] font-[400]">
              Discount Price
            </p>
            <div className="flex gap-[.4em] items-center">
              <img src={warningpolygon} alt="warning" />
              <p className="text-[#FF2E00] text-[.8rem] font-[400]">
                You must log in to use the discount code
              </p>
            </div>

            <div className="flex items-center justify-between">
              <label
                htmlFor="giftbox"
                className="text-[#555] text-[.8rem] font-[400]"
              >
                {" "}
                <input type="checkbox" name="giftbox" id="giftbox" /> Pack in a
                Gift Box
              </label>
              <p className="text-[#555] text-[.8rem] font-[400]">$10.90</p>
            </div>

            <hr className="h-[2px] w-[100%] bg-[#D9D9D9] " />

            <div className="flex justify-between">
              <p className="text-[#262626] text-[.8rem] font-[700]">
                Total Price{" "}
              </p>
              <p className="text-[#262626] text-[.8rem] font-[700]">$110.13</p>
            </div>
          </section>

          <button className="w-[80%] flex items-center justify-center gap-[.6em] mx-[auto] mt-[2em] rounded-[4px] bg-[#434343] py-[.9em] ">
            <img src={checkout} alt="" />
            <a
              href=""
              className="text-[#FFF] text-[.8rem] font-[500] uppercase"
            >
              {" "}
              Checkout
            </a>
          </button>
        </section>

        <form className="bg-[white] flex py-[2em] px-[2em] md:px-[0em]">
          <input
            type="text"
            name="couponcode"
            id="couponcode"
            placeholder="Enter coupon code"
            className="rounded-[4px] border-[#7B7B7B]  w-[60%] lg:w-[260px] lg:px-[3.8em] text-[1rem] md:py-[.8em] md:px-[.4em] py-[1em] px-[1.7em] border-[1px]"
          />
          <button
            type="submit"
            className=" lg:w-[250px] py-[1em] px-[1.6em] md:py-[.8em] md:px-[1em] w-[50%] rounded-[4px] bg-[#262626] text-[#FFF] text-[1rem] font-[500] capitalize"
          >
            Login and Apply code
          </button>
        </form>
      </section>
    );
};
