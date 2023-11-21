import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: number;
  }
  interface Session {
    user?: { id: number } & DefaultSession["user"];
  }
}
