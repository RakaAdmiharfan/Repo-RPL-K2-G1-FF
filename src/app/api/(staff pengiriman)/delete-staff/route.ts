import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { UserSession } from "@/components/UserFetcher";

export async function DELETE(req: any){
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

    const { id } = await req.json();
    const staffPengiriman = await prisma.user.delete({
        where: {
            id: id
          }
    })
    

    return NextResponse.json({ message: "Berhasil dihapus" });
}