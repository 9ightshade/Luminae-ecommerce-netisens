import React from "react";
import signin from "../../../assets/images/icons/header/Signin.svg";

export const Signin = () => {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <img src={signin} alt="" />
        <p>Sign In</p>
      </div>
    </div>
  );
};
