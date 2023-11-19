import Link from "next/link";
import { redirect } from "next/navigation";
import UserButton from "./(pages)/login/components/userButton";

export default function Page() {
  return (
    <main className="bg-white h-screen w-full pt-16 flex flex-col items-center overflow-hidden">
      <h1 className="flex justify-center items-center text-[#3D688E] font-montserrat text-2xl lg:text-[48px] font-bold leading-normal tracking-wide mb-8">
        Choose Your Role!
      </h1>
      <p className="flex flex-col text-[18px] font-semibold text-center w-[600px] mb-12 text-[#528BBE]">
        Please select the role that you want to login with. Once you have
        selcted the user role, you will be redirected to the login page.
      </p>
      <UserButton />
      <Link
        href="/login"
        className="bg-[#67AEEE] px-[40px] py-[6px] rounded-[15px] flex items-center justify-center hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] mt-12"
      >
        <text className="text-white font-montserrat font-semibold leading-normal text-[12px] lg:text-[18px]">
          Continue
        </text>
      </Link>
    </main>
  );
}
