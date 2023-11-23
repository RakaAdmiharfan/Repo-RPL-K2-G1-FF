"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";


function AvailableStaff({ header }: { header: any[] }) {
  const [fetchError, setFetchError] = useState(null);
  const [stafPengiriman, setStafPengiriman] = useState(null);
  const [dataUser, setDataUser] = useState<any[]>([]);
  
  const handleClick = (item: any) => {
    console.log(item);
  };

  useEffect(() => {
    const fetchStafAvail = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/avail-staff");
        const res2 = await res.json();
        setDataUser(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    console.log("hallo");
    fetchStafAvail();
  }, []);

  return (
    <div className="w-[290px] md:w-[600px] mt-[23.54px] lg:mt-[30px] lg:w-[70vw] overflow-x-hidden mx-auto">
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
          {dataUser.map((user) => {
            return (
              <tr
                key={user.staffID}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{user.staffID}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{user.Nama}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{user.dailyCapacity}</div>
                </td>
                <td className="w-auto h-auto py-0">
                  <div className="w-full flex justify-center">
                    <button onClick={() => handleClick(user)}>
                      <img
                        src="/ArrowSquareOut.svg"
                        className="w-[20px] lg:w-[40px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px]"
                      />
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
}

export default AvailableStaff;
