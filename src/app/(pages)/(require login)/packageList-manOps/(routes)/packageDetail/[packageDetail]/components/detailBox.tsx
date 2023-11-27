"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const DetailBox = ({ id }: { id: string }) => {
  const [dataItem, setDataItem] = useState<any[]>([]);

  useEffect(() => {
    const fetchPackageDetail = async () => {
      try {
        const res = await fetch("/api/package-detail?");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
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
    <div className="bg-white w-[280px] lg:w-[600px] h-[290px] lg:h-full rounded-[15px] drop-shadow-2xl pb-12">
      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[12px] lg:text-[36px] lg:mt-[32px] mb-[12px] lg:mb-6 justify-center">
        Detail
      </h1>
      <div className="flex px-4 lg:px-16">
        <div className="flex flex-col w-1/2 gap-2">
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Id
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Customer Name
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Address
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Phone Number
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Flower Type
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Customer Note
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
        </div>

        {selectedPackage.map((packageInfo) => {
          return (
            <div
              key={packageInfo.packageID}
              className="flex flex-col items-end w-1/2 overflow-visible gap-2"
            >
              <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
                {packageInfo.packageID}
              </p>
              <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
                {packageInfo.namaPelanggan}
              </p>
              <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
                {packageInfo.alamatPengiriman}
              </p>
              <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
                {packageInfo.noTelp}
              </p>
              <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
                {packageInfo.jenisBunga}
              </p>
              <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat text-right">
                {packageInfo.catatanPelanggan}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailBox;
