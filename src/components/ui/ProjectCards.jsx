import React from "react";
import { Globe, Github } from "lucide-react";
import Tag from "./Tag";

function ProjectCard({ title, description, tags, image, liveUrl, githubUrl }) {
  return (
    <div
      className="w-full flex flex-col lg:flex-row 
                 border border-gray-300 dark:border-[#262626] 
                 rounded-lg shadow-md 
                 bg-white dark:bg-transparent transition-all duration-300"
    >
      {/* Left Side (Content) */}
      <div className="flex flex-col flex-1 p-4 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>

        {/* Action Buttons */}
        {(liveUrl || githubUrl) && (
          <div className="flex gap-3">
            {/* Live URL */}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center 
                           rounded-md border
                           border-gray-200 dark:border-[#262626]
                           bg-gray-100 text-gray-800
                           dark:bg-[#0A0A0A] dark:text-gray-200
                           transition-all duration-200 ease-out
                           
                           shadow-[0_2px_2px_rgba(0,0,0,0.08)]
                           hover:shadow-[0_6px_12px_rgba(0,0,0,0.25)]
                           hover:-translate-y-0.5
                           active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.35)]
                           active:translate-y-0.5"
              >
                <Globe className="w-4 h-4" />
              </a>
            )}

            {/* GitHub URL */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center 
                           rounded-md border
                           border-gray-200 dark:border-[#262626]
                           bg-gray-100 text-gray-800
                           dark:bg-[#0A0A0A] dark:text-gray-200
                           transition-all duration-200 ease-out
                           
                           shadow-[0_2px_2px_rgba(0,0,0,0.08)]
                           hover:shadow-[0_6px_12px_rgba(0,0,0,0.25)]
                           hover:-translate-y-0.5
                           active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.35)]
                           active:translate-y-0.5"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right Side (Image) → hidden on small, visible on lg */}
      <div className="hidden lg:block lg:w-2/4 p-4">
        <div className="w-full h-72 lg:h-full rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
