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
import { useLoader } from "../../context/LoaderContext"; // ✅ added

const navItems = [
  { label: "Home", icon: Home, href: "#" },
  { label: "About", icon: User, href: "#about" },
  { label: "Skills", icon: Briefcase, href: "#skills" },
  { label: "Projects", icon: FolderKanban, href: "#projects" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

const TopActions = () => {
  const { theme, toggleTheme } = useTheme();
  const { setLoading } = useLoader(); // ✅ added

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // ✅ THEME TOGGLE WITH LOADER
  const handleThemeToggle = () => {
  setLoading(true);

  document.documentElement.classList.add("theme-transition");

  setTimeout(() => {
    toggleTheme();
    setLoading(false);

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 3000);
  }, 2000);
};

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
          <img src={greenlogo} alt="logo" className="h-5 w-auto" />

          {/* Desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={handleThemeToggle}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 backdrop-blur-xl transition hover:text-[#5CBF0D]"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
            href="/RESUME.pdf"  
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm text-white/90 backdrop-blur-xl transition hover:text-[#5CBF0D]"
          >
            Resume
          </a>

            <a
              href="https://github.com/Engr-Ifex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 transition hover:text-[#5CBF0D]"
            >
              <FiGithub size={18} />
            </a>

            <a
              href="www.linkedin.com/in/ifeoluwapo-elijah-261674257"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 transition hover:text-[#5CBF0D]"
            >
              <LiaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleThemeToggle}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80 transition"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white/80"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-black/90 transition ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col gap-6">
            <button onClick={() => setMenuOpen(false)}>
              <X />
            </button>

            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopActions;