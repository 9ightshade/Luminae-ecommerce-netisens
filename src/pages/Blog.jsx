import React from "react";
import { Blognav } from "../components/BlogFolder/blognav";
import { BlogHeroMb } from "../components/BlogFolder/BlogHeroMb";
import { Stylishwoman } from "../components/BlogFolder/stylish-woman-in-summer/stylishwoman";
import { BlogAboutFashion } from "../components/BlogFolder/stylish-woman-in-summer/BlogAboutFashion";
import { BlogAboutTech } from "../components/BlogFolder/stylish-woman-in-summer/BlogAboutTech";
import { UnveilingTimeless } from "../components/BlogFolder/stylish-woman-in-summer/UnveilingTimeless";
import { BlogGallery } from "../components/BlogFolder/stylish-woman-in-summer/BlogGallery";
import { BlogTopFooter } from "../components/BlogFolder/Blog footer/BlogTopFooter";
import { BlogBottomFooter } from "../components/BlogFolder/Blog footer/BlogBottomFooter";
import { BlogHeroTB } from "../components/BlogFolder/BlogHeroTB";
import { Blogreview } from "../components/BlogFolder/Blogreview";

export const Blog = () => {
  return (
    <div>
      <Blognav />
      <BlogHeroMb />
      <BlogHeroTB />

      <div className="p-[20px]">
        <div>
          <Stylishwoman />
          <div className="flex justify-start md:justify-start gap-3  mt-3  ">
            <BlogAboutFashion />
            <BlogAboutTech />
          </div>

          <div className="flex justify-center md:justify-start gap-3  mt-3 ">

          </div>
          
          <UnveilingTimeless />
          <BlogGallery />
        </div>
      </div>

      <div className="">
        <BlogTopFooter />
        <BlogBottomFooter />
      </div>
    </div>
  );
};
