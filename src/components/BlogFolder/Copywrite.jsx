import React from 'react'
import arrowup from "../../assets/images/icons/arrowup.svg"

export const Copywrite = () => {
  return (
    <div>
      <div className="justify-center text-gray-400 items-center hidden md:flex">
        <div className="w-[80%] flex justify-between ">
          <p className="text-[12px] w-[140px]">
            Copy write are reserved for Luminae
          </p>
          <div className="flex items-center">
            <p className=" text-white">Top</p>
            <img src={arrowup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}