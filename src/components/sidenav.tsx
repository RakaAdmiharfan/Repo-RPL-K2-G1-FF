"use client";
import Link from "next/link";
import { TbPackages } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { signOut } from "next-auth/react";
import Router from "next/router";

interface SideNav {
  active: number;
}

const handleSignOut = async () => {
  await signOut();
};

export default function SideNav({ active }: { active: number }) {
  return (
    <div>
      <aside className=" top-0 left-0 z-100 h-screen transition-transform -translate-x-full lg:translate-x-0 hidden lg:block">
        <div className="pt-[20px] pb-[30px] flex flex-col min-w-[150px] shadow-navbar h-screen bg-white border-r-2">
          <img
            src="/logo-rpl.png"
            alt="Logo FF"
            className="w-[150px] h-[150px] ml-6"
          />

          <div className="pl-8 pr-20 flex flex-col grow">
            <ul className="font-medium flex flex-col">
              <li
                className={`flex items-center rounded-xl hover:text-blue-500 mt-[30px] ${
                  active == 1 ? "text-blue-500" : ""
                }`}
              >
                <Link
                  href="/packageList-manOps"
                  className="flex flex-row items-center text-[28px] gap-2"
                >
                  <TbPackages />
                  <p className="flex text-[18px] whitespace-nowrap">
                    Package List
                  </p>
                </Link>
              </li>
              <li
                className={`flex items-center rounded-xl hover:text-blue-500 mt-[30px] ${
                  active == 2 ? "text-blue-500" : ""
                }`}
              >
                <Link
                  href="/crud-staf"
                  className="flex flex-row items-center text-[28px] gap-2"
                >
                  <IoPeopleSharp />
                  <p className="flex-1 text-[18px] whitespace-nowrap">
                    Staff List
                  </p>
                </Link>
              </li>
              <li
                className={`flex items-center rounded-xl hover:text-blue-500 mt-[30px] ${
                  active == 3 ? "text-blue-500" : ""
                }`}
              >
                <Link
                  href="/notification"
                  className="flex flex-row items-center text-[30px] gap-1"
                >
                  <IoIosNotifications />
                  <p className="flex-1 text-[18px] whitespace-nowrap">
                    Notification
                  </p>
                </Link>
              </li>
              <li className="flex items-center rounded-xl mt-[30px]">
                <button
                  onClick={() => {
                    handleSignOut();
                    Router.push("/");
                  }}
                  className="flex flex-row items-center text-[28px] gap-2 text-red-600 hover:text-white hover:bg-red-600 hover:px-2 hover:py-1 rounded-[15px]"
                >
                  <TbLogout2 />
                  <p className="flex-1 text-[18px] whitespace-nowrap">Logout</p>
                </button>
              </li>
            </ul>

            <div className="flex items-end text-mono-600 text-[12px] grow">
              <p>
                <hr className="mb-4 border-2" />
                Flora Finder, RPL-K2-G1 | <br />
                All Rights Reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
