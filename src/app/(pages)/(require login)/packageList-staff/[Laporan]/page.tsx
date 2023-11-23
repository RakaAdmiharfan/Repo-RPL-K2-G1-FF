import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function laporMasalah() {
  return (
    <div className="bg-[#EFF6FD] relative overflow-hidden w-full h-screen flex-col flex pb-36 lg:pb-80">
      <Link href="/packageList-staff">
        <IoArrowBack className="text-[40px] ml-[20px] lg:ml-[40px] mt-[40px] w-[24px] lg:w-[38px] hover:text-blue-500 rounded-[15px]" />
      </Link>

      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[30px] lg:text-[48px] lg:mt-[20px] lg:mb-6 justify-center">
        Pelaporan Masalah
      </h1>
      <div className="mx-auto">
        <h2 className="text-black text-[24px] font-bold">Decription</h2>
      </div>

      <footer className="mt-[140px] lg:mt-[240px] overflow-hidden absolute -bottom-20 lg:bottom-[-340px]">
        <img src="/Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
