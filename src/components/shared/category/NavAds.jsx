import React from "react";
import clipper from "../../../assets/images/icons/header/clipper.png";

export const NavAds = () => {
  return (
    <div>
      <div>
        <div className="flex gap-1 items-center">
          <div>
            <img src={clipper} alt="" />
          </div>
          <div>
            <p>Weekly Men's Toiletries Coupons</p>
            <p className="text-gray-300">
              We extend exclusive discounts to our male clientele
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
