import React from 'react'
import { FilterModel } from './FilterModel';
import { FilterStyle } from './FilterStyle';
import { FilterColor } from './FilterColor';
import { FilterSizes } from './FilterSizes';
import search from "../../../assets/images/icons/header/Search.png"
import category from "../../../assets/images/icons/category.svg"
import { FilterPrices } from './FilterPrices';

export const ProductFilter = () => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-[250px] h-full w overflow-y-auto  
       bg-white justify-center "
      >
        <div className="w-[200px] block m-auto">
          <div className="w-[200px]  justify-start gap-4 my-[20px] flex">
            <img src={category} alt="" />
            <p className="font-bold">All Categories</p>
          </div>

          <div>
            <p className="font-bold my-[10px]">Brand</p>

            <div className="border h-[30px] justify-between px-2 gap-4 items-center flex rounded">
              <input
                type="text"
                placeholder="search"
                className="border-black w-[150px] h-[27px] border-none "
              />
              <img src={search} alt="" className="h-4 w-4" />
            </div>

            <hr className="border-[px] border-gray-300 w-full my-[20px]" />
          </div>

          <FilterModel />
          <hr className="border-[px] border-gray-300 w-full my-[20px]" />
          <FilterStyle />
          <hr className="border-[px] border-gray-300 w-full my-[20px]" />
          <FilterColor />
          <hr className="border-[px] border-gray-300 w-full my-[20px]" />
          <FilterSizes />
          <hr className="border-[px] border-gray-300 w-full my-[20px]" />
          <FilterPrices/>
        </div>
      </div>
    </div>
  );
}
