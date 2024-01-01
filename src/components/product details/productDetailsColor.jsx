import React from 'react'

export const ProductDetailsColor = () => {
  return (
    <div>
      <div className='flex gap-[40px] items-center my-[20px]'>
        <p className='font-bold'>Color</p>
        <div className='flex gap-2'>
          <div className="w-[14px] h-[14px] bg-[#750430] rounded-full"></div>
          <div className="w-[14px] h-[14px] bg-[#00A95D] rounded-full"></div>
          <div className="w-[14px] h-[14px] bg-[#A2D2FC] rounded-full"></div>
          <div className="w-[14px] h-[14px] bg-[#FF7A00] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
