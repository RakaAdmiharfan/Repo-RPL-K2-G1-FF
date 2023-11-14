import Link from "next/link";
import { TbPackages } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

export default function SideNav() {
  return (
    <div>
      <aside className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="pt-[20px] pb-[30px] flex flex-col justify-between min-w-[150px] shadow-navbar h-screen bg-white ">
          <div>
            <img
              src="/logo-rpl.png"
              alt="Logo FF"
              className="w-[100px] h-[90px]"
            />
            <div className="flex flex-col gap-0 mb-12">
              <p className="font-bold text-[#242220]/40 text-[18px]">Welcome</p>
              <p className="text-sm font-bold">Manajer Operasional</p>
            </div>
          </div>

          <ul className="font-medium flex flex-col">
            <li className="flex items-center rounded-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] mt-[30px]">
              <Link href="/packageList-manOps" className="flex flex-row">
                <TbPackages />
                <p className="flex text-sm whitespace-nowrap">Package List</p>
              </Link>
            </li>
            <li className="flex items-center rounded-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] mt-[30px]">
              <Link href="/crud-staf">
                <div className="flex flex-row">
                  <IoPeopleSharp />
                  <p className="flex-1 text-sm whitespace-nowrap">Staff List</p>
                </div>
              </Link>
            </li>
            <li className="flex items-center rounded-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] mt-[30px]">
              <Link href="/notification" className="flex flex-row">
                <IoIosNotifications />
                <p className="flex-1 text-sm whitespace-nowrap">Notification</p>
              </Link>
            </li>
          </ul>

          <p className="p-6 text-mono-600 text-[12px]">
            Flora Finder, RPL-K2-G1 | <br />
            All Rights Reserved{" "}
          </p>
        </div>
      </aside>
    </div>
  );
}
