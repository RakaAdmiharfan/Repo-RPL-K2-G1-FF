"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import StatusBox from "./components/statusBox";
import DetailBox from "./components/detailBox";
import { usePathname, useSearchParams } from "next/navigation";

export default function packageDetail({
  params,
}: {
  params: {
    ID: string;
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
        <Link href="/packageList-manOps">
          <img
            src="/arrow-left.svg"
            alt="back"
            className="ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px]"
          />
        </Link>
      </div>
      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[0px] lg:text-[48px] lg:mt-[24px] lg:mb-6 justify-center">
        Package Detail
      </h1>

      <div className="flex justify-center w-full mt-[24px]">
        <StatusBox id={params.ID} />
      </div>

      <div className="flex justify-center w-full mt-[24px]">
        <DetailBox id={params.ID} />
      </div>

      <footer className="mt-[20px] lg:mt-[200px] overflow-hidden absolute -bottom-16 lg:bottom-[-340px]">
        <img src="/Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
