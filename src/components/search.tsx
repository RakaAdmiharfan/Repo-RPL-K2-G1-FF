"use client";

import { useState, ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";

export type SearchProps = {
  onSearch: (value: any) => void;
};

export default function Search(props: SearchProps) {
  const { onSearch } = props;
  const [value, setValue] = useState("Search...");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    onSearch(target.value);
  };

  // //   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  // //     if (event.key === "Enter") {
  // //       onSearch(value);
  // //     }
  //   };

  return (
    <div className="relative w-[40vw] lg:w-[20vw] lg:h-8 text-gray-600 flex items-center flex-row bg-white rounded-[5px] lg:rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-poppins">
      <button className="relative mx-[2vw] lg:mx-[1vw] z-10 flex justify-center items-center text-[10px] lg:text-[16px]">
        <IoSearch />
      </button>
      <input
        type={"search"}
        name={"search"}
        placeholder={"Search..."}
        className="bg-white flex w-full rounded-[5px] lg:rounded-[10px] absolute aspect-[278/21] lg:aspect-[1450/60] text-[10px] lg:text-[16px] pl-[8vw] lg:pl-[3vw] pr-3 focus:outline-none"
        onChange={searchHandler}
        // onKeyDown={handleKeyDown}
      />
    </div>
  );
}
