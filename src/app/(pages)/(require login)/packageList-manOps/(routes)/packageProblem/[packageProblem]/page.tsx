"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useParams } from "next/navigation";

export default function PackageProblem(packageInfos: any) {
  const [dataItem, setDataItem] = useState<any[]>([]);
  const { packageProblem } = useParams();

  useEffect(() => {
    const fetchPackageProblem = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/all-package");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchPackageProblem();
  }, []);

  const selectedPackage = dataItem.filter((packageInfo) => {
    const packageId = Array.isArray(packageProblem)
      ? packageProblem[0]
      : packageProblem;

    return (
      packageInfo.packageID === parseInt(packageId) ||
      (Array.isArray(packageProblem) &&
        packageInfo.packageID === parseInt(packageProblem[0]))
    );
  });

  return (
    <div>
      {selectedPackage.map((packageInfo) => {
        return (
          <div
            key={packageInfo.packageID}
            className="bg-[#EFF6FD] relative overflow-hidden w-full h-screen lg:h-screen pb-40 lg:pb-80"
          >
            <Link href="/packageList-manOps">
              <IoArrowBack className="text-[40px] ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:text-blue-500 rounded-[15px]" />
            </Link>
            <div className="flex flex-col">
              <h1 className="flex justify-center items-center text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[20px] lg:mb-6">
                Laporan Masalah
              </h1>
              <div className="flex flex-col justify-center items-center mt-6">
                <div className="flex flex-col justify-center bg-white border-black w-[240px] lg:w-[400px] px-6 py-4 lg:py-8">
                  <h2 className="text-black text-[14px] lg:text-[22px] font-bold font-Montserrat mt-6 lg:mt-2 flex justify-start">
                    Problem Description
                  </h2>
                  <p className="h-20 text-neutral-500 text-xs lg:text-[16px] font-normal font-Montserrat mt-4">
                    {packageInfo.report}
                  </p>
                </div>
              </div>
            </div>
            <footer className="mt-[140px] lg:mt-[240px] overflow-hidden absolute bottom-[-80px] md:bottom-[-160px] lg:bottom-[-180px] xl:bottom-[-340px]">
              <Image src="/Footer.png" className="w-screen" alt="hai" />
            </footer>
          </div>
        );
      })}
    </div>
  );
}
