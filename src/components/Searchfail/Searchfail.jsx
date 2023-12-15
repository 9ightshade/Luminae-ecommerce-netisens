import noresult from "../../assets/images/searchfail/searchfail.png";
import Warningpolygon from "../../assets/images/forms/warning-polygon.svg";
export const SearchFail = () => {
  return (
    <div className="p-[1em] md:flex items-center" >
      <div>
        <img src={noresult} alt="" />
      </div>
      <section className="rounded-[8px] border-[1.5px] border-[#D9D9D9] bg-[#FFF]">
        <h2 className="text-[#262626] text-[1rem] font-[700] leading-[1.5rem]">
          No results were found for searching " Blue Sony Camera ".
        </h2>

        <div className="flex content-center gap-2">
          <img src={Warningpolygon} alt="" />
          <p className="text-[#555] text-[.8rem] font-[400] leading-[1.25rem]">
            We recommend you to search different clear key words to get the best
            result.
          </p>
        </div>

        <div className="flex content-center gap-2 ">
          <img src={Warningpolygon} alt="" />
          <p className="text-[#555] text-[.8rem] font-[400] leading-[1.25rem]">
            We recommend you to search different clear key words to get the best
            result.
          </p>
        </div>
      </section>
    </div>
  );
};
