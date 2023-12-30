import React from "react";
import messageicon from "../../../assets/images/blog-images/messageicon.png";
import blogtech2 from "../../../assets/images/blog-images/blogtech2.png";
import blogtech2imgforLGscreens from "../../../assets/images/blog-images/blogtech2imgforLGscreen.png";

export const BlogAboutTech2 = () => {
  return (
    <div>
      <div className="bg-white shadow pb-[10px] w-[161.8px] hidden md:block md:h-[500px] lg:w-[250px] lg:h-[442px]">
        <img className="block lg:hidden" src={blogtech2} />
        <img
          src={blogtech2imgforLGscreens}
          alt=""
          className="hidden lg:block"
        />

        <div className="m-2">
          <p className="text-[12px] py-2 text-orange-500">tech</p>
          <p className="text-[15px] font-bold">Anker 325 power bank </p>
          <p className="text-[14px] font-normal text-neutral-600 block lg:hidden ">
            Anker is a well-known brand for power banks and other electronic
            accessories, and they offer a wide range of power bank models with
            varying capacities, features, and specifications. To find detailed
            information...
          </p>
          <p className="hidden lg:block">
            Anker 325 power bank, 20000mAh external battery PowerIQ technology
            USB-C port, enormous energy density, compatible with iPhone, Samsung
            Galaxy, iPad and more...
          </p>
        </div>

        <div className="flex items-center justify-start gap-3 m-2 my-[10px]">
          <p className="text-[12px] text-neutral-600">4 hours ago</p>

          <div className="flex items-center gap-2 ">
            <img src={messageicon} alt="" />
            <p className="text-[12px] text-neutral-600">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
