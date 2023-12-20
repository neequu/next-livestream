import React from "react";
import DarkToggle from "./DarkToggle";
import { UserButton } from "@clerk/nextjs";

const TheHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <h1>nick</h1>
      <div className="flex items-center">
    <UserButton afterSignOutUrl="/"/>
      <DarkToggle />
      </div>
    </header>
  );
};

export default TheHeader;
