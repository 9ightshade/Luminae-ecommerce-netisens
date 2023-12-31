import React from 'react'
import { ProductdetailsNavbar } from '../components/product details/productdetailsNavbar'
import { Productdetailsimages } from '../components/product details/productdetailsimages'
import { ProductSizes } from '../components/product details/ProductSizes';

export const Productdetails = () => {
  return (
    <div>
      <ProductdetailsNavbar />
      <Productdetailsimages />

      <div>
        <p>SHORT PRINTED DRESS</p>
        <p>$39.99</p>
      </div>

      <ProductSizes/>
    </div>
  );
}
