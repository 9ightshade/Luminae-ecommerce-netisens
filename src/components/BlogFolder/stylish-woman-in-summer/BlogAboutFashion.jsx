import React from 'react'
import messageicon from "../../../assets/images/blog-images/messageicon.png";
import fashionblog from "../../../assets/images/blog-images/fashionblog.png"; 
import fashionblogforLGscreen from "../../../assets/images/blog-images/fashionimgforLGscreen.png";


export const BlogAboutFashion = () => {
  return (
    <div>
      <div className="bg-white shadow pb-[10px] w-[187.5px] md:w-[161.8px] md:h-[500px] ">
        <div>
          <img className="" src={fashionblog} />
        </div>

        <div className="m-2">
          <p className="text-[12px] py-2 text-orange-500">Fashion</p>
          <p className="text-[15px] font-bold">Stylish young man out in town</p>
          <p className="text-[14px] font-normal text-neutral-600 block md:hidden ">
            In the heart of the bustling city, a stylish young man navigates the
            urban landscape...
          </p>
          <p className="text-[14px] font-normal text-neutral-600 hidden md:max-lg:block ">
            In the heart of the bustling city, a stylish young man navigates the
            urban landscape with an air of contemporary confidence. His ensemble
            effortlessly captures the essence of city chic...
          </p>
          <p className='hidden lg:block'>
            In the heart of the bustling city, a stylish young man navigates the
            urban landscape with an air of contemporary confidence. His ensemble
            effortlessly captures the essence of city chic...
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
