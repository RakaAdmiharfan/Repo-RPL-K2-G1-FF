import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// getting packageInfo based on packageInfo.staffPengiriman === 

export async function GET() {
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

    const packageList = await prisma.packageInfo.findMany({
        where: {
            staffPengiriman: id,
        }
    }); 

    return NextResponse.json(packageList);
}