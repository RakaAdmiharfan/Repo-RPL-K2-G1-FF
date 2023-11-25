"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/app/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "proofImage";
}
export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  if (value) {
    return (
      <div className="relative w-12 lg:w-[20rem] aspect-square mx-auto">
        <Image
          src={value}
          fill
          alt="Upload"
          className="object-cover w-full h-full"
        />
        <button
          className="absolute w-7 aspect-square rounded-full bg-red-500 text-white flex justify-center items-center -right-2 -top-2"
          onClick={() => onChange("")}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(err) => {
        console.error(err);
      }}
    />
  );
};
