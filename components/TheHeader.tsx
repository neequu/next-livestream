import React from "react";
import DarkToggle from "./DarkToggle";

const TheHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <h1>nick</h1>
      <DarkToggle />
    </header>
  );
};

export default TheHeader;
