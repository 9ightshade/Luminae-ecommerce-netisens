import React from 'react'
import star from "../../assets/images/flashsales/star.svg";

export const Starratings = () => {
  return (
    <div>
      <div className="flex">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <p className="no-of-people-who-rated"> (54) </p>
      </div>
    </div>
  );
}
