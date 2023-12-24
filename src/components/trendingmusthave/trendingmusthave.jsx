import React from "react";
import musthavemobile1 from "../../assets/images/trendingmusthave/musthavemobile1.png";
import musthavetablet1 from "../../assets/images/trendingmusthave/musthavetablet1.png";
import musthaveformobile2 from "../../assets/images/trendingmusthave/musthaveformobile2.png";
import musthavefortablet2 from "../../assets/images/trendingmusthave/musthavefortablet2.png";
import musthaveformobile3 from "../../assets/images/trendingmusthave/musthaveformobile3.png";
import musthavefortablet3 from "../../assets/images/trendingmusthave/musthavefortablet3.png";
import newarrivals from "../../assets/images/icons/header/newarrivals.svg";

const newarrivalsArray = [
  {
    id: 1,
    image1: musthaveformobile2,
    image2: musthavefortablet2,
    arrival: "New Arivals",
    name: "Cool & Sexy Calvin Klein",
    description: "Dotted dress-Casual",
    price: "$89",
    shopnow: "Shop Now",
  },
  {
    id: 0,
    image1: musthavemobile1,
    image2: musthavetablet1,
    arrival: "New Arivals",
    name: "Cool & Sexy Calvin Klein",
    description: "Dotted dress-Casual",
    rated: "(289)",
    price: "$89",
    shopnow: "Shop Now",
  },
  {
    id: 2,
    image1: musthaveformobile3,
    image2: musthavefortablet3,
    arrival: "New Arivals",
    name: "Beige coat Zara",
    description: "ream-Brown-Formal",
    price: "$89",
    shopnow: "Shop Now",
  },
];

export const TrendingNewArrivals = () => {
  return (
    <div className="flex md:max-lg:block md:justify-center overflow-x-auto items-center ">
      {newarrivalsArray.map((arrivals) => (
        <div
          className="mr-[15px] w-[357px] md:max-lg:w-[80%] md:max-lg:block md:max-lg:mx-auto lg:w-[380px] flex-col justify-start items-center sm:max-md:flex md:mb-6  "
          key={arrivals.id}
        >
          <div className="w-[357px] relative bg-white border-none md:w-[100%] ">
            <div className="w-[100%] h-[350px] md:bg-right md:max-lg:w-[100%] md:flex md:m-auto">
              <img
                className="w-[100%] h-[100%] md:bg-cover md:bg-center md:bg-no-repeat object-cover block md:hidden "
                src={arrivals.image1}
              />
              <img
                className=" hidden md:max-lg:block h-[100%] object-cover bg-center "
                src={arrivals.image2}
                alt=""
              />
              <img
                className=" hidden md:max-lg:hidden h-[100%] w-full lg:block object-cover bg-center "
                src={arrivals.image1}
                alt=""
              />
            </div>
            <div className="p-2.5 left-0 top-0 absolute  ">
              <div className="px-1.5 py-[3px] bg-emerald-600 rounded  ">
                <div className="justify-center items-center gap-1 flex">
                  <img src={newarrivals} alt="" className="w-4 h-4 relative" />
                  <div className="text-white text-[12px] font-normal ">
                    {arrivals.arrival}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[357px] h-[93px] p-5 bg-neutral-800 rounded-bl-lg rounded-br-lg justify-between items-center inline-flex md:w-[100%]">
            <div className="grow shrink basis-0 h-[58px] flex-col justify-start items-start gap-1 inline-flex mb-[5px]">
              <div className=" text-white text-[16px] lg:text-[14px]  leading-[25px]">
                {arrivals.name}
              </div>
              <div className="opacity-90 text-stone-300  leading-tight">
                {arrivals.description}
              </div>
            </div>
            <div className="px-6 py-3 lg:py-[10px] lg:px-[10px]  rounded-lg border border-zinc-300 flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="gap-2 flex items-center">
                <div className="text-white text-sm text-[16px] lg:text-[14px] ">
                  {arrivals.price}
                </div>
                <div className="text-right text-white leading-tight lg:text-[14px] ">
                  {arrivals.shopnow}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
