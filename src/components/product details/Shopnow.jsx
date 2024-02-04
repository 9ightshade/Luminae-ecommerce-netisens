import React, { useContext } from 'react'
import { authContext } from '../../context/MyContext';
import { useNavigate } from 'react-router-dom';

export const Shopnow = ({productId}) => {

const {cart,addToCart} = useContext(authContext);
const {data} = useContext(authContext);

const navigate = useNavigate();

const addToCarty = (num)=>{
if(num === 1){
  console.log(`this is product id:${productId}`);

const cartProduct =data.filter(products=>products.id == productId);
console.log(`product to push to cart:${cartProduct}`);
// console.log(`data at that product id index:${data[productId]}`);


addToCart([...cart, cartProduct]);


navigate('/Product')
}

if(num === 2){

console.log("shop now");
navigate('/Checkout')

}
};


console.log(cart);
// cart.map((e)=>{console.log(`this is each cart object${e.description}`);})
console.log(`this is the number of items of cart:${cart.length}`);
  return (
    <div>
      <div className="flex justify-center gap-3 my-[10px]">
        <p className="w-[180px] border text-center p-3 text-white bg-[#4172DC] border-[#4172DC] rounded md:text-[12px]" onClick={()=>{addToCarty(2)}} >
          SHOP NOW
        </p>
        <p className="w-[180px] border text-center p-3 border-black rounded md:text-[12px]" onClick={()=>{addToCarty(1)}} >
          ADD TO BASKET
        </p>
      </div>
    </div>
  );
}
