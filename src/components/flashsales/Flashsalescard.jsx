import React from "react";
import productbag from "../../assets/images/flashsales/productbag.png";
import star from "../../assets/images/flashsales/star.svg"; 
import reebokshoe from "../../assets/images/flashsales/reebokshoe.png";
import pinkshoe from "../../assets/images/flashsales/pinkbag.png";
import blackshoe from "../../assets/images/flashsales/blackshoe.png";
import { Starratings } from "./starratings";

const productarray = [
  {
    id: 0,
    deal: "Deal of the Day",
    countdown: "12:43:12",
    hour: "hour",
    min: "min",
    sec: "sec",
    productname: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    productimg: productbag,
    starImg: { star },
    oldPrice: "129.99",
    currentPrice: "69.99",
    discountPercentage: "-40%",
  },
  {
    id: 1,
    deal: "Deal of the Day",
    countdown: "02:05:32",
    hour: "hour",
    min: "min",
    sec: "sec",
    productname: "Reebok",
    description: "Women Powder sneakers",
    productimg: reebokshoe,
    starImg: star,
    oldPrice: "129.99",
    currentPrice: "112.99",
    discountPercentage: "-40%",
  },
  {
    id: 2,
    deal: "Deal of the Day",
    countdown: "02:14:21",
    hour: "hour",
    min: "min",
    sec: "sec",
    productname: "Patson",
    description: "Shoulder bag-Pink-Plain",
    productimg: pinkshoe,
    starImg: star,
    oldPrice: "129.99",
    currentPrice: "69.99",
    discountPercentage: "-40%",
  },
  {
    id: 3,
    deal: "Deal of the Day",
    countdown: "25:11:02",
    hour: "hour",
    min: "min",
    sec: "sec",
    productname: "Sketchers",
    description: "Sport-shoe 2102",
    productimg: blackshoe,
    starImg: star,
    oldPrice: "$129.99",
    currentPrice: "$80.00",
    discountPercentage: "-40%",
  },
];

export const Flashsalescard = () => {
  return (
    <div className="sm:max-md:flex sm:overflow-x-auto flex lg:flex lg:m-auto lg:justify-center md:max-lg:flex-wrap md:max-lg:justify-center ">
      {productarray.map((item) => (
        <section
          key={item.id}
          className="w-[200px] min-w-[200px] h-[380px] border border-none p-1 shadow rounded-xl m-2  md:max-lg:min-w-[370px] lg:w-[290px] "
        >
          <div className="md:max-lg:flex md:max-lg:text-center md:max-lg:w-[100%] md:max-lg:justify-center mt-[20px]">
            <h2 className="text-neutral-400 font-bold text-center mt-2">
              {item.deal}
            </h2>

            <div className="">
              <p className=" tracking-widest break-words font-bold text-xl text-center">
                {item.countdown}
              </p>
              <div className="w-[150px] justify-between text-center flex m-auto pl-8 pr-8 pt-1 text-xs mb-4 ">
                <p className="md:pr-[12px]">{item.hour}</p>
                <p>{item.min}</p>
                <p className="md:pl-[12px]">{item.sec}</p>
              </div>
            </div>
          </div>

          <div className="md:block md:m-auto md:text-center md:w-[100%] ">
            <img src={item.productimg} alt="" className="md:flex md:m-auto  " />
          </div>
          <div className=" mt-[18px] flex flex-col gap-1 md:max-lg:max-h-[150px] md:max-lg:h-[100px]  md:max-lg:justify-center md:max-lg:pl-[10px]  max-w-[85%] md:max-lg:max-w-none mx-auto lg:justify-center lg:w-[180px] ">
            {/* first row */}
            <div className="flex items-start md:max-lg:items-center justify-center md:max-lg:justify-between flex-col md:max-lg:flex-row ">
              <p className="font-bold text-xl lg:text-[17px] ">
                {item.productname}
              </p>
              <p className="text-sm  mt-1  md:max-lg:mr-[20px]  ">
                {item.description}
              </p>
            </div>

            {/* second row */}
            <div className=" items-center justify-between sm:max-md:block md:max-lg:flex ">
              <Starratings />

              <div className=" flex justify-between md:max-lg:mr-[20px]">
                <p className="text-red-500 font-bold text-[13px] md:mr-[10px]">
                  {item.currentPrice}
                </p>
                <p className="text-[13px]">{item.oldPrice}</p>
                <p className="bg-red-500 text-white text-[10px] pl-1 pr-1 h-[20px] py-px md:ml-[10px]">
                  {item.discountPercentage}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
