import React from "react";
import { Navbar } from "../components/shared/navbar";
import { MobileHero } from "../components/hero-section/mobilehero";
import headerimg1 from "../../src/assets/images/icons/header/HeaderImg1.png";
import headerimg2 from "../../src/assets/images/icons/header/HeaderImg2.png";
import tablethero from "../../src/assets/images/icons/header/tablethero.png";
import { Tabletheadercard } from "../components/hero-section/tablethero";
import { Laptopheader } from "../components/hero-section/laptophero";
import { Flashsalescard } from "../components/flashsales/Flashsalescard";

const image1 = headerimg1;
const image2 = headerimg2;
const tabletheroimg = tablethero;

export const Home = () => {
  return (
    <div className="p-[20px] md:p-0">
      <Navbar />
      <MobileHero
        heading="Never-Ending Summer"
        paragraph="Throwback shirts & all-day dressed"
        link="Explore all category"
        image={image1}
        color="bg-rose-700"
      />
      <MobileHero
        heading="Best Lovin Summer"
        paragraph=" Bikini & Poolside glam include"
        link="Explore all category"
        image={image2}
        color="bg-sky-600"
      />
      <Tabletheadercard
        heading="KIMONOS, CAFTANS & PAREOS"
        paragraph="Poolside glam include From $4.99"
        shopnow="SHOP NOW"
        image={tabletheroimg}
      />
      <Laptopheader
        heading="KIMONOS, CAFTANS & PAREOS"
        paragraph="Poolside glam include From $4.99"
        shopnow="SHOP NOW"
        image={tabletheroimg}
      />
      <div className="flex justify-between md:mx-[60px] my-[30px] items-center ">
        <h1 className="font-bold text-[22px]">Flash Sales</h1>
        <p>view all</p>
      </div>
      <Flashsalescard/>
    </div>
  );
};
