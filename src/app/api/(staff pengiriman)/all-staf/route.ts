import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
/*
  Endpoint Mendapatkan daftar seluruh kasuh
*/
export async function GET() {
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

  const stafPengiriman = await prisma.user.findMany({
    where: {
      role: "STAFF",
    },
  });
  return NextResponse.json(stafPengiriman);
}
