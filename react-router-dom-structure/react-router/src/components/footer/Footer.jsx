import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className="bg-gray-300 rounded-2xl p-3  flex justify-center items-center space-x-10 fixed w-full h-auto bottom-0">
      <Link to="/" className="text-3xl">Logo</Link>
      <ul className=" space-x-4 ">
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
  )
}

export default Footer
