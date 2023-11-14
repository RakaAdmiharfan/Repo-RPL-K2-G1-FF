"use client";

const StatusBox = () => {
  return (
    <div className="bg-white w-[600px] h-[600px] rounded-[15px] drop-shadow-2xl">
      <div className="flex justify-center mt-[80px]">
        <img src="/paket.svg" className="w-[200px]" />
      </div>
      <h1 className="text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[0px] lg:text-[36px] lg:mt-[32px] lg:mb-6 justify-center">
        Status
      </h1>
      <h2 className="text-[#3D688E] text-center font-montserrat font-regular text-[24px] mt-[0px] lg:text-[28px] lg:mt-[32px] justify-center">
        Flower Package
      </h2>
      <h2 className="text-[#3D688E] text-center font-montserrat font-regular text-[24px] mt-[0px] lg:text-[28px] lg:mt-[4px] lg:mb-4 justify-center">
        has been delivered
      </h2>
    </div>
  );
};

export default StatusBox;
