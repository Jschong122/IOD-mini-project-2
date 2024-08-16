"use client";

import { UserRoundPen, FolderDot, Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Sidebar({ isOpen, toggleSidebar }) {
  const { data: session } = useSession();

  return (
    <div
      className={`
    ${isOpen ? "block" : "hidden"} lg:block
    fixed lg:static
    top-0 left-0
    h-full w-60
    bg-slate-300 text-black
    z-50 transition-all duration-300 ease-in-out
  `}
    >
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-2 right-2 p-2"
      >
        <X size={24} />
      </button>

      <div className="flex flex-col justify-center h-full">
        <ul className=" space-y-6 flex flex-col  text-center items-center content-center cursor-pointer">
          <Link href="/">
            <li className=" flex hover:text-blue-900 ">
              <FolderDot className=" mx-2" /> Home
            </li>
          </Link>
          {session && session.user.username ? (
            <div>
              <Link href="/dashboard">
                <li className=" flex hover:text-blue-900 ">
                  <UserRoundPen className=" mx-2" /> Profile
                </li>
              </Link>

              <div className=" flex text-center justify-center border-2 border-black  rounded-xl mt-5 ">
                <li className=" flex hover:text-blue-900 ">
                  <button onClick={() => signOut()}>logout</button>
                </li>
              </div>
            </div>
          ) : (
            <div className=" flex border-2 border-black  rounded-xl ">
              <Link href="auth/login">
                <li className=" flex  mx-2 hover:text-blue-900 ">
                  <button onClick={() => signIn()}> login</button>
                </li>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
