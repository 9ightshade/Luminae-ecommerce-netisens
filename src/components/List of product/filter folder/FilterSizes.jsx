import React from 'react'

export const FilterSizes = () => {
  return (
    <div>
      <p className='font-bold text-[15px] my-[10px]'>SIZES</p>

      <div>
        <div className="flex gap-4 text-center my-1 font-bold text-[14px]">
          <button className="border w-[40px] rounded">2XS</button>
          <button className="border w-[40px] rounded">XS</button>
          <button className="border w-[40px] rounded">S</button>
          <button className="border w-[40px] rounded bg-[#D1E2EB]">M</button>
        </div>
        <div className="flex gap-4 text-center my-1 font-bold text-[14px]">
          <button className="border w-[40px] rounded bg-[#D1E2EB]">L</button>
          <button className="border w-[40px] rounded">XL</button>
          <button className="border w-[40px] rounded">2XL</button>
          <button className="border w-[40px] rounded ">3XL</button>
        </div>
      </div>
    </div>
  );
}
