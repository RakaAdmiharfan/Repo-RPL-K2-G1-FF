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
        message: "Minimal jangan shortcut-shortcut la",
      },
      { status: 401 }
    );
  }

  const { pid, laporan } = await req.json();

  const selectedPackage = await prisma.packageInfo.update({
    where: {
      packageID: pid,
    },
    data: {
      report: laporan,
    },
  });

  return NextResponse.json(selectedPackage);
}
