import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { UserSession } from "@/components/UserFetcher";
import { hash, compare } from "bcryptjs";

export async function PATCH(req: any, res: any) {
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

  const user = session?.user as UserSession;
  const { username, old_password, new_password, nama, tanggalLahir, noTelp, alamat, role } = req.body;

  // Validation
  if (!username || !nama || !tanggalLahir || !noTelp || !alamat || !role) {
    return NextResponse.json(
      {
        message: "Incomplete data. Please provide all required fields.",
      },
      { status: 400 }
    );
  }

  try {
      // Hash the old password before updating
      const hashedOldPassword = await hash(old_password, 12);
      // Compare the entered old password with the hashed old password stored in the session
      const passwordMatch = await compare(hashedOldPassword, user.password);

    if (!passwordMatch) {
      // Password is incorrect, handle accordingly
      console.log('Old Password is incorrect');
      return NextResponse.json(
        {
            message: "Incorrect old password.",
        },
        { status: 401 }
      );
    }

    // Password is correct, proceed with the update
    const hashedNewPassword = await hash(new_password, 12);
    const stafPengiriman = await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        username,
        password: hashedNewPassword, // Store hashed password
        nama,
        tanggalLahir: new Date(tanggalLahir),
        noTelp,
        alamat,
        role,
      },
    });

    return NextResponse.json(stafPengiriman);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      {
        message: "Failed to update user. Please try again later.",
      },
      { status: 500 }
    );
  }
}


