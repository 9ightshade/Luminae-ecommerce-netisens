import hamburger from "../../assets/images/icons/header/Menue.svg";
import React, { useState, useRef, useEffect } from "react";
import { ProductCategoryDropdown, Productcategory } from "./productcategory";

const HamburgerMenu = () => {
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
      <button onClick={toggleMenu} className="lg:hidden">
        <img src={hamburger} alt="Menu" />
      </button>
      {menuOpen && (
        <div ref={menuRef} className="">
          {/* <ProductCategoryDropdown /> */}
          <Productcategory />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

