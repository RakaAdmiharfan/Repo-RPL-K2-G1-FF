import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import ToasterContext from "./context/ToasterContext";

import "@uploadthing/react/styles.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Flora Finder",
  description: "Tubes RPL K2-G1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
      <ToasterContext/>
      {children}</body>
    </html>
  );
}
