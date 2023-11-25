"use client";
import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { IoClose } from "react-icons/io5";
import { FileUpload } from "./fileUpload";
import toast from "react-hot-toast";
import { url } from "inspector";

const UploadProof = ({ id }: { id: number }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleClick = async () => {};
  console.log(id);

  const handleClickUpload = async (url: any) => {
    try {
      const res = await fetch("http://localhost:3000/api/upload-proof", {
        method: "PATCH",
        body: JSON.stringify({
          packageID: id,
          UploadProof: url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        toast.success("Successfully Upload Proof!");
        setIsRegistered(false);
      } else {
        toast.error("Failed to upload");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPopup(true)}
        className="hover:text-blue-900 font-bold flex justify-center"
      >
        <CiCamera className="text-[24px] lg:text-[36px]" />
      </button>

      {showPopup ? (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-50">
          <div className="relative z-50 bg-white rounded-[20px] shadow-xl">
            <button
              onClick={() => {
                setShowPopup(false);
              }}
              className="flex justify-end rounded-[50px] mt-6 ml-3 lg:ml-6"
            >
              <IoClose className="text-[20px] hover:text-red-600 text-end" />
            </button>
            <div className="flex flex-col justify-center items-center pt-3 gap-1 pb-6 px-4 lg:px-20 lg:pb-6  ">
              <div className="flex flex-col items-center mb-2">
                <h1 className="text-[18px] lg:text-[28px] font-bold text-[#67AEEE]">
                  Upload Image
                </h1>
              </div>
              <div className="flex flex-col items-center text-center gap-3 lg:gap-6 mx-auto">
                <FileUpload
                  onChange={(url) => setImageUrl(url ?? "")}
                  value={imageUrl}
                  endpoint="proofImage"
                />
                <button
                  onClick={() => handleClickUpload(imageUrl)}
                  className="flex justify-center items-center mt-2 mb-2 text-white bg-[#67AEEE] rounded-[20px] w-full h-10 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-[10px] lg:text-[16px] font-semibold"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UploadProof;
function setIsRegistered(arg0: boolean) {
  throw new Error("Function not implemented.");
}
