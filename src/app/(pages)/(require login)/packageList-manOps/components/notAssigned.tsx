"use client";

import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import Search from "@/components/search";

function NotAssigned({ header }: { header: any[] }) {
  const handleClick = (item: any) => {
    console.log(item);
  };

  const [dataItem, setDataItem] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchUnassigned = async () => {
      try {
        const res = await fetch("/api/all-package");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchUnassigned();
  }, []);

  const unassignedPackages = dataItem.filter(
    (packageInfo) =>
      packageInfo.staffPengiriman === null || packageInfo.staffPengiriman === ""
  );

  // Filter data based on status and checkbox state
  const filteredData = useMemo(() => {
    if (search && search != "") {
      return unassignedPackages.filter((item: any) =>
        Object.values(item).some((value: any) =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      return unassignedPackages;
    }
  }, [unassignedPackages, search]);

  return (
    <div className="w-full mt-[23.54px] lg:mt-[30px] lg:w-[70vw]">
      <div className="flex justify-end mb-5">
        <Search onSearch={(e) => setSearch(e)} />
      </div>
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((packageInfo) => {
            return (
              <tr
                key={packageInfo.packageId}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[32px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.packageID}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[32px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.namaPelanggan}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[32px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.alamatPengiriman}</div>
                </td>
                <td className="flex justify-center w-auto h-auto py-[32px] align-middle items-end">
                  <Link
                    onClick={() => handleClick(packageInfo)}
                    href={`/packageList-manOps/availableStaff/${packageInfo.packageID}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] w-[12.77vw] px-[14.29px] py-[4.76px] lg:w-[04.94vw] lg:px-[1px] lg:py-[5px] lg:rounded-[10px] justify-center bg-[#67AEEE]"
                  >
                    <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[18px]">
                      Assign
                    </h6>
                  </Link>
                </td>
                <td className="w-auto h-auto py-[18.5px]"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default NotAssigned;
