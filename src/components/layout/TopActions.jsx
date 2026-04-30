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
  if (menuOpen) {
    const scrollY = window.scrollY;

    // Lock body
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  } else {
    const scrollY = document.body.style.top;

    // Restore scroll
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  return () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
  };
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
              href="https://www.linkedin.com/in/ifeoluwapo-elijah-261674257/"
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
                className={`absolute top-0 right-0 h-full w-[85%] max-w-sm 
                border-l border-white/10 bg-black/90 backdrop-blur-2xl 
                transition-transform duration-500 ease-out
                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
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
                      href="/RESUME.pdf"
                      target="_blank"
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