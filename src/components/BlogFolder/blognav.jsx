import React from 'react'
import { Cartbag } from '../shared/cartbag';
import { Logo } from '../shared/logo';
import hamburger from "../../assets/images/icons/header/Menue.svg";
import { BlogSocialMedia } from './BlogSocialMedia';

export const Blognav = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-[40px] md:hidden mb-[30px] mx-4 ">
        <img src={hamburger} alt="menu-toggle" />
        <Logo text="Blog" />
        <BlogSocialMedia />
      </div>

      <div className="items-center justify-between mt-[40px] md:flex hidden mb-[30px] mx-4 ">
        <Logo text="Luminae" />

        <ul className='flex justify-between gap-6 text-[#939699]'>
          <li>News</li>
          <li>Fashion</li>
          <li>Health</li>
          <li>Tech</li>
          <li>Science</li>
        </ul>

        <BlogSocialMedia />
      </div>
    </div>
  );
}
