import React from "react";
import FadeInSection from "../ui/FadeInSection";
import aboutImg from "../../assets/images/about.png"; 
import { Check } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        
        {/* LEFT IMAGE */}
        <FadeInSection>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-2 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
              <img
                src={aboutImg}
                alt="About me"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            
           {/* strong bottom glow */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 w-[80%] max-w-[420px] -translate-x-1/2 h-32 rounded-full bg-[#5CBF0D]/30 blur-[80px]" />
          </div>
        </FadeInSection>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">
          
          {/* Badge */}
          <FadeInSection>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#5CBF0D]" />
              About Me
            </div>
          </FadeInSection>

          {/* Heading */}
          <FadeInSection delay={0.1}>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Building Scalable Digital
              <br />
              <span className="text-white/60">
                Solutions That Actually Work
              </span>
            </h2>
          </FadeInSection>

          {/* Description */}
          <FadeInSection delay={0.2}>
            <p className="max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              I’m Ife, a software developer and creative designer focused on
              building modern, responsive, and high-performing web applications.
              I combine clean code with strong visual design to create digital
              experiences that stand out.
            </p>
          </FadeInSection>

          {/* Bullet Points */}
          <FadeInSection delay={0.3}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Check size={16} className="text-[#5CBF0D]" />
                Full-stack development with modern tools
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Check size={16} className="text-[#5CBF0D]" />
                Strong focus on UI/UX and performance
              </div>
            </div>
          </FadeInSection>

          {/* CTA + Social Proof */}
          <FadeInSection delay={0.4}>
            <div className="mt-4 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              
              {/* Button */}
              <button className="rounded-full bg-[#5CBF0D] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(92,191,13,0.5)]">
                View My Work
              </button>

              {/* Social proof */}
              <div className="flex flex-col text-sm text-white/60">
                <div className="flex gap-1 text-[#5CBF0D]">
                  ★ ★ ★ ★ ★
                </div>
                <span>Projects successfully delivered</span>
              </div>

            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
};

export default About;