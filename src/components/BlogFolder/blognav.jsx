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
    </div>
  );
}
