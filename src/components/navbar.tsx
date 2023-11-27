"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbPackages } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";

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

        <div onClick={handleNav} className="block xl:hidden z-40 mr-[20px]">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `black` }} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <div
          className={`lg:hidden absolute top-0 ${
            nav ? "translate-x-0" : "translate-x-full"
          } transition duration-300 right-0 bottom-0 flex justify-center items-center w-[80vw] md:w-[40vw] h-screen bg-[#ffffff] text-center text-black border-l-[1px] border-black`}
        >
          <ul>
            <li onClick={handleNav} className="p-4">
              <Link
                href="/packageList-manOps"
                className="flex flex-row hover:text-blue-500 items-center gap-2 md:text-[20px]"
              >
                <TbPackages />
                <p>Package List</p>
              </Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link
                href="/crud-staf"
                className="flex flex-row hover:text-blue-500 items-center gap-2 md:text-[20px]"
              >
                <IoPeopleSharp />
                <p>Delivery Staff List</p>
              </Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <Link
                href="/notification"
                className="flex flex-row hover:text-blue-500 items-center gap-2 md:text-[20px]"
              >
                <IoIosNotifications />
                <p>Notification</p>
              </Link>
            </li>
            <li onClick={handleNav} className="p-4">
              <button className="flex flex-row text-red-600 items-center gap-2 md:text-[20px]">
                <TbLogout2 />
                <p>Logout</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
