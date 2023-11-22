"use client";
import Link from "next/link";
import prisma from "@/app/lib/prismadb";
import { CiCamera } from "react-icons/ci";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const DetailBox = ({ id }: { id: string }) => {
  // const [packageInfo, setPackage] = useState<any>({
  //   packageId: "",
  //   namaPelanggan: "",
  //   alamatPengirim: "",
  //   noTelp: "",
  //   jenisBunga: "",
  //   catatanPelanggan: "",
  // });

  const [fetchError, setFetchError] = useState(null);
  const [stafPengiriman, setStafPengiriman] = useState(null);
  const [dataItem, setDataItem] = useState<any>([]);

  console.log(id);

  useEffect(() => {
    const fetchStafList = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/package-detail/");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    console.log("hallo");
    fetchStafList();
  }, []);

  console.log(dataItem);
  console.log(id);

  return (
    <div className="bg-white w-[300px] lg:w-[600px] h-[270px] lg:h-full rounded-[15px] drop-shadow-2xl pb-6">
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
        <div className="flex flex-col items-end w-1/2 overflow-visible gap-2">
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            {dataItem.packageID}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            {dataItem.namaPelanggan}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            {dataItem.alamatPengiriman}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            {dataItem.noTelp}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            {dataItem.jenisBunga}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat text-right">
            {dataItem.catatanPelanggan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
