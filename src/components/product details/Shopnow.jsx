import React, { useContext } from 'react'
import { authContext } from '../../context/MyContext';

export const Shopnow = ({productId}) => {

const {cart,addToCart} = useContext(authContext);
const {data, setData} = useContext(authContext);


const addToCarty = ()=>{
console.log(`this is product id:${productId}`);

const cartProduct =data.filter(products=>products.id == productId);
console.log(`product to push to cart:${cartProduct}`);
// console.log(`data at that product id index:${data[productId]}`);
addToCart(...cart, cartProduct);

// console.log(`cart updated:${cart}`);

};


console.log(`cart updated:${cart}`);
cart.map((e)=>{console.log(`this is each cart object${e.description}`);})

  return (
    <div>
      <div className="flex justify-center gap-3 my-[10px]">
        <p className="w-[180px] border text-center p-3 text-white bg-[#4172DC] border-[#4172DC] rounded md:text-[12px]">
          SHOP NOW
        </p>
        <p className="w-[180px] border text-center p-3 border-black rounded md:text-[12px]" onClick={addToCarty} >
          ADD TO BASKET
        </p>
      </div>
    </div>
  );
}
