"use client";

import React from "react";
import { useState } from "react";

export default function UserButton() {
  const [borderColor, setBorderColor] = useState("black");
  const [role, setRole] = useState("");

  const onClick = () => {
    if (borderColor === "black") {
      setBorderColor("blue"); // Change the border color to blue on click
    } else {
      setBorderColor("black"); // Change the border color back to black
    }
    console.log("clicked");
  };

  return (
    <div
      onClick={onClick}
      className="flex flex-row gap-[13px] lg:gap-[20px] mx-auto w-fit"
    >
      <div className="flex flex-col justify-center items-center border border-black w-[120px] h-[120px] lg:w-[260px] lg:h-[200px] rounded-[10px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <img src="/delivery.png" className="w-[60px] lg:w-[100px]" />
        <p className="mt-[12px] text-[#3D688E] font-semibold text-[14px] lg:text-[20px]">
          Delivery Staff
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border border-black w-[120px] h-[120px] lg:w-[260px] lg:h-[200px] rounded-[10px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <img src="/manOps.png" className="w-[72px] lg:w-[114px]" />
        <p className="mt-[12px] text-[#3D688E] font-semibold text-[14px] lg:text-[20px] ">
          Ops Manager
        </p>
      </div>
    </div>
  );
}
