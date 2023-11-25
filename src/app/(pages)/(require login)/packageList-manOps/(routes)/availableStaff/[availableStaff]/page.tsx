import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";
import AvailableStaff from "./components/availableStaf";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

// import axios from "axios";

export default function packageMenu() {
  return (
    <div className="flex flex-row bg-gradient-to-b from-[#EFF6FD] to-white relative overflow-hidden w-full h-full min-h-[100vh]">
      <nav className="lg:hidden">
        <Navbar />
      </nav>
      <nav>
        <SideNav active={1} />
      </nav>

      <div className="flex flex-col w-full h-screen overflow-auto mt-10">
        <Link href="/packageList-manOps">
          <IoArrowBack className="text-[40px] ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:text-blue-500 rounded-[15px]" />
        </Link>
        <div className="flex flex-row justify-end items-center mr-[20px] lg:mr-[60px] mt-[28px] lg:mt-[52px] lg:text-[24px] gap-1">
          <h1 className="text-[#3D688E]">Hi ManOps!</h1>
          <FaRegUserCircle />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[14px] mb-6 lg:mb-6">
            Available Staff
          </h2>

          <div className="flex justify-center w-full mt-[20px] px-6 lg:px-0">
            <AvailableStaff header={["ID", "Capacity", "Assign"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
