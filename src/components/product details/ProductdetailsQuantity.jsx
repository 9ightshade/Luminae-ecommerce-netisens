import React from 'react'

export const ProductdetailsQuantity = () => {
  return (
    <div>
      <div className="items-center gap-5 md:gap-3 flex my-[20px] mb-[35px]">
        <p className="font-bold text-[12px]">Quantity</p>
        <div className="flex border gap-3 p-2 w-[80px] rounded text-center items-center justify-center md:text-[13px]">
          <p>-</p>
          <p>2</p>
          <p>+</p>
        </div>
        <p className="text-[10px]">50 available/104 sold</p>
      </div>
    </div>
  );
}
