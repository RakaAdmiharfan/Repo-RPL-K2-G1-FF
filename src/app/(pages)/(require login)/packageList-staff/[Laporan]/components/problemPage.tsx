"use client";

import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import InputBox from "../../../crud-staf/[detailStaf]/components/inputBox";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Form, formik } from "formik";
import toast from "react-hot-toast";
import Image from "next/image";

export default function ProblemPage({ id }: { id: number }) {
  const [Laporan, setLaporan] = useState("");

  const ID = useParams();
  //const packageID = parseInt(ID.Laporan);

  const packageID = Array.isArray(ID.Laporan)
    ? parseInt(ID.Laporan[0])
    : parseInt(ID.Laporan || "");
  console.log(packageID);

  const handleSubmit = async (req1: any, req2: any) => {
    // e.preventDefault();
    const res = await fetch("http://localhost:3000/api/package-report", {
      method: "PATCH",
      body: JSON.stringify({
        pid: req1,
        laporan: req2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      toast.success("Report uploaded!");
    } else {
      toast.error("Failed to upload");
    }
    const data = await res.json();
  };

  return (
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-screen lg:h-full flex-col flex pb-36 lg:pb-80">
      <Link href="/packageList-staff">
        <IoArrowBack className="text-[40px] ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:text-blue-500 rounded-[15px]" />
      </Link>

      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[10px] lg:text-[48px] lg:mt-[20px] mb-10 justify-center">
        Pelaporan Masalah
      </h1>

      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-black text-[12px] lg:text-[24px] font-bold mb-[8px] lg:mb-[14px]">
            Description
          </h2>
          <formik initialValues={{}} onSubmit={handleSubmit}>
            <Form className="w-[70vw] lg:w-[60vw] h-[80px] lg:h-[200px]">
              <InputBox
                name="Problem Description"
                label="Problem Description"
                placeholder="Problem Description"
                onChange={(e: any) => setLaporan(e.target.value)}
                as="textarea"
              />
            </Form>
          </formik>
        </div>
      </div>

      <div className="flex justify-center mt-6 lg:mt-12">
        <button
          onClick={() => handleSubmit(packageID, Laporan)}
          className="bg-[#3D688E] px-6 lg:px-[26px] py-[6px] rounded-[15px] flex items-center justify-center hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <text className="text-white font-montserrat font-semibold leading-normal text-[10px] lg:text-[18px]">
            Send
          </text>
        </button>
      </div>

      <footer className="mt-[140px] lg:mt-[260px] overflow-hidden absolute -bottom-16 lg:bottom-[-340px]">
        <Image src="/Footer.png" className="w-screen" alt="hai" />
      </footer>
    </div>
  );
}
