"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Notification({ header }: { header: any[] }) {
    const [fetchError, setFetchError] = useState(null);
    const [notification, setNotification] = useState(null);
    const [dataItem, setDataItem] = useState<any[]>([]);
  
    const handleClick = (item: any) => {
      console.log(item);
    };