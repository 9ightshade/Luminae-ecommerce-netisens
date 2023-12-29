import React from 'react'
import { BlogFooterSocialMedia } from '../BlogFooterSocialMedia';
import { Copywrite } from '../Copywrite';


export const BlogBottomFooter = () => {
  return (
    <div>
      <div className="p-[20px] bg-[#262626]">
        <div className="md:flex md:justify-around">
          <div className="md:w-[45%]">
            <div className="">
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
              <ul className="flex justify-between flex-wrap text-[13px] md:max-lg:text-[13px] gap-2 leading-none w-[370px] mt-4 text-gray-300">
                <li>Site Map</li>
                <li>Home Delivery</li>
                <li>Customers Service</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <BlogFooterSocialMedia />
          </div>
        </div>

        <hr className="w-full my-3 border-gray-400" />

        <div className="block md:hidden">
          <BlogFooterSocialMedia />
        </div>
        
        <Copywrite />
      </div>
    </div>
  );
}
