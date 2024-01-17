import React from 'react'

export const Newsletteremail = () => {
  return (
      <div className=" hidden px-[1em] py-[2em]  bg-[#7296AB] md:flex flex-col gap-[1em]  mx-auto w-[80%] max-w-[700px] rounded-[9px] absolute top-[130%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
    
          <p className="text-white text-[2.8rem] text-center font-bold">
                Luminae <span className="text-[#D1E2EB]" >Store</span> 
              </p>
        
            <p className="text-center text-white text-[1.2rem]">
              Register your email not to miss the last minutes off+ Free
              delivery
            </p>
          
        

        <div className="w-[45%] mx-auto px-[.5em] py-[.5em] flex bg-white rounded">
            <input
              type="text"
              placeholder="Enter your email"
              className=" w-[100%] px-[.7em] py-[.3em] text-neutral-400 text-sm font-normal "
            />
        </div>
      </div>
  
  );
}
