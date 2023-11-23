"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const StatusBox = ({ id }: { id: string }) => {
  const [packageInfo, setPackage] = useState<any>({
    statusPengiriman: "",
  });

  const [fetchError, setFetchError] = useState(null);
  const [stafPengiriman, setStafPengiriman] = useState(null);
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
            className="bg-white w-[280px] lg:w-[600px] rounded-[15px] drop-shadow-2xl pt-6 pb-6"
          >
            <div className="flex justify-center">
              <img src="/paket.svg" className="w-[100px] lg:w-[200px]" />
            </div>
            <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[12px] lg:text-[36px] lg:mt-[32px] lg:mb-6 justify-center">
              {packageInfo.statusPengiriman}
            </h1>
            <h2 className="text-[#3D688E] text-center font-montserrat font-regular text-[20px] mt-[12px] lg:text-[28px] lg:mt-[32px] justify-center">
              Flower Package
            </h2>
            <h2 className="text-[#3D688E] text-center font-montserrat font-regular text-[20px] mt-[0px] lg:text-[28px] lg:mt-[4px] lg:mb-4 justify-center">
              is {packageInfo.statusPengiriman}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default StatusBox;
