import React from 'react'
import send from "../../../assets/images/blog-images/send.svg"

export const BlogTopFooter = () => {
  return (
    <div>
      <div className="md:flex md:py-[20px] md:items-center md:justify-evenly bg-[#D1E2EB] px-[20px] pb-4 ">
        <div className="md:w-[40%]">
          <div className="flex gap-2 py-1">
            <p className="text-[#262626] font-bold text-[30px] ">Luminae</p>
            <p className="text-[#7296AB] font-bold text-[30px] ">Store</p>
          </div>
          <p className="pr-[40px] leading-none my-[10px]">
            Register your email not to miss the last minutes off + free delivery
          </p>

          <div className="w-full px-3 py-1 bg-white rounded justify-start items-center gap-[127px] my-[25px]">
            <div className="flex justify-between items-center gap-[100px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="text-left text-neutral-400 text-sm font-normal w-[250px]"
              />
              <img src={send} alt="" className="w-4 h-4 " />
            </div>
          </div>
        </div>

        <div className="flex justify-between md:w-[40%]">
          <div className="text-[12px] font-bold">
            <p className="mb-[15px]">CONTACT US</p>
            <p>PARTNERS</p>
          </div>

          <div className="text-[12px] font-bold w-[100px]">
            <p className="mb-[15px]">ADVERTISE</p>
            <p>TERMS OF SERVICE</p>
          </div>

          <div className="text-[12px] font-bold">
            <p className="mb-[15px]">WORK WITH US</p>
            <p>SUBSCRIPTIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
