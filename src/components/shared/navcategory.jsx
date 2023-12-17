import { Cartbag } from "./cartbag";
import { Categories } from "./category/categories";
import { Currency } from "./category/currency";
import { Language } from "./category/language";
import { Signin } from "./category/signin";
import { Favourite } from "./category/favourite";
import { NavAds } from "./category/NavAds";
export const NavCategory = () => {
  return (
    <div className="flex justify-around items-center py-2 px-5 text-[13px]">
      <Categories />

      <div className="flex items-center gap-2">
        <Currency />
        <Language />
      </div>

      <div className="hidden lg:block">
        <NavAds />
      </div>

      <Signin />
      <Favourite />
      <Cartbag />
    </div>
  );
};
