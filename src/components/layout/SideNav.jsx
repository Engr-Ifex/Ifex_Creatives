import React, { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderKanban, Mail } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, href: "#home", id: "home" },
  { label: "About", icon: User, href: "#about", id: "about" },
  { label: "Skills", icon: Briefcase, href: "#skills", id: "skills" },
  { label: "Projects", icon: FolderKanban, href: "#projects", id: "projects" },
  { label: "Contact", icon: Mail, href: "#contact", id: "contact" },
];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const handleScroll = () => {
    let current = "";

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (!section) return;

      const rect = section.getBoundingClientRect();

      const offset = window.innerHeight / 2;

      if (rect.top <= offset && rect.bottom >= offset) {
        current = item.id;
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <div className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
      <div
        className="
        flex flex-col gap-3 rounded-3xl p-3 backdrop-blur-xl
        border border-white/10 bg-black/30 shadow-[0_0_30px_rgba(0,0,0,0.3)]

        light:bg-white/70 light:border-black/10 light:shadow-[0_0_20px_rgba(0,0,0,0.08)]
        "
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.label}
              href={item.href}
              title={item.label}
              className={`
                group flex h-11 w-11 items-center justify-center rounded-2xl
                transition-all duration-300 ease-out

                ${
                  isActive
                    ? `
                      bg-[#5CBF0D] text-black 
                      shadow-[0_0_20px_rgba(92,191,13,0.35)]
                    `
                    : `
                      bg-white/[0.03] text-white/70
                      hover:bg-[#5e5e5e] hover:text-black

                      light:bg-black/[0.04] light:text-black/60
                      light:hover:bg-[#5CBF0D]/15 light:hover:text-[#5CBF0D]
                    `
                }
              `}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;