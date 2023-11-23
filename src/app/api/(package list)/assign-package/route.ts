import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function PATCH(req: any, {params}: {params: {staffID: number, packageID: number}}){
    const session = await getServerSession(authOptions);
    // Route protection
    if (!session?.user) {
        return NextResponse.json(
            {
                message: "Minimal jangan shortcut-shortcut la",
            },
            { status: 401 }
        );
    }

    //const { staffID, packageID } = params;
    const { staffID } = (params.staffID);
    const { packageID} = (params.packageID);

    await prisma.packageInfo.update({
        where:{packageID},
        data:{
            staffPengiriman: staffID
        }
    })

}