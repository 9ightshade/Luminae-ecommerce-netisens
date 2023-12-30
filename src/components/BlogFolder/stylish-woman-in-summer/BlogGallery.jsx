import React from 'react'
import bloggallery1 from "../../../assets/images/blog-images/bloggallery1.png"
import bloggallery2 from "../../../assets/images/blog-images/bloggallery2.png";
import bloggallery3 from "../../../assets/images/blog-images/bloggallery3.svg";
import bloggallery4 from "../../../assets/images/blog-images/bloggallery4.svg";
import bloggalleryTB1 from "../../../assets/images/blog-images/bloggalleryTB1.png";
import bloggalleryTB2 from "../../../assets/images/blog-images/bloggalleryTB2.png";
import bloggalleryTB3 from "../../../assets/images/blog-images/bloggalleryTB3.svg";
import bloggalleryTB4 from "../../../assets/images/blog-images/bloggalleryTB4.svg";
import bloggalleryLP1 from "../../../assets/images/blog-images/bloggalleryLP1.png";
import bloggalleryLP2 from "../../../assets/images/blog-images/bloggalleryLP2.png";
import bloggalleryLP3 from "../../../assets/images/blog-images/bloggalleryLP3.png";
import bloggalleryLP4 from "../../../assets/images/blog-images/bloggalleryLP4.png";

export const BlogGallery = () => {
  return (
    <div className="block m-auto w-[90%]  ">
      <div className="flex gap-1 mt-[20px] md:justify-center justify-center md:h-[200]">
        <div className="md:h-[527px]">
          <img
            src={bloggallery1}
            alt=""
            className="block md:hidden "
          />
          <img
            src={bloggalleryTB1}
            alt=""
            className="hidden md:max-lg:block md:max-lg:h-[100%]"
          />
          <img
            src={bloggalleryLP1}
            alt=""
            className="hidden lg:block lg:h-[100%]"
          />
        </div>

        <div className="gap-2 md:h-[580px] ">
          <div className="mb-2 md:mb-2 md:h-[170px] ">
            <img src={bloggallery2} alt="" className="block md:hidden" />
            <img
              src={bloggalleryTB2}
              alt=""
              className="hidden md:max-lg:block md:max-lg:h-[100%] "
            />
            <img
              src={bloggalleryLP2}
              alt=""
              className="hidden lg:block lg:h-[100%]"
            />
          </div>

          <div className="mb-2 md:max-lg:mb-2 md:h-[170px]">
            <img src={bloggallery3} alt="" className="block md:hidden" />
            <img
              src={bloggalleryTB3}
              alt=""
              className="hidden md:max-lg:block md:max-lg:h-[100%]"
            />
            <img
              src={bloggalleryLP3}
              alt=""
              className="hidden lg:block lg:h-[100%]"
            />
          </div>

          <div className="mb- md:h-[170px]">
            <img src={bloggallery4} alt="" className="block md:hidden" />
            <img
              src={bloggalleryTB4}
              alt=""
              className="hidden md:max-lg:block md:max-lg:h-[100%]"
            />
            <img
              src={bloggalleryLP4}
              alt=""
              className="hidden lg:block lg:h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
