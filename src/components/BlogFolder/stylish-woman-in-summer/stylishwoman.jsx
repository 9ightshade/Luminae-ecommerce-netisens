import React from 'react'
import stylishwoman from "../../../assets/images/blog-images/stylishwoman.png"
import stylishwoman2 from "../../../assets/images/blog-images/stylishwoman2.png";
import rightarrow from "../../../assets/images/blog-images/rightarrow.svg"
import blondhair from "../../../assets/images/blog-images/blondhair.png";
import blondhairimg2 from "../../../assets/images/blog-images/blondHairImg2.png";
import stylishwomanimg2forLGscreen from "../../../assets/images/blog-images/stylishwomanimgforLGscreens.png";
import blogblondhairforLGscreens from "../../../assets/images/blog-images/blogblondhairforLGscreens.png";

export const Stylishwoman = () => {
  return (
    <div className="flex gap-2 md:max-lg:h-[300px] lg:h-[350px]">
      <div className="inline-flex  ">
        <div className=" p-[5px] w-[159px] md:max-lg:w-[200px] lg:w-[250px] bg-gradient-to-b from-gray-200 via-gray-200 to-zinc-300 pl-2">
          <p className="text-[12px] font-bold w-[160px] md:max-lg:text-[16px] lg:text-[15px]  md:max-lg:w-[156px] lg:w-[250px] md:max-lg:mt-[15px] lg:mt-[25px] py-2  ">
            Stylish woman in summer outfit isolated posing in fashion trend
            isolated
          </p>
          <p className="text-[9px] font-bold md:max-lg:font-medium text-gray-600 md:max-lg:text-[12px] block lg:hidden ">
            In this captivating scene, a stylish woman stands confidently
            against a pristine backdrop, capturing the essence of summer's
            allure. Bathed in the gentle...
          </p>

          <p className="text-[9px] font-bold w-[128.px] text-gray-600 md:max-lg hidden lg:block lg:text-[13px]">
            In this captivating scene, a stylish woman stands confidently
            against a pristine backdrop, capturing the essence of summer's
            allure. Bathed in the gentle sunlight, she emanates an air of
            effortless chic. Her outfit is a harmonious blend of contemporary
            trends and timeless elegance, perfectly attuned to the vibrant
            season.
          </p>

          <div className="flex gap-1 items-center justify-center bg-blue-500 text-[10px] lg:text-[14px] lg:p-2 lg:w-[147px] rounded w-[110px] px-[3px] py-[4px] text-white mt-[15px]">
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
            className="h-full hidden md:max-lg:block"
          />
          <img
            src={stylishwomanimg2forLGscreen}
            alt="stylish woman in summer outfit"
            className="h-full hidden lg:block"
          />
        </div>
      </div>
      <img src={blondhair} className="block md:hidden" alt="" />
      <img src={blondhairimg2} className="hidden md:max-lg:block" alt="" />
      <img
        src={blogblondhairforLGscreens}
        alt=""
        className="hidden lg:block lg:h-[350px]"
      />
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
