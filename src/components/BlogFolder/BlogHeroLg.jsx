import React from "react";
import bookmark from "../../assets/images/blog-images/Bookmark.png";
import clock from "../../assets/images/blog-images/Clock.png";
import messageicon from "../../assets/images/blog-images/messageicon.png";
import rightarrow from "../../assets/images/blog-images/rightarrow.svg";
import heart from "../../assets/images/blog-images/Heart.png";

export const BlogHeroLg = () => {
  return (
    <div className="hidden lg:flex items-start py-[40px] blogHeroLg ">
      <div className="my-[80px] mx-[50px]  ">
        <img src={bookmark} alt="" />
      </div>
      <div className=" w-[387px] lg:w-[500px] flex-col justify-start items-start gap-[41px] inline-flex ">
        <div className=" flex-col justify-start items-start gap-3 flex">
          <div className=" flex-col justify-start items-start gap-6 flex">
            <p className="text-white text-[30px] font-extrabold uppercase w-[300px] lg:w-[400px]">
              Stunning barefooted woman of 2023
            </p>
            <p className=" text-white text-[13px] font-normal uppercase lg:w-[400px]">
              In the heart of a chic urban studio, the atmosphere buzzed with
              excitement as a trendy fur coat took cente r stage during a
              vibrant photoshoot.
            </p>
            <div className="  grow shrink basis-0 flex-col justify-start items-start gap-3 flex">
              <div className=" justify-start items-start gap-[33px] inline-flex">
                <div className="justify-start items-center gap-[5px] flex">
                  <img src={clock} alt="" />
                  <p className="text-white text-xs font-normal font-['Lato'] leading-tight">
                    20 July 2023
                  </p>
                </div>

                <div className="justify-start items-center gap-[5px] flex">
                  <img src={heart} alt="" />
                  <p className="text-white text-xs font-normal font-['Lato'] leading-tight">
                    830
                  </p>
                </div>

                <div className="justify-start items-center gap-[5px] flex">
                  <img src={messageicon} alt="" />
                  <p className="text-white text-xs font-normal font-['Lato'] leading-tight">
                    19
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 py-2.5 rounded border border-zinc-300 justify-start gap-2.5 flex">
              <p className="text-white">READ MORE</p>
              <img src={rightarrow} alt="" />
            </div>
          </div>
        </div>

        <div className="  flex-col justify-start items-end gap-6 flex">
          <div className=" relative justify-start items-start ">
            <hr className="border lg:w-[600px]  w-[400px] border-zinc-300 " />
            <hr className="  border-[1.9px] border-yellow-400 absolute w-[170px] bottom-0" />
          </div>

          <div className="justify-center items-start gap-2 inline-flex w-">
            <div className=" grow shrink basis-0 justify-start items-start gap-2 ">
              <p className=" text-yellow-400 text-xs font-bold uppercase leading-[15px] mb-[8px] w-[115px] lg:w-[170px]">
                Elevating Everyday Style
              </p>
              <p className="  leading-[18px] text-white text-[10px] font-normal  uppercase ">
                Explore the art of blending high-end and budget-friendly fashion
                items to create stylish and versatile outfits.
              </p>
            </div>

            <div className="grow shrink basis-0  justify-center items-start gap-2 ">
              <p className=" text-white text-xs font-bold uppercase pb-[8px] lg:w-[170px]">
                Sustainable Fashion
              </p>
              <p className="  leading-[18px] text-white text-[10px] font-normal  uppercase ">
                Discuss the growing importance of sustainable fashion and its
                impact on the environment.
              </p>
            </div>

            <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
              <p className="grow shrink basis-0 text-white text-xs font-bold font-['Lato'] uppercase leading-[15px] tracking-wide lg:w-[200px] ">
                The Evolution of Workwear
              </p>
              <p className="  text-white text-[10px] font-normal font-['Lato'] uppercase leading-[18px] tracking-wide">
                Showcase versatile outfit ideas that strike a balance between
                professionalism and personal expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
