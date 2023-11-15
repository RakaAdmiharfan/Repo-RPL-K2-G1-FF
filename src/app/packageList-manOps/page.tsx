"use client";
import Link from "next/link";
// Your client-side code here
import React, { useState, useEffect } from "react";
// import Search from "./components/search";
import Navbar from "../components/navbar";
import SideNav from "../components/sidenav";
import Assigned from "./components/assigned";
import NotAssigned from "./components/notAssigned";
// import axios from "axios";

export default function packageMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataProperties, setDataProperties] = useState<any>([]);

  const filteredProperties = dataProperties.filter((property: any) =>
    property.nama_properti.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [indeks, setIndeks] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Jumlah item per halaman

  // Hitung jumlah halaman
  //   const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Filter properti berdasarkan halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  //   const displayedProperties = properties.slice(startIndex, endIndex);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // try {
    //   const response = await axios.get("http://159.223.92.164:8080/api/v1/properti");
    //   setDataProperties(response.data.propertiGetAllProperti);
    // } catch (error) {
    //   console.error("Terjadi kesalahan:", error);
    // }
  };

  return (
    <div className="bg-gradient-to-b from-[#EFF6FD] to-white relative overflow-hidden w-full h-full min-h-[100vh]">
      <nav className="lg:hidden">
        <Navbar />
      </nav>
      <nav>
        <SideNav active={1} />
      </nav>

      <span></span>

      <h2 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[100px] lg:text-[48px] lg:mt-[70px] lg:mb-6 justify-center">
        Package List
      </h2>

      <div className="flex flex-row items-center justify-center mt-[42px]">
        <div className="mr-[20px]">
          <button
            className="bg-[#D1E6F9] px-[26px] py-[6px] rounded-[5px] flex items-center justify-center hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
            onClick={() => setIndeks(0)}
          >
            <text className="text-black font-montserrat text-xs font-semibold leading-normal text-[12px] lg:text-[14px]">
              Assigned
            </text>
          </button>
        </div>

        <div className="">
          <button
            className="bg-[#D1E6F9] px-[16px] py-[6px] rounded-[5px] flex items-center justify-center hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
            onClick={() => setIndeks(1)}
          >
            <text className="text-black font-montserrat text-xs font-semibold leading-normal text-[12px] lg:text-[14px]">
              Not Assigned
            </text>
          </button>
        </div>
      </div>

      {indeks === 0 ? (
        <div className="flex justify-center lg:ml-[154px] mt-[24px]">
          <div className="max-h-[600px] overflow-y-auto no-scrollbar">
            <Assigned
              data={filteredProperties}
              header={[
                "ID",
                "Nama Pelanggan",
                "Alamat",
                "Status",
                "Check Problem",
                "Package Detail",
              ]}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center lg:ml-[154px] mt-[24px]">
          <div className="max-h-[600px] overflow-y-auto no-scrollbar">
            <NotAssigned
              data={filteredProperties}
              header={["ID", "Nama Pelanggan", "Alamat", "Assign"]}
            />
          </div>
        </div>
      )}
    </div>
  );
}
