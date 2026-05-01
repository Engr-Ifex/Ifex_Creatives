import React, { useEffect, useState } from "react";
import greenlogo from "../../assets/images/greenlogo.png";
import { useTheme } from "../../context/ThemeContext";

const Loader = () => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Total loader time (controls how long it stays)
    const timer = setTimeout(() => {
      setExit(true); // trigger exit animation

      // Wait for animation to finish before removing
      setTimeout(() => {
        setVisible(false);
      }, 800);
    }, 1800); // ⬅️ adjust this for how long loader stays

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[999] flex flex-col items-center justify-center
        transition-colors duration-500

        ${theme === "dark" ? "bg-black" : "bg-white"}

        ${exit ? "animate-loaderExit" : ""}
      `}
    >
      {/* Glow behind logo */}
      <div
        className={`
          absolute h-40 w-40 rounded-full blur-[80px]
          ${theme === "dark" ? "bg-[#5CBF0D]/20" : "bg-[#5CBF0D]/15"}
        `}
      />

      {/* Logo */}
      <img
        src={greenlogo}
        alt="logo"
        className="relative z-10 h-10 w-auto animate-logoPulse"
      />

      {/* Text */}
      <p
        className={`
          mt-4 text-sm animate-fadeIn
          ${theme === "dark" ? "text-white/60" : "text-black/60"}
        `}
      >
        Loading experience...
      </p>
    </div>
  );
};

export default Loader;