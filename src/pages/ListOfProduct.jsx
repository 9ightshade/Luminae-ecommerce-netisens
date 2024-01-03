import React from "react";
import { ListOfAllProducts } from "../components/List of product/ListOfAllProducts";
import { Navbar } from "../components/shared/navbar";
import { EachProduct } from "../components/List of product/EachProduct";
import { Footer } from "../components/footer/footer";

export const ListOfProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-[20px]">

        <div className="flex justify-between my-[20px] items-center">
          <p>Women</p>
          <p className="text-[12px]">View all</p>
        </div>

        <EachProduct />
      </div>
      <Footer />
    </div>
  );
};
