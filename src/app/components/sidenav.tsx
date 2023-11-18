import Link from "next/link";
import { TbPackages } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

interface SideNav {
  active: number;
}

export default function SideNav({ active }: { active: number }) {
  return (
    <div>
      <aside className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="pt-[20px] pb-[30px] flex flex-col min-w-[150px] shadow-navbar h-screen bg-white border-r-2">
          <img
            src="/logo-rpl.png"
            alt="Logo FF"
            className="w-[100px] h-[90px] ml-6"
          />

          <div className="px-8 flex flex-col grow">
            <div className="flex flex-col gap-0 mb-12">
              <p className="font-bold text-black/40">Welcome</p>
              <p className="text-sm font-bold text-black">
                Manajer Operasional
              </p>
            </div>

            <ul className="font-medium flex flex-col">
              <li
                className={`flex items-center rounded-xl hover:text-blue-500 mt-[30px] ${
                  active == 1 ? "text-blue-500" : ""
                }`}
              >
                <Link
                  href="/packageList-manOps"
                  className="flex flex-row items-center text-[28px] gap-1"
                >
                  <TbPackages />
                  <p className="flex text-sm whitespace-nowrap">Package List</p>
                </Link>
              </li>
              <li
                className={`flex items-center rounded-xl hover:text-blue-500 mt-[30px] ${
                  active == 2 ? "text-blue-500" : ""
                }`}
              >
                <Link
                  href="/crud-staf"
                  className="flex flex-row items-center text-[28px] gap-1"
                >
                  <IoPeopleSharp />
                  <p className="flex-1 text-sm whitespace-nowrap">Staff List</p>
                </Link>
              </li>
              <li
                className={`flex items-center rounded-xl hover:text-blue-500 mt-[30px] ${
                  active == 3 ? "text-blue-500" : ""
                }`}
              >
                <Link
                  href="/notification"
                  className="flex flex-row items-center text-[28px] gap-1"
                >
                  <IoIosNotifications />
                  <p className="flex-1 text-sm whitespace-nowrap">
                    Notification
                  </p>
                </Link>
              </li>
            </ul>

            <div className="flex items-end text-mono-600 text-[12px] grow">
              <p>
                <hr className="mb-4 border-2" />
                Flora Finder, RPL-K2-G1 | <br />
                All Rights Reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
