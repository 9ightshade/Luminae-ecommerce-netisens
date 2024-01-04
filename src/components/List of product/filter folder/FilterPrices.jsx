import React from 'react'

export const FilterPrices = () => {
  return (
    <div>
        <p className='text-[14px] font-bold my-[20px]'>PRICES</p>

        <div className='flex items-center justify-between mb-[10px]'>
            <div className='w-[60px] rounded text-center text-[14px] border py-1 justify-center'>$60</div>
            <p className='w-[30px] text-center text-[20px]'>--</p>
            <div className='w-[60px] rounded text-center border text-[14px] py-1 '>$450</div>
        </div>

        <input type="range" name="" id="" className='w-full' />
        <div className='flex justify-between items-center text-gray-400 my-[10px]'>
            <p className='text-[14px]'>Minimum $200</p>
            <p className='text-[14px]'>Maximum $500</p>
        </div>
        <p className='text-[14px] text-gray-4\600'>878 products found</p>
    </div>
  )
}
