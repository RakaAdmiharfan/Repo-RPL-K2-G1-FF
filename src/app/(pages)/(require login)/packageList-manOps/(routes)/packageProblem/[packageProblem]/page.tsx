"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { packageInfos } from "../../components/assigned";

export default function packageProblem(packageInfos: any) {
  const [packageInfo, setPackageInfo] = useState<any>({
    proofOfDelivery: "",
  });

  return (
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-full lg:h-fit flex-col flex pb-40 lg:pb-80">
      <Link href="/packageList-manOps">
        <img
          src="/arrow-left.svg"
          alt="back"
          className="ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px]"
        />
      </Link>
      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[20px] lg:mb-6 justify-center">
        Laporan Masalah
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-[28px] h-max">
        <div className="flex flex-col lg:flex-row justify-center">
          <img
            src="/image 1.png"
            className="self-center w-[240px] lg:w-[400px] lg:h-[350px]"
          />
        </div>
        <div className="flex flex-col justify-center bg-white border-black w-[240px] lg:w-[400px] px-6 lg:py-[108px] xl:py-[110px] h-full">
          <h2 className="text-black text-[14px] lg:text-[22px] font-bold font-Montserrat mt-6 lg:mt-2">
            Problem Description
          </h2>
          <p className="h-20 text-neutral-500 text-xs lg:text-[16px] font-normal font-Montserrat mt-4">
            Paket yang dikirimkan terlalu melebihi kapasitas, motor saya tidak
            cukup membawanya.{" "}
          </p>
        </div>
      </div>
      <footer className="mt-[140px] lg:mt-[240px] overflow-hidden absolute -bottom-16 lg:bottom-[-340px]">
        <img src="/Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
