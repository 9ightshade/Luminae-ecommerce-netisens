import { useContext } from "react";
import cartbag from "../../assets/images/icons/header/cartbag.svg";
import whitecartbag from "../../assets/images/icons/header/whitecard.svg";
import { authContext } from "../../context/MyContext";

export const Cartbag = () => {

const {cart, addToCart} = useContext(authContext);
let cartValue = cart.length;

  return (
    <div className="flex items-center gap-1">
      <div>
        <img src={cartbag} alt="" className='block md:hidden' />
        <img src={whitecartbag} alt="" className='hidden md:block' />
      </div>
      <p className="hidden md:block">Card</p>
      <p className="bg-green-400 w-[25px] h-[25px] rounded-[50%] text-center text-white ">
        {cartValue}
      </p>
    </div>
  );
};
