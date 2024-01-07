import hamburger from "../../assets/images/icons/header/Menue.svg";
import React, { useState, useRef, useEffect } from "react";

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
        <div
          ref={menuRef}
          className="fixed top-0 left-0 h-auto w-full bg-gray-500 p-4 z-10 pl-[50px]"
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="#about" className="text-white">
               Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#blog" className="text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#help" className="text-white">
                Help & Support
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

