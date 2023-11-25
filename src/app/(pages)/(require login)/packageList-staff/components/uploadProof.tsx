"use client";
import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { IoClose } from "react-icons/io5";
import { FileUpload } from "./fileUpload";

const UploadProof = ({ id }: { id: number }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleClick = async () => {};
  console.log(id);

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
            <div className="flex flex-col justify-center items-center pt-3 gap-1 pb-6 px-5 lg:px-20 lg:pb-6  ">
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
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UploadProof;
