"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import EditFormComponent from "./components/crudForm";

import { useRouter } from "next/router";
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
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-full flex-col flex pb-80">
      <div className="">
        <Link href="/crud-staf">
          <img
            src="/arrow-left.svg"
            alt="back"
            className="ml-[40px] mt-[40px] w-[38px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px]"
          />
        </Link>
      </div>
      <div className="title">
        <h2 className="text-[#3D688E] text-[48px] font-bold font-Montserrat text-center mt-[40px]">
          Delivery Staff Detail
        </h2>
      </div>
      <div className="Box mt-[48px] ml-[240px]">
        <EditFormComponent />
      </div>
      <div className="flex flex-row mt-[80px] items-center justify-center">
        <div className="mr-[24px]">
          <button
            type="submit"
            className="bg-[#3D688E] px-[26px] py-[6px] rounded-[5px] flex items-center justify-center"
          >
            <text className="text-white font-montserrat font-semibold leading-normal text-[12px] lg:text-[18px]">
              Save
            </text>
          </button>
        </div>

        <div className="">
          <button
            type="submit"
            className="bg-[#BC6161] px-[20px] py-[6px] rounded-[5px] flex items-center justify-center"
          >
            <text className="text-white font-montserrat text-xs font-semibold leading-normal text-[12px] lg:text-[18px]">
              Delete
            </text>
          </button>
        </div>
      </div>
      <footer className="mt-[140px] lg:mt-[200px] overflow-hidden absolute -bottom-20 lg:bottom-[-340px]">
        <img src="/Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
