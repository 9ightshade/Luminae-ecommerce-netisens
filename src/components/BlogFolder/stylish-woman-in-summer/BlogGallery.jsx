import React from 'react'
import bloggallery1 from "../../../assets/images/blog-images/bloggallery1.png"
import bloggallery2 from "../../../assets/images/blog-images/bloggallery2.png";
import bloggallery3 from "../../../assets/images/blog-images/bloggallery3.svg";
import bloggallery4 from "../../../assets/images/blog-images/bloggallery4.svg";

export const BlogGallery = () => {
  return (
    <div className="flex gap-1 mt-[20px]">
      <div>
        <img src={bloggallery1} alt="" />
      </div>
      <div className="gap-2">
        <div className="mb-4" >
          <img src={bloggallery2} alt="" />
        </div>
        <div className="mb-4">
          <img src={bloggallery3} alt="" />
        </div>
        <div className="mb-" >
          <img src={bloggallery4} alt="" />
        </div>
      </div>
    </div>
  );
}
