"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function MarkAsRead() {
  const [isUpdateStatus, setIsUpdateStatus] = useState(true);

  const [dataItem, setDataItem] = useState<any[]>([]);
  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/update-notif");
        const res2 = await res.json();
        setDataItem(res2);
        console.log(dataItem.length);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchNotification();
  }, []);

  useEffect(() => {
    if (dataItem.length === 0) {
      setIsUpdateStatus(false);
    } else {
      setIsUpdateStatus(true);
    }
  }, [dataItem.length]);

  const handleMarkAsRead = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/change-update-status",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Notification reset!");
        window.location.reload();
      } else {
        toast.error("Failed to reset");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleMarkAsRead}
      className={`bg-green-800 px-4 py-1 lg:px-[26px] lg:py-[6px] rounded-[25px] flex items-center justify-center mt-8 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] ${
        isUpdateStatus == false ? "hidden" : "block"
      }`}
    >
      <h2 className="text-white font-semibold text-[10px] lg:text-[16px]">
        Mark As Read
      </h2>
    </button>
  );
}
