import React from 'react'
import profile from "../../assets/images/blog-images/profile.svg"
import Quote from "../../assets/images/blog-images/Quote.png";


export const Blogreview = () => {
  return (
    <div className="mb-[2px]">
      <div className="w-[200px] p-3 bg-slate-400 flex-col justify-between items-start hidden md:block ">
        
        <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
          <div className=" justify-start items-center flex">
            <img src={Quote} alt="" className="w-[45.02px] h-10 relative opacity-75" />
            <p className=" text-white text-[15px] font-bold">
              Wireless Earbuds
            </p>
          </div>

          <p className="self-stretch text-white text-[13px] ">
            "I've been using the XYZ Wireless Earbuds for a few weeks now, and
            they've completely...
          </p>
        </div>

        <div className="self-stretch justify-center items-center gap-3 flex mt-[10px] ">
          <img className="w-[42px] h-[42px] rounded-full" src={profile} />
          
          <div className="w-full justify-start items-start block ">
            <p className="self-stretch text-white text-sm font-medium">
              Nina Markez
            </p>
            <p className=" text-white text-xs font-normal">
              Programmer
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
