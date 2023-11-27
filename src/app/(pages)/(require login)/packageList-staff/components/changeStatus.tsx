"use client";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ChangeStatus = ({ id }: { id: number }) => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleClickStatus = async (parameter: any) => {
    try {
      const res = await fetch("/api/update-status", {
        method: "PATCH",
        body: JSON.stringify({
          packageID: id,
          newStatus: parameter,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        toast.success("Successfully Change Status!");
        setIsRegistered(false);
      } else {
        toast.error("Failed to change");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPopup(true)}
        className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex md:w-[40px] w-[10vw] px-6 py-[6px] lg:w-[04.94vw] lg:px-[1px] lg:py-[6px] rounded-[10px] justify-center bg-[#67AEEE]"
      >
        <h1 className="text-white text-montserrat text-semibold text-[8.574px] lg:text-[14px] xl-[18px]">
          Change
        </h1>
      </button>

      {showPopup ? (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-50">
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="relative z-50 bg-white py-5 px-20 lg:py-10 rounded-[20px] shadow-xl">
              <h1 className="text-[14px] lg:text-[28px] font-bold text-[#67AEEE] mb-8">
                Change Status
              </h1>
              <button
                className="flex justify-center items-center mt-2 mb-2 text-white bg-[#67AEEE] rounded-[20px] w-full h-10 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                onClick={() => handleClickStatus("Pick Up")}
              >
                <h1 className="text-[10px] lg:text-[16px] font-semibold">
                  Pick Up
                </h1>
              </button>
              <button
                className="flex justify-center items-center mt-2 mb-2 text-white bg-[#67AEEE] rounded-[20px] w-full h-10 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                onClick={() => handleClickStatus("On The Way")}
              >
                <h1 className="text-[10px] lg:text-[16px] font-semibold">
                  On The Way
                </h1>
              </button>
              <button
                className="flex justify-center items-center mt-2 mb-2 text-white bg-[#67AEEE] rounded-[20px] w-full h-10 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                onClick={() => handleClickStatus("Delivered")}
              >
                <h1 className="text-[10px] lg:text-[16px] font-semibold">
                  Delivered
                </h1>
              </button>
              <button
                className="flex justify-center items-center mt-2 mb-2 text-white bg-[#67AEEE] rounded-[20px] w-full h-10 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                onClick={() => handleClickStatus("On Hold")}
              >
                <h1 className="text-[10px] lg:text-[16px] font-semibold">
                  On Hold
                </h1>
              </button>
            </div>
            <button
              onClick={() => {
                setShowPopup(false);
                window.location.reload(); // Refresh the page
              }}
              className="flex items-center justify-center rounded-[50px] mt-4 hover:text-red-600"
            >
              <IoIosCloseCircleOutline className="text-[40px]" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChangeStatus;
function setIsRegistered(arg0: boolean) {
  throw new Error("Function not implemented.");
}
