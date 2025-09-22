import React from "react";
import Buttons from "./ui/Buttons";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import AvailableBadge from "./ui/AvailableBadge";
import ThemeToggle from "./ThemeToggle";

function Sidebar() {
  return (
    <aside
      className="w-full flex flex-col p-4 sm:p-6 
                 bg-white/80 dark:bg-transparent 
                 border rounded-md border-gray-200/60 dark:border-[#262626] 
                 backdrop-blur-sm
                 h-auto lg:h-full"
    >
      <div className="flex flex-col space-y-6 sm:space-y-8">
        {/* Tagline + Theme Toggle */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p
            className="text-xs sm:text-sm font-normal tracking-wide 
                        text-gray-500 dark:text-gray-400"
          >
            Bringing Ideas to Reality ✨
          </p>

          <div
            className="p-1.5 sm:p-2 rounded-full cursor-pointer 
                          hover:bg-gray-200/70 dark:hover:bg-[#1a1a1a] 
                          transition"
          >
            <ThemeToggle />
          </div>
        </div>

        {/* Name & Role */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center gap-2 text-black dark:text-white">
            Ayan Imran
            <AvailableBadge />
          </h1>

          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            Full Stack Engineer
          </h3>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m Ayan Imran, a passionate{" "}
            <span className="dark:text-white font-bold">
              Full Stack Engineer
            </span>{" "}
            and modern web developer. I love building sleek, high-performance
            applications with clean design, scalable architecture, and seamless
            user experiences.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 flex-wrap">
          <button
            className="relative group px-4 sm:px-6 py-2 rounded-md border border-gray-300 dark:border-gray-600
                       bg-black text-white font-medium overflow-hidden
                       transition-all duration-300 
                       hover:shadow-lg hover:-translate-y-0.5
                       dark:bg-white dark:text-black text-sm sm:text-base"
          >
            <span className="relative z-10">Book a Meeting</span>
          </button>

          <Buttons text={"Resume"} />
          <Buttons icon={<Github size={16} />} link="https://github.com/" />
          <Buttons icon={<Linkedin size={16} />} link="https://linkedin.com/" />
          <Buttons
            icon={<Instagram size={16} />}
            link="https://instagram.com/"
          />
          <Buttons
            icon={<Mail size={16} />}
            link="mailto:someone@example.com"
          />
        </div>

        {/* Core Skills */}
        <div className="pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            Core Skills
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Frontend:
            </span>{" "}
            <span className="font-normal">
              HTML, CSS, JavaScript, React.js, Next.js
            </span>
            <br />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Animation:
            </span>{" "}
            <span className="font-normal">
              GSAP, Locomotive, Lenis, Barba.js
            </span>
            <br />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Backend:
            </span>{" "}
            <span className="font-normal">Node.js, Express, MongoDB</span>
            <br />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Advanced:
            </span>{" "}
            <span className="font-normal">
              TypeScript, PostgreSQL, Prisma, Auth
            </span>
            <br />
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              DevOps:
            </span>{" "}
            <span className="font-normal">Docker, Vercel, Netlify, CI/CD</span>
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
