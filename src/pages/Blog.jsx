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
import { BlogHeroLg } from "../components/BlogFolder/BlogHeroLg";
import { BlogAboutTech2 } from "../components/BlogFolder/stylish-woman-in-summer/BlogAboutTech2";

export const Blog = () => {
  return (
    <div>
      <Blognav />
      <BlogHeroMb />
      <BlogHeroTB />
      <BlogHeroLg />

      <div className="p-[20px]">
        <div>
          <div className="flex gap-2 md:justify-center m-auto ">
            <div className="">
                <Stylishwoman />
              <div className="flex md:justify-between gap-3 mt-3 justify-center">
                <BlogAboutFashion />
                <BlogAboutTech />
                <BlogAboutTech2 />
              </div>
            </div>
            <div className="">
              <Blogreview />
              <Blogreview />
              <Blogreview />
              <Blogreview />
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-3  mt-3 "></div>

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
