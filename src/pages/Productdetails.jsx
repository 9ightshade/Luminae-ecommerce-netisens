import React from "react";
import { ProductdetailsNavbar } from "../components/product details/productdetailsNavbar";
import { Productdetailsimages } from "../components/product details/productdetailsimages";
import { ProductSizes } from "../components/product details/ProductSizes";
import { ProductDetailsColor } from "../components/product details/productDetailsColor";
import { ShippingLocation } from "../components/product details/ShippingLocation";
import { ProductdetailsQuantity } from "../components/product details/ProductdetailsQuantity";
import { ProductDetailsReview } from "../components/product details/ProductDetailsReview";
import { PeoplesReview } from "../components/product details/PeoplesReview";
import { ProductPaymentAndAmount } from "../components/product details/ProductPaymentAndAmount";
import { Shopnow } from "../components/product details/Shopnow";
import { Recommendations } from "../components/cardCheckout/Recommendations";
import { Footer } from "../components/footer/footer";

export const Productdetails = () => {
  return (
    <div>
      <ProductdetailsNavbar />
      <Productdetailsimages />

      <div className="m-[20px]">
        <p className="font-bold text-[20px]">SHORT PRINTED DRESS</p>
        <p className="font-bold text-[18px]">$39.99</p>

        <ProductSizes />

        <p className="text-orange-600 font-bold">Size guideline</p>

        <ProductDetailsColor />
        <ShippingLocation />
        <ProductdetailsQuantity />
        <ProductDetailsReview />
      </div>

      <hr className="w-full  border-[1.5px] my-[20px] mx-0 px-0" />

      <div className="m-[20px]">
        <PeoplesReview />
      </div>
      <ProductPaymentAndAmount/>
      <Shopnow/>
      <Recommendations/>
      <Footer/>
    </div>
  );
};
