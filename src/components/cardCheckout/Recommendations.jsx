import backarrow from "../../assets/images/cartcheckout/back_arrow.png";
import forwardarrow from "../../assets/images/cartcheckout/forward_arrow.png";
import shortdress1 from "../../assets/images/cartcheckout/short_printed_dress1.png";
import shortdress2 from "../../assets/images/cartcheckout/short_printed_dress2.png";
import shortdress3 from "../../assets/images/cartcheckout/short_printed_dress3.png";
import shortdress4 from "../../assets/images/cartcheckout/short_printed_dress4.png";
export const Recommendations = () => {
  return (
    <section className="py-[1em] px-[2em]">
      <div className="flex justify-between">
        <h2 className="text-[#262626] text-[.8rem] font-bold uppercase">
          You might also like
        </h2>

        <div className="flex">
          <div className="border-[1px] border-[#D9D9D9] p-[.8em] ">
            <img src={backarrow} alt="back" className="w-[100%]" />
          </div>
          <div className="border-[1px] border-[#D9D9D9] p-[.8em] ">
            <img src={forwardarrow} alt="forward" />
          </div>
        </div>
      </div>

      {/*recommendations section below */}

      <div className="flex justify-between flex-wrap gap-[2em]">
        <section className="mt-[1em] md:basis-[50%],grow ">
          <div className="flex gap-[2em]">
            <div>
              <img src={shortdress1} alt="" />
            </div>
            <div className="flex flex-col space-y-[1.2em] ">
              <p className="text-[#262626] text-[.8rem] font-[400]">
                SHORT PRINTED DRESS
              </p>
              <div className="flex gap-[1.5em] ">
                <p className="text-[#FF2E00] text-[.8rem] font-[700]">$69.99</p>
                <p className="text-[#555] text-[.8rem] font-[400]">$129.99</p>
                <p className="text-[#FFF] text-[0.5rem] font-[600] p-[.6em] bg-[#FF2E00]">
                  - 40%
                </p>
              </div>

              <button className="flex items-center gap-[1em] rounded-[4px] border-[1px] border-[#7B7B7B] py-[.6em] px-[3em] ">
                <p className="text-[#555] text-[.8rem] font-[400]">$39</p>
                <p className="text-[#262626] text-[.8rem] font-[700]">
                  Add to cart
                </p>
              </button>
            </div>
          </div>
        </section>

        {/*second dress*/}
        <section className="mt-[1em] md:basis-[50%],grow ">
          <div className="flex gap-[2em]">
            <div>
              <img src={shortdress2} alt="" />
            </div>
            <div className="flex flex-col space-y-[1.2em] ">
              <p className="text-[#262626] text-[.8rem] font-[400]">
                SHORT PRINTED DRESS
              </p>
              <div className="flex gap-[1.5em] ">
                <p className="text-[#FF2E00] text-[.8rem] font-[700]">$69.99</p>
                <p className="text-[#555] text-[.8rem] font-[400]">$129.99</p>
                <p className="text-[#FFF] text-[0.5rem] font-[600] p-[.6em] bg-[#FF2E00]">
                  - 40%
                </p>
              </div>

              <button className="flex items-center gap-[1em] rounded-[4px] border-[1px] border-[#7B7B7B] py-[.6em] px-[3em] ">
                <p className="text-[#555] text-[.8rem] font-[400]">$39</p>
                <p className="text-[#262626] text-[.8rem] font-[700]">
                  Add to cart
                </p>
              </button>
            </div>
          </div>
        </section>

        {/*third dress*/}
        <section className="mt-[1em] md:basis-[50%],grow ">
          <div className="flex gap-[2em]">
            <div>
              <img src={shortdress3} alt="" />
            </div>
            <div className="flex flex-col space-y-[1.2em] ">
              <p className="text-[#262626] text-[.8rem] font-[400]">
                SHORT PRINTED DRESS
              </p>
              <div className="flex gap-[1.5em] ">
                <p className="text-[#FF2E00] text-[.8rem] font-[700]">$69.99</p>
                <p className="text-[#555] text-[.8rem] font-[400]">$129.99</p>
                <p className="text-[#FFF] text-[0.5rem] font-[600] p-[.6em] bg-[#FF2E00]">
                  - 40%
                </p>
              </div>

              <button className="flex items-center gap-[1em] rounded-[4px] border-[1px] border-[#7B7B7B] py-[.6em] px-[3em] ">
                <p className="text-[#555] text-[.8rem] font-[400]">$39</p>
                <p className="text-[#262626] text-[.8rem] font-[700]">
                  Add to cart
                </p>
              </button>
            </div>
          </div>
        </section>

        {/*fourth dress*/}
        <section className="mt-[1em] md:basis-[50%],grow ">
          <div className="flex gap-[2em]">
            <div>
              <img src={shortdress4} alt="" />
            </div>
            <div className="flex flex-col space-y-[1.2em] ">
              <p className="text-[#262626] text-[.8rem] font-[400]">
                SHORT PRINTED DRESS
              </p>
              <div className="flex gap-[1.5em] ">
                <p className="text-[#FF2E00] text-[.8rem] font-[700]">$69.99</p>
                <p className="text-[#555] text-[.8rem] font-[400]">$129.99</p>
                <p className="text-[#FFF] text-[0.5rem] font-[600] p-[.6em] bg-[#FF2E00]">
                  - 40%
                </p>
              </div>

              <button className="flex items-center gap-[1em] rounded-[4px] border-[1px] border-[#7B7B7B] py-[.6em] px-[3em] ">
                <p className="text-[#555] text-[.8rem] font-[400]">$39</p>
                <p className="text-[#262626] text-[.8rem] font-[700]">
                  Add to cart
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
