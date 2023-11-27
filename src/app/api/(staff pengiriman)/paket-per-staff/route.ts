import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req : any){    
    const { staffID } = await req.json()

    const countPackageWithStaff = await prisma.packageInfo.count({
      where: {
        staffPengiriman: staffID,
      },
    });

    return NextResponse.json(countPackageWithStaff);
}