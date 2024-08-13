"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function OnlineLeaveForm() {
  const { data: session } = useSession();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const leaveData = {
      startDate,
      endDate,
      reason,
      submittedDate: new Date().toISOString().split("T")[0],
      username: session.user.username,
    };

    try {
      const response = await fetch("/api/leave-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaveData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit leave request");
      }

      const result = await response.json();
      console.log("API response:", result);

      alert("Leave request submitted successfully");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit leave request");
    }
  };

  return (
    <div className="p-4 max-w-max ">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Online Leave Form </CardTitle>
            <CardDescription>
              Please enter the reason of request leave. Destination of the
              country and return date.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Reason of request leave</p>
            <Input type="text" onChange={(e) => setReason(e.target.value)} />
            <p>Date Start</p>
            <Input type="date" onChange={(e) => setStartDate(e.target.value)} />
            <p> Date return </p>
            <Input type="date" onChange={(e) => setEndDate(e.target.value)} />
            <Button
              type="submit"
              className=" mt-3"
              disabled={!reason || !startDate || !endDate || !session}
            >
              Submit
            </Button>

            {!session && (
              <p className="text-red-600 text-lg mt-3 font-bold">
                Please login to submit
              </p>
            )}
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
export default OnlineLeaveForm;
