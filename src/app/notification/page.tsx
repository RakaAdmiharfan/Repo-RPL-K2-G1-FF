import NotificationBox from "./components/notificationBox";
import Navbar from "../components/navbar";
import SideNav from "../components/sidenav";

export default function notification({
  params,
}: {
  params: {
    detailPackage: string;
  };
}) {
  return (
    <div className="relative overflow-hidden flex flex-col md:flex-col lg:flex-col bg-blue-50 w-full h-screen pb-36 lg:pb-300">
      <div className="lg:hidden">
        <Navbar />
      </div>
      <div>
        <SideNav />
      </div>

      <h1 className="flex justify-center items-center text-[#3D688E] font-montserrat text-2xl lg:text-[48px] font-bold leading-normal tracking-wide mb-[30px] mt-[108px] lg:mt-[52px]">
        Notification
      </h1>
      <NotificationBox packageId="1" statusText="sudah diantar" />
      <NotificationBox packageId="1" statusText="sudah diantar" />

      <footer className="mt-[140px] lg:mt-[200px] overflow-hidden absolute -bottom-20 lg:bottom-[-340px]">
        <img src="/Footer.png" className="lg:w-[1620px]" />
      </footer>
    </div>
  );
}
