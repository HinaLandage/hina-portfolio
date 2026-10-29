import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Code2,
  Fingerprint,
  Layers3,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    category: "Internship",
    role: "Frontend Developer Intern",
    company: "LeMiCi IQ Private Limited",
    location: "Bangalore, India",
    duration: "Dec 2025 – Aug 2026",
    description:
      "Worked on responsive web interfaces using React.js, JavaScript, and Tailwind CSS. Converted Figma designs into functional UI, integrated REST APIs, developed reusable components, and contributed to frontend device-tracking functionality using FingerprintJS.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "FingerprintJS",
      "Git",
    ],
    icon: Code2,
    accent: "violet",
  },
  {
    id: 2,
    category: "Internship",
    role: "Software Developer Intern",
    company: "Fab Software Stock",
    location: "India",
    duration: "Feb 2024 – Apr 2024",
    description:
      "Contributed to the development of a Product Authentication System designed to help identify and verify products. Gained practical experience in software development, application functionality, and problem-solving.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Development"],
    icon: Fingerprint,
    accent: "blue",
  },
];

const accentStyles = {
  violet: {
    text: "text-violet-500",
    border: "border-violet-500/40",
    glow: "shadow-violet-500/10",
    iconBg: "bg-violet-500/15",
    badge: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    dot: "bg-violet-500",
  },
  blue: {
    text: "text-blue-500",
    border: "border-blue-500/40",
    glow: "shadow-blue-500/10",
    iconBg: "bg-blue-500/15",
    badge: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    dot: "bg-blue-500",
  },
};

function ExperienceCard({ experience, isDark }) {
  const Icon = experience.icon;
  const accent = accentStyles[experience.accent];

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: experience.id % 2 === 1 ? -180 : 180,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative rounded-2xl border p-5 sm:p-7
    shadow-xl transition-all duration-300 hover:-translate-y-1
    ${accent.border} ${accent.glow}
    ${
      isDark
        ? "bg-[#10101d]/90 hover:bg-[#141426]"
        : "bg-white hover:bg-violet-50/40"
    }`}
    >
      {/* Card heading */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1
              text-xs font-semibold ${accent.badge}`}
          >
            {experience.category}
          </span>

          <h3
            className={`mt-3 text-lg font-bold sm:text-xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {experience.role}
          </h3>

          <p className={`mt-1 font-medium ${accent.text}`}>
            {experience.company}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center
            rounded-xl ${accent.iconBg}`}
        >
          <Icon className={`h-6 w-6 ${accent.text}`} />
        </div>
      </div>

      {/* Duration and location */}
      <div
        className={`mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        <span className="flex items-center gap-2">
          <CalendarDays className={`h-4 w-4 ${accent.text}`} />
          {experience.duration}
        </span>

        <span className="flex items-center gap-2">
          <MapPin className={`h-4 w-4 ${accent.text}`} />
          {experience.location}
        </span>
      </div>

      {/* Description */}
      <p
        className={`mt-5 text-sm leading-7 sm:text-[15px] ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {experience.description}
      </p>

      {/* Technology badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium
              transition-colors ${
                isDark
                  ? "border-white/10 bg-white/[0.04] text-gray-300 hover:border-violet-500/40"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-violet-300"
              }`}
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Experience({ isDark = true }) {
  return (
    <section
      id="experience"
      className={`relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${
        isDark ? "bg-[#0B0B14] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Decorative background glows */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80
          rounded-full bg-violet-600/10 blur-[120px]"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80
          rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-violet-500">
            My Journey
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />

          <p
            className={`mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My journey in software development, building responsive interfaces,
            solving problems, and turning ideas into meaningful web experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center timeline line on desktop */}
          <div
            className={`absolute bottom-8 left-1/2 top-8 hidden w-px
              -translate-x-1/2 bg-gradient-to-b from-violet-500
              via-purple-500 to-blue-500 md:block ${
                isDark ? "opacity-70" : "opacity-50"
              }`}
          />

          <div className="space-y-8 md:space-y-0">
            {experiences.map((experience, index) => {
              const accent = accentStyles[experience.accent];

              return (
                <div
                  key={experience.id}
                  className="relative md:grid md:min-h-[300px] md:grid-cols-2 md:items-center md:gap-20"
                >
                  {/* Timeline node */}
                  <div
                    className={`absolute left-0 top-7 z-10 hidden h-11 w-11
                      items-center justify-center rounded-full border-4
                      md:left-1/2 md:flex md:-translate-x-1/2
                      ${
                        isDark ? "border-[#0B0B14]" : "border-white"
                      } ${accent.dot} shadow-lg ${accent.glow}`}
                  >
                    <BriefcaseBusiness className="h-4 w-4 text-white" />
                  </div>

                  {/* Connector */}
                  <div
                    className={`absolute left-1/2 top-1/2 hidden h-px w-10
                      -translate-y-1/2 md:block ${
                        index % 2 === 0 ? "translate-x-0" : "-translate-x-full"
                      } ${accent.dot}`}
                  />

                  {/* Alternate card placement */}
                  <div
                    className={`md:col-span-1 ${
                      index % 2 === 0
                        ? "md:col-start-1 md:pr-10"
                        : "md:col-start-2 md:pl-10"
                    }`}
                  >
                    <ExperienceCard
                      experience={experience}
                      index={index}
                      isDark={isDark}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mx-auto mt-14 flex max-w-3xl flex-wrap
            items-center justify-center gap-4 rounded-2xl border p-5
            sm:gap-8 sm:p-7 ${
              isDark
                ? "border-white/10 bg-white/[0.03]"
                : "border-gray-200 bg-gray-50"
            }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Layers3 className="h-5 w-5 text-violet-500" />
            </div>
            <div>
              <p className="text-xl font-bold">8 Months</p>
              <p
                className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                Frontend Internship
              </p>
            </div>
          </div>

          <div
            className={`hidden h-10 w-px sm:block ${isDark ? "bg-white/10" : "bg-gray-200"}`}
          />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
              <Code2 className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xl font-bold">React.js</p>
              <p
                className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                Core Technology
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
