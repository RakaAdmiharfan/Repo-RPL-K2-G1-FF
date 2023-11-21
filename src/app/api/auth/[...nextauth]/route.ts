import bcrypt, { compare } from 'bcrypt';
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prismadb"


interface Credentials {
    username: string;
    password: string;
}


export const authOptions: NextAuthOptions = {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        type: "credentials",
        credentials: {},
        authorize: async (credentials) => {
          const { username, password } = credentials as Credentials;
          
          if (!username) {
            throw new Error("Username tidak boleh kosong");
          }
  
          if (!password) {
            throw new Error("Password tidak boleh kosong");
          }
  
          const user = await prisma.user.findUnique({
            where: {
              username,
            },
          });
  
          if (!user) {
            throw new Error("User tidak ditemukan");
          }
  
          const isPasswordValid = await compare(password, user.password);
  
          if (!isPasswordValid) {
            throw new Error("Password salah");
          }
  
          return user;
        },
      }),
    ],
    pages: {
      signIn: "/login",
    },
    secret: "secret", //process.env.NEXTAUTH_SECRET
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user && user.id) {
          token.uid = user.id as number; // Assign user's id to token
  
          // Get user's role
          const userData = await prisma.user.findUnique({
            where: {
              id: user.id as number,
            },
            select: {
              role: true,
            },
          });
  
          if (userData) {
            token.role = userData.role; // Assign role to token
          }
        }
  
        return token;
      },
      session: async ({ session, token }) => {
        // Get user's data
        const userData = await prisma.user.findUnique({
          where: {
            id: token.uid as number,
          },
          select: {
            id: true,
            username: true,
            nama: true,
            tanggalLahir: true,
            noTelp: true,
            alamat: true,
            role: true,
            

          },
        });
  
        if (token?.uid && userData) {
          // Check if token exists and has uid property
          session.user = userData;
        }
        return session;
      },
    },
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };


