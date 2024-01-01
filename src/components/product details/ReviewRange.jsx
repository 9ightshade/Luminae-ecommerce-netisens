import React from 'react'

export const ReviewRange = () => {
  return (
    <div>
      <div className="w-[200px] h-[200px] flex-col justify-start items-start gap-7 inline-flex">
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            5 Stars
          </div>
          <div className="grow shrink basis-0 h-[5px] relative">
            <div className="w-[90px] h-[5px] left-0 top-0 absolute bg-blue-500 rounded-[3px]" />
          </div>
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            75%
          </div>
        </div>

        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            4 Stars
          </div>
          <div className="grow shrink basis-0 h-[5px] relative">
            <div className="w-[63.92px] h-[5px] left-0 top-0 absolute bg-blue-500 rounded-[3px]" />
          </div>
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            50%
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            3 Stars
          </div>
          <div className="grow shrink basis-0 h-[5px] relative">
            <div className="w-[38.84px] h-[5px] left-0 top-0 absolute bg-blue-500 rounded-[3px]" />
          </div>
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            30%
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            2 Stars
          </div>
          <div className="grow shrink basis-0 h-[5px] relative">
            <div className="w-[110.13px] h-[5px] left-0 top-0 absolute bg-blue-500 rounded-[3px]" />
          </div>
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            90%
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            1 Star
          </div>
          <div className="grow shrink basis-0 h-[5px] relative">
            <div className="w-[23.77px] h-[5px] left-0 top-0 absolute bg-blue-500 rounded-[3px]" />
          </div>
          <div className="text-neutral-600 text-sm font-normal  leading-tight">
            20%
          </div>
        </div>
      </div>
    </div>
  );
}
