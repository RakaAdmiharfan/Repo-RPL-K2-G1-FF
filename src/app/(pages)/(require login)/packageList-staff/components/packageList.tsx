"use client";

import { createClient } from "@/utils/supabase/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import prisma from "@/app/lib/prismadb";
import { CiCamera } from "react-icons/ci";

interface PackageListProps {
  header: string[];
  staffPengiriman: number; // Tambahkan properti staffPengiriman
}

const PackageList: React.FC<PackageListProps> = ({
  header,
  staffPengiriman,
}) => {
  const [fetchError, setFetchError] = useState(null);
  const [stafPengiriman, setStafPengiriman] = useState(null);
  const [dataItem, setDataItem] = useState<any[]>([]);

  const handleClick = (item: any) => {
    console.log(item);
  };

  useEffect(() => {
    const fetchCertainPackage = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/certain-staff");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    console.log("hallo");
    fetchCertainPackage();
  }, []);

  console.log(dataItem);

  const assignedPackages = dataItem.filter(
    (packageInfo) => packageInfo.staffPengiriman === staffPengiriman
  );

  console.log(assignedPackages);
  return (
    <div className="mt-[23.54px] lg:mt-[30px] overflow-auto mx-auto">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto lg:w-[300px] h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[16px] xl:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {assignedPackages.map((packageInfo) => {
            return (
              <tr
                key={packageInfo.packageId}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto lg:w-[600px] h-auto py-[36px] px-[20px] lg:px-5 text-[10px] lg:text-[12px] xl:text-[20px] text-center ">
                  <div className="">{packageInfo.packageID}</div>
                </td>
                <td className="overflow-hidden w-auto lg:w-[600px] h-auto py-[36px] px-[20px] lg:px-5 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.namaPelanggan}</div>
                </td>
                <td className="overflow-hidden w-auto lg:w-[600px] h-auto py-[36px] px-[20px] lg:px-5 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.alamatPengiriman}</div>
                </td>
                <td className="overflow-hidden w-auto lg:w-[600px] h-auto py-[36px] px-[20px] lg:px-5 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.noTelp}</div>
                </td>
                <td className="overflow-hidden w-auto lg:w-[600px] h-auto py-[36px] px-[20px] lg:px-5 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.jenisBunga}</div>
                </td>
                <td className="overflow-hidden w-auto lg:w-[600px] h-auto py-[36px] px-[20px] lg:px-5 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.catatanPelanggan}</div>
                </td>

                <td className="w-auto lg:w-[600px] h-auto lg:py-[36px] px-[20px] lg:px-5 py-[42px] align-middle items-center">
                  <div className="w-full flex justify-center">
                    <Link
                      href={`/packageList-manOps/packageProblem/${packageInfo.packageId}`}
                      className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] md:w-[40px] w-[10vw] px-[14.29px] py-[6px] lg:w-[04.94vw] lg:px-[1px] lg:py-[6px] lg:rounded-[10px] justify-center bg-[#67AEEE]"
                    >
                      <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[14px] xl-[18px]">
                        Change
                      </h6>
                    </Link>
                  </div>
                </td>

                <td className="w-auto lg:w-[600px] h-auto lg:py-[36px] px-[20px] lg:px-5 py-[42px] align-middle items-center">
                  <div className="w-full flex justify-center">
                    <Link
                      href={`/packageList-manOps/packageProblem/${packageInfo.packageId}`}
                      className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] md:w-[40px] w-[10vw] px-[14.29px] py-[6px] lg:w-[04.94vw] lg:px-[1px] lg:py-[6px] lg:rounded-[10px] justify-center bg-[#67AEEE]"
                    >
                      <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[14px] xl-[18px]">
                        Open
                      </h6>
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="w-full flex justify-center">
                    <button className="hover:text-blue-900 font-bold flex justify-center">
                      <CiCamera className="text-[36px]" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PackageList;
