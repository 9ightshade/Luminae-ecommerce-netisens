import React from 'react'

export const FilterModel = () => {
  return (
    <div className='justify-start'>
      <p className='font-bold text-[14px] my-[10px]'>MODEL</p>
      <select name="" id="" className="w-full">
        <option value="">
          <div className="justify-between gap-4 flex border">
            <div>Short</div>
            <p className='justify-end'>60</p>
          </div>
        </option>

        <option value="" className="flex">
          Mid-Length - 
          <p>10</p>
        </option>

        <option value="">
          Sweather
          <p>56</p>
        </option>

        <option value="">
          Party Dresses
          <p>80</p>
        </option>

        <option value="">
          Regular Fit
          <p>100</p>
        </option>
      </select>
    </div>
  );
}
