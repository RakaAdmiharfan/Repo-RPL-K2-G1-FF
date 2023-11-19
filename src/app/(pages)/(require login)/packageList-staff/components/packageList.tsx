"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

function packageList ({ header }: { header: any[] }){
    const handleClick = (item: any) => {
        console.log(item);
      };
    
    const packages = packageInfos.filter(
        (packageInfo) =>
          packageInfo.stafPengirim == 2 || packageInfo.stafPengirim === "2"
      );

    return (
<div className="md:w-[600px] mt-[23.54px] lg:mt-[30px] lg:w-[90vw] overflow-x-hidden mx-auto">
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
          {packages.map((packageInfo) => {
            return (
              <tr
                key={packageInfo.packageId}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.packageId}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.namaPelanggan}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.alamatPengirim}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.noTelp}</div>
                </td>
                <td>
                  <div className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                    <div>{packageInfo.jenisBunga}</div>
                  </div>
                </td>
                <td>
                  <div className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                    <div>{packageInfo.catatanPelanggan}</div>
                  </div>
                </td>

                <td className="flex justify-center w-auto h-auto lg:py-[36px] py-[42px] align-middle items-center">
                  <Link
                    href={`/packageList-manOps/packageProblem/${packageInfo.packageId}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] md:w-[40px] w-[10vw] px-[14.29px] py-[6px] lg:w-[04.94vw] lg:px-[1px] lg:py-[6px] lg:rounded-[10px] justify-center bg-[#67AEEE]"
                  >
                    <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[14px] xl-[18px]">
                      Change
                    </h6>
                  </Link>
                </td>

                <td className="w-auto h-auto lg:py-[36px] py-[42px] align-middle items-center">
                  <div className="w-full flex justify-center">
                  <Link
                    href={`/packageList-manOps/packageProblem/${packageInfo.packageId}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] md:w-[40px] w-[10vw] px-[14.29px] py-[6px] lg:w-[04.94vw] lg:px-[1px] lg:py-[6px] lg:rounded-[10px] justify-center bg-[#67AEEE]"
                  >
                    <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[14px] xl-[18px]">
                      Open
                    </h6>
                  </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div> 
    )
}

export default packageList;


export const packageInfos = [
    {
      packageId: "abc123",
      namaPelanggan: "Customer A",
      alamatPengirim: "123 Oak St, City, Country",
      noTelp: "555-123-4567",
      jenisBunga: "Roses",
      catatanPelanggan: "Fragile items inside",
      tanggalPengiriman: "2023-11-10",
      statusPengiriman: "shipped",
      hasUpdateStatus: true,
      report: "Delivered on time",
      proofOfDelivery: "https://example.com/delivery-proof/abc123.jpg",
      stafPengirim: 1,
    },
    {
      packageId: "def456",
      namaPelanggan: "Customer B",
      alamatPengirim: "456 Pine St, City, Country",
      noTelp: "555-987-6543",
      jenisBunga: "Tulips",
      catatanPelanggan: "Handle with care",
      tanggalPengiriman: "2023-11-12",
      statusPengiriman: "processing",
      hasUpdateStatus: false,
      report: "",
      proofOfDelivery: "",
      stafPengirim: 2,
    },
    {
      packageId: "kntl",
      namaPelanggan: "rkaa",
      alamatPengirim: "789 Elm St, City, Country",
      noTelp: "555-555-5555",
      jenisBunga: "Lilies",
      catatanPelanggan: "Handle with care",
      tanggalPengiriman: "2023-11-14",
      statusPengiriman: "processing",
      hasUpdateStatus: false,
      report: "",
      proofOfDelivery: "",
      stafPengirim: 2,
    },
    {
      packageId: "meki",
      namaPelanggan: "aupa D",
      alamatPengirim: "123 Oak St, City, Country",
      noTelp: "555-123-4567",
      jenisBunga: "Roses",
      catatanPelanggan: "Fragile items inside",
      tanggalPengiriman: "2023-11-16",
      statusPengiriman: "processing",
      hasUpdateStatus: false,
      report: "",
      proofOfDelivery: "",
      stafPengirim: "",
    },
  ];