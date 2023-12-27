import React from "react";
import messageicon from "../../../assets/images/blog-images/messageicon.png";
import watch from "../../../assets/images/blog-images/watch.png";

export const BlogAboutTech = () => {
  return (
    <div>
      <div className="bg-white shadow pb-[10px] w-[187.5px] md:w-[140px] ">
        <img className="" src={watch} />

        <div className="m-2">
          <p className="text-[12px] py-2 text-orange-500">tech</p>
          <p className="text-[15px] font-bold">Aptkdoe Smartwatch Women Men </p>
          <p className="text-[14px] font-normal text-neutral-600 ">
            It seems like you've mentioned "Aptkdoe Smartwatch" in combination
            ...
          </p>
        </div>

        <div className="flex items-center justify-start gap-3 m-2 my-[10px]">
          <p className="text-[12px] text-neutral-600">4 hours ago</p>

          <div className="flex items-center gap-2 ">
            <img src={messageicon} alt="" />
            <p className="text-[12px] text-neutral-600">56</p>
          </div>
        </div>
      </div>
    </div>
  );
};
