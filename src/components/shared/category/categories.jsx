import React from "react";
import category from "../../../assets/images/icons/header/categories.svg";
import { useState, useRef, useEffect } from "react";
import { ProductFilter } from "../../List of product/filter folder/ProductFilter";

export const Categories = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  
  return (
    <div>
      <div className="flex gap-1 items-center">
        <button
          onClick={toggleMenu}
          className=" flex items-center p-4 "
        >
          <div>
            <img src={category} alt="" />
          </div>
          <p>Categories</p>
        </button>
        {menuOpen && (
          <div
            ref={menuRef}
            className="fixed top-0 left-0 h- w-full   p-4 z-10"
          >
            {/* <button
              onClick={toggleMenu}
              className="absolute top-0 right-0 z-30 p-4 mb-[300px]   shadow"
            >
              <p className="w-6 h-6 text-[19px] items-center justify-center text-center text-white bg-slate-600">
                X
              </p>
            </button> */}
            <div>
              <ProductFilter />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
