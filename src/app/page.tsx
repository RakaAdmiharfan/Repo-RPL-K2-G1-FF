import AcmeLogo from "@/app/ui/acme-logo";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/login");
  return <main className="bg-[#EFF6FD]"></main>;
}
