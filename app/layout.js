import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";
import ClientOnlyLayout from "./_components/ClientOnlyLayout";
import { getServerSession } from "next-auth";
const outfit = Outfit({ subsets: ["latin"] });
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log("session from layout", session);

  return (
    <html lang="en">
      <body className={`${outfit.className} flex h-screen w-screen`}>
        <ClientOnlyLayout session={session}>
          <Sidebar />
          {children}
        </ClientOnlyLayout>
      </body>
    </html>
  );
}
