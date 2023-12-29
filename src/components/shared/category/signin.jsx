import React from "react";
import { NavLink } from "react-router-dom";
import signin from "../../../assets/images/icons/header/Signin.svg";

export const Signin = () => {


  return (
   
    <div>
       <NavLink to="SignIn"><div className="flex gap-1 items-center">
        <img src={signin} alt="" />
        <p>Sign In</p>
      </div></NavLink>
    </div>
  );
};
