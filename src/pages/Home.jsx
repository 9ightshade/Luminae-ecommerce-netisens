import { Navbar } from "../components/shared/navbar";
import { MobileHero } from "../components/hero-section/mobilehero";
import headerimg1 from "../../src/assets/images/icons/header/HeaderImg1.png";
import headerimg2 from "../../src/assets/images/icons/header/HeaderImg2.png";
import finegirl from "../../src/assets/images/icons/header/finegirl.png";
import tablethero from "../../src/assets/images/icons/header/tablethero.png";
import { Tabletheadercard } from "../components/hero-section/tablethero";
import pinkbarbie from "../../src/assets/images/icons/header/pinkbarbie.png"
import { Laptopheader } from "../components/hero-section/laptophero";
import { Flashsalescard } from "../components/flashsales/Flashsalescard";
import { TrendingNewArrivals } from "../components/trendingmusthave/trendingmusthave";
import { Tophundredproduct } from "../components/top100/tophundred";
import { Slider } from "../components/slider";
import { Footer } from "../components/footer/footer";
import { Newsletteremail } from "../components/newsletter/newletteremail";

const image1 = headerimg1;
const image2 = headerimg2;
const image3 = finegirl;
const image4 = pinkbarbie
const tabletheroimg = tablethero;

export const Home = () => {
  return (
    <div className="">
      <div className="p-[20px] md:p-0">
        <Navbar />
      </div>

      <div className="md:hidden my-[20px] p-[20px] md:p-0">
        <div className="mb-4">
          <MobileHero
            heading="Never-Ending Summer"
            paragraph="Throwback shirts & all-day dressed"
            link="Explore all category"
            image={image1}
            color="bg-rose-700"
          />
        </div>
        <MobileHero
          heading="Best Lovin Summer"
          paragraph=" Bikini & Poolside glam include"
          link="Explore all category"
          image={image2}
          color="bg-sky-600"
        />
      </div>

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

      <div className="flex justify-between md:mx-[60px] items-center p-[20px] md:p-0 md:my-[40px]">
        <h1 className="font-bold text-[22px]">Flash Sales</h1>
        <p>view all</p>
      </div>

      <div className="p-[20px] md:p-0">
        <Flashsalescard />
      </div>

      <div className="flex justify-between md:mx-[60px] my-[30px] items-center md:max-lg:p-[30px] p-[20px] md:p-0">
        <h1 className="font-bold text-[22px]">Trending must-have</h1>
        <p>view all</p>
      </div>

      <div className="p-[20px] md:p-0 ">
        <TrendingNewArrivals />
      </div>

      <div className="flex justify-between md:mx-[60px]items-center md:max-lg:p-[30px] p-[20px] md:p-0">
        <h1 className="font-bold text-[22px]">Top 100</h1>
        <p>view all</p>
      </div>

      <div className="mx-[px] p-[20px] md:p-0">
        <Tophundredproduct />
      </div>

      <div className="hidden md:flex justify-center gap-4 p-[20px] md:p-0">
        <MobileHero
          heading="Never-Ending Summer"
          paragraph="Throwback shirts & all-day dressed"
          link="Explore all category"
          image={image1}
          color="bg-rose-700"
        />
        <MobileHero
          heading="The most famous sport brands"
          paragraph="Get in gym essentials"
          link="Explore all category"
          image={image3}
          color="bg-cyan-900"
        />
      </div>

      <Slider />

      <div className="hidden md:flex justify-center gap-4 p-[20px] md:p-0 relative">
        <MobileHero
          heading="The Pinky Barbie Edition"
          paragraph="Let's play dress up"
          link="Explore all category"
          image={image4}
          color="bg-fuchsia-500"
        />
        <MobileHero
          heading="Best Lovin Summer"
          paragraph=" Bikini & Poolside glam include"
          link="Explore all category"
          image={image2}
          color="bg-sky-600"
        />
      </div>

      <div className=" m-auto block ">
        <Newsletteremail /> 
      </div>

      <Footer />
    </div>
  );
};
