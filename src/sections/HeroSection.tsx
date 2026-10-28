"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const glowStyle = {
    textShadow: "0 0 6px rgba(255,255,255,0.7)",
  };

  const mildOutline = {
    WebkitTextStroke: "0.7px black",
    paintOrder: "stroke fill",
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Video Background - Full Screen */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/FEDERAL/Website Banner.mp4" type="video/mp4" />
        </video>

        {/* White Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Red Border Frame */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-3 sm:inset-4 md:inset-5 border-2 sm:border-3 md:border-4 border-[#cc0000]"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom min-h-screen flex items-center py-20 sm:py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6 sm:mb-8"
            style={{ fontWeight: 900 }}
          >
            <span
              className="block text-white"
              style={{ ...glowStyle, ...mildOutline }}
            >
              QUALITY YOU
            </span>
            <span
              className="block text-white"
              style={{ ...glowStyle, ...mildOutline }}
            >
              CAN{" "}
              <span
                className="text-[#cc0000] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                style={{ ...glowStyle, ...mildOutline }}
              >
                TRUST.
              </span>
            </span>
            <span
              className="block text-white"
              style={{ ...glowStyle, ...mildOutline }}
            >
              PRICES YOU
            </span>
            <span
              className="block text-white"
              style={{ ...glowStyle, ...mildOutline }}
            >
              CAN{" "}
              <span
                className="text-[#cc0000] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                style={{ ...glowStyle, ...mildOutline }}
              >
                AFFORD.
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-black-800 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
            style={{ ...glowStyle, ...mildOutline }}
          >
            Federal provides OEM-grade motorcycle replacement parts engineered
            with Japanese-level precision, backed by Indonesia's proven
            manufacturing expertise, and made accessible to everyday Filipino
            riders.
          </p>

          {/* Read More & Browse Products Buttons - OVAL DESIGN */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-4">
            {/* Browse Products Button */}
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-transparent border-[3px] border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white font-bold py-5 px-16 sm:py-6 sm:px-24 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-base sm:text-lg md:text-xl tracking-wide"
              style={{ borderRadius: "9999px" }}
            >
              Browse Products
              <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
