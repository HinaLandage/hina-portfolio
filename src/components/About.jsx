import { motion } from "framer-motion";
import {
  Code2,
  PanelsTopLeft,
  GraduationCap,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "8 Months",
    description: "Frontend internship experience",
  },
  {
    icon: PanelsTopLeft,
    title: "Responsive UI",
    description: "Modern layouts and reusable components",
  },
  {
    icon: GraduationCap,
    title: "MCA Graduate",
    description: "Master of Computer Applications",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning ideas into practical solutions",
  },
];

const skills = ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function About({ isDark }) {
  return (
    <section
      id="about"
      className={`relative isolate scroll-mt-24 overflow-hidden px-6 py-20 sm:px-10 lg:px-20 ${
        isDark ? "bg-[#0B0B14] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Subtle ambient violet light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Get to know me
            <span className="h-px w-12 bg-violet-500/70" />
          </p>

          <h2 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-violet-400">Me.</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Short introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-xl"
          >
            <motion.p
              variants={itemVariants}
              className="mb-5 flex items-center gap-2 text-sm text-violet-400"
            >
              <Sparkles size={16} />
              Frontend Developer · Web Developer
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="mb-5 text-3xl font-bold leading-tight sm:text-4xl"
            >
              Turning ideas into{" "}
              <span className="text-violet-400">digital experiences.</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className={`text-base leading-8 sm:text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              With 8 months of frontend internship experience, I enjoy turning
              ideas and designs into user-friendly interfaces. I focus on
              reusable components, responsive layouts, and seamless API
              integration while continuously improving my development skills.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-[0_0_18px_rgba(139,92,246,0.16)] ${
                    isDark
                      ? "border-white/10 bg-white/[0.03] text-gray-300"
                      : "border-violet-200 bg-violet-50 text-violet-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className={`group relative overflow-hidden rounded-2xl border p-6 transition-[border-color,box-shadow] duration-300 ${
                    isDark
                      ? "border-white/[0.09] bg-white/[0.025] hover:border-violet-400/40 hover:shadow-[0_8px_35px_rgba(139,92,246,0.10)]"
                      : "border-gray-200 bg-white hover:border-violet-300 hover:shadow-[0_8px_35px_rgba(139,92,246,0.10)]"
                  }`}
                >
                  <span className="absolute right-5 top-5 text-xs text-violet-400/50">
                    0{index + 1}
                  </span>

                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/10 text-violet-400 transition-all duration-300 group-hover:border-violet-400/35 group-hover:bg-violet-500/15 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.18)]">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <h4 className="mb-2 text-xl font-semibold">{item.title}</h4>

                  <p
                    className={`text-sm leading-6 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-5 h-px w-9 bg-violet-500/50 transition-all duration-300 group-hover:w-14 group-hover:bg-violet-400" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
