import React from "react";

export const MobileHero = ({heading, paragraph, link, image, color}) => {
  return (
    <div className="md:my-[50px] md:w-[43%]">
      <section className="flex w-full md:h-[300px]">
        <div
          className={`w-1/2 text-white ${color} text-left leading-[2] pl-[10px]  flex items-center justify-center`}
        >
          <div className="w-[250px] ">
            <h1 className="font-bold text-xl leading-9 w-full xmd:text-[29px] xxmd:text-[35px] lg:pr-4 ">
              {heading}
            </h1>
            <p className="xmd:text-[23px] xmd:mt-[20px] xxmd:mb-[20px] xxmd:text-[29px]">
              {paragraph}
            </p>
            <a className="underline xxmd:text-[20px] " href="/">
              {link}
            </a>
          </div>
        </div>
        <div className="w-1/2 h-full md:flex ">
          <img src={image} alt="" className="w-full h-auto" />
        </div>
      </section>
    </div>
  );
};
