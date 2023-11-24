import NotificationBox from "./components/notificationBox";
import Navbar from "@/components/navbar";
import SideNav from "@/components/sidenav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { UserSession } from "@/components/UserFetcher";
import client from "@/app/lib/prismadb";

export default async function notification() {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserSession;
  const id = user.id;

  return (
    <div className="relative overflow-hidden flex flex-row md:flex-row lg:flex-row bg-blue-50 w-full h-screen pb-36 lg:pb-300">
      <div className="lg:hidden">
        <Navbar />
      </div>
      <div>
        <SideNav active={3} />
      </div>

      <div className="flex flex-col items-center w-full h-screen overflow-auto">
        <h1 className="flex justify-center items-center text-[#3D688E] font-montserrat text-2xl lg:text-[48px] font-bold leading-normal tracking-wide mb-[30px] mt-[108px] lg:mt-[52px]">
          Notification
        </h1>
        <div className="overflow-auto no-scrollbar">
          <div className="overflow-auto">
            <NotificationBox />
          </div>
        </div>
        <button className="bg-green-800 px-4 py-1 lg:px-[26px] lg:py-[6px] rounded-[25px] flex items-center justify-center mt-8">
          <h2 className="text-white font-semibold text-[10px] lg:text-[16px]">
            Mark As Read
          </h2>
        </button>
        <footer className="mt-[140px] lg:mt-[200px] overflow-hidden absolute -bottom-20 lg:bottom-[-340px]">
          <img src="/Footer.png" className="lg:w-[1620px]" />
        </footer>
      </div>
    </div>
  );
}
