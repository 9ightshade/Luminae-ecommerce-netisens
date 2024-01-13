import React from 'react'
import star from "../../assets/images/flashsales/star.svg";

export const Starratings = () => {

const rating = Math.floor(Math.random())
console.log(rating);
  return (
    <div>
      <div className="flex">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <p className="text-[orange]">(54)</p>
      </div>
    </div>
  );
}
