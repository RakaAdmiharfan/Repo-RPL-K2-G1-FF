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
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-full flex-col flex pb-36 lg:pb-80">
      <div className="">
        <Link href="/crud-staf">
          <img
            src="/arrow-left.svg"
            alt="back"
            className="ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px]"
          />
        </Link>
      </div>
      <div className="title">
        <h2 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[20px] lg:mb-6 justify-center">
          Delivery Staff Detail
        </h2>
      </div>
      <div className="Box mt-[24px] lg:mt-[48px] flex justify-center">
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
      <footer className="mt-[140px] lg:mt-[200px] overflow-hidden absolute -bottom-16 lg:bottom-[-340px]">
        <img src="/Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
