"use client";
import Link from "next/link";
// Your client-side code here
import React, { useState, useEffect } from "react";
// import Search from "./components/search";
import Navbar from "../components/navbar";
import StafList from "./components/stafList";
import SideNav from "../components/sidenav";
// import axios from "axios";

export default function StaffList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataProperties, setDataProperties] = useState<any>([]);

  const filteredProperties = dataProperties.filter((property: any) =>
    property.nama_properti.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <SideNav />
      </nav>

      <div className="ml-[80px]">
        <h2 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[0px] lg:text-[48px] lg:mt-[70px] lg:mb-6">
          Delivery Staff List
        </h2>

        <div className="ml-[5vw] lg:ml-[15.46vw] mt-[20px]">
          <div className="flex rounded-[5px] lg:rounded-[8px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#3D688E] text-white justify-center w-[119px] mb-[11px] px-[18px] py-[6px] lg:mb-[16px] lg:w-[10.26vw] lg:p-[10px]">
            <Link
              href={{
                pathname: "/crud-staf/add-staf",
              }}
              className=""
            >
              <h6 className="text-montserrat font-bold text-[12px] lg:text-[16px]">
                Add Staff
              </h6>
            </Link>
          </div>

          {/* <Search onSearch={setSearchTerm} /> */}

          <div className="max-h-[600px] overflow-y-auto no-scrollbar">
            <StafList
              data={filteredProperties}
              header={["ID", "Nama", "No.Telp", "Edit"]}
            />
            {/* <Pagination current={handlePageChange} totalPages={totalPages} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
