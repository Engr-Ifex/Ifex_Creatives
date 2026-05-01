import React from "react";
import { projectsData } from "../../data/projects";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import FadeInSection from "../ui/FadeInSection";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-24 lg:px-12 text-white light:text-black"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <FadeInSection>
          <div className="mb-16 text-center">
            <div
              className="
                mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs backdrop-blur-xl
                border border-white/10 bg-white/5 text-white/70

                light:border-black/10 light:bg-black/[0.04] light:text-black/70
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#5CBF0D]" />
              Projects
            </div>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Selected Work
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 light:text-black/60">
              A selection of projects showcasing my skills in development and design.
            </p>
          </div>
        </FadeInSection>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projectsData.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              
              <div className="group relative cursor-pointer">

                {/* IMAGE CONTAINER */}
                <div
                  className="
                    relative overflow-hidden rounded-3xl border
                    border-white/10 light:border-black/10

                    h-[340px]
                    sm:h-auto sm:aspect-[16/10]
                  "
                >

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-full w-full object-cover
                      transition duration-500 ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay (important fix) */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/20 group-hover:bg-black/50
                      transition duration-500

                      light:bg-white/10 light:group-hover:bg-white/30
                    "
                  />

                  {/* Inner shadow */}
                  <div
                    className="
                      absolute inset-0 rounded-3xl pointer-events-none
                      shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]

                      light:shadow-[inset_0_0_40px_rgba(0,0,0,0.08)]
                    "
                  />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div
                      className="
                        rounded-2xl p-4 backdrop-blur-xl border
                        border-white/10 bg-black/70

                        light:border-black/10 light:bg-white/80
                      "
                    >

                      {/* Top row */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-white light:text-black">
                          {project.title}
                        </h3>

                        <div className="flex items-center gap-3 text-white/70 light:text-black/70">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-[#5CBF0D]"
                          >
                            <HiOutlineExternalLink size={18} />
                          </a>

                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-[#5CBF0D]"
                          >
                            <FiGithub size={18} />
                          </a>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-xs leading-relaxed text-white/60 light:text-black/60">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="
                              rounded-full px-2 py-1 text-[10px]
                              border border-white/10 bg-white/5 text-white/70
                              transition

                              hover:border-[#5CBF0D]/40 hover:text-[#5CBF0D]

                              light:border-black/10 light:bg-black/[0.04] light:text-black/70
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>

                {/* Bottom glow */}
                <div
                  className="
                    absolute -bottom-6 left-1/2 h-24 w-72 -translate-x-1/2
                    rounded-full blur-3xl opacity-0 transition duration-500
                    bg-[#5CBF0D]/10 group-hover:opacity-100

                    light:bg-[#5CBF0D]/15
                  "
                />

              </div>

            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;