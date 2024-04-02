"use client";
import { signOut } from "next-auth/react";
import { TbLogout2 } from "react-icons/tb";
import Router from "next/router";

export default function Logout() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div>
      <button
        onClick={() => {
          handleSignOut();
          Router.push("/");
        }}
        className="flex flex-row items-center text-[28px] gap-2 text-red-600 hover:text-white hover:bg-red-600 rounded-[15px] px-2 py-1"
      >
        <TbLogout2 />
        <p className="flex-1 text-[18px] whitespace-nowrap font-semibold">
          Logout
        </p>
      </button>
    </div>
  );
}
