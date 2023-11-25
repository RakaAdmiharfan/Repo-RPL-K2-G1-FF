import LoginForm from "./components/loginform";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserSession } from "@/components/UserFetcher";
import "aos/dist/aos.css";

export default async function Login() {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserSession;
  const roleAccess = user.role;

  return (
    <div className="relative overflow-hidden flex flex-col md:flex-col lg:flex-col bg-white w-full h-screen pb-36 lg:pb-72">
      <div className="mt-[72px] mb-[42px]">
        <h2 className="flex justify-center items-center text-[#528BBE] text-center lg:text-[32px] font-montserrat text-base font-semibold leading-normal tracking-tight">
          Hello User!{" "}
        </h2>
        <h2 className="flex justify-center items-center text-[#528BBE] text-center lg:text-[32px] font-montserrat text-base font-semibold leading-normal tracking-tight">
          Please fill out the form below
        </h2>
      </div>
      <div className="flex justify-center mt-3">
        <LoginForm roleAccess={roleAccess} />
      </div>
      <footer className="mt-[93px] lg:mt-[200px] overflow-hidden absolute bottom-[-80px] md:bottom-[-160px] lg:bottom-[-180px] xl:bottom-[-340px]">
        <Image src="Footer.png" className="w-screen" alt="Footer" />
      </footer>
    </div>
  );
}
