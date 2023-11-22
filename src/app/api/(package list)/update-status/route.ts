import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// getting packageInfo based on packageInfo.staffPengiriman === 
export async function PUT(req: any){
    const session = await getServerSession(authOptions);

    // route protection
    if (!session?.user) {
        return NextResponse.json(
            {
                message: "Minimal jangan shortcut-shortcut la",
            },
            { status: 401 }
        );
    }

    const id = session?.user?.id;

    const { packageID, newStatus } = await req.json();

    
    const existingPackage = await prisma.packageInfo.findUnique({
        where: {
            packageID,
            staffPengiriman: id,
        }
    })
    if (!existingPackage) {
        return NextResponse.json(
            {
                message: "Paket tidak ditemukan",
            },
            { status: 404 }
        );
    }
    const updatedPackage = await prisma.packageInfo.update({
        where: {
            packageID,
            staffPengiriman: id,
        },
        data: {
            statusPengiriman: newStatus,
            hasUpdateStatus: true,
        },
    });
    return NextResponse.json(updatedPackage);
}
