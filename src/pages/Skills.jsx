import React from "react";
import Tag from "../components/ui/Tag";
import {
  Code,
  Palette,
  Database,
  Layers,
  Zap,
  Server,
  Cloud,
  Shield,
} from "lucide-react";

function Skills() {
  // Categories + Skills
  const skills = {
    "Frontend Development": [
      "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "React.js",
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

  // Icons map
  const icons = {
    "Frontend Development": <Code className="w-5 h-5 text-blue-500" />,
    "Animation & Creative Coding": <Palette className="w-5 h-5 text-pink-500" />,
    "Backend & Services": <Database className="w-5 h-5 text-green-500" />,
    "Full Stack Frameworks": <Layers className="w-5 h-5 text-purple-500" />,
    "Real-time & Networking": <Zap className="w-5 h-5 text-yellow-500" />,
    "DevOps & CI/CD": <Server className="w-5 h-5 text-orange-500" />,
    "Deployment & Cloud": <Cloud className="w-5 h-5 text-cyan-500" />,
    "Web Security": <Shield className="w-5 h-5 text-red-500" />,
  };

  return (
    <div className="w-full px-3 sm:px-6 lg:px-6 py-4 space-y-8">
      {/* Section Title */}
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
        Skills & Expertise
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl border border-gray-200 dark:border-[#262626]
                       bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-md
                       hover:shadow-lg
                       transition-all duration-300"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-2 mb-4">
              {icons[category]}
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {category}
              </h2>
            </div>

            {/* Skills Tags */}
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
