import React from "react";
import Tag from "../components/ui/Tag";

function Skills() {
  // Categories + Skills
  const skills = {
    "Frontend Development": [
      "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript","TypeScript", "React.js",
      "ShadCN UI", "Magic UI", "Aceternity UI"
    ],
    "Animation & Creative Coding": [
      "GSAP", "Locomotive Scroll", "Lenis", "Barba.js",
      "Matter.js", "P5.js", "Three.js", "WebGL", "GLSL", "Spline"
    ],
    "Backend & Services": [
      "Node.js", "Express", "Firebase", "Appwrite", "PostgreSQL", "MongoDB",
      "REST API", "GraphQL", "tRPC", "Redis"
    ],
    "Full Stack Frameworks": ["Next.js"],
    "Real-time & Networking": ["WebSockets", "Socket.IO", "WebRTC"],
    "DevOps & CI/CD": ["GitHub Actions", "Bitbucket Pipelines", "Docker", "Kubernetes"],
    "Deployment & Cloud": ["Vercel", "Netlify", "AWS S3", "Serverless Functions"],
    "Web Security": ["XSS Protection", "CSRF Protection", "Authentication", "Input Validation"]
  };

  return (
    <div className="w-full px-2 sm:px-4 lg:px-4 py-4 space-y-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
        Skills & Expertise
      </h1>

      {/* Always Single Column, Full Width */}
      <div className="flex flex-col gap-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            className="w-full p-4 sm:p-5 rounded-lg border border-gray-200 dark:border-[#262626]
                       bg-white dark:bg-[#0A0A0A] shadow-sm
                       hover:shadow-md transition-all"
          >
            {/* Category Title */}
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              {category}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <Tag key={i} text={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
