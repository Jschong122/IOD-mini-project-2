"use client";
import React, { useEffect, useState } from "react";
import { useSession, status } from "next-auth/react";
import LeaveRequestTable from "../_components/LeaveRequestTable";

const dashboard = () => {
  const { data: session } = useSession();

  if (!session)
    return (
      <div className=" flex text-7xl w-full h-full justify-center items-center">
        {" "}
        Not signed in. Go back to{" "}
        <a href="/">
          {" "}
          <span className="underline text-blue-600" _>
            {" "}
            Home page{" "}
          </span>
        </a>
      </div>
    );

  return (
    <div className="flex flex-col h-screen w-screen ">
      <h1 className="text-4xl font-bold justify-start items-center bg-slate-600 p-6 text-white">
        {" "}
        Dashboard
      </h1>
      <div className="  m-5">
        <h1 className="text-2xl font-bold "> User Profile</h1>
        <session className=" text-xl text-left mt-5">
          <p> ID: {session?.user?.id}</p>
          <p> username: {session?.user?.username}</p>
          <p> Role: {session?.user?.role}</p>
        </session>
      </div>
      <div>
        <LeaveRequestTable />
      </div>
    </div>
  );
};

export default dashboard;
