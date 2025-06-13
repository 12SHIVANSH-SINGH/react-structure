import React from "react";
import { NavLink,Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-fuchsia-200 rounded-2xl p-3 flex justify-center items-center space-x-10 fixed w-full h-auto top-0">
      <Link to="/" className="text-3xl">Logo</Link>
      <ul className="flex space-x-4 ">
        <li>
          <NavLink className={({isActive}) => isActive ?"font-bold" : ""} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ?"font-bold" : ""} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ?"font-bold" : ""} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
