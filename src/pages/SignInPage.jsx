import { Topnav } from "../components/shared/topnavbar";
import { SignIn } from "../components/signin/signIn";
import { Footer } from "../components/footer/footer";
import { Categories } from "../components/shared/category/categories";
import { Currency } from "../components/shared/category/currency";
import { Language } from "../components/shared/category/language";
import { NavAds } from "../components/shared/category/NavAds";
import { Favourite } from "../components/shared/category/favourite";
import { Cartbag } from "../components/shared/cartbag";
import HamburgerMenu from "../components/shared/hamburger";
import { Logo } from "../components/shared/logo";
import { Search } from "../components/shared/search";
import { Aboutus } from "../components/shared/aboutus";
import { Socialmedia } from "../components/shared/category/socialmedia";
import { NavCategory } from "../components/shared/navcategory";
import { Productcategory } from "../components/shared/productcategory";


export const SignInPage = () => {
  return (
    <div>
     

     <div>
      {/* this will display only on mobile screens */}
      <div className="flex items-center justify-between mt-[20px] md:hidden mb-[30px] mx-[20px]">
        {/* <img src={hamburger} alt="menu-toggle" /> */}
        <HamburgerMenu/>
        <Logo text = "Luminae"/>
        <Cartbag/>
      </div>

      {/* this will display only on tablet screen */}
      <div className="md:max-lg:flex items-center justify-around hidden my-[20px]">
        <Logo text="Luminae" />
        <Search/>
      </div>

      {/* this will only display on large screens */}
      <div className="items-center justify-around hidden my-5 lg:flex">
        <Logo text="Luminae" />
        <Search />
        <Aboutus />
        <Socialmedia />
      </div>

      <div className="mb-[10px] hidden md:max-lg:flex justify-around ">
        <Aboutus/>
        <Socialmedia/>
      </div>

      <div className="hidden ">
        <Productcategory/>
      </div>
    </div>



     <div className="justify-around items-center py-2 px-5 text-white text-[13px] bg-black hidden md:flex ">
      <Categories/>

      <div className="flex items-center gap-2">
        <Currency/>
        <Language/>
      </div>

      <div className="hidden lg:block">
        <NavAds/>
      </div>
      

     
      <Favourite/>
      <Cartbag/>
    </div>


      <SignIn />
      <Footer />
    </div>
  );
};
