import React from 'react'
import { ProductSizes } from './ProductSizes';
import { ProductDetailsColor } from './productDetailsColor';
import { ProductdetailsQuantity } from './ProductdetailsQuantity';
import { ProductDetailsReview } from './ProductDetailsReview';
import { ShippingLocation } from './ShippingLocation';
import { ProductPaymentAndAmount } from './ProductPaymentAndAmount';
import { Shopnow } from './Shopnow';
import { useContext, useState,useEffect } from 'react';
import { authContext } from '../../context/MyContext';


export const ProductDetailsInfo = () => {

  const {data, setData, productId, setProductId} = useContext(authContext);
  const clickedProduct = data.filter(product=>product.id == productId 
  );


  return (
    <div className="block md:w-[300px] lg:w-[400px] ">
      
        {clickedProduct.map((product)=>{
console.log(product.rating.count);

return(
  <div className="m-[20px]" key={product.id} >
 <p className="font-bold text-[20px]">{product.title}</p>
        <p className="font-bold text-[18px]">${product.price}</p>

        <ProductSizes />

        <p className="text-orange-600 font-bold">Size guideline</p>

        <ProductDetailsColor />
        <ShippingLocation />
        <ProductdetailsQuantity />
        
        <div className='md:hidden'>
          <ProductDetailsReview productDescription={product.description}  productRating={product.rating.count}  />
        </div>

        <div className='hidden md:block'>
            <ProductPaymentAndAmount/>
            <Shopnow/>
        </div>
         </div>

)})
       }
     
    </div>
  );
}
