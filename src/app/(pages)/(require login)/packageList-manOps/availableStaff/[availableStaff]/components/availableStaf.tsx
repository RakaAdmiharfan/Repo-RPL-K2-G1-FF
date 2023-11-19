"use client";

import Link from "next/link";
import React, { useState } from "react";

function AvailableStaff({ header }: { header: any[] }) {
  const handleClick = (item: any) => {
    console.log(item);
  };

  return (
    <div className="w-[290px] md:w-[600px] mt-[23.54px] lg:mt-[30px] lg:w-[70vw] overflow-x-hidden mx-auto">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[16px] xl:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return (
              <tr
                key={user.id}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
                  <div>{user.id}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{user.name}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{user.id}</div>
                </td>
                <td className="w-auto h-auto py-0">
                  <div className="w-full flex justify-center">
                    <button onClick={() => handleClick(user)}>
                      <img
                        src="/ArrowSquareOut.svg"
                        className="w-[20px] lg:w-[40px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px]"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AvailableStaff;

export const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    name: "User One",
    tanggallahir: "1990-01-15",
    noTelp: "123-456-7890",
    alamat: "123 Main St, City, Country",
    role: "SP",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    name: "User Two",
    tanggallahir: "1985-05-20",
    noTelp: "987-654-3210",
    alamat: "456 Elm St, Town, Country",
    role: "MO",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "MO",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "MO",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "MO",
  },
];
