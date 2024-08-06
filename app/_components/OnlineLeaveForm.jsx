"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function OnlineLeaveForm() {
  return (
    <div className=" p-4 max-w-max">
      <Card>
        <CardHeader>
          <CardTitle>Online Leave Form </CardTitle>
          <CardDescription>
            Please enter the reason of request leave. Destination of the country
            and return date.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Reason of request leave</p>
          <Input />
          <p> Date return</p>
          <Input />

          <Button className=" mt-3"> Submit </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default OnlineLeaveForm;
