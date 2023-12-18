import { Logo } from "../shared/logo";
import hamburger from "../../assets/images/icons/header/Menue.svg";
import { Cartbag } from "./cartbag";
import { Search } from "./search";
import { Aboutus } from "./aboutus";
import { Productcategory } from "./productcategory";

/* fix the following import NavCategory and SocialMedia */
import { NavCategory } from "./navcategory";
import { Socialmedia } from "./category/socialmedia";
/*fix import so it can render */
export const Topnav = () => {
  return (
    <div>
      {/* this will display only on mobile screens */}
      <div className="flex items-center justify-between mt-[10px] md:hidden mb-[30px]">
        <img src={hamburger} alt="menu-toggle" />
        <Logo text="Luminae" />
        <Cartbag />
      </div>

      {/* this will display only on tablet screen */}
      <div className="md:max-lg:flex items-center justify-around hidden my-[20px]">
        <Logo text="Luminae" />
        <Search />
      </div>

      {/* this will only display on large screens */}
      <div className="items-center justify-around hidden my-5 lg:flex">
        <Logo text="Luminae" />
        <Search />
        <Aboutus />
        <Socialmedia />
      </div>

      <div className="mb-[10px] hidden md:max-lg:flex justify-around ">
        <Aboutus />
        <Socialmedia />
      </div>

      <div className="hidden text-white bg-black md:block">
        <NavCategory />
      </div>

      <div className="hidden md:block">
        <Productcategory />
      </div>
    </div>
  );
};
