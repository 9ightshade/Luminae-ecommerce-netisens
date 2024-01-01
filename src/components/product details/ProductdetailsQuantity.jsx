import React from 'react'

export const ProductdetailsQuantity = () => {
  return (
    <div>
      <div className='items-center gap-5 flex my-[20px] mb-[35px]'>
        <p className='font-bold'>Quantity</p>
        <div className="flex border gap-3 p-2 w-[80px] rounded text-center items-center justify-center">
          <p>-</p>
          <p>2</p>
          <p>+</p>
        </div>
        <p>50 available/104 sold</p>
      </div>
    </div>
  );
}
