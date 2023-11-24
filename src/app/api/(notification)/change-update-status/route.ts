import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// getting packageInfo based on packageInfo.staffPengiriman === 
export async function PATCH(){
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
    
    const selectedPackage = await prisma.packageInfo.updateMany(
        {
        data: {
            hasUpdateStatus: false,        
        },
        }
    )

    return NextResponse.json(selectedPackage);
}
