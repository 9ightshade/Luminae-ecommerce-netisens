import React from 'react'
import productimgforTBscreens from "../../../assets/images/product details images/productdetailsforTBscreens/productdetailsmaincloth.png"
import productdetailsminiimg1 from "../../../assets/images/product details images/productdetailsminiimg1.png";
import productdetailsminiimg2 from "../../../assets/images/product details images/productdetailsminiimg2.png";
import productdetailsminiimg3 from "../../../assets/images/product details images/productdetailsminiimg3.png";
import productdetailsminiimg4 from "../../../assets/images/product details images/productdetailsminiimg4.png";
import productdetailsminiimg5 from "../../../assets/images/product details images/productdetailsminiimg5.png";
import productdetailsmainclothforlargescreens from "../../../assets/images/product details images/productdetailsmainclothforlargescreens.png";
import { ProductDetailsInfo } from '../ProductDetailsInfo';

export const ProductimagesforTB = () => {
  return (
    <div className="md:flex md:justify-around md:my-[40px] md:items-center">
      <div className="hidden gap-1 md:flex">
        <div className=" h-[670px] lg:h-[500px]">
          <div className=" h-[130px] lg:h-[100px] mb-1">
            <img
              src={productdetailsminiimg1}
              className="h-full w-full"
              alt=""
            />
          </div>

          <div className=" h-[130px] lg:h-[100px] mb-1">
            <img
              src={productdetailsminiimg2}
              alt=""
              className="h-full w-full"
            />
          </div>

          <div className="lg:h-[100px] h-[130px] mb-1">
            <img
              src={productdetailsminiimg3}
              alt=""
              className="h-full w-full"
            />
          </div>

          <div className="lg:h-[100px] h-[130px] mb-1">
            <img
              src={productdetailsminiimg4}
              alt=""
              className="h-full w-full "
            />
          </div>

          <div className="lg:h-[100px] h-[130px] mb-1">
            <img
              src={productdetailsminiimg5}
              alt=""
              className="h-full w-full "
            />
          </div>
        </div>

        <div className=" h-[670px] lg:w-[400px] lg:h-[515px]">
          <img
            src={productimgforTBscreens}
            alt=""
            className="h-full block lg:hidden"
          />
          <img
            src={productdetailsmainclothforlargescreens}
            alt=""
            className="h-full hidden lg:block"
          />
        </div>
      </div>
      <div>
        <ProductDetailsInfo />
      </div>
    </div>
  );
}
