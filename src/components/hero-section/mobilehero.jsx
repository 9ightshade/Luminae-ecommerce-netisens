import React from "react";

export const MobileHero = ({heading, paragraph, link, image, color}) => {
  return (
    <div className="md:hidden mt-[20px] ">
      <section className="flex w-full">
        <div className={`w-1/2 text-white ${color} text-left leading-[2] pl-[10px]  flex items-center justify-center`}>
          <div className="w-[250px] ">
            <h1 className="font-bold text-xl leading-9 w-full xmd:text-[29px] xxmd:text-[35px] ">
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
        <div className="w-1/2  ">
          <img src={image} alt="" className="w-full h-[100%]" />
        </div>
      </section>
    </div>
  );
};
