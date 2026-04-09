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
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
      <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/30 p-3 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.label}
              href={item.href}
              className={`group flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-[#5CBF0D] text-black shadow-[0_0_20px_rgba(92,191,13,0.35)]"
                  : "bg-white/[0.03] text-white/70 hover:bg-[#5e5e5e] hover:text-black hover:shadow-[0_0_20px_rgba(92,191,13,0.25)]"
              }`}
              title={item.label}
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