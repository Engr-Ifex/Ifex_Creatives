import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-2
        text-white light:text-black
      "
    >
      {/* Top glow */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-0 h-52 w-[24rem] 
           rounded-full 
          bg-[#5CBF0D]/30 blur-[110px] animate-floatGlow
          light:bg-[#5CBF0D]/30 light:hidden
        "
      />

      {/* Grain texture */}
      <div
        className="
          pointer-events-none absolute left-1/2 -top-6 h-56 w-[26rem] -translate-x-1/2 
          rounded-full opacity-[0.08] mix-blend-screen 
          bg-[radial-gradient(circle,rgba(255,255,255,0.7)_1px,transparent_1px)] 
          [background-size:10px_10px] blur-[1px]
          light:mix-blend-multiply light:opacity-[0.05]
        "
      />

      {/* Decorative side shapes */}
      <div className="absolute bottom-20 left-10 hidden h-40 w-40 rounded-full border border-white/5 blur-sm lg:block light:border-black/10" />
      <div className="absolute bottom-20 right-10 hidden h-40 w-40 rounded-full border border-white/5 blur-sm lg:block light:border-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto mt-10 flex w-full max-w-5xl flex-col items-center text-center">
        
        {/* Badge */}
        <div
          className="
            mb-6 inline-flex items-center gap-2 rounded-full border 
            border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-xl sm:text-sm
            light:border-black/10 light:bg-black/5 light:text-black/70
          "
        >
          <span className="h-2 w-2 rounded-full bg-[#5CBF0D]" />
          Your web solutions
        </div>

        {/* Heading */}
        <div className="relative inline-block">
          <h1 className="relative z-10 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-6xl">
            I Build{" "}
            <span
              className="
                bg-gradient-to-r from-[#8FD82A] via-[#D8F7A8] to-white 
                bg-clip-text text-transparent 
                [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]
                light:to-[#ccf095]
              "
            >
              Modern Websites
            </span>
            <br />
            For Brands That Want To Stand Out
          </h1>
        </div>

        {/* Body text */}
        <p
          className="
            mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg
            light:text-black/60
          "
        >
          I’m Ife, a software developer and creative designer crafting premium,
          responsive, and conversion-focused web experiences with clean code and
          strong visual direction.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#projects">
            <Button icon>View My Work</Button>
          </a>

          <a href="#contact">
            <Button variant="secondary">Let’s Talk</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;