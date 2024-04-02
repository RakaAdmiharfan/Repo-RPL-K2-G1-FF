import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

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

  const stafPengiriman = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (nama != null && nama != "" && nama != undefined) {
    const stafPengiriman = await prisma.user.update({
      where: {
        id,
      },
      data: {
        nama: nama,
      },
    });
  }
  if (noTelp != null && noTelp != "" && noTelp != undefined) {
    const stafPengiriman = await prisma.user.update({
      where: {
        id,
      },
      data: {
        noTelp: noTelp,
      },
    });
  }
  if (alamat != null && alamat != "" && alamat != undefined) {
    const stafPengiriman = await prisma.user.update({
      where: {
        id,
      },
      data: {
        alamat: alamat,
      },
    });
  }

  return NextResponse.json(stafPengiriman);
}
