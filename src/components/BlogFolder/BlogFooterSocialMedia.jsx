import React from "react";
import blogFacebook from "../../assets/images/blog-images/blogFacebook.png";
import blogTwitter from "../../assets/images/blog-images/blogTwitter.png";
import blogInstagram from "../../assets/images/blog-images/blogInstagram.png";
import blogYouTube from "../../assets/images/blog-images/blogYouTube.png";

export const BlogFooterSocialMedia = () => {
  return (
    <div className=" items-center gap-3 ">
        <p className=" text-gray-400 text-[12px]">
          Follow Us on Social Networks
        </p>

      <div className="flex gap-4 mt-[10px]">
        <img src={blogFacebook} alt="" />
        <img src={blogTwitter} alt="" />
        <img src={blogInstagram} alt="" />
        <img src={blogYouTube} alt="" />
      </div>
    </div>
  );
};
