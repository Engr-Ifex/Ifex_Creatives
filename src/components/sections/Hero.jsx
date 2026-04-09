import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 text-white"
    >
      {/* Localized top glow (brighter + closer + moving slowly) */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-52 w-[24rem] rounded-full bg-[#5CBF0D]/30 blur-[110px] animate-floatGlow" />

      {/* Grain texture only around top glow */}
      <div className="pointer-events-none absolute left-1/2 -top-6 h-56 w-[26rem] -translate-x-1/2 rounded-full opacity-[0.08] mix-blend-screen bg-[radial-gradient(circle,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:10px_10px] blur-[1px]" />

      {/* Decorative side lines / shapes */}
      <div className="absolute bottom-20 left-10 hidden h-40 w-40 rounded-full border border-white/5 blur-sm lg:block" />
      <div className="absolute bottom-20 right-10 hidden h-40 w-40 rounded-full border border-white/5 blur-sm lg:block" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center mt-10">
        {/* Small badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-xl sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-[#5CBF0D]" />
          {/* Turning ideas into premium digital experiences */}
          Your web solutions
        </div>

        {/* Heading with glow wrapper */}
        <div className="relative inline-block">
          <h1 className="relative z-10 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-6xl">
            I Build{" "}
            <span className="bg-gradient-to-r from-[#8FD82A] via-[#D8F7A8] to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(92,191,13,0.22)]">
              Modern Websites
            </span>
            <br />
            For Brands That Want To Stand Out
          </h1>
        </div>

        {/* Body text */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
          I’m Ife, a software developer and creative designer crafting premium,
          responsive, and conversion-focused web experiences with clean code and
          strong visual direction.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button icon>View My Work</Button>
          <Button variant="secondary">Let’s Talk</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;