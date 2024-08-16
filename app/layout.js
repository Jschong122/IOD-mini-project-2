import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import ClientOnlyLayout from "./_components/ClientOnlyLayout";
import { getServerSession } from "next-auth";
const outfit = Outfit({ subsets: ["latin"] });
import { authOptions } from "./api/auth/[...nextauth]/route";
import ResponsiveLayout from "./_components/ResponsiveLayout";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${outfit.className} flex h-screen w-screen`}>
        <ResponsiveLayout session={session}>{children}</ResponsiveLayout>
      </body>
    </html>
  );
}
