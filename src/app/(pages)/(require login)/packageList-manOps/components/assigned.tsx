"use client";
import Search from "@/components/search";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { PiArrowSquareOut } from "react-icons/pi";
// import Search from "@/components/search";

function Assigned({ header }: { header: any[] }) {
  const handleClick = (item: any) => {
    console.log(item);
  };
  const [dataItem, setDataItem] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [showDeliveredOnly, setShowDeliveredOnly] = useState(false); // State for checkbox

  useEffect(() => {
    const fetchAssigned = async () => {
      try {
        const res = await fetch("/api/package-assigned");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchAssigned();
  }, []);

  // Filter data based on status and checkbox state
  // const filteredData = useMemo(() => {
  //   if (showDeliveredOnly) {
  //     return dataItem.filter(
  //       (packageInfo) => packageInfo.statusPengiriman === "Delivered"
  //     );
  //   } else if (search && search != "") {
  //     return dataItem.filter((item: any) =>
  //       Object.values(item).some((value: any) =>
  //         String(value).toLowerCase().includes(search.toLowerCase())
  //       )
  //     );
  //   } else {
  //     return dataItem;
  //   }
  // }, [dataItem, showDeliveredOnly, search]);

  return (
    <div className="w-[290px] md:w-[600px] mt-[23.54px] lg:mt-[30px] lg:w-[70vw] overflow-x-hidden mx-auto">
      <div className="mb-4 lg:mb-8 ml-1 flex items-center justify-between">
        {/* Checkbox for delivered packages */}
        <div>
          <label className="text-[12px] lg:text-[18px]">
            <input
              type="checkbox"
              checked={showDeliveredOnly}
              onChange={() => setShowDeliveredOnly(!showDeliveredOnly)}
              className="text-[8px] lg:text-[24px] w-3 h-3 lg:w-4 lg:h-4"
            />
            Show Delivered Only
          </label>
        </div>
        <Search onSearch={(e) => setSearch(e)} />
      </div>
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[16px] xl:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {dataItem.map((packageInfo) => {
            return (
              <tr
                key={packageInfo.packageID}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.packageID}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.namaPelanggan}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.staffPengiriman}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.alamatPengiriman}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.statusPengiriman}</div>
                </td>
                <td className="flex justify-center w-auto h-auto lg:py-[36px] py-[42px] align-middle items-center">
                  <Link
                    href={`/packageList-manOps/packageProblem/${packageInfo.packageID}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] md:w-[40px] w-[10vw] px-[14.29px] py-[6px] lg:w-[04.94vw] lg:px-[1px] lg:py-[6px] lg:rounded-[10px] justify-center bg-[#BC6161]"
                  >
                    <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[14px] xl-[18px]">
                      Check
                    </h6>
                  </Link>
                </td>
                <td className="w-auto h-auto py-0">
                  <div className="w-full flex justify-center">
                    <Link
                      onClick={() => handleClick(packageInfo)}
                      href={`/packageList-manOps/packageDetail/${packageInfo.packageID}`}
                    >
                      <PiArrowSquareOut className="text-[24px] lg:text-[36px] hover:text-blue-400" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Assigned;
