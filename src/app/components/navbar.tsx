"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbPackages } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log("kepencet");
    setNav(!nav);
  };

  console.log(nav);
  return (
    <div>
      <div className="bg-[#ffffff] w-full flex justify-between items-center fixed border-b border-black z-10">
        <div className="ml-[12px]">
          <Link href="/packageList-manOps">
            <img src="/logo-rpl.png" alt="Logo" className="w-[70px] h-[60px]" />
          </Link>
        </div>

        <div onClick={handleNav} className="block sm:hidden z-40 mr-[20px]">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `black` }} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <div
          className={`sm:hidden absolute top-0 ${
            nav ? "translate-x-0" : "translate-x-full"
          } transition duration-300 right-0 bottom-0 flex justify-center items-center w-[80vw] h-screen bg-[#ffffff] text-center text-black border-l-[1px] border-black`}
        >
          <ul>
            <li onClick={handleNav} className="p-4">
              <Link href="/packageList-manOps" className="flex flex-row">
                <TbPackages />
                <p>Package List</p>
              </Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/crud-staf" className="flex flex-row">
                <IoPeopleSharp />
                <p>Delivery Staff List</p>
              </Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link href="/notification" className="flex flex-row">
                <IoIosNotifications />
                <p>Notification</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
