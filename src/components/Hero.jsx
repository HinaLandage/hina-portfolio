import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile/profile.jpg";

export default function Hero({ isDark = true }) {
  const theme = {
    section: isDark ? "bg-[#0B0B14] text-white" : "bg-[#faf9ff] text-[#181522]",
    muted: isDark ? "text-zinc-400" : "text-zinc-600",
    subtle: isDark ? "text-zinc-500" : "text-zinc-500",
    border: isDark ? "border-white/10" : "border-zinc-200",
    surface: isDark ? "bg-white/[0.03]" : "bg-white",
  };

  const resumeUrl =
    "https://drive.google.com/file/d/1MJSgoP7vOaeBkF05hDAAHovC6FL0BYW6/view?usp=drive_link";

  return (
    <section
      id="hero"
      className={`relative flex min-h-[90vh] scroll-mt-20 items-center overflow-hidden px-5 pb-20 pt-28 transition-colors duration-300 sm:px-8 lg:px-12 ${theme.section}`}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        {/* Introduction */}
        {/* Introduction */}

        {/* Introduction */}

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-2 lg:order-1"
        >
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-violet-500">
              OPEN TO FRONTEND OPPORTUNITIES
            </span>
          </div>
          {/* Name */}
          <p className={`mb-2 text-lg font-medium ${theme.muted}`}>
            Hello, I'm
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hina{" "}
            <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
              Landage
            </span>
          </h1>
          {/* Professional subtitle */}
          <h2
            className={`mt-4 text-xl font-semibold leading-relaxed sm:text-2xl ${theme.muted}`}
          >
            Frontend Developer
            <span className="text-violet-500"> | </span>
            Web Developer
          </h2>
          {/* Short introduction */}
          <p
            className={`mt-5 max-w-lg text-sm leading-7 sm:text-base ${theme.muted}`}
          >
            I build modern, responsive, and user-friendly web interfaces,
            transforming designs into functional experiences with clean,
            reusable code.
          </p>

          {/* Skills */}

          <div className="mt-6 flex flex-wrap gap-3">
            {["React.js", "JavaScript", "Tailwind CSS", "REST APIs"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.8 + index * 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className={`cursor-default rounded-lg border px-4 py-2 text-xs font-semibold
          transition-all duration-300
          ${
            isDark
              ? "border-violet-500/25 bg-violet-500/[0.06] text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.08)] hover:border-violet-400/70 hover:bg-violet-500/15 hover:text-white hover:shadow-[0_0_22px_rgba(139,92,246,0.30)]"
              : "border-violet-200 bg-white text-violet-700 shadow-[0_3px_12px_rgba(139,92,246,0.08)] hover:border-violet-400 hover:bg-violet-50 hover:shadow-[0_5px_20px_rgba(139,92,246,0.22)]"
          }`}
                >
                  {skill}
                </motion.span>
              ),
            )}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:-translate-y-0.5 hover:bg-violet-500"
            >
              View Projects
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition hover:border-violet-500 hover:text-violet-500 ${theme.border}`}
            >
              <Download size={16} />
              View Resume
            </a>
          </div>
          {/* Social links */}
          <div className="mt-7 flex items-center gap-5">
            <a
              href="https://github.com/HinaLandage?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={`inline-flex items-center gap-2 text-sm transition hover:text-violet-500 ${theme.muted}`}
            >
              <FaGithub size={18} />
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <a
              href="https://www.linkedin.com/in/hina-landage-127698259/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={`inline-flex items-center gap-2 text-sm transition hover:text-violet-500 ${theme.muted}`}
            >
              <FaLinkedin size={18} />
              LinkedIn
              <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* Portrait */}

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-1 mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:order-2 lg:max-w-[350px]"
        >
          {/* Portrait */}
          <div
            className={`relative overflow-hidden rounded-2xl border p-2
    transition-all duration-300
    hover:-translate-y-1
    ${
      isDark
        ? "border-violet-500/30 bg-[#14121e] shadow-[0_0_35px_rgba(139,92,246,0.18),0_20px_50px_rgba(59,130,246,0.10)] hover:shadow-[0_0_45px_rgba(139,92,246,0.30),0_20px_55px_rgba(59,130,246,0.16)]"
        : "border-violet-200 bg-white shadow-[0_0_30px_rgba(139,92,246,0.15),0_20px_40px_rgba(59,130,246,0.08)] hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
    }`}
          >
            <img
              src={profile}
              alt="Portrait placeholder"
              className="aspect-[4/5] w-full rounded-xl object-cover object-center"
            />
          </div>

          <p className={`mt-4 text-center text-xs ${theme.subtle}`}>
            React.js · JavaScript · Responsive UI
          </p>
        </motion.div>
      </div>
    </section>
  );
}
