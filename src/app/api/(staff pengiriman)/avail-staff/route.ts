import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { MdReduceCapacity } from "react-icons/md";

export async function GET(){
    // Ambil semua data kapasitas staf
    const allCapacities = await prisma.capacity.findMany();

    // Ambil semua data paket yang sedang diproses oleh setiap staf
    const allPackages = await prisma.packageInfo.findMany();
    const staffIDToCount = 1; // Ganti dengan staffPengiriman yang ingin dihitung

    const countPackageWithStaff = await prisma.packageInfo.count({
      where: {
        staffPengiriman: staffIDToCount,
      },
    });

    // const userAndCapacity = await prisma.user.findMany({
    //   select: {
    //     capacity: true,
    //     packageInfo: {
    //       select: {
    //         staffPengiriman: true,
    //       },
    //       where: {
    //         staffPengiriman: {
    //           not: null,
    //         },
    //       },
    //     },
    //   },
    // });
    

    const user = await prisma.user.findMany();



    // Filter staf yang masih memiliki kapasitas tersisa
    const availableStaff = allCapacities.filter((staff) => {
        const staffPackages = allPackages.filter(
            (packageInfo) => packageInfo.staffPengiriman === staff.staffID
        );

        const totalPackages = staffPackages.length;
        return totalPackages < staff.dailyCapacity;
    })

    const availableStaffName = await prisma.user.findMany({
          
    }
    )

    return NextResponse.json(availableStaff);
}