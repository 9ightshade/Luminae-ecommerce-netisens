
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <div className=" " >

      <div className="m-0 mt-[50px] gap-4 justify-center text-left md:pt-[130px] px-[40px] bg-[#D1E2EB] lg:flex lg:items-center pb-[30px] md:max-lg:pb-[0px]">
       
        <div className=" items-center justify-center gap-[50px] flex pt-[50px] md:pt-0">
          <div className="w-[200px] text-gray-600">
            <p className="pb-[10px] font-bold text-black">Company</p>
           <NavLink to="/About" >
           <p>About us</p>
           </NavLink>
            <p>Our Store</p>
            <p>Contact us</p>
          </div>
          <div className="py-[0px] w-[200px] text-gray-600">
            <p className="pb-[10px] font-bold text-black">
              Career opportunities
            </p>
            <p>Selling programs</p>
            <p>Advertise</p>
            <p>Cooperation</p>
          </div>
        </div>

        <div className=" gap-[50px] flex justify-center pb-[50px] mt-4 lg:pb-0">
          <div className=" py-[20px]  w-[200px] text-gray-600">
            <p className="pb-[10px] font-bold text-black">How to Buy</p>
            <p>Making Payments</p>
            <p>Delivery Options</p>
            <p>Buyer Protection</p>
            <p>New User Guide</p>
          </div>
          <div className="py-[20px] w-[200px] text-gray-600">
            <p className="pb-[10px] font-bold text-black">Help</p>
            <p>Contact us</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
