"use client";
import { Formik, Field, Form, FormikHelpers } from "formik";
import PasswordInput from "./passwordinput";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
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
        console.log(res);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
