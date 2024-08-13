"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import OnlineLeaveForm from "./_components/OnlineLeaveForm";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="flex text-center text-3xl"> Loading...</p>;
  }

  return (
    <div className="h-full w-full">
      <div>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>
            {session ? (
              <p className=" text-blue-800">
                Welcome, {session.user.username} , your ID is {session.user.id}{" "}
                !
              </p>
            ) : (
              "Please log in"
            )}
          </AlertTitle>
          <AlertDescription>
            <div>
              Welcome to my IOD- mini-project 2. <br />
              This project used shadcn UI library and NextAuth for
              authentication
              <br />
            </div>
          </AlertDescription>
        </Alert>
      </div>
      <div className="p-5 ">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Smart Form System
        </h1>
        <p className="text-lg">
          This system allows you to easily submit and manage your leave
          requests. Whether you need time off for personal reasons, vacation, or
          medical leave, our system streamlines the process.
        </p>
      </div>

      <div>
        <OnlineLeaveForm />

        <div className=" mx-5">
          <h2 className="text-2xl font-bold mb-2">Important Notices</h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              Please ensure you have logged in and all fields are filled out
              correctly before submitting your leave request.
            </li>
            <li>
              Leave requests should be submitted at least two weeks in advance.
            </li>
            <li>
              For urgent leave requests, please contact your manager directly.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
