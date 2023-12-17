import React from "react";

export const Laptopheader = ({ heading, paragraph, shopnow, image }) => {
  return (
    <>
      <div className="w-[100%] h-20vh border border-none hidden lg:flex mt-[15px]">
        <div className="w-[50%] lg:w-2/6 border border-none">
          <img className="w-[100%] " src={image} alt="" />
        </div>
        <div className="w-[70%] text-center leading-8 bg-blue-400 text-white border border-none border-green-600">
          <h1 className="mb-8 mt-[20px] text-2xl pt-12 font-bold xl:text-4xl xl:pt-[100px]">
            {heading}
          </h1>
          <p className="text-xl leading-10 pl-16 mb-4 pr-16">
           {paragraph}
          </p>
          <p
            className=" w-[170px] content-center items-center m-auto pl-4 pr-4 pt-[4px] pb-[4px]  text-[12px] border border-none mb-6 bg-blue-500"
            href="/"
          >
            {shopnow}
          </p>
        </div>
      </div>
    </>
  );
};
