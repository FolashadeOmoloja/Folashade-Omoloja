"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string[];
}

export default function Projects() {
  const projects = [
    {
      title: "TalentNest",
      subtitle: "Full Stack Web App",
      description:
        "A freelance platform connecting talent with global companies. Includes role-based dashboards, job matching, and admin controls.",
      tech: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express Js",
        "Typescript",
        "Redux",
        "Tailwind",
      ],
      live: "https://talent-nest.vercel.app",
      github: "https://github.com/FolashadeOmoloja/talentnest",
      image: ["/talent-nest.svg", "/talent-nest2.svg"],
    },
    {
      title: "TalentNest-Admin",
      subtitle: "Full Stack Web App",
      description:
        "A dedicated Admin dashboard for managing companies, talents, job posts, talent nd AI-powered resume matching system as a hiring tool.",
      tech: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express Js",
        "Typescript",
        "Redux",
        "Tailwind",
      ],
      live: "https://talent-nest-admin.vercel.app",
      github: "https://github.com/FolashadeOmoloja/TalentNest-Admin",
      image: ["talent-admin.svg", "talent-admin2.svg"],
    },
    {
      title: "FastKar",
      subtitle: "Full Stack Web App",
      description:
        "A web app for booking rides, allows users to set their location, choose a preferred ride, add booking details, and automatically get assigned a driver.",
      tech: [
        "Next.js",
        "Firebase",
        "Next Auth",
        "Typescript",
        "Tailwind",
        "Leaflet Map",
        "Framer Motion",
      ],
      live: "https://fast-kar.vercel.app/",
      github: "https://github.com/FolashadeOmoloja/FastKar",
      image: ["fastkar.svg", "fastkar2.svg"],
    },
    {
      title: "Planet Protectors",
      subtitle: "Full Stack Web App",
      description:
        "A web app that helps businesses recycle materials they no longer need, simplifying waste collection and supports sustainability.",
      tech: [
        "React",
        "Supabase",
        "Next Auth",
        "Javascript",
        "React Table",
        "CSS",
        "Rechart",
      ],
      live: "https://planetprotectors.netlify.app/",
      github: "https://github.com/FolashadeOmoloja/Planet-Protectors",
      image: ["planet.svg", "planet2.svg"],
    },
  ];

  return (
    <section id="projects" className="text-white sm:pb-32 sm:px-6 px-4 mb-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 xsm:mb-16 max-w-5xl mx-auto"
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Featured <span className="bg-text">Projects</span>
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg text-center mx-auto">
            A selection of projects where I applied full-stack and frontend
            skills to solve real problems and build elegant digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, index) => (
            <div key={index}>
              <ProjectCard proj={proj} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ proj }: { proj: Project }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="bg-[#111827] rounded-xl border border-[#2c2c2c] p-6 shadow-md hover:shadow-[#007aff]/20 transition duration-300 relative">
      <div className="absolute inset-0 bg-[url('/grid-lines.svg')] bg-no-repeat bg-cover opacity-40 pointer-events-none" />
      <div className="relative mb-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeImage * 100}%)` }}
        >
          {proj.image.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`${proj.title} preview ${idx + 1}`}
              width={800}
              height={500}
              className="w-full h-64 object-cover flex-shrink-0 rounded-lg border border-[#1f1f1f]"
              quality={70}
            />
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {proj.image.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-3 h-3 rounded-full  transition-all duration-300 ${
                activeImage === idx
                  ? "bg-[#007aff]"
                  : "bg-gray-500/30 border border-white"
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
      <p className="text-sm text-[#007aff] mb-2">{proj.subtitle}</p>
      <p className="text-gray-300 text-sm mb-4">{proj.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {proj.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-[#1f1f1f] text-xs text-gray-200 px-2 py-1 rounded border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={proj.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#007aff] underline"
        >
          Live Demo
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={proj.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-400 underline"
        >
          GitHub
        </motion.a>
      </div>
    </div>
  );
};
