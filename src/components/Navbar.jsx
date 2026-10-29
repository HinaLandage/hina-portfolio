import { useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  // { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navText = isDark
    ? "text-zinc-400 hover:text-white"
    : "text-zinc-600 hover:text-violet-700";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex h-[76px] max-w-7xl items-center
          justify-between border-b px-5 transition-colors
          duration-300 sm:px-8 lg:px-12 ${
            isDark
              ? "border-white/[0.07] bg-[#09090f]/85"
              : "border-zinc-200/80 bg-[#faf9ff]/90"
          } backdrop-blur-xl`}
      >
        {/* Brand */}
        <a
          href="#hero"
          onClick={closeMenu}
          className={`inline-flex w-max max-w-full shrink-0 flex-nowrap items-center gap-2.5 whitespace-nowrap ${
            isDark ? "text-white" : "text-[#181522]"
          }`}
        >
          {/* Logo box */}
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-gradient-to-br from-violet-600 to-blue-600 text-sm font-bold tracking-wide text-white shadow-md shadow-violet-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 sm:h-11 sm:w-11">
            HL
          </span>

          {/* Brand name */}
          <span className="shrink-0 text-base font-semibold leading-none tracking-tight sm:text-lg">
            Hina Landage<span className="text-violet-500">.</span>
          </span>
        </a>
        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative py-2 text-sm font-medium
                transition-colors duration-200 ${navText}`}
            >
              {link.name}
              <span
                className="absolute bottom-0 left-0 h-px w-full
                  origin-left scale-x-0 bg-violet-500
                  transition-transform duration-300
                  group-hover:scale-x-100"
              />
            </a>
          ))}
        </div>

        {/* Theme and resume actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={`flex h-10 w-10 items-center justify-center
              rounded-full border transition duration-200 ${
                isDark
                  ? "border-white/10 text-zinc-300 hover:border-violet-400/50 hover:text-violet-300"
                  : "border-zinc-200 text-zinc-700 hover:border-violet-400 hover:text-violet-700"
              }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="https://drive.google.com/file/d/1MJSgoP7vOaeBkF05hDAAHovC6FL0BYW6/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full
              border px-5 py-2.5 text-sm font-medium
              transition duration-300 ${
                isDark
                  ? "border-white/15 text-zinc-200 hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-white"
                  : "border-zinc-300 text-zinc-800 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
              }`}
          >
            Resume
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={`flex h-10 w-10 items-center justify-center
              rounded-full border transition ${
                isDark
                  ? "border-white/10 text-zinc-200 hover:text-violet-300"
                  : "border-zinc-200 text-zinc-700 hover:text-violet-700"
              }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`flex h-10 w-10 items-center justify-center
              rounded-full border transition ${
                isDark
                  ? "border-white/10 text-white"
                  : "border-zinc-200 text-zinc-800"
              }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation panel */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`overflow-hidden border-b backdrop-blur-xl
          transition-all duration-300 lg:hidden ${
            isDark
              ? "border-white/10 bg-[#09090f]/95"
              : "border-zinc-200 bg-[#faf9ff]/95"
          } ${
            menuOpen
              ? "max-h-[440px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className={`border-b py-3.5 text-sm transition ${
                isDark
                  ? "border-white/[0.06] text-zinc-300 hover:text-violet-300"
                  : "border-zinc-200 text-zinc-700 hover:text-violet-700"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1MJSgoP7vOaeBkF05hDAAHovC6FL0BYW6/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center gap-2
              self-start rounded-full border border-violet-400/40
              px-5 py-2.5 text-sm font-medium text-violet-500
              transition hover:bg-violet-500/10"
          >
            Resume <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
