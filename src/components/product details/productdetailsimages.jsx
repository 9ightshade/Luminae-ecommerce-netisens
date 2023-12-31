import React from 'react'
import productdetailsmainclothe from "../../assets/images/product details images/productdetailsmainclothe.png";
import productdetailsminiimg1 from "../../assets/images/product details images/productdetailsminiimg1.png";
import productdetailsminiimg2 from "../../assets/images/product details images/productdetailsminiimg2.png";
import productdetailsminiimg3 from "../../assets/images/product details images/productdetailsminiimg3.png";
import productdetailsminiimg4 from "../../assets/images/product details images/productdetailsminiimg4.png";
import productdetailsminiimg5 from "../../assets/images/product details images/productdetailsminiimg5.png";

export const Productdetailsimages = () => {
  return (
    <div>
      <div>
        <img src={productdetailsmainclothe} alt="" className="mt-[30px]" />
      </div>

      <div className="flex justify-center gap-1 my-1">
        <div className="h-[140px]">
          <img src={productdetailsminiimg1} alt="" className="h-[100%]" />
        </div>
        <div className="h-[140px]">
          <img src={productdetailsminiimg2} alt="" className="h-[100%]" />
        </div>
        <div className="h-[140px]">
          <img src={productdetailsminiimg3} alt="" className="h-[100%]" />
        </div>
        <div className="h-[140px]">
          <img src={productdetailsminiimg4} alt="" className="h-[100%]" />
        </div>
        <div className="h-[140px]">
          <img src={productdetailsminiimg5} alt="" className="h-[100%]" />
        </div>
      </div>
    </div>
  );
}
