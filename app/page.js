import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { ExternalLink } from "react-external-link";
import OnlineLeaveForm from "./_components/OnlineLeaveForm";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <div></div>

      <div>
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            <div>
              Welcome to my mini-project 2. <br />
              In this project , This project is used shadcn UI , Strapi as third
              party CMS to manage content.
            </div>
          </AlertDescription>
        </Alert>
      </div>

      <div className="p-6 bg-white rounded-lg">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Smart Form System
        </h1>
        <p className="text-lg">
          This system allows you to easily submit and manage your leave
          requests. Whether you need time off for personal reasons, vacation, or
          medical leave, our system streamlines the process.
        </p>
      </div>

      {/* Online leave form system */}
      <div>
        <OnlineLeaveForm />

        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Important Notices</h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              Please ensure all fields are filled out correctly before
              submitting your leave request.
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
