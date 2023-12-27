import React from 'react'
import blogFacebook from "../../../assets/images/blog-images/blogFacebook.png";
import blogTwitter from "../../../assets/images/blog-images/blogTwitter.png";
import blogInstagram from "../../../assets/images/blog-images/blogInstagram.png";
import blogYouTube from "../../../assets/images/blog-images/blogYouTube.png";

export const BlogBottomFooter = () => {
  return (
    <div>
      <div className="p-[20px] bg-[#262626]">
        <div>
          <ul className="flex justify-between flex-wrap text-[13px] gap-2 leading-none text-gray-300">
            <li>Contact Us</li>
            <li>Advertise</li>
            <li>Work with Us</li>
            <li>Career</li>
            <li>Partners</li>
            <li>Subscriptions</li>
          </ul>
        </div>

        <div>
          <ul className="flex justify-between flex-wrap text-[13px] gap-2 leading-none w-[300px] mt-4 text-gray-300">
            <li>Site Map</li>
            <li>Home Delivery</li>
            <li>Customers Service</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <hr className="w-full my-3 border-gray-400" />

        <p className="text-gray-400 text-[12px]">
          Follow Us on Social Networks
        </p>

        <div className='flex gap-4 mt-[10px]' >
          <img src={blogFacebook} alt="" />
          <img src={blogTwitter} alt="" />
          <img src={blogInstagram} alt="" />
          <img src={blogYouTube} alt="" />
        </div>
      </div>
    </div>
  );
}
