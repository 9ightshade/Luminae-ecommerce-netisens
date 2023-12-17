import React from "react";
import category from "../../../assets/images/icons/header/categories.svg";

export const Categories = () => {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <div>
          <img src={category} alt="" />
        </div>
        <p>Categories</p>
      </div>
    </div>
  );
};
