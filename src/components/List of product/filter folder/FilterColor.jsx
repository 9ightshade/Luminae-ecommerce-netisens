import React from 'react'

export const FilterColor = () => {
  return (
    <div>
      <div className=" gap-[40px] items-center my-[20px]">
        <p className="font-bold">Color</p>

        <div>
          <div className="flex gap-2 my-2">
            <div className="w-[14px] h-[14px] bg-[#750430] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#FF2E00] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#A2D2FC] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#FF7A00] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#FFD36C] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#4BCB88] rounded-full"></div>
          </div>

          <div className="flex gap-2">
            <div className="w-[14px] h-[14px] bg-[#9747FF] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#FF67DE] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#967C62] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#434343] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#BCBFC2] rounded-full"></div>
            <div className="w-[14px] h-[14px] bg-[#C4C4C4] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
