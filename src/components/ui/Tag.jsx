import React from "react";

function Tag({ text }) {
  return (
    <span className="px-2 py-1 text-xs font-medium rounded-md 
                     bg-gray-200 text-gray-800 
                     dark:bg-[#262626] dark:text-gray-200">
      {text}
    </span>
  );
}

export default Tag;
