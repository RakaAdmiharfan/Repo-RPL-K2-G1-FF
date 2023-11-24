"use client";

import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import users from "../../components/stafList";
import InputBox from "./inputBox";
import { createClient } from "@/utils/supabase/client";
import { hash } from "bcrypt";
import toast from "react-hot-toast";

const EditFormComponent = ({ id }: { id: string }) => {
  const [user, setUser] = useState<any>({});
  const [saveData, setSaveData] = useState<any>(null);
  const [isSave, setIsSave] = useState<boolean>(false);
  const [indeks, setIndeks] = useState<any>(0);
  const [username, setUsername] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [nama, setNama] = useState<any>("");
  const [noTelp, setNoTelp] = useState<any>("");
  const [alamat, setAlamat] = useState<any>("");
  const [tanggalLahir, setTanggalLahir] = useState<any>("");
  const [dataUser, setDataUser] = useState<any[]>([]);

  console.log(id);

  const largestID = 1;

  useEffect(() => {
    const fetchStafList = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/all-staf");
        const res2 = await res.json();
        setDataUser(res2);
        const largestID = res2.length
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    console.log("hallo");
    console.log(largestID);
    fetchStafList();
  }, []);

  console.log(dataUser);
  const userByID = dataUser.filter((staf) => staf.id === parseInt(id));
  console.log(userByID);

  

  const handleSubmit = async () => {
    if (id == "add-staf"){
      try {
        const res3 = await fetch("http://localhost:3000/api/all-users");
        const res4 = await res3.json();
        setDataUser(res4);
        const largestID = res4.length
        const res = await fetch("http://localhost:3000/api/create-staff", {
          method: "POST",
          body: JSON.stringify({
            id: (largestID+1  ),
            username: username,
            password: password,
            nama: nama,
            noTelp: noTelp,
            alamat: alamat,
            tanggalLahir: tanggalLahir,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          toast.success("Successfully Create New Staff!");
          setIsRegistered(false);
        } else {
          toast.error("Failed to add");
        }
      } catch (error) {
          console.log(error);
      }
    }
    else if (isSave){
      try {
        
      } catch (error) {
        console.log(error);
      }
    }
  }
        // const supabase = createClient();
      // if (id == "add-staf") {
      //   //add
      //   const { data: users, error } = await supabase.from("user").insert({
      //     // id: indeks,
      //     username: username,
      //     password: password,
      //     nama: nama,
      //     noTelp: noTelp,
      //     alamat: alamat,
      //     tanggalLahir: tanggalLahir,
      //   });
      // } else {
      //   if (isSave) {
      //     //update
      //     const { data: users, error } = await supabase.from("user").update({});
      //   } else {
      //     //delete
      //   }
      // }
  return (
    <Formik initialValues={user} onSubmit={handleSubmit}>
      {user && (
        <Form>
          <div className="mb-[26px]">
            <h5
              className={`text-poppins text-[11px] lg:text-[24px] mb-[8px] lg:mb-[26px] font-bold ${
                id === "add-staf" ? "" : "hidden"
              }`}
            >
              ID
            </h5>
            <div
              className={`w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px] ${
                id === "add-staf" ? "" : "hidden"
              }`}
            >
              <InputBox
                name="id"
                label="id"
                placeholder="Automatic"
                onChange={(e: any) => setIndeks(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-[26px]">
            <h5
              className={`text-poppins text-[11px] lg:text-[24px] mb-[8px] lg:mb-[26px] font-bold ${
                id === "add-staf" ? "" : "hidden"
              }`}
            >
              Username
            </h5>
            <div
              className={`w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px] ${
                id === "add-staf" ? "" : "hidden"
              }`}
            >
              <InputBox
                name="username"
                label="username"
                placeholder=""
                onChange={(e: any) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-[26px]">
            <h5
              className={`text-poppins text-[11px] lg:text-[24px] mb-[8px] lg:mb-[26px] font-bold ${
                id === "add-staf" ? "" : "hidden"
              }`}
            >
              Password
            </h5>
            <div
              className={`w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px] ${
                id === "add-staf" ? "" : "hidden"
              }`}
            >
              <InputBox
                name="Password"
                label="Password"
                placeholder=""
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-[26px]">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-bold mb-[8px] lg:mb-[26px]">
              Nama
            </h5>
            <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
              <InputBox
                name="Nama"
                label="Nama"
                placeholder={userByID[0]?.nama}
                onChange={(e: any) => setNama(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-[26px]">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-bold mb-[8px] lg:mb-[26px]">
              No.Telp
            </h5>
            <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
              <InputBox
                name="No.Telp"
                label="No.Telp"
                placeholder={userByID[0]?.noTelp}
                onChange={(e: any) => setNoTelp(e.target.value)}
              />
            </div>
          </div>

          <div className="Alamat mb-[26px]">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-bold mb-[8px] lg:mb-[26px]">
              Alamat
            </h5>
            <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
              <InputBox
                name="Alamat"
                label="Alamat"
                placeholder={userByID[0]?.alamat}
                onChange={(e: any) => setAlamat(e.target.value)}
              />
            </div>
          </div>

          <div className="Tanggal Lahir mb-[26px]">
            <h5 className="text-poppins text-[11px] lg:text-[24px] font-bold mb-[8px] lg:mb-[26px]">
              Tanggal Lahir
            </h5>
            <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
              <InputBox
                name="Tanggal Lahir"
                label="Tanggal Lahir"
                placeholder={userByID[0]?.tanggalLahir}
                onChange={(e: any) => setTanggalLahir(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-row mt-[80px] items-center justify-center gap-6">
            <div className="">
              <button
                onClick={() => setIsSave(true)}
                type="submit"
                className="bg-[#3D688E] px-[26px] py-[6px] rounded-[15px] flex items-center justify-center hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
              >
                <text className="text-white font-montserrat font-semibold leading-normal text-[12px] lg:text-[18px]">
                  {id == "add-staf" ? "Create" : "Save"}
                </text>
              </button>
            </div>

            <div className="">
              <button
                onClick={() => setIsSave(false)}
                type="submit"
                className={`bg-[#BC6161] px-[20px] py-[6px] rounded-[15px] flex items-center justify-center hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] ${
                  id == "add-staf" ? "hidden" : "block"
                }`}
              >
                <text className="text-white font-montserrat text-xs font-semibold leading-normal text-[12px] lg:text-[18px]">
                  Delete
                </text>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditFormComponent;
function setIsRegistered(arg0: boolean) {
  throw new Error("Function not implemented.");
}

