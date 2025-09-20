import React from "react";

function AvailableBadge() {
  return (
    <div className="relative inline-flex items-center group">
      {/* Badge wrapper */}
      <div className="relative flex items-center justify-center">
        {/* Pulse effect */}
        <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Inner dot */}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-md"></span>
      </div>

      {/* Tooltip */}
      <div
        className="
          absolute
          lg:left-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-full
          left-1/2 top-full mt-2 -translate-x-1/2
          px-2.5 py-1 text-xs font-medium rounded-md 
          bg-gray-900 text-white opacity-0 group-hover:opacity-100 
          transition-all duration-300 whitespace-nowrap shadow-lg z-50
        "
      >
        I’m available for remote works ✨
      </div>
    </div>
  );
}

export default AvailableBadge;
