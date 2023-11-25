import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { MdReduceCapacity } from "react-icons/md";

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
  
    const { packageID, proof} = await req.json();
    const packageInfo = await prisma.packageInfo.update({
      where: {
          packageID: packageID 
        },
      data: {
          proof: proof
        },
      });
  
    return NextResponse.json(packageInfo);
    } 