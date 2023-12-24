import React from 'react'
import facebook from '../../assets/images/icons/header/Facebook.png'
import twitter from "../../assets/images/icons/header/Twitter.png";
import instagram from "../../assets/images/icons/header/Instagram.png";

export const BlogSocialMedia = () => {
  return (
    <div className="flex items-center gap-3 ">
      <div className="rounded-full h-full w-full border-gray-300 border-[1px] p-1">
        <img src={facebook} alt="" className="h-full w-full " />
      </div>
      <div className="rounded-full h-full w-full border-gray-300 border-[1px] p-1">
        <img src={twitter} alt="" />
      </div>
      <div className="rounded-full h-full w-full border-gray-300 border-[1px] p-1">
        <img src={instagram} alt="" />
      </div>
    </div>
  );
}
