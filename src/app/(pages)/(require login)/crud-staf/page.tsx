import Link from "next/link";
// Your client-side code here
import Navbar from "@/components/navbar";
import StafList from "./components/stafList";
import SideNav from "@/components/sidenav";

export default function StaffList() {
  return (
    <div className="flex bg-gradient-to-b from-[#EFF6FD] to-white relative overflow-hidden w-full h-full min-h-[100vh]">
      <nav className="lg:hidden">
        <Navbar />
      </nav>
      <nav>
        <SideNav active={2} />
      </nav>
      <div className="flex flex-col w-full items-center h-screen overflow-auto">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="flex justify-center text-[#3D688E] text-center font-montserrat font-bold text-[24px] mt-[100px] lg:text-[48px] lg:mt-[52px] lg:mb-4">
            Delivery Staff List
          </h2>

          <div className="mt-[20px] w-full px-6 md:px-20 lg:px-0">
            <div className="lg:ml-[24px] xl:ml-[100px] flex rounded-[5px] lg:rounded-[8px] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#3D688E] text-white justify-center max-w-[110px] w-[24vw] mb-[11px] px-[10px] py-[6px] lg:mb-[16px] lg:w-[10.26vw] md:p-2 lg:p-[10px]">
              <Link
                href={{
                  pathname: "/crud-staf/add-staf",
                }}
                className=""
              >
                <h6 className="text-montserrat font-bold text-[8px] lg:text-[16px]">
                  Add Staff
                </h6>
              </Link>
            </div>

            <div className="overflow-y-auto no-scrollbar w-full">
              <StafList
                header={[
                  "ID",
                  "Nama",
                  "Username",
                  "Tanggal Lahir",
                  "Alamat",
                  "No.Telp",
                  "Edit",
                ]}
              />
              {/* <Pagination current={handlePageChange} totalPages={totalPages} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
