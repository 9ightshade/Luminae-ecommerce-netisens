import React from 'react'
import plus from "../../assets/images/cartcheckout/Plus.svg"

export const ProductPaymentAndAmount = () => {
  return (
    <div>
      <div className=" px-6 md:px-3 py-3 bg-gray-200 rounded flex-col justify-start items-start gap-2 inline-flex m-[20px] md:m-[5px] border-red-500">
        <p className=" text-neutral-800 text-lg font-bold md:text-[15px]">$79.98</p>
        <hr className="h-[3px] w-full" />

        <div className="justify-start items-start gap-[5px] inline-flex">
          <img src={plus} alt="" className="h-4 w-4 bg-[#C4C4C4] rounded-full" />
          <p className="text-neutral-600 text-xs md:text-[10px] ">
            Add shipping insurance for $9
            <span className="text-neutral-600 text-[10px]">
              ( declared value only if the package gets lost, stolen or
              damaged.)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
