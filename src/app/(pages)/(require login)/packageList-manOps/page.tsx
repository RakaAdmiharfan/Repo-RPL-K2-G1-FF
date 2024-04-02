// Your client-side code here
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { UserSession } from "@/components/UserFetcher";
import PackageMenu from "./components/manOpsPage";

export default async function ManOps() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  const user = session?.user as UserSession;
  const id = user.id;

  const roleAccess = user.role === "MANAGER";

  if (session && !roleAccess) {
    redirect("/");
  }

  return (
    <div>
      <PackageMenu />
    </div>
  );
}
