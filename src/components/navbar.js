import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="py-2 w-full flex text-xs font-semibold text-gray-600  justify-between px-5 lg:px-72">
        <div className="flex gap-5">
          <Link href='/login'>
          <Image src={logo} width={30} height={30} alt="logo"></Image></Link>
          <div className="pt-2 pl-2 hover:text-orange-600"> Location </div>
         <div className="pt-3"> <svg
            className="w-5 h-5 text-orange-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg></div>
        </div>
        <div className="md:block hidden">
          <ul className="flex gap-7 pt-2  ">
            <li className=" hover:text-orange-600">Search</li>
            <li className=" hover:text-orange-600">Offers</li>
            <li className=" hover:text-orange-600">Help</li>
            <li className=" hover:text-orange-600">Sign In</li>
            <li className=" hover:text-orange-600">Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
