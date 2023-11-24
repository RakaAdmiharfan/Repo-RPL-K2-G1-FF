"use client";
import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { IoClose } from "react-icons/io5";

const UploadProof = ({ id }: { id: number }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState<File>();

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
                <SingleImageDropzone
                  width={200}
                  height={200}
                  value={image}
                  onChange={(file) => {
                    setImage(file);
                  }}
                />
                <button
                  className="flex justify-center items-center font-semibold text-[12px] lg:text-[14px] px-3 py-1 lg:px-6 text-white bg-[#67AEEE] rounded-[20px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                  //   onClick={async () => {
                  //     if (file) {
                  //       const res = await edgestore.publicFiles.upload({
                  //         file,
                  //         onProgressChange: (progress) => {
                  //           // you can use this to show a progress bar
                  //           console.log(progress);
                  //         },
                  //       });
                  //       // you can run some server action or api here
                  //       // to add the necessary data to your database
                  //       console.log(res);
                  //     }
                  //   }}
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
