import React from 'react'
import stylishwoman from "../../../assets/images/blog-images/stylishwoman.png"
import stylishwoman2 from "../../../assets/images/blog-images/stylishwoman2.png";
import rightarrow from "../../../assets/images/blog-images/rightarrow.svg"
import blondhair from "../../../assets/images/blog-images/blondhair.png";
import blondhairimg2 from "../../../assets/images/blog-images/blondHairImg2.png";

export const Stylishwoman = () => {
  return (
    <div className="flex gap-2 ">
      <div className="inline-flex  ">
        <div className=" p-[5px] w-[159px] bg-gradient-to-b from-gray-200 via-gray-200 to-zinc-300 pl-2">
          <p className="text-[12px] font-bold w-[160px] py-2  ">
            Stylish woman in summer outfit isolated posing in fashion trend
            isolated
          </p>
          <p className="text-[9px] font-bold w-[128.px] text-gray-600 ">
            In this captivating scene, a stylish woman stands confidently
            against a pristine backdrop, capturing the essence of summer's
            allure. Bathed in the gentle...
          </p>

          <div className="flex gap-1 items-center bg-blue-500 text-[10px] rounded w-[100px] px-[3px] py-[4px] text-white mt-[5px]">
            <p>READ MORE</p>
            <img src={rightarrow} alt="arrow right" />
          </div>
        </div>

        <div className="h-[100%]">
          <img
            src={stylishwoman}
            alt="stylish woman in summer outfit"
            className="h-full block md:hidden"
          />
          <img
            src={stylishwoman2}
            alt="stylish woman in summer outfit"
            className="h-full hidden md:block"
          />
        </div>
      </div>
      <img src={blondhair} className="block md:hidden" alt="" />
      <img src={blondhairimg2} className="hidden md:block" alt="" />
    </div>
  );
}




{/* <div className="w-[73.5%] h-[195px] bg-gradient-to-b from-gray-200 via-gray-200 to-zinc-300 rounded-sm justify-start items-center flex pb-4 Stylishwoman">
  <div className="w-[161px]  pl-2 flex-col  gap-[8.40px] flex">
    <div className=" h-[142px] flex-col justify-start items-start flex pt-2">
      <p className=" text-neutral-800 text-[12px] font-semibold mt-2 ">
        Stylish woman in summer outfit isolated posing in fashion trend isolated
      </p>
      <p className=" text-neutral-600 text-[10px] font-normal mt-1 mb-1">
        In this captivating scene, a stylish woman stands confidently against a
        pristine backdrop, capturing the essence of summer's allure. Bathed in
        the gentle...
      </p>
    </div>

    <div className="justify-center items-center flex gap-1.5 border-blue-500 bg-blue-500 px-2 py-1 rounded w-[108px] ">
      <p className="text-right text-white text-[10px] font-medium uppercase ">
        Read more
      </p>
      <img src={rightarrow} alt="" />
    </div>
  </div>
  <div className="h-[100%]">
    <img className=" rounded-tr-sm rounded-br-sm h-auto" src={stylishwoman} />
  </div>
</div>; */}
