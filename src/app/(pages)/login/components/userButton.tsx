"use client";

import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

export default function UserButton() {
  const [buttonStylesDelivery, setButtonStylesDelivery] = useState({
    borderColor: "#000000", // black
    bgColor: "#ffffff", // white
    iconColor: "#000000", // black
  });

  const [buttonStylesOps, setButtonStylesOps] = useState({
    borderColor: "#000000", // black
    bgColor: "#ffffff", // white
    iconColor: "#000000", // black
  });

  const onClickDelivery = () => {
    setButtonStylesDelivery({
      borderColor: "#67AEEE", // blue
      bgColor: "#67AEEE", // blue
      iconColor: "#ffffff", // white
    });
    setButtonStylesOps({
      borderColor: "#000000", // black
      bgColor: "#ffffff", // white
      iconColor: "#000000", // black
    });
    console.log("Delivery button clicked");
  };

  const onClickOps = () => {
    setButtonStylesOps({
      borderColor: "#67AEEE", // blue
      bgColor: "#67AEEE", // blue
      iconColor: "#ffffff", // white
    });
    setButtonStylesDelivery({
      borderColor: "#000000", // black
      bgColor: "#ffffff", // white
      iconColor: "#000000", // black
    });
    console.log("Ops button clicked");
  };

  return (
    <div className="flex flex-row gap-[13px] lg:gap-[20px] mx-auto w-fit">
      <button
        className="flex flex-col justify-center items-center border-[0.5px] w-[120px] h-[120px] lg:w-[260px] lg:h-[200px] rounded-[10px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
        style={{
          borderColor: buttonStylesDelivery.borderColor,
          backgroundColor: buttonStylesDelivery.bgColor,
        }}
        onClick={onClickDelivery}
      >
        <FaTruck
          className="text-[60px] lg:text-[100px]"
          style={{ color: buttonStylesDelivery.iconColor }}
        />
        <p
          className="mt-[12px] text-[#3D688E] font-semibold text-[14px] lg:text-[24px]"
          style={{ color: buttonStylesDelivery.iconColor }}
        >
          Delivery Staff
        </p>
      </button>
      <button
        className="flex flex-col justify-center items-center border-[0.5px] w-[120px] h-[120px] lg:w-[260px] lg:h-[200px] rounded-[10px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] hover:border-blur-[5px]"
        style={{
          borderColor: buttonStylesOps.borderColor,
          backgroundColor: buttonStylesOps.bgColor,
        }}
        onClick={onClickOps}
      >
        <FaUserTie
          className="text-[60px] lg:text-[100px]"
          style={{ color: buttonStylesOps.iconColor }}
        />
        <p
          className="mt-[12px] text-[#3D688E] font-semibold text-[14px] lg:text-[24px]"
          style={{ color: buttonStylesOps.iconColor }}
        >
          Ops Manager
        </p>
      </button>
    </div>
  );
}
