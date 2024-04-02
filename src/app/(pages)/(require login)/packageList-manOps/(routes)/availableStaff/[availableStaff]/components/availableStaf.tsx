"use client"
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { IoIosAddCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";

function AvailableStaff({ header }: { header: any[] }) {
  const [dataUser, setDataUser] = useState<any[]>([]);
  const [paket, setPaket] = useState<any>();

  const ID = useParams();
  const packageID = Array.isArray(ID.availableStaff)
    ? parseInt(ID.availableStaff[0])
    : parseInt(ID.availableStaff || "");

  const handleSubmit = async (parameter1: any, parameter2: any) => {
    try {
      const res = await fetch("/api/assign-package", {
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
      console.log(error);
    }
  };

  const totalPaketPerStaff = async (parameter1: number) => {
    try {
      const res3 = await fetch("/api/all-package");
      const res4 = await res3.json();

      // Use filter to get the packages for the specific staff
      const packagesForStaff = res4.filter(
        (packageInfo: { staffPengiriman: any }) =>
          packageInfo.staffPengiriman === parameter1
      );

      const totalPaket = packagesForStaff.length;
      return totalPaket;
    } catch (error) {
      console.error("Error fetching data");
      return 0; // Return a default value in case of an error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/avail-staff");
        const res2 = await res.json();
        setDataUser(res2);

        // Call totalPaketPerStaff for each user and update the state
        const paketData = await Promise.all(
          res2.map((user: { staffID: number; }) => totalPaketPerStaff(user.staffID))
        );
        setPaket(paketData);
      } catch (error) {
        console.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[290px] md:w-[600px] mt-[23.54px] lg:mt-[30px] lg:w-[70vw] overflow-x-hidden mx-auto">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => (
              <th
                key={idx}
                className="w-[100px] h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[16px] xl:text-[20px]"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataUser.map((user, index) => (
            <tr
              key={user.staffID}
              className="border-b-[1px] border-black border-opacity-30"
            >
              <td className="overflow-hidden w-[100px] h-auto py-[36px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                <div>{user.staffID}</div>
              </td>
              <td className="overflow-hidden w-[100px] h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                <div>{paket && paket[index]}/{user.dailyCapacity}</div>
              </td>
              <td className="w-[100px] h-auto py-0">
                <div className="w-full flex justify-center">
                  <button onClick={() => handleSubmit(packageID, user.staffID)}>
                    <IoIosAddCircleOutline className="text-[16px] lg:text-[32px]" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AvailableStaff;
