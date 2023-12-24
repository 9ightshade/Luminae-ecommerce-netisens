import React from 'react'

export const BlogHeroMb = () => {
  return (
    <div>
      <div className="bg-[url('/blogheaderpics1.png')] h-[445px] w-full bg-no-repeat bg-cover bg-center ">
        <div className="w-64 h-64 flex-col justify-start items-start gap-4 inline-flex ml-[30px] mt-[80px]">
          <div className="h-16 flex-col justify-start items-start gap-4 flex">
            <p className="self-stretch text-white text-xl font-bold uppercase leading-loose">
              Stunning barefooted woman of 2023
            </p>
          </div>
          <p className="self-stretch text-white text-xs font-normal leading-tight">
            In the heart of a chic urban studio, the atmosphere buzzed with
            excitement as a trendy fur coat took center stage during a vibrant
            photoshoot.
          </p>
          
          <div className="self-stretch grow shrink basis-0 justify-start items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 h-5 justify-between items-start flex">
              
              <div className="justify-start items-center gap-[5px] flex">
                <img src='' alt='' className="w-3 h-3 relative" />
                <p className="text-white text-xs font-normal leading-tight">
                  20 July 2023
                </p>
              </div>

              <div className="justify-start items-center gap-[5px] flex">
                <img src='' alt='' className="w-3 h-3 relative" />
                <p className="text-white text-xs font-normal leading-tight">
                  830
                </p>
              </div>

              <div className="justify-start items-center gap-[5px] flex">
                <img src='' alt='' className="w-3 h-3 relative" />
                <p className="text-white text-xs font-normal font-['Lato'] leading-tight">
                  19
                </p>
              </div>

            </div>
          </div>

          <div className="px-5 py-2.5 rounded border border-zinc-300 flex-col justify-start items-start">
            <div className="justify-center items-center gap-1 inline-flex">
              <div className="w-[82px] h-5 justify-center items-center flex">
                <p className="text-right text-white text-sm font-medium font-['Lato'] uppercase leading-tight">
                  Read more
                </p>
              </div>
              <img src='' alt='' className="w-6 h-[21px] relative origin-top-left rotate-90" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
