"use client";
import { useState } from "react";
import { packageInfos } from "@/app/packageList-manOps/components/assigned";

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
    <div className="bg-white w-[300px] lg:w-[600px] h-[270px] lg:h-[400px] rounded-[15px] drop-shadow-2xl">
      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[12px] lg:text-[36px] lg:mt-[32px] mb-[12px] lg:mb-6 justify-center">
        Detail
      </h1>
      <div className="flex px-4 lg:px-16">
        <div className="flex flex-col w-1/2 gap-2">
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Id
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Customer Name
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Address
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Phone Number
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Flower Type
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              Customer Note
            </p>
            <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
              :
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end w-1/2 overflow-visible gap-2">
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            2 {packageInfo.packageId}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            Mahmud {packageInfo.namaPelanggan}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            jalan Tubis {packageInfo.alamatPengirim}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            081212345678 {packageInfo.noTelp}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat">
            Mawar {packageInfo.jenisBunga}
          </p>
          <p className="text-[#3D688E] text-[14px] lg:text-[24px] font-normal font-Montserrat text-right">
            Bunga ditaro di pagar betis indonesia merdeka{" "}
            {packageInfo.catatanPelanggan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
