import React from 'react'
import { FilterModel } from './FilterModel';
import { FilterStyle } from './FilterStyle';
import { FilterColor } from './FilterColor';
import { FilterSizes } from './FilterSizes';

export const ProductFilter = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-[250px] h-full overflow-y-auto border hidden
       bg-white">
        <div>
          <img src="" alt="" />
          <p>All Categories</p>
        </div>

        <div>
          <p>Brand</p>
          <div>
            <input type="text" placeholder='search' className="border-black" />
          </div>
          <hr className="border-[1px] border-black w-full my-[20px]" />
        </div>
        <FilterModel />
        <hr className="border-[1px] border-black w-full my-[20px]" />
        <FilterStyle/>
        <FilterColor/>
        <FilterSizes/>
      </div>
    </div>
  );
}
