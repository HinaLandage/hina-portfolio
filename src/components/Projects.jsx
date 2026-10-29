import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dashboard from "../assets/project/dashboard.png";
import weather from "../assets/project/weather.png";
import zoom from "../assets/project/zoom.png";
import auth from "../assets/project/auth.png";
import portfolio from "../assets/project/portfolio.png";

import {
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Code2,
  Layers3,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { FaReact, FaJs, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Nexus Dashboard",
    image: dashboard,

    description:
      "A role-based dashboard with protected routes, dynamic navigation, permission-based actions, and an intuitive interface.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    number: "01",
    liveUrl: "https://role-based-navigation-tau.vercel.app/",
    githubUrl: "https://github.com/HinaLandage/role-based-navigation",
  },
  {
    title: "Weather App",
    image: weather,

    description:
      "A weather application that lets users search for current weather conditions and forecasts for locations worldwide.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "REST API", icon: Code2, color: "#A78BFA" },
    ],
    number: "02",
    liveUrl: "https://weather-app-theta-flame-80.vercel.app/",
    githubUrl: "https://github.com/HinaLandage/Weather-App",
  },
  {
    title: "Zoom Clone",
    image: zoom,

    description:
      "A Zoom-inspired video conferencing interface with a responsive layout and core meeting UI features.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
    number: "03",
    liveUrl: "https://video-calling-website-rho.vercel.app/",
    githubUrl: "https://github.com/HinaLandage/Video-Calling-website",
  },
  {
    title: "Authentication System",
    image: auth,

    description:
      "A user authentication interface featuring registration, login, and password reset functionality.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    ],
    number: "04",
    liveUrl: "https://smart-authentication-app.vercel.app/",
    githubUrl: "https://github.com/HinaLandage/SmartAuthentication-App",
  },
  {
    title: "Task Management App",
    // image: dashboard,

    description:
      "A task management interface for organizing daily work, tracking task status, and improving productivity.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    number: "05",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Personal Portfolio",
    image: portfolio,

    description:
      "A personal portfolio showcasing frontend skills, projects, experience, and contact information.",
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    number: "06",
    liveUrl: "",
    githubUrl: "",
  },
];

// const filters = [
//   "All",
//   "Web Application",
//   "Authentication",
//   "Frontend Development",
// ];

const PAGE_SIZE = 3;

function ProjectPreview({ image, title, isDark }) {
  return (
    <div
      className={`group/preview relative h-48 overflow-hidden rounded-t-2xl ${
        isDark ? "bg-[#11111D]" : "bg-gray-100"
      }`}
    >
      {image ? (
        <img
          src={image}
          alt={`${title} project screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-transparent">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
              isDark
                ? "border-white/10 bg-white/5 text-violet-400"
                : "border-gray-200 bg-white text-violet-600"
            }`}
          >
            <Layers3 size={30} />
          </div>
          <span className="text-xs font-medium text-gray-500">
            Preview coming soon
          </span>
        </div>
      )}

      <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
        Project Preview
      </span>
    </div>
  );
}

export default function Projects({ isDark = true }) {
  const [activeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);

  const visibleProjects = filteredProjects.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE,
  );

  const goToPrevious = () => {
    setCurrentPage((page) => Math.max(0, page - 1));
  };

  const goToNext = () => {
    setCurrentPage((page) => Math.min(totalPages - 1, page + 1));
  };

  const arrowClass = `flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-25 sm:h-11 sm:w-11 ${
    isDark
      ? "border-white/10 bg-white/[0.04] text-gray-300 hover:border-violet-500/50 hover:bg-violet-500/15 hover:text-white"
      : "border-gray-200 bg-white text-gray-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
  }`;

  return (
    <section
      id="projects"
      className={`relative overflow-hidden px-3 py-20 transition-colors duration-300 sm:px-6 md:px-8 md:py-28 ${
        isDark ? "bg-[#0B0B14] text-white" : "bg-white text-gray-900"
      }`}
    >
      {isDark && (
        <>
          <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-violet-700/10 blur-[110px]" />
          <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
            Things I've built
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A selection of projects that showcase my frontend skills,
            problem-solving approach, and passion for building useful web
            experiences.
          </p>
        </motion.div>

        {/* Project gallery */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <button
            type="button"
            onClick={goToPrevious}
            disabled={currentPage === 0}
            aria-label="Previous projects"
            className={arrowClass}
          >
            <ArrowLeft size={20} />
          </button>

          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFilter}-${currentPage}`}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {visibleProjects.map((project) => (
                  <motion.article
                    key={project.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className={`group overflow-hidden rounded-2xl border transition-shadow duration-300 ${
                      isDark
                        ? "border-white/[0.08] bg-white/[0.025] hover:border-violet-500/40 hover:shadow-[0_12px_40px_rgba(139,92,246,0.10)]"
                        : "border-gray-200 bg-gray-50 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/30"
                    }`}
                  >
                    <ProjectPreview
                      image={project.image}
                      title={project.title}
                      isDark={isDark}
                    />

                    <div className="p-5 sm:p-6">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="text-xs font-medium uppercase tracking-wider text-violet-500">
                          {project.category}
                        </span>

                        <span className="text-sm font-semibold text-violet-500/70">
                          {project.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>

                      <p
                        className={`mt-3 min-h-[72px] text-sm leading-6 ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Technology tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => {
                          const TechIcon = technology.icon;

                          return (
                            <span
                              key={technology.name}
                              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs ${
                                isDark
                                  ? "border-white/[0.08] bg-white/[0.035] text-gray-300"
                                  : "border-gray-200 bg-white text-gray-700"
                              }`}
                            >
                              <TechIcon
                                size={14}
                                color={technology.color}
                                aria-hidden="true"
                              />
                              {technology.name}
                            </span>
                          );
                        })}
                      </div>

                      {/* Project links */}
                      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-current/10 pt-5">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
                          >
                            Live Demo <ExternalLink size={15} />
                          </a>
                        ) : (
                          <span
                            aria-disabled="true"
                            title="Add your deployed project URL"
                            className={`inline-flex cursor-not-allowed items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium opacity-50 ${
                              isDark ? "bg-white/10" : "bg-gray-200"
                            }`}
                          >
                            Live Demo <ExternalLink size={15} />
                          </span>
                        )}

                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                              isDark
                                ? "border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-white"
                                : "border-gray-200 text-gray-700 hover:border-violet-300 hover:text-violet-700"
                            }`}
                          >
                            <FaGithub size={18} />
                          </a>
                        ) : (
                          <span
                            title="Add your GitHub repository URL"
                            aria-label="GitHub repository URL not configured"
                            className={`inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg border opacity-40 ${
                              isDark
                                ? "border-white/10 text-gray-300"
                                : "border-gray-200 text-gray-700"
                            }`}
                          >
                            <FaGithub size={18} />
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={goToNext}
            disabled={currentPage >= totalPages - 1}
            aria-label="Next projects"
            className={arrowClass}
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Gallery indicators */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`Show project page ${index + 1}`}
                aria-current={currentPage === index ? "page" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "w-8 bg-violet-500"
                    : "w-2 bg-gray-500/40 hover:bg-violet-400/70"
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-gray-500">
            Showing{" "}
            {filteredProjects.length === 0 ? 0 : currentPage * PAGE_SIZE + 1}–
            {Math.min((currentPage + 1) * PAGE_SIZE, filteredProjects.length)}{" "}
            of {filteredProjects.length} projects
          </p>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          Always learning, always building, always improving.
        </motion.p>
      </div>
    </section>
  );
}
