// import { Socialmedia } from './category/socialmedia';

import { NavLink } from "react-router-dom";

export const Aboutus = () => {
  return (
    <div>
      <div className="items-center justify-around hidden gap-10 md:flex">
        <ul className="flex justify-between gap-9 lg:text-[14px]">
          <li> <NavLink to="/About">About us</NavLink> </li>
          <li> <NavLink to="/Blog">Blog</NavLink> </li>
          <li> <NavLink to="/Contact">Contact Us</NavLink> </li>
          <li> <NavLink to="/Help">Help & Support</NavLink> </li>
        </ul>
      </div>
    </div>
  );
};
