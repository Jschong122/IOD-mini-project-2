import { House, UserRoundPen, FolderDot } from "lucide-react";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="  flex flex-col justify-center bg-slate-300 h-screen min-w-60  text-black">
      <ul className="space-y-6 flex flex-col  text-center items-center content-center cursor-pointer">
        <Link href="/">
          <li className=" flex hover:text-blue-900 ">
            <FolderDot className=" mx-2" /> Home
          </li>
        </Link>
        <li className=" flex hover:text-blue-900 ">
          <UserRoundPen className=" mx-2" /> Profile
        </li>

        <div className=" flex">
          <Link href="auth/login">
            <li className=" flex  mx-2 hover:text-blue-900  ">Login</li>
          </Link>
          <li className=" flex  mx-2  hover:text-blue-900 ">Sign Up</li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
