"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";

function AvailableStaff({ header }: { header: any[] }) {
  const [fetchError, setFetchError] = useState(null);
  const [stafPengiriman, setStafPengiriman] = useState(null);
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [dataPackage, setDataPackage] = useState<any[]>([]);
  const [dataStaff, setDataStaff] = useState<any[]>([]);
  
  const ID = useParams()
  console.log(ID);
  const packageID = parseInt(ID.availableStaff)
  console.log(packageID);
  console.log(ID.packageDetail);

  const handleSubmit = async (parameter1: any, parameter2 : any ) => {
    // console.log(pid);
    try {
      const res = await fetch("http://localhost:3000/api/assign-package",{
        method: "PATCH",
        body: JSON.stringify({
          pid: parameter1,
          newSid: parameter2,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        toast.success("Package Assigned!");
      } else {
        toast.error("Failed to assign");
      }
    } catch (error) {
      console.log(error)
    }
  
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
                  <div>total paket/{user.dailyCapacity}</div>
                </td>
                <td className="w-auto h-auto py-0">
                  <div className="w-full flex justify-center">
                    <button onClick={() => handleSubmit(packageID, user.staffID)}>
                      <IoIosAddCircleOutline className="text-[16px] lg:text-[32px]" />
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
