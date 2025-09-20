import React from "react";
import Tag from "../components/ui/Tag"; // <-- apna Tag component import karo

function Experience() {
  const experiences = [
    {
      role: "AI Chatbot Web Developer Intern",
      company: "XYZ Company",
      duration: "Jun 2024 – Aug 2024",
      type: ["Internship", "Remote"],
      description:
        "Worked on building and integrating AI chatbots into web apps using React, Node.js, and APIs.",
    },
    {
      role: "Independent Web Developer",
      company: "Self-employed",
      duration: "2023 – Present",
      type: ["Freelance", "Remote", "Present"],
      description:
        "Created multiple personal and demo projects including portfolio websites, chatbots, and full stack apps.",
    },
  ];

  return (
    <section className="relative max-w-4xl mx-auto px-4 sm:px-64 lg:px-6 py-4 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-10 text-center sm:text-left">
        Experience
      </h2>

      {/* Timeline Line */}
      <div className="relative border-l-2 border-gray-200 dark:border-[#262626]">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 ml-6 relative">
            {/* Timeline Dot */}
            <span
              className="absolute -left-3 flex h-5 w-5 items-center justify-center rounded-full 
                         bg-black dark:bg-white text-white dark:text-black 
                         ring-4 ring-gray-200 dark:ring-[#262626] shadow-md
                         transition-transform duration-300 group-hover:scale-110"
            >
              ●
            </span>

            {/* Content Card */}
            <div
              className="group p-5 sm:p-6 rounded-xl border border-gray-300/40 dark:border-[#262626]
                         bg-gray-50 dark:bg-[#0A0A0A] shadow-sm hover:shadow-lg
                         transition-all duration-300 ease-in-out"
            >
              <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                {exp.role}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {exp.company} • {exp.duration}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.type.map((tag, i) => (
                  <Tag key={i} text={tag} />
                ))}
              </div>

              <p className="mt-3 text-sm sm:text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
