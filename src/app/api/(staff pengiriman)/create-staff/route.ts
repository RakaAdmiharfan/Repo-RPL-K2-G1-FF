import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { MdReduceCapacity } from "react-icons/md";


// export async function POST(req: any, res: any) {
//     const { username, password, nama, tanggalLahir, noTelp, alamat, role } = req.json;
  
//     // Buat staff baru
//     const newStaff = await prisma.user.create({
//       data: {
//         username,
//         password,
//         nama,
//         tanggalLahir,
//         noTelp,
//         alamat,
//         role,
//       },
//     });
//   }

export async function POST (req: NextRequest){
    const { id, username, password, nama, tanggalLahir, noTelp, alamat, role } = await req.json();

    const session = await getServerSession(authOptions);

    const hashedPassword = await hash(password, 12);

    await prisma.user.create({
        data: {
            id,
            username,
            password: hashedPassword,
            nama,
            tanggalLahir,
            noTelp,
            alamat,
            role: "STAFF",
        },
      });

      return NextResponse.json({ message: "success" });
}