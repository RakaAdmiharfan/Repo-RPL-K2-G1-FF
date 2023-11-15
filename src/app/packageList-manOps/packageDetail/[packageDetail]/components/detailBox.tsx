"use client";
import { useState } from "react";
import { packageInfos } from "@/app/packageList-manOps/components/notAssigned";

const DetailBox = () => {
  const [packageInfo, setPackage] = useState<any>({
    packageId: "",
    namaPelanggan: "",
    alamatPengirim: "",
    noTelp: "",
    jenisBunga: "",
    catatanPelanggan: "",
  });

  return (
    <div className="bg-white w-[600px] h-[400px] rounded-[15px] drop-shadow-2xl">
      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[0px] lg:text-[36px] lg:mt-[32px] lg:mb-6 justify-center">
        Detail
      </h1>
      <div className="px-16">
        <div className="flex flex-row justify-between">
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Id:
          </p>
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            2 {packageInfo.packageId}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Customer Name:
          </p>
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Mahmud {packageInfo.namaPelanggan}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Address:
          </p>
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            jalan Tubis {packageInfo.alamatPengirim}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Phone:
          </p>
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            081212345678 {packageInfo.noTelp}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Flower Type:
          </p>
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Mawar {packageInfo.jenisBunga}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Customer Note:
          </p>
          <p className="text-[#3D688E] text-[24px] font-normal font-Montserrat">
            Bunga dipaket dengan busa {packageInfo.catatanPelanggan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
