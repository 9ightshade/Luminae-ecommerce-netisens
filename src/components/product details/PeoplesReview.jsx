import React from 'react'
import star from "../../assets/images/top100cardpictures/star.svg";
import like from "../../assets/images/icons/like.png"
import dislike from "../../assets/images/icons/dislike.png";
import productdetailsminiimg1 from "../../assets/images/product details images/productdetailsminiimg1.png";
import productdetailsminiimg2 from "../../assets/images/product details images/productdetailsminiimg2.png";
import { PeoplesReviewArticle } from './PeoplesReviewArticle';

export const PeoplesReview = (props) => {
  return (
    <div className="md:w-[80%] justify-center items-center block m-auto">
      <div>
        <div className="items-center flex justify-between ">
          <div className="flex items-center gap-6">
            <div className="flex ">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div>
              <p className="text-[14px] font-bold">Its really amazing</p>
              <p className="text-[#9D9D9D] text-[12px]">By Sara macknail</p>
            </div>
          </div>

          <div className="flex items-center border rounded">
            <div className="flex items-center gap-1 px-2 h-full border">
              <img src={like} alt="" />
              <p>2</p>
            </div>
            <div className="flex items-center h-full gap-1 px-2 border">
              <img src={dislike} alt="" />
              <p>1</p>
            </div>
          </div>
        </div>

        <div>
          <PeoplesReviewArticle />
        </div>

        <div className="flex md:gap-2">
          <div className="h-[140px]">
            <img src={productdetailsminiimg1} alt="" className="h-[100%]" />
          </div>
          <div className="h-[140px]">
            <img src={productdetailsminiimg2} alt="" className="h-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
