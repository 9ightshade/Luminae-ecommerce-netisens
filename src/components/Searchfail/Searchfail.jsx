import noresult from "../../assets/images/searchfail/searchfail.png";
import Warningpolygon from "../../assets/images/forms/warning-polygon.svg";
export const SearchFail = () => {
  return (
    <div>
      <div className="w-[80%] mx-[auto] md:flex gap-[2em] items-center max-w-[900px]" >
        <div className="w-[50%] mx-[auto] max-w-[500px] ">
          <img src={noresult} alt="" className="w-[100%]" />
        </div>
        <section className="rounded-[8px] border-[1.5px] border-[#D9D9D9] p-[2em] w-[80%] mx-[auto] max-w-[500px] bg-[#FFF]">
          <h2 className="text-[#262626] text-[1rem] font-[700] leading-[1.5rem]">
            No results were found for searching &#8220; Blue Sony Camera
            &#8220;.
          </h2>

          <div className="flex content-center gap-2">
            <img src={Warningpolygon} alt="" />
            <p className="text-[#555] text-[.8rem] font-[400] leading-[1.25rem]">
              We recommend you to search different clear key words to get the
              best result.
            </p>
          </div>

          <div className="flex content-center gap-2 ">
            <img src={Warningpolygon} alt="" />
            <p className="text-[#555] text-[.8rem] font-[400] leading-[1.25rem]">
              We recommend you to search different clear key words to get the
              best result.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};


/* all image import for this components*/
import camerawhite from "../../assets/images/searchfail/camera.png";
import camerachalk from "../../assets/images/searchfail/camerachalk.png";
import camerablack from "../../assets/images/searchfail/camerablack.png";
import star from "../../assets/images/searchfail/star.svg";
/*product that display regardless of search query*/
export const Defaultlist = () => {
  return (
    <section className="bg-[#F5F5F5] hidden md:flex justify-center gap-2 py-[2em] ">
      <div className="border-[#D9D9D9] bg-[#FFF] p-[2em]">
        <div  >
          <img src={camerawhite} alt="product camera" />
        </div>
        <div>
          <h2 className="text-[#000] text-[1rem] font-[700] leading-[1.7rem]">
            INSTAX Wide 300 Black
          </h2>
          <div className="flex">
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
          </div>
          <p className="text-[#FF2E00] text-[.8rem] font-[700] leading-[1.5rem]">
            $82.99
          </p>
        </div>
      </div>

      <div className="border-[#D9D9D9] bg-[#FFF]  p-[2em]">
        <div>
          <img src={camerachalk} alt="product camera" />
        </div>
        <div>
          <h2 className="text-[#000] text-[1rem] font-[700] leading-[1.7rem]">
            INSTAX Wide 300 Black
          </h2>
          <div className="flex">
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
          </div>
          <p className="text-[#FF2E00] text-[.8rem] font-[700] leading-[1.5rem]">
            $112.99
            <span className="text-[#9D9D9D] text-[.8rem] font-[400] leading-[1.5rem] ml-[1em]">
              $129.99
            </span>
          </p>
        </div>
      </div>

      <div className="border-[#D9D9D9] bg-[#FFF] p-[2em] ">
        <div>
          <img src={camerablack} alt="product camera" />
        </div>
        <div>
          <h2 className="text-[#000] text-[1rem] font-[700] leading-[1.7rem]">
            INSTAX Wide 300 Black
          </h2>
          <div className="flex">
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
            <img src={star} alt="rating" />
          </div>
          <p className="text-[#FF2E00] text-[.8rem] font-[700] leading-[1.5rem]">
            $109
            <span className="text-[#9D9D9D] text-[.8rem] font-[400] leading-[1.5rem] ml-[1em]">
              $129
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
