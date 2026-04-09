import React from "react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  icon = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={clsx(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-4xl px-6 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 sm:py-4 sm:text-base",
        variant === "primary" &&
          "bg-[#5CBF0D] text-black shadow-[0_8px_30px_rgba(92,191,13,0.18)] hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(92,191,13,0.28)]",
        variant === "secondary" &&
          "border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]",
        className
      )}
      {...props}
    >
      {/* Premium inner light for primary button */}
      {variant === "primary" && (
        <>
          <span className="pointer-events-none absolute inset-x-3 top-1 h-[45%] rounded-full bg-white/25 blur-md" />
          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </>
      )}

      {/* Subtle ring for secondary */}
      {variant === "secondary" && (
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
      )}

      {/* Text */}
      <span className="relative z-10">{children}</span>

      {/* Icon */}
      {icon && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;