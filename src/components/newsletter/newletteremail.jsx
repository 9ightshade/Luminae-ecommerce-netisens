import React from 'react'

export const Newsletteremail = () => {
  return (
    <div>
      <div className="px-14 py-8 bg-slate-400 rounded-lg flex-col w-[70%] items-center gap-6 flex justify-center mx-auto">
        <div className="self-stretch h-[63px] flex-col justify-center items-center gap-[23px] flex">
          <div className="justify-center items-center inline-flex">
            <div className="text-right flex gap-2 ">
              <p className="text-white text-[32px] font-bold leading-tight">
                Luminae
              </p>
              <p className="text-slate-300 text-[32px] font-bold leading-tight">
                Store
              </p>
            </div>
          </div>

          <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
            <p className="grow shrink basis-0 text-center text-white text-base font-normal font-['Lato'] leading-tight">
              Register your email not to miss the last minutes off+ Free
              delivery
            </p>
          </div>
        </div>

        <div className="w-[90%] mx-auto px-[.5em] py-[.5em] flex bg-white rounded">
          
            <input
              type="text"
              placeholder="Enter your email"
              className=" w-[100%] px-[.7em] py-[.3em] text-neutral-400 text-sm font-normal"
            />
        </div>
      </div>
    </div>
  );
}
