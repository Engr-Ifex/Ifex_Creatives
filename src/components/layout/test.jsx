import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Home, User, Briefcase, FolderKanban, Mail } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import greenlogo from "../../assets/images/greenlogo.png";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { label: "Home", icon: Home, href: "#" },
  { label: "About", icon: User, href: "#about" },
  { label: "Skills", icon: Briefcase, href: "#skills" },
  { label: "Projects", icon: FolderKanban, href: "#projects" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

const TopActions = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/30 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <img src={greenlogo} alt="logo" className="h-5 w-auto" />

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-xl transition hover:border-[#5CBF0D]/40 hover:text-[#5CBF0D]"
            >
              Resume
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Engr-Ifex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]"
            >
              <FiGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ifeoluwapo-elijah-261674257/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]"
            >
              <LiaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme toggle stays outside */}
            <button
              onClick={toggleTheme}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm border-l border-white/10 bg-black/90 backdrop-blur-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col px-6 py-6">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <img src={greenlogo} alt="logo" className="h-5 w-auto" />

              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition hover:text-[#5CBF0D]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-base font-medium text-white/90 transition hover:border-[#5CBF0D]/40 hover:text-[#5CBF0D]"
                  >
                    <Icon size={18} />
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-base font-medium text-white/90 transition hover:border-[#5CBF0D]/40 hover:text-[#5CBF0D]"
              >
                Resume
              </a>
            </div>

             <div className="flex py-5 space-x-6">
                   <a
                href="https://github.com/Engr-Ifex"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]"
              >
                <FiGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ifeoluwapo-elijah-261674257/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]"
              >
                <LiaLinkedin size={20} />
              </a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopActions;