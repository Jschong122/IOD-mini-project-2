import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const leaveData = await request.json();
    console.log("Received leave request data:", leaveData);

    const filePath = path.join(process.cwd(), "data", "leaveRequests.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const leaveRequests = JSON.parse(fileData);

    leaveRequests.push({
      id: Date.now(),
      ...leaveData,
      status: "Pending",
    });

    fs.writeFileSync(filePath, JSON.stringify(leaveRequests, null, 2));

    return NextResponse.json(
      {
        message: "Leave request submitted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting leave request:", error);
    return NextResponse.json(
      {
        message: "Error submitting leave request",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "leaveRequests.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const leaveRequests = JSON.parse(fileData);
    return NextResponse.json(leaveRequests);
  } catch (error) {
    console.error("Error fetching leave requests:", error);
    return NextResponse.json(
      {
        message: "Error fetching leave requests",
      },
      { status: 500 }
    );
  }
}
