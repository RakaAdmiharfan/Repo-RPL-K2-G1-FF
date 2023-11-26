"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface NotificationBoxProps {
  packageId: string;
  statusText: string;
}

const NotificationBox = () => {
  const [dataItem, setDataItem] = useState<any[]>([]);

  const handleClick = (item: any) => {
    console.log(item);
  };

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/update-notif");
        const res2 = await res.json();
        setDataItem(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    console.log("hallo");
    fetchNotification();
  }, []);

  const notificationPackages = dataItem.filter(
    (packageInfo) => packageInfo.hasUpdateStatus === true
  );
  return (
    <>
      {notificationPackages.map((packageInfo) => {
        return (
          <div
            key={packageInfo.packageID}
            className="flex justify-center items-center mb-3"
          >
            <div className="w-[306px] lg:w-[600px] h-[53px] lg:h-[100px] bg-[#335777] rounded-[5px] drop-shadow-2xl">
              <div className="flex flex-row">
                <div className="mt-[15px] ml-[10px] lg:mt-[40px] lg:ml-[15px]">
                  <Image src="bell.svg" className="relative" alt="bell" />
                </div>
                <div className="mt-[10px] ml-[10px] lg:mt-[26px] lg:ml-[15px]">
                  <h1 className="font-bold font-montserrat text-[10px] lg:text-[18px] text-white">
                    Status Changed
                  </h1>
                  <b className="text-[8px] lg:text-[16px] font-normal font-montserrat text-white">
                    Paket dengan ID {packageInfo.packageID}{" "}
                    {packageInfo.statusPengiriman}
                  </b>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NotificationBox;
