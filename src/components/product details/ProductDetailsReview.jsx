import React from 'react'
import star from "../../assets/images/top100cardpictures/star.svg"
import { ReviewRange } from './ReviewRange';


export const ProductDetailsReview = () => {
 

  
  return (
    <div>
      <div>
        <div className="flex justify-between my-[20px] text-[14px] font-bold items-center md:justify-center md:gap-12">
          <p className="text-gray-600">PRODUCT DETAILS</p>
          <p>
            REVIEW <span>(5)</span>
          </p>
          <p className="text-gray-600">SHIPPING & PAYMENT</p>
        </div>
        <hr className="my-[10px] w-full border-[1px]" />
      </div>

      <div className="mt-[20px] items-center justify-between h-[212px] flex gap-2 md:justify-center md:gap-12">
        <div className="w-[45%] h-[200px] md:w-[30%]">
          <p className="font-bold text-[20px]">Total review rate</p>
          <p className="text-[13px] mt-[15px]">
            Average rating (10 Reviews &125 Ratings)
          </p>

          <div className="flex gap-3 mt-[15px]">
            <div className="flex ">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p>4.5/5</p>
          </div>
          <p className=" text-[13px] p-2 rounded font-bold border-[1.5px] border-black mt-[35px] ">
            Write a customer review
          </p>
        </div>
        <div>
          <ReviewRange />
        </div>
        
      </div>
     <hr className='h-[2px] my-[20px] w-full' />
    </div>
  );
}
