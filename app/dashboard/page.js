"use client";
import React, { useEffect, useState } from "react";
import { useSession, status } from "next-auth/react";
import LeaveRequestTable from "../_components/LeaveRequestTable";

const dashboard = () => {
  const { data: session } = useSession();
  const [leaveRequests, setLeaveRequests] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const status = { session: true };

  if (status.session) {
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch("/api/leave-request");
          if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
          }

          const data = await response.json();
          setLeaveRequests(data);
          console.log(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    }, []);
  }

  if (isLoading)
    return (
      <div className=" flex text-7xl w-full h-full justify-center items-center">
        <h1> Loading... </h1>
      </div>
    );
  if (error) return <div> Error: {error} </div>;
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

      <div className=" m-5 mt-[100px]">
        <h1 className="text-2xl font-bold "> Leave History</h1>
        <table className=" table-auto w-[900px] border-collapse border-2 border-slate-800 text-center ">
          <thead>
            <tr className=" ">
              <th className="border border-slate-500  bg-cyan-950 text-white">
                Submit Date
              </th>
              <th className="border border-slate-500  bg-cyan-950 text-white">
                username
              </th>
              <th className="border border-slate-500 bg-cyan-950 text-white">
                Reason for leaving
              </th>
              <th className="border border-slate-500 bg-cyan-950 text-white">
                Duration
              </th>
              <th className="border border-slate-500 bg-cyan-950 text-white">
                Status
              </th>
              <th className="border border-slate-500 bg-cyan-950 text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map(
              (request) => (
                console.log(request),
                (
                  <tr>
                    <td className="border border-slate-500">
                      {request.submittedDate}
                    </td>
                    <td className="border border-slate-500">
                      {request.username}
                    </td>
                    <td className="border border-slate-500">
                      {request.reason}
                    </td>
                    <td className="border border-slate-500 ">
                      {request.startDate} - {request.endDate}
                    </td>
                    <td className="border border-slate-500 px-5">
                      {request.status}
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>

      <div>
        <LeaveRequestTable />
      </div>
    </div>
  );
};

export default dashboard;
