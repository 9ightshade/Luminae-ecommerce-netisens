import React from "react";
import facebook from "../../../assets/images/medialinks/FB.svg";
import instagram from "../../../assets/images/medialinks/instagram.svg";
import telegram from "../../../assets/images/medialinks/telegram.svg";

export const Socialmedia = () => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div>
          <img src={instagram} alt="" />
        </div>
        <div>
          <img src={facebook} alt="" />
        </div>
        <div>
          <img src={telegram} alt="" />
        </div>
      </div>
    </div>
  );
};
