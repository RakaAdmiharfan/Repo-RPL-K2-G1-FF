"use client";

import Link from "next/link";
import prisma from "@/app/lib/prismadb";
import { CiCamera } from "react-icons/ci";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function NotAssigned({ header }: { header: any[] }) {
  const handleClick = (item: any) => {
    console.log(item);
  };

  const [fetchError, setFetchError] = useState(null);
  const [stafPengiriman, setStafPengiriman] = useState(null);
  const [dataItem, setDataItem] = useState<any[]>([]);

  useEffect(() => {
    const fetchUnassigned = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/package-unassigned");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchUnassigned();
  }, []);

  const unassignedPackages = dataItem;

  return (
    <div className="w-full mt-[23.54px] lg:mt-[30px] lg:w-[70vw]">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {unassignedPackages.map((packageInfo) => {
            return (
              <tr
                key={packageInfo.packageId}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[32px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.packageID}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[32px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.namaPelanggan}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[32px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.alamatPengiriman}</div>
                </td>
                <td className="flex justify-center w-auto h-auto py-[32px] align-middle items-end">
                  <Link
                    onClick={() => handleClick(packageInfo)}
                    href={`/packageList-manOps/availableStaff/${packageInfo.packageID}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] w-[12.77vw] px-[14.29px] py-[4.76px] lg:w-[04.94vw] lg:px-[1px] lg:py-[5px] lg:rounded-[10px] justify-center bg-[#67AEEE]"
                  >
                    <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[18px]">
                      Assign
                    </h6>
                  </Link>
                </td>
                <td className="w-auto h-auto py-[18.5px]"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default NotAssigned;

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
    stafPengirim: "",
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
