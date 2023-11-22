"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Assigned({ header }: { header: any[] }) {
  const handleClick = (item: any) => {
    console.log(item);
  };

  const [fetchError, setFetchError] = useState(null);
  const [stafPengiriman, setStafPengiriman] = useState(null);
  const [dataItem, setDataItem] = useState<any[]>([]);

  useEffect(() => {
    const fetchAssigned = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/package-assigned");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchAssigned();
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
          {dataItem.map((packageInfo) => {
            return (
              <tr
                key={packageInfo.packageID}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{packageInfo.packageID}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.namaPelanggan}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.alamatPengiriman}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{packageInfo.statusPengiriman}</div>
                </td>
                <td className="flex justify-center w-auto h-auto lg:py-[36px] py-[42px] align-middle items-center">
                  <Link
                    href={`/packageList-manOps/packageProblem/${packageInfo.packageID}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] md:w-[40px] w-[10vw] px-[14.29px] py-[6px] lg:w-[04.94vw] lg:px-[1px] lg:py-[6px] lg:rounded-[10px] justify-center bg-[#BC6161]"
                  >
                    <h6 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[14px] xl-[18px]">
                      Check
                    </h6>
                  </Link>
                </td>
                <td className="w-auto h-auto py-0">
                  <div className="w-full flex justify-center">
                    <Link
                      onClick={() => handleClick(packageInfo)}
                      href={`/packageList-manOps/packageDetail/${packageInfo.packageID}`}
                    >
                      <img
                        src="/ArrowSquareOut.svg"
                        className="w-[20px] lg:w-[40px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px]"
                      />
                    </Link>
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

export default Assigned;

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
    packageId: "ghi789",
    namaPelanggan: "Customer C",
    alamatPengirim: "789 Elm St, City, Country",
    noTelp: "555-555-5555",
    jenisBunga: "Lilies",
    catatanPelanggan: "Handle with care",
    tanggalPengiriman: "2023-11-14",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 3,
  },
  {
    packageId: "jkl012",
    namaPelanggan: "Customer D",
    alamatPengirim: "123 Oak St, City, Country",
    noTelp: "555-123-4567",
    jenisBunga: "Roses",
    catatanPelanggan: "Fragile items inside",
    tanggalPengiriman: "2023-11-16",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 4,
  },
  {
    packageId: "jkl012",
    namaPelanggan: "Customer D",
    alamatPengirim: "123 Oak St, City, Country",
    noTelp: "555-123-4567",
    jenisBunga: "Roses",
    catatanPelanggan: "Fragile items inside",
    tanggalPengiriman: "2023-11-16",
    statusPengiriman: "processing",
    hasUpdateStatus: false,
    report: "",
    proofOfDelivery: "",
    stafPengirim: 4,
  },
  {
    packageId: "jkl012",
    namaPelanggan: "Customer D",
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
  {
    packageId: "jkl012",
    namaPelanggan: "Customer D",
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
