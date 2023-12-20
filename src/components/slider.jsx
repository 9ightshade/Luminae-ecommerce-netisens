import React from "react";
import rightarrow from "../../src/assets/images/icons/header/rightarrow.svg";
import leftarrow from "../../src/assets/images/icons/header/leftarrow.svg";
import sliderImg from "../../src/assets/images/icons/header/sliderImg.png";

export const Slider = () => {
  return (
    <div className="w-[100%] p-[30px] bg-rose-200 justify-start items-center gap-[70px] hidden md:flex ">
      <div className=" relative">
        <img src={leftarrow} alt="" />
      </div>
      <div className="grow w-[50%] shrink h-[80px] py-px-[10px] flex-col justify-center items-start gap-4 inline-flex ">
        <p className=" text-slate-600 text-[20px] font-bold uppercase leading-tight tracking-wide xl:text-[30px]">
          MagSafe
        </p>
        <div className=" py-px items-center  ">
          <div className=" text-neutral-600 text-[18px] font-medium xl:text-[25px] ">
            Snap on a magnetic case, wallet, or both. And get faster wireless
            charging.
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <img className="grow shrink basis-0 w-[100%]" src={sliderImg} />
      </div>
      <div className=" relative ">
        <img src={rightarrow} alt="" />
      </div>
    </div>
  );
};
