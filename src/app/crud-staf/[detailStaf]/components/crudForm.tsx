"use client";

import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import users from "../../components/stafList";
import InputBox from "./inputBox";

const EditFormComponent = () => {
  // Function to fetch data from the database (you need to implement this)
  const fetchDataFromDatabase = async () => {
    try {
      // Replace with actual fetch logic to get data from your database
      const response = await fetch("your-database-api-endpoint");
      const data = await response.json();
      //   setPropertyData(data); // Update the state with the fetched data
      setUser(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [user, setUser] = useState<any>({
    id: "",
    name: "",
    noTelp: "",
    nik: "",
    alamat: "",
    tanggalLahir: "",
  }); // State to store the data from the database

  // Use useEffect to fetch data from the database when the component mounts
  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  const handleSubmit = (values: typeof users) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <Formik initialValues={users} onSubmit={handleSubmit}>
      <Form>
        <div className="mb-[26px]">
          <h5 className="text-poppins text-[11px] lg:text-[24px] mb-[8px] lg:mb-[26px] font-bold">
            Staff ID
          </h5>
          <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
            <InputBox
              name="Staff ID"
              label="Staff ID"
              placeholder="Staff ID"
              value={user.id}
            />
          </div>
        </div>

        <div className="mb-[26px]">
          <h5 className="text-poppins text-[11px] lg:text-[24px] font-bold  mb-[8px] lg:mb-[26px]">
            Nama
          </h5>
          <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
            <InputBox
              name="Nama"
              label="Nama"
              placeholder="Nama"
              value={user.name}
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
              placeholder="No.Telp"
              value={user.noTelp}
            />
          </div>
        </div>

        <div className="NIK mb-[26px]">
          <h5 className="text-poppins text-[11px] lg:text-[24px] font-bold mb-[8px] lg:mb-[26px]">
            NIK
          </h5>
          <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
            <InputBox
              name="NIK"
              label="NIK"
              placeholder="NIK"
              value={user.nik}
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
              placeholder="Alamat"
              value={user.alamat}
            />
          </div>
        </div>

        <div className="Tanggal Lahir">
          <h5 className="text-poppins text-[11px] lg:text-[24px] font-bold mb-[8px] lg:mb-[26px]">
            Tanggal Lahir
          </h5>
          <div className="w-[82.22vw] lg:w-[68.75vw] h-[27px] lg:h-[50px]">
            <InputBox
              name="Tanggal Lahir"
              label="Tanggal Lahir"
              placeholder="Tanggal Lahir"
              value={user.tanggalLahir}
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default EditFormComponent;
