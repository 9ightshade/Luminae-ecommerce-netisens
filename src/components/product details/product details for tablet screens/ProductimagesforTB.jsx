
import productimgforTBscreens from "../../../assets/images/product details images/productdetailsforTBscreens/productdetailsmaincloth.png"
import productdetailsminiimg1 from "../../../assets/images/product details images/productdetailsminiimg1.png";
import productdetailsminiimg2 from "../../../assets/images/product details images/productdetailsminiimg2.png";
import productdetailsminiimg3 from "../../../assets/images/product details images/productdetailsminiimg3.png";
import productdetailsminiimg4 from "../../../assets/images/product details images/productdetailsminiimg4.png";
import productdetailsminiimg5 from "../../../assets/images/product details images/productdetailsminiimg5.png";
import productdetailsmainclothforlargescreens from "../../../assets/images/product details images/productdetailsmainclothforlargescreens.png";
import { ProductDetailsInfo } from '../ProductDetailsInfo';
import { useContext, useState,useEffect } from 'react';
import { authContext } from '../../../context/MyContext';

export const ProductimagesforTB = () => {

//context to manage and update db and clicked product id
const {data, setData, productId, setProductId} = useContext(authContext);



console.log(
  `clicked product id:${productId}`
 );
 const clickedProduct = data.filter(product=>product.id == productId 
 )
 console.log(clickedProduct);

  return (
    <div className="md:flex md:justify-around md:my-[40px] md:items-center">
   {
    clickedProduct.map((product)=>{
return(

  <div className="hidden gap-1 md:flex " key={product.id} >
  <div className=" h-[670px] lg:h-[500px]">
    <div className=" h-[130px] lg:h-[100px] mb-1">
      <img
        src={product.image}
        className="h-full w-full"
        alt={product.description}
      />
    </div>

    <div className=" h-[130px] lg:h-[100px] mb-1">
      <img
        src={product.image}
        alt={product.category}
        className="h-full w-full"
      />
    </div>

    <div className="lg:h-[100px] h-[130px] mb-1">
      <img
        src={product.image}
        alt={product.title}
        className="h-full w-full"
      />
    </div>

    <div className="lg:h-[100px] h-[130px] mb-1">
      <img
        src={product.image}
        alt={product.description}
        className="h-full w-full"
      />
    </div>

    <div className="lg:h-[100px] h-[130px] mb-1">
      <img
        src={product.image}
        alt={product.description}
        className="h-full w-full "
      />
    </div>
  </div>

  <div className=" h-[670px] lg:w-[400px] lg:h-[515px]">
    <img
      src={product.image}
      alt={product.description}
      className="h-full block lg:hidden"
    />
    <img
      src={product.image}
      alt={product.description}
      className="h-full hidden lg:block"
    />
  </div>
</div>

)

    })
   }
 
      <div>
        <ProductDetailsInfo />
      </div>
    </div>
  );
}
