import React from "react";
import { ListOfAllProducts } from "../components/List of product/ListOfAllProducts";
import { Navbar } from "../components/shared/navbar";
import { EachProduct } from "../components/List of product/EachProduct";
import { Footer } from "../components/footer/footer";
import { ProductFilter } from "../components/List of product/filter folder/ProductFilter";

export const ListOfProduct = () => {
  return (
    <div>
      <div>
        <div className="">
          <ProductFilter />
        </div>

        <div className="">
          <Navbar />

          <div>
            
            <div className="mx-[20px]">
              <div className="flex justify-between my-[20px] items-center">
                <p>Women</p>
                <p className="text-[12px]">View all</p>
              </div>
              <EachProduct />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
