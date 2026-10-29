import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaFigma,
  FaRobot,
  FaLaptopCode,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend Technologies",
    description: "Core technologies for building modern web interfaces.",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Frameworks & Styling",
    description: "Responsive layouts and modern UI styling.",
    skills: [
      { name: "Tailwind CSS", icon: FaCode, color: "#06B6D4" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Database",
    description: "Relational databases and SQL queries.",
    skills: [
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
      { name: "PostgreSQL", icon: FaDatabase, color: "#4169E1" },
    ],
  },
  {
    title: "Developer Tools",
    description: "Tools for development, version control, and collaboration.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#8B8B98" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Vite", icon: FaLaptopCode, color: "#646CFF" },
    ],
  },
  {
    title: "Design & AI Tools",
    description: "Design workflows and AI-assisted development.",
    skills: [
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "ChatGPT", icon: FaRobot, color: "#10A37F" },
      { name: "Cursor AI", icon: FaCode, color: "#8B8B98" },
    ],
  },
  {
    title: "API & Integration",
    description: "Connecting frontend interfaces with backend services.",
    skills: [{ name: "REST APIs", icon: FaLaptopCode, color: "#A78BFA" }],
  },
];

function SkillGroupCard({ group, isDark, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className={`rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
        isDark
          ? "border-white/10 bg-white/[0.03] hover:border-violet-500/40 hover:bg-white/[0.045] hover:shadow-xl hover:shadow-violet-500/[0.06]"
          : "border-gray-200 bg-white hover:border-violet-300 hover:shadow-xl hover:shadow-violet-200/30"
      }`}
    >
      <div className="mb-5 flex items-start gap-3">
        <span className="mt-1 h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-blue-500" />

        <div>
          <h3
            className={`text-lg font-bold sm:text-xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {group.title}
          </h3>

          <p
            className={`mt-1 text-sm leading-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {group.description}
          </p>
        </div>
      </div>

      {/* All skills are inside this single category card */}
      <div className="flex flex-wrap gap-3">
        {group.skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              title={skill.name}
              className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-all duration-300 hover:scale-[1.03] ${
                isDark
                  ? "border-white/[0.08] bg-[#0B0B14]/70 hover:border-violet-500/40"
                  : "border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-50"
              }`}
            >
              <Icon size={21} color={skill.color} aria-hidden="true" />

              <span
                className={`text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Skills({ isDark = true }) {
  return (
    <section
      id="skills"
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-300 sm:px-8 md:py-28 ${
        isDark ? "bg-[#0B0B14] text-white" : "bg-white text-gray-900"
      }`}
    >
      {isDark && (
        <>
          <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-700/10 blur-[110px]" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        </>
      )}

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            My Technical Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-500 to-blue-400 bg-clip-text text-transparent">
              Technologies.
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            The technologies, tools, and frameworks I use to develop responsive
            interfaces and build modern web applications.
          </p>
        </motion.div>

        {/* One card per category */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {skillGroups.map((group, index) => (
            <SkillGroupCard
              key={group.title}
              group={group}
              isDark={isDark}
              index={index}
            />
          ))}
        </div>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center justify-center gap-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-400 sm:mt-16 sm:gap-4 sm:text-xs sm:tracking-[0.25em]"
        >
          <span className="h-px w-6 bg-violet-500/40 sm:w-16" />
          Build <span className="text-blue-400">•</span> Learn
          <span className="text-blue-400">•</span> Grow
          <span className="h-px w-6 bg-violet-500/40 sm:w-16" />
        </motion.div>
      </div>
    </section>
  );
}
