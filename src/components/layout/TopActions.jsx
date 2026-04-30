import React, { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  X,
  Home,
  User,
  Briefcase,
  FolderKanban,
  Mail,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import greenlogo from "../../assets/images/greenlogo.png";
import { useTheme } from "../../context/ThemeContext";
import { useLoader } from "../../context/LoaderContext";

const navItems = [
  { label: "Home", icon: Home, href: "#" },
  { label: "About", icon: User, href: "#about" },
  { label: "Skills", icon: Briefcase, href: "#skills" },
  { label: "Projects", icon: FolderKanban, href: "#projects" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

const TopActions = () => {
  const { theme, toggleTheme } = useTheme();
  const { setLoading } = useLoader();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu opens
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [menuOpen]);

  // Theme toggle with loader
  const handleThemeToggle = () => {
    setLoading(true);
    document.documentElement.classList.add("theme-transition");

    setTimeout(() => {
      toggleTheme();
      setLoading(false);

      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
      }, 400);
    }, 600);
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300

          ${
            scrolled
              ? `
                bg-black/30 backdrop-blur-xl border-b border-white/10
                light:bg-white/70 light:border-black/10
              `
              : `
                bg-transparent border-transparent
              `
          }
        `}
      >
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <img src={greenlogo} alt="logo" className="h-5 w-auto" />

          {/* DESKTOP */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Theme */}
            <button
              onClick={handleThemeToggle}
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/10 bg-black/30 text-white/80 backdrop-blur-xl
                transition-all duration-300 hover:text-[#5CBF0D]

                light:bg-white/70 light:border-black/10 light:text-black/70
                light:hover:text-[#5CBF0D]
              "
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume */}
            <a
              href="/RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm text-white/90 backdrop-blur-xl
                transition-all duration-300 hover:text-[#5CBF0D]

                light:bg-white/70 light:border-black/10 light:text-black/80
              "
            >
              Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Engr-Ifex"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/10 bg-black/30 text-white/80
                transition-all duration-300 hover:text-[#5CBF0D]

                light:bg-white/70 light:border-black/10 light:text-black/70
              "
            >
              <FiGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ifeoluwapo-elijah-261674257/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/10 bg-black/30 text-white/80
                transition-all duration-300 hover:text-[#5CBF0D]

                light:bg-white/70 light:border-black/10 light:text-black/70
              "
            >
              <LiaLinkedin size={20} />
            </a>
          </div>

          {/* MOBILE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleThemeToggle}
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/10 bg-black/30 text-white/80
                transition-all duration-300

                light:bg-white/70 light:border-black/10 light:text-black/70
              "
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/10 bg-black/30 text-white/80
                transition-all duration-300

                light:bg-white/70 light:border-black/10 light:text-black/70
              "
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-md light:bg-white/60"
        />

        {/* Panel */}
        <div
          className={`
            absolute right-0 top-0 h-full w-[85%] max-w-sm
            border-l border-white/10 bg-black/90 backdrop-blur-2xl
            transition-transform duration-500

            light:bg-white light:border-black/10

            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex h-full flex-col px-6 py-6">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <img src={greenlogo} alt="logo" className="h-5 w-auto" />

              <button
                onClick={() => setMenuOpen(false)}
                className="
                  flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/10 bg-white/[0.03] text-white/80

                  light:bg-black/[0.05] light:text-black/70
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      flex items-center gap-3 rounded-2xl px-5 py-4
                      border border-white/10 bg-white/[0.03]
                      text-white/90 transition-all duration-300
                      hover:text-[#5CBF0D]

                      light:bg-black/[0.04] light:border-black/10 light:text-black/80
                    "
                  >
                    <Icon size={18} />
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Bottom */}
            <div className="mt-6 border-t border-white/10 pt-6 light:border-black/10">
              <a
                href="/RESUME.pdf"
                className="
                  block rounded-2xl px-5 py-4
                  border border-white/10 bg-white/[0.03]
                  text-white/90

                  light:bg-black/[0.04] light:border-black/10 light:text-black/80
                "
              >
                Resume
              </a>

                 <div className="flex py-5 space-x-6">
                      <a
                  href="https://github.com/Engr-Ifex"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]
                  light:bg-white/70 light:border-black/10 light:text-black/70"
                >
                  <FiGithub size={18} />
                </a>
  
                <a
                  href="https://www.linkedin.com/in/ifeoluwapo-elijah-261674257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]
                  light:bg-white/70 light:border-black/10 light:text-black/70"
                >
                  <LiaLinkedin size={20} />
                </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopActions;