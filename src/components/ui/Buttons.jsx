import React from "react";

function Buttons({ icon, link, text }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative flex items-center gap-2 px-4 py-2 rounded-lg border
        border-gray-200 dark:border-[#262626]
        bg-gray-100 text-gray-900 
        dark:bg-[#0A0A0A] dark:text-gray-100
        font-medium select-none cursor-pointer
        transition-all duration-300 ease-out

        shadow-[0_2px_4px_rgba(0,0,0,0.08)]
        hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)]
        hover:-translate-y-0.5

        active:shadow-[inset_0_3px_6px_rgba(0,0,0,0.35)]
        active:translate-y-0.5
      "
    >
      {/* Background glow layer */}
      <span
        className="absolute inset-0 rounded-lg opacity-0 
                   bg-gradient-to-r from-gray-300/50 to-gray-100/50 
                   dark:from-[#1a1a1a] dark:to-[#2a2a2a] 
                   transition-opacity duration-300
                   group-hover:opacity-100"
      ></span>

      {/* Subtle gradient border effect */}
      <span
        className="absolute -inset-px rounded-lg bg-gradient-to-r 
                   from-gray-400/40 via-gray-200/30 to-gray-400/40 
                   dark:from-[#2a2a2a] dark:via-[#1a1a1a] dark:to-[#2a2a2a] 
                   opacity-0 group-hover:opacity-100 transition duration-300"
      ></span>

      {/* Actual content */}
      <span className="relative flex items-center gap-2 z-10">
        {icon && <span className="flex">{icon}</span>}
        {text && <span>{text}</span>}
      </span>
    </a>
  );
}

export default Buttons;
