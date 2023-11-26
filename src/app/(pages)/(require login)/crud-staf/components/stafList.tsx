"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function StafList({ header }: { header: any[] }) {
  const [dataUser, setDataUser] = useState<any[]>([]);

  const handleClick = (item: any) => {
    console.log(item);
  };

  useEffect(() => {
    const fetchStafList = async () => {
      try {
        const res = await fetch("/api/all-staf");
        const res2 = await res.json();
        setDataUser(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    console.log("hallo");
    fetchStafList();
  }, []);

  // console.log(dataItem);
  return (
    <div className="w-full mt-[23.54px] lg:mt-[30px] lg:w-[70vw] mx-auto">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-[100px] h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {dataUser.map((staf) => {
            return (
              <tr
                key={staf.id}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-[100px] h-auto py-[24px] px-4 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.id}</div>
                </td>
                <td className="overflow-hidden w-[100px] h-auto py-[24px] px-4 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.nama}</div>
                </td>
                <td className="overflow-hidden w-[100px] h-auto py-[24px] px-4 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.username}</div>
                </td>
                <td className="overflow-hidden w-[100px] h-auto py-[24px] px-4 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.tanggalLahir}</div>
                </td>
                <td className="overflow-hidden w-[100px] h-auto py-[24px] px-4 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.alamat}</div>
                </td>
                <td className="overflow-hidden w-[100px] h-auto py-[24px] px-4 text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.noTelp}</div>
                </td>
                <td className="flex justify-center w-[100px] h-auto py-[24px] px-4">
                  <Link
                    onClick={() => handleClick(staf)}
                    href={`/crud-staf/${staf.id}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] w-[12.77vw] px-[14.29px] py-[4.76px] lg:w-[04.94vw] lg:px-[1px] lg:py-[5px] lg:rounded-[15px] justify-center border-[#6C88CD] border-[3px]"
                  >
                    <h6 className="text-[#6C88CD] text-montserrat text-semibold text-[8.574px] lg:text-[18px]">
                      Edit
                    </h6>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StafList;
