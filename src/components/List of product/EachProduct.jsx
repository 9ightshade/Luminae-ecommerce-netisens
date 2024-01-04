import React from "react";
import blackdress from "../../assets/images/top100cardpictures/blackdress.png";
import blackdresstwo from "../../assets/images/top100cardpictures/blackdress2.png";
import zara1 from "../../assets/images/top100cardpictures/zara1.png";
import zara2 from "../../assets/images/top100cardpictures/zara2.png";
import mango1 from "../../assets/images/top100cardpictures/mango1.png";
import mango2 from "../../assets/images/top100cardpictures/mango2.png";
import uniqlo1 from "../../assets/images/top100cardpictures/uniqlo1.png";
import uniqlo2 from "../../assets/images/top100cardpictures/uniqlo2.png";
import star from "../../assets/images/top100cardpictures/star.svg";
import love from "../../assets/images/top100cardpictures/love.svg";
import { Starratings } from "../flashsales/starratings";

const tophundredArray = [
  {
    id: 0,
    image1: blackdress,
    image2: blackdresstwo,
    name: "Mango",
    description: "Kimono & Caftan - Black - Regular fit",
    rated: "(289)",
    loveImg: love,
    starImg: star,
    oldPrice: "$228",
    currentPrice: "$290",
    discountPercentage: "-10%",
  },
  {
    id: 1,
    image1: zara1,
    image2: zara2,
    name: "Zara",
    description: "Midi top - Dailt fit",
    rated: "(523)",
    loveImg: love,
    starImg: star,
    oldPrice: "$145",
    currentPrice: "$95",
    discountPercentage: "-7%",
  },

  {
    id: 2,
    image1: uniqlo1,
    image2: uniqlo2,
    name: "Uniqlo",
    productname: "Tonny Black",
    description: "Midi atlas Slim fit - bohemian",
    rated: "(86)",
    loveImg: love,
    starImg: star,
    oldPrice: "$125",
    currentPrice: "$156",
    discountPercentage: "-8%",
  },
  {
    id: 3,
    image1: mango1,
    image2: mango2,
    name: "Mango dress",
    description: "Kimono & Caftan - Colorful - Night club fit",
    rated: "(289)",
    loveImg: love,
    starImg: star,
    oldPrice: "$487",
    currentPrice: "$365",
    discountPercentage: "-15%",
  },
  {
    id: 4,
    image1: blackdress,
    image2: blackdresstwo,
    name: "Mango",
    description: "Kimono & Caftan - Black - Regular fit",
    rated: "(289)",
    loveImg: love,
    starImg: star,
    oldPrice: "$228",
    currentPrice: "$290",
    discountPercentage: "-10%",
  },
  {
    id: 5,
    image1: zara1,
    image2: zara2,
    name: "Zara",
    description: "Midi top - Dailt fit",
    rated: "(523)",
    loveImg: love,
    starImg: star,
    oldPrice: "$145",
    currentPrice: "$95",
    discountPercentage: "-7%",
  },
];

export const EachProduct = () => {
  return (
    <div className="flex flex-wrap justify-around lg:overflow-x-none md:justify-center md:flex lg:mx-[20px]">
      {tophundredArray.map((tophundred) => (
        <div
          className=" min-w-[250px] w-[150px] sm:max-md:block border-none p-1 shadow rounded-xl my-2 lg:w-[250px] flex-col justify-start 
          items-start inline-flex md:max-lg:w-[250px] border md:max-lg:mx-[15px] md:max-lg:my-[10px] lg:mx-[10px] "
          key={tophundred.id}
        >
          <div className="md:max-lg:w-[100%] ">
            <img
              className="self-stretch h-full grow shrink basis-0 rounded-tl-lg rounded-tr-lg block md:hidden lg:hidden"
              src={tophundred.image1}
            />
            <img
              className="self-stretch h-full grow shrink basis-0 rounded-tl-lg rounded-tr-lg hidden md:block lg:hidden "
              src={tophundred.image2}
            />
            <img
              className="self-stretch h-full grow shrink basis-0 rounded-tl-lg rounded-tr-lg hidden lg:block lg:h-[300px] "
              src={tophundred.image1}
            />
          </div>
          <div className="self-stretch h-[153px] p-5 bg-white flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch h-11 justify-start items-center gap-5 flex">
              <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                <div className="text-neutral-800 text-[14px] font-bold  leading-tight">
                  {tophundred.name}
                </div>
                <div className="text-neutral-600 text-[11px] font-normal  leading-tight">
                  {tophundred.description}
                </div>
              </div>
              <div>
                <img src={tophundred.loveImg} alt={tophundred.name} />
              </div>
            </div>
            <div className="self-stretch h-[25px] justify-start items-center gap-3 inline-flex">
              <div className="justify-start items-center flex">
                <Starratings />
              </div>
              <div className="text-center text-neutral-600 text-xs font-normal font-['Lato'] leading-tight">
                {tophundred.rated}
              </div>
            </div>
            <div className="self-stretch h-5 justify-start items-center gap-3 inline-flex">
              <div className="text-orange-600 text-[17px] font-extrabold leading-tight">
                {tophundred.oldPrice}
              </div>
              <div className="text-neutral-400  font-normal  leading-tight">
                {tophundred.currentPrice}
              </div>
              <div className="text-orange-600 text-xs text-[14px] leading-tight">
                {tophundred.discountPercentage}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
