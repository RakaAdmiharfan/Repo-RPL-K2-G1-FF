"use client";
import Link from "next/link";
// Your client-side code here
import React, { useState, useEffect } from "react";
// import Search from "./components/search";
import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";
import ListPackae from "./components/listPackage";
import { FaRegUserCircle } from "react-icons/fa";
import ListPackage from "./components/listPackage";
// import axios from "axios";

<<<<<<< Updated upstream
export default function packageStaff() {
  return (
    <div className="flex flex-row bg-gradient-to-b from-[#EFF6FD] to-white relative overflow-hidden w-full h-full min-h-[100vh]">
      <nav className="lg:hidden">
        <Navbar />
      </nav>
      <nav>
        <SideNav active={2} />
      </nav>
      <div className="flex flex-col w-full h-screen overflow-auto">
        <div className="flex flex-row justify-end items-center mr-[20px] lg:mr-[60px] mt-[120px] lg:mt-[100px] lg:text-[24px] gap-2">
          <h1 className="text-[#3D688E]">Hi Staff!</h1>
          <FaRegUserCircle />
=======
export default function packageStaff(){

    return (
        <div className="flex flex-row bg-gradient-to-b from-[#EFF6FD] to-white relative overflow-hidden w-full h-full min-h-[100vh]">
            <nav className="lg:">
                <Navbar />
            </nav>

            <div className="flex flex-col w-full h-screen overflow-auto">
                <div className="flex flex-row justify-end items-center mr-[20px] lg:mr-[60px] mt-[120px] lg:mt-[100px] lg:text-[24px] gap-2">
                    <h1 className="text-[#3D688E]">Hi Staff!</h1>
                    <FaRegUserCircle />
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                <h2 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[14px] mb-6 lg:mb-6">
                    Package List
                </h2>
                </div>

                <div className="flex justify-center w-full mt-[20px] px-6 lg:px-0">
                    <ListPackage
                    header={[
                        "ID",
                        "Nama Pelanggan",
                        "Alamat",
                        "No.Telp",
                        "Jenis Bunga",
                        "Catatan Pelanggan",
                        "Change Status",
                        "Laporan",
                    ]}/>
                </div>
            </div>
>>>>>>> Stashed changes
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[14px] mb-6 lg:mb-6">
            Package List
          </h2>
        </div>

        <div className="flex justify-center w-full mt-[20px] px-6 lg:px-0">
          <PackageList
            header={[
              "ID",
              "Nama Pelanggan",
              "Alamat",
              "No.Telp",
              "Jenis Bunga",
              "Catatan Pelanggan",
              "Change Status",
              "Laporan",
              "Proof",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
