import React from "react";
import favourite from "../../../assets/images/icons/header/Favorides.svg";

export const Favourite = () => {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <div>
          <img src={favourite} alt="" />
        </div>
        <p>Favourites</p>
      </div>
    </div>
  );
};
