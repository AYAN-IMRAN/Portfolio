import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function RightSide() {
  return (
    <div
      className="flex flex-col w-full p-4
                 bg-gray-100 dark:bg-[#0A0A0A] 
                 border rounded-md border-gray-200 dark:border-[#262626]
                 min-h-screen lg:min-h-0 lg:h-full"
    >
      {/* Sticky Navbar */}
      <div
        className="sticky top-0 z-20 
                   bg-gray-100 dark:bg-[#0A0A0A] 
                   border-b border-gray-200 dark:border-[#262626]"
      >
        <Navbar />
      </div>

      {/* Content */}
      <div
        className="flex-1 p-6 
                   overflow-y-auto
                   lg:h-[calc(95vh-64px)] lg:overflow-y-auto custom-scrollbar"
      >
        <Outlet />
      </div>
    </div>
  );
}

export default RightSide;
