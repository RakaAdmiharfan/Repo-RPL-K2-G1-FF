"use client";
import { Formik, Field, Form, FormikHelpers } from "formik";
import PasswordInput from "./passwordinput";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@/utils/supabase/client";
import { env } from "process";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserSession } from "@/components/UserFetcher";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

interface Values {
  username: string;
  password: string;
}

interface LoginFormProps {
  roleAccess: string;
}

export default async function LoginForm({ roleAccess }: LoginFormProps) {
  const router = useRouter();
  const handleSubmit = async (val: Values) => {
    try {
      console.log(val);
      // Perform login authentication logic here
      const res = await signIn("credentials", {
        redirect: false,
        username: val.username,
        password: val.password,
        callbackUrl: "/",
      });

      // print error if error
      if (res?.error) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Login success");
        if (roleAccess === "MANAGER") {
          router.push("/packageList-manOps");
        } else router.push("/packageList-staff");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = async (val: Values) => {
  //   if (!localStorage) {
  //     return;
  //   }

  //   const token = localStorage?.getItem("token");

  //   try {
  //     const res = await fetch("http://localhost:3000/login", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(val),
  //     });
  //     const resJson = await res.json();

  //     if (resJson.message === "already signed in") {
  //       router.replace("/");
  //     } else if (resJson.token) {
  //       localStorage.setItem("token", resJson.token);

  //       router.replace("/");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
            <text className="font-medium text-[12px] sm:text-[15px] md:text-[18px] xl:text-[16px] lg:text-[20px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Username
            </text>
            <Field
              src="/User.png"
              className="form-control w-[82.2vw] lg:w-[50vw] xl:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
              id="username"
              name="username"
              placeholder="Username"
              aria-describedby="UsernameHelp"
            />
          </div>

          <div className="mb-[27px] sm:mb-[25px] md:mb-[30px] xl:mb-[35px] lg:mb-[25px] text-poppins flex flex-col">
            <text className="font-medium text-[12px] sm:text-[15px] md:text-[18px] xl:text-[16px] lg:text-[16px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
              Password
            </text>
            <Field
              className="form-control w-[82.2vw] lg:w-[50vw] xl:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              component={PasswordInput}
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="bg-[#67AEEE] px-[16px] py-[6px] rounded-[5px] flex items-center justify-center hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <text className="text-white font-montserrat text-xs font-semibold leading-normal text-[12px] lg:text-[14px]">
                Log In
              </text>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

// const handleSubmit = async (val: Values) => {
//   // You can fetch the login data from your local JSON file
//   try {
//     const response = await fetch("pla"); // Adjust the path as needed
//     const loginData = await response.json();

//     const user = loginData.users.find((user) => user.username === val.username);

//     if (user && user.password === val.password) {
//       // Successful login
//       localStorage.setItem("token", "your_token_here"); // Store a token if needed
//       router.replace("/");
//     } else {
//       console.log("Invalid username or password");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
