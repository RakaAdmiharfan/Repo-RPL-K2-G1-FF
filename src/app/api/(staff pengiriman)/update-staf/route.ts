import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { UserSession } from "@/components/UserFetcher";

export async function PATCH(req: any) {
  const session = await getServerSession(authOptions);

  // Route protection
  if (!session?.user) {
    return NextResponse.json(
      {
        message: "Minimal Login Dulu Lah",
      },
      { status: 401 }
    );
  }

  const { id, nama, noTelp, alamat } = await req.json();
  const stafPengiriman = await prisma.user.update({
    where: {
        id: id
      },
    data: {
        nama,
        noTelp, 
        alamat,
      },
    });

  return NextResponse.json(stafPengiriman);
  } 


