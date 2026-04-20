import React from "react";
import FadeInSection from "../ui/FadeInSection";
import { skillsData } from "../../data/skills";

const Skills = () => {
    // const SkillIcon = skill.icon;
  return (
    <section id="skills" className="relative px-6 py-24 lg:px-12">
      
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[#5CBF0D]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
         <FadeInSection>
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#5CBF0D]" />
              Skills
            </div>

            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-[34px]">
              What I Bring to the Table
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
              A combination of development, design, and performance-focused
              thinking to build premium digital products.
            </p>
          </div>
        </FadeInSection>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, index) => {
            const Icon = category.icon;

            return (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="group h-[250px] cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#5CBF0D]/30 hover:shadow-[0_0_25px_rgba(92,191,13,0.12)]">
                  
                  {/* Header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5CBF0D]/10 text-[#5CBF0D]">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm text-white/60">
                    {category.description}
                  </p>

                  {/* Skills pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70 backdrop-blur-md transition hover:border-[#5CBF0D]/30 hover:text-[#5CBF0D]"
                      >
                         {/* {SkillIcon && <SkillIcon size={12} />} */}
                        {skill.name}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;