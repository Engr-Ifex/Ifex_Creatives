import React from "react";
import greenlogo from "../../assets/images/greenlogo.png";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 px-6 py-16 lg:px-12
      light:border-black/10 light:bg-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[#5CBF0D]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* GRID */}
        <div className="grid gap-12 lg:grid-cols-3">

          {/* LEFT — BRAND */}
          <div>
            <img src={greenlogo} alt="logo" className="mb-6 h-6" />

            <p className="max-w-sm text-sm leading-relaxed text-white/60
              light:text-black/60">
              Building modern, scalable, and visually engaging web experiences.
              Focused on clean code, performance, and strong design direction.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-6 inline-block rounded-full bg-[#5CBF0D] px-6 py-3 text-sm font-medium text-black
              transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(92,191,13,0.35)]"
            >
              Let’s Work Together
            </a>
          </div>

          {/* MIDDLE — NAV */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white
              light:text-black">
              Pages
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/60
              light:text-black/60">

              {[
                { label: "Home", link: "#" },
                { label: "About", link: "#about" },
                { label: "Skills", link: "#skills" },
                { label: "Projects", link: "#projects" },
                { label: "Contact", link: "#contact" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="transition-all duration-300 hover:text-[#5CBF0D]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — SOCIAL */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white
              light:text-black">
              Connect
            </h3>

            <div className="flex flex-col gap-4 text-sm text-white/60
              light:text-black/60">

              <a
                href="mailto:adesojiifeoluwapo@gmail.com"
                className="transition-all duration-300 hover:text-[#5CBF0D]"
              >
                adesojiifeoluwapo@gmail.com
              </a>

              {/* Icons */}
              <div className="flex gap-4 mt-2">

                <a
                  href="https://github.com/Engr-Ifex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]
                  transition-all duration-300 hover:-translate-y-1 hover:text-[#5CBF0D]

                  light:border-black/10 light:bg-black/[0.04]"
                >
                  <FiGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ifeoluwapo-elijah-261674257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]
                  transition-all duration-300 hover:-translate-y-1 hover:text-[#5CBF0D]

                  light:border-black/10 light:bg-black/[0.04]"
                >
                  <LiaLinkedin size={18} />
                </a>

                <a
                  href="https://x.com/Ifeoluwapo24165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]
                  transition-all duration-300 hover:-translate-y-1 hover:text-[#5CBF0D]

                  light:border-black/10 light:bg-black/[0.04]"
                >
                  <FaXTwitter size={16} />
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10
          light:border-black/10" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row
          light:text-black/50">

          <p>
            © {new Date().getFullYear()} Ifex Creatives. All rights reserved.
          </p>

          <p className="text-white/40 light:text-black/40">
            Designed & Built by Ife
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;