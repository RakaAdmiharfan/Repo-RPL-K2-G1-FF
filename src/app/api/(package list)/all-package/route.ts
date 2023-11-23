import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

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

  const allPackage = await prisma.packageInfo.findMany()

  return NextResponse.json(allPackage);
}
