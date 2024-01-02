import React from 'react'
import { ProductSizes } from './ProductSizes';
import { ProductDetailsColor } from './productDetailsColor';
import { ProductdetailsQuantity } from './ProductdetailsQuantity';
import { ProductDetailsReview } from './ProductDetailsReview';
import { ShippingLocation } from './ShippingLocation';
import { ProductPaymentAndAmount } from './ProductPaymentAndAmount';
import { Shopnow } from './Shopnow';

export const ProductDetailsInfo = () => {
  return (
    <div className="block md:w-[300px] lg:w-[400px] ">
      <div className="m-[20px]">
        <p className="font-bold text-[20px]">SHORT PRINTED DRESS</p>
        <p className="font-bold text-[18px]">$39.99</p>

        <ProductSizes />

        <p className="text-orange-600 font-bold">Size guideline</p>

        <ProductDetailsColor />
        <ShippingLocation />
        <ProductdetailsQuantity />
        
        <div className='md:hidden'>
          <ProductDetailsReview />
        </div>

        <div className='hidden md:block'>
            <ProductPaymentAndAmount/>
            <Shopnow/>
        </div>
      </div>
    </div>
  );
}
