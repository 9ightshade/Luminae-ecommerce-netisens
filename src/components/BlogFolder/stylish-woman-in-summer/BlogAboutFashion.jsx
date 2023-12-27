import React from 'react'
import messageicon from "../../../assets/images/blog-images/messageicon.png";
import fashionblog from "../../../assets/images/blog-images/fashionblog.png";


export const BlogAboutFashion = () => {
  return (
    <div>
      <div className="bg-white shadow pb-[10px] w-[187.5px] md:w-[150px] ">
        <div>
          <img className="" src={fashionblog} />
        </div>

        <div className="m-2">
          <p className="text-[12px] py-2 text-orange-500">Fashion</p>
          <p className="text-[15px] font-bold">Stylish young man out in town</p>
          <p className="text-[14px] font-normal text-neutral-600 ">
            In the heart of the bustling city, a stylish young man navigates the
            urban landscape...
          </p>
        </div>

        <div className="flex items-center justify-start gap-3 m-2 my-[10px]">
          <p className="text-[12px] text-neutral-600">3 hours ago</p>

          <div className="flex items-center gap-2 ">
            <img src={messageicon} alt="" />
            <p className="text-[12px] text-neutral-600">21</p>
          </div>
        </div>
      </div>
    </div>
  );
}
