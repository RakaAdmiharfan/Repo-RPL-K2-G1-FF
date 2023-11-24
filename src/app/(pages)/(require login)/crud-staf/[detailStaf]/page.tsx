"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import EditFormComponent from "./components/crudForm";
import { IoArrowBack } from "react-icons/io5";
import { usePathname, useSearchParams } from "next/navigation";

export default function crudPage({
  params,
}: {
  params: {
    detailStaf: string;
  };
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams;

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
  }, [pathname, searchParams]);

  return (
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-full flex-col flex pb-36 lg:pb-80">
      <div className="">
        <Link href="/crud-staf">
          <IoArrowBack className="text-[40px] ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:text-blue-500 rounded-[15px]" />
        </Link>
      </div>
      <div className="title">
        <h2 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[20px] lg:mb-6 justify-center">
          Delivery Staff Detail
        </h2>
      </div>
      <div className="Box mt-[24px] lg:mt-[24spx] flex justify-center">
        <EditFormComponent id={params.detailStaf} />
      </div>

      <footer className="mt-[140px] lg:mt-[200px] overflow-hidden absolute -bottom-16 lg:bottom-[-340px]">
        <img src="/Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
