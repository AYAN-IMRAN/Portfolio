import React from "react";
import ProjectCard from "../components/ui/ProjectCards";

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio showcasing animations, responsive design, and smooth user experience.",
      tags: ["React", "Tailwind", "Framer Motion", "JavaScript"],
      image: "https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc",
      liveUrl: "https://your-portfolio.com",
      githubUrl: "/images/blog.png",
    },
    {
      title: "E-Commerce App",
      description:
        "Full-stack e-commerce platform with authentication, cart, and Stripe payments.",
      tags: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
      image: "https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc",
      liveUrl: "https://your-store.com",
      githubUrl: "/images/blog.png",
    },
    {
      title: "Blog Platform",
      description:
        "Feature-rich blogging platform with markdown editor, comments, and SEO optimization.",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      image: "/images/blog.png",
      liveUrl: "https://your-blog.com",
      githubUrl: "/images/blog.png",
    },
    {
      title: "Task Manager",
      description:
        "Trello-style task manager with drag-and-drop, realtime updates, and team boards.",
      tags: ["React", "Firebase", "Tailwind"],
      image: "/images/taskmanager.png",
      liveUrl: "https://your-tasks.com",
    },
  ];

  return (
    <div className="flex flex-col gap-6 pb-6 mt-2">
      {projectList.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
