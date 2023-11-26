"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { MdDeliveryDining } from "react-icons/md";
import { PiPackage } from "react-icons/pi";
import { IoIosWarning } from "react-icons/io";

const StatusBox = ({ id }: { id: string }) => {
  const [packageInfo, setPackage] = useState<any>({
    statusPengiriman: "",
  });

  const [dataItem, setDataItem] = useState<any[]>([]);

  useEffect(() => {
    const fetchPackageDetail = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/package-detail?");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    console.log("hallo");
    fetchPackageDetail();
  }, []);

  const { packageDetail } = useParams();
  const selectedPackage = dataItem.filter((packageInfo) => {
    const packageId = Array.isArray(packageDetail)
      ? packageDetail[0]
      : packageDetail;

    return (
      packageInfo.packageID === parseInt(packageId) ||
      (Array.isArray(packageDetail) &&
        packageInfo.packageID === parseInt(packageDetail[0]))
    );
  });

  return (
    <div>
      {selectedPackage.map((packageInfo) => {
        return (
          <div
            key={packageInfo.packageID}
            className="bg-white w-[280px] lg:w-[600px] rounded-[15px] drop-shadow-2xl pt-4 lg:pt-7 pb-7"
          >
            <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] lg:text-[36px] mb-4 lg:mb-6 justify-center">
              Proof
            </h1>
            <div className="flex justify-center">
              {packageInfo.statusPengiriman === "Delivered" &&
              packageInfo.proof !== "" ? (
                <img
                  src={packageInfo.proof}
                  className="w-[220px] lg:w-[380px"
                />
              ) : packageInfo.statusPengiriman === "On Hold" ? (
                <IoIosWarning className="text-red-600 text-[120px] lg:text-[228px]" />
              ) : packageInfo.statusPengiriman === "" ? (
                <PiPackage className="text-black text-[120px] lg:text-[158px]" />
              ) : packageInfo.statusPengiriman === "Pick Up" ||
                packageInfo.statusPengiriman === "On the Way" ? (
                <MdDeliveryDining className="text-[#3D688E] text-[120px] lg:text-[190px]" />
              ) : (
                <PiPackage className="text-black text-[120px] lg:text-[158px]" />
              )}
            </div>
            <h2 className="text-[#3D688E] text-center font-montserrat font-regular text-[20px] mt-[12px] lg:text-[28px] lg:mt-[20px] justify-center">
              Flower Package
            </h2>
            <h2 className="text-[#3D688E] text-center font-montserrat font-regular text-[20px] mt-[0px] lg:text-[28px] lg:mt-[4px] lg:mb-4 justify-center">
              {packageInfo.proof !== ""
                ? `Status: ${packageInfo.statusPengiriman}`
                : `Status: ${packageInfo.statusPengiriman || "Empty"}`}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default StatusBox;
