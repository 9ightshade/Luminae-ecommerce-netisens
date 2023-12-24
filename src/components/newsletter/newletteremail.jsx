import React from 'react'

export const Newsletteremail = () => {
  return (
    <div>
      <div className="w-[571px] h-[187px] px-14 py-8 bg-slate-400 rounded-lg flex-col items-center gap-6 flex absolute justify-center mt-[10px] top-0 left-0 right-0 mx-auto">
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

        <div className="w-[268px] px-3 py-2 bg-white rounded justify-start items-center gap-[127px] inline-flex">
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="text-right text-neutral-400 text-sm font-normal leading-tight"
            />
          </div>
          <img src="" alt="" className="w-4 h-4 " />
        </div>
      </div>
    </div>
  );
}
