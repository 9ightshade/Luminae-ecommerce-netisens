import React from 'react'
import profile from "../../assets/images/blog-images/profile.svg"


export const Blogreview = () => {
  return (
    <div>
      <div className="w-[204px] h-[239px] p-3 bg-slate-400 flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-[148px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch justify-start items-center inline-flex">
            <div className="w-[45.02px] h-10 relative opacity-75" />
            <div className="w-[265px] text-white text-xl font-bold font-['Lato'] leading-tight">
              Wireless Earbuds
            </div>
          </div>
          <div className="self-stretch text-white text-base font-normal font-['Lato'] leading-[25px]">
            "I've been using the XYZ Wireless Earbuds for a few weeks now, and
            they've completely...
          </div>
        </div>
        <div className="self-stretch justify-center items-center gap-3 inline-flex">
          <img
            className="w-[42px] h-[42px] rounded-full"
            src={profile}
          />
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-white text-sm font-medium font-['Lato'] leading-tight">
              Nina Markez
            </div>
            <div className="self-stretch text-white text-xs font-normal font-['Lato'] leading-tight">
              Programmer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
