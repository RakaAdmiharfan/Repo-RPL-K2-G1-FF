import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { MdReduceCapacity } from "react-icons/md";


export async function POST(req: any, res: any) {
    const { username, password, nama, tanggalLahir, noTelp, alamat, role } = req.body;
  
    // Buat staff baru
    const newStaff = await prisma.user.create({
      data: {
        username,
        password,
        nama,
        tanggalLahir: new Date(tanggalLahir),
        noTelp,
        alamat,
        role,
      },
    });
  }