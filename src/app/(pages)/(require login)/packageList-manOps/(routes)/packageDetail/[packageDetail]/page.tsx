"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import StatusBox from "./components/statusBox";
import DetailBox from "./components/detailBox";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";

export default function PackageDetail({
  params,
}: {
  params: {
    ID: string;
  };
}) {
  return (
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-full flex-col flex pb-36 lg:pb-80">
      <div className="">
        <Link href="/packageList-manOps">
          <IoArrowBack className="text-[40px] ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:text-blue-500 rounded-[15px]" />
        </Link>
      </div>
      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[0px] lg:text-[48px] lg:mt-[24px] lg:mb-6 justify-center">
        Package Detail
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-3 mt-6">
        <StatusBox id={params.ID} />
        <DetailBox id={params.ID} />
      </div>

      <footer className="mt-[20px] lg:mt-[200px] overflow-hidden absolute bottom-[-80px] md:bottom-[-160px] lg:bottom-[-180px] xl:bottom-[-340px]">
        <Image src="/Footer.png" className="w-screen" alt="Footer" />
      </footer>
    </div>
  );
}
