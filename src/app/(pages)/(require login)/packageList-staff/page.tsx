import Link from "next/link";
// Your client-side code here
import React, { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import PackageList from "./components/packageList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { UserSession } from "@/components/UserFetcher";

export default async function PackageStaff() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  const user = session?.user as UserSession;
  const id = user.id;

  const roleAccess = user.role === "STAFF";

  if (session && !roleAccess) {
    redirect("/");
  }

  return (
    <div className="flex flex-row bg-gradient-to-b from-[#EFF6FD] to-white relative overflow-hidden w-full h-full min-h-[100vh]">
      <div className="flex flex-col w-full h-screen overflow-auto">
        <div className="flex flex-row justify-end items-center mr-[20px] lg:mr-[60px] mt-[40px] lg:mt-[100px] lg:text-[24px] gap-2">
          <h1 className="text-[#3D688E]">Hi Staff!</h1>
          <FaRegUserCircle />
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[14px] mb-6 lg:mb-12">
            Package List
          </h2>
        </div>

        <div className="flex justify-center w-full px-6 lg:px-6 no-scrollbar">
          <PackageList
            header={[
              "ID",
              "Nama Pelanggan",
              "Alamat",
              "No.Telp",
              "Jenis Bunga",
              "Catatan Pelanggan",
              "Status",
              "Change Status",
              "Laporan",
              "Proof",
            ]}
            staffPengiriman={id}
          />
        </div>
      </div>
    </div>
  );
}
