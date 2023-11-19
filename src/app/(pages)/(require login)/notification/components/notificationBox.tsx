"use client";
import React from "react";
import { useState } from "react";

interface NotificationBoxProps {
  packageId: string;
  statusText: string;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({
  packageId,
  statusText,
}) => {
  //   const [package, setPackage] = useState<any>({
  //     id: "",
  //     name: "",
  //     noTelp: "",
  //     nik: "",
  //     alamat: "",
  //     tanggalLahir: "",
  //   });

  return (
    <div className="flex justify-center items-center mb-3 ">
      <div className="w-[306px] lg:w-[600px] h-[53px] lg:h-[100px] bg-[#335777] rounded-[5px] drop-shadow-2xl">
        <div className="flex flex-row">
          <div className="mt-[15px] ml-[10px] lg:mt-[40px] lg:ml-[15px]">
            <img src="bell.svg" className="relative" alt="bell"></img>
          </div>
          <div className="mt-[10px] ml-[10px] lg:mt-[26px] lg:ml-[15px]">
            <h1 className="font-bold font-montserrat text-[10px] lg:text-[18px] text-white">
              Status Changed
            </h1>
            <b className="text-[8px] lg:text-[16px] font-normal font-montserrat text-white">
              Paket dengan ID {packageId} {statusText}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBox;
