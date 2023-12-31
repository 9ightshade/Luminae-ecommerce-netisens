import React from "react";
import hamburger from "../../assets/images/icons/header/Menue.svg";
import { Logo } from "../shared/logo";
import { Cartbag } from "../shared/cartbag";
import { Search } from "../shared/search";
import { Navbar } from "../shared/navbar";

export const ProductdetailsNavbar = () => {
  return (
    <div>
      <div className="block md:hidden">
        <div className="flex items-center justify-between mt-[30px] md:hidden mb-[30px] px-[10px] my-[20px]">
          <img src={hamburger} alt="menu-toggle" />
          <Logo text="Clothes" />
          <Cartbag />
        </div>
        <Search />
      </div>

      <div className="hidden md:block">
        <Navbar />
      </div>
    </div>
  );
};
