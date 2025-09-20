import React from "react";

function About() {
  return (
    <section className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-8 py-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6 text-center sm:text-left">
        About Me
      </h2>

      <div className="grid lg:grid-cols-1 gap-8 items-start">
        {/* Top - Code Card */}
        <div
          className="rounded-xl border border-gray-300 dark:border-[#262626] 
                     bg-gradient-to-br from-gray-100 to-gray-50 dark:from-[#0F0F0F] dark:to-[#0A0A0A] 
                     p-5 sm:p-6 font-mono text-sm sm:text-base 
                     text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl 
                     transition-all duration-300 overflow-x-auto"
        >
          <pre className="whitespace-pre-wrap break-words">
{`const aboutMe = {
  name: "Ayan Imran",
  role: "Full Stack Engineer",
  location: "Remote | Open to Opportunities",
  focus: ["Modern Web", "Clean UI/UX", "AI Chatbots"],
  motto: "Code. Create. Innovate."
};`}
          </pre>
        </div>

        {/* Bottom - Modern Text Blocks */}
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-[#262626] bg-white/60 dark:bg-white/5 shadow-sm hover:shadow-md transition">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi 👋, I’m <span className="font-semibold dark:text-white">Ayan Imran</span>, 
              a passionate fresher and aspiring{" "}
              <span className="font-semibold dark:text-white">Full Stack Engineer</span>.  
              I enjoy turning ideas into sleek, scalable web applications.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 dark:border-[#262626] bg-white/60 dark:bg-white/5 shadow-sm hover:shadow-md transition">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey started with{" "}
              <span className="font-semibold">frontend development</span> and grew 
              into <span className="font-semibold">backend engineering</span>, 
              databases, and <span className="font-semibold">AI-powered chatbots</span>.  
              I’ve built multiple personal projects and gained hands-on experience during my{" "}
              <span className="font-semibold">AI Chatbot Web Developer Internship</span>.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 dark:border-[#262626] bg-white/60 dark:bg-white/5 shadow-sm hover:shadow-md transition">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              As a fresher, I focus on{" "}
              <span className="font-semibold">learning fast</span>,{" "}
              <span className="font-semibold">writing clean code</span>, and{" "}
              <span className="font-semibold">building impactful products</span>.  
              I’m open to{" "}
              <span className="dark:text-white font-semibold">internships, freelance, and full-time roles</span> 
              where I can grow and contribute 🚀.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
