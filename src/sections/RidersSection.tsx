"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandSelectionSection() {
  return (
    <section className="w-full bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full"
      >
        {/* Top Header */}
        <div className="w-full bg-black text-white px-6 md:px-12 py-10 md:py-16 flex flex-row justify-between items-center">
          {/* Left Side */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold tracking-wide uppercase"
          >
            Riders Teams
          </motion.h2>

          {/* Right Side */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs md:text-sm text-gray-400 font-semibold tracking-[0.2em] uppercase text-right"
          >
            THE TEAM WHO TEST RELIABILITY
          </motion.p>
        </div>

        {/* Image Link */}
        <Link
          href="/riders"
          className="group block relative w-full overflow-hidden"
        >
          <Image
            src="/Proven Under Pressure Racing Team.png"
            alt="Proven Under Pressure Racing Team"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Box Design Button at Bottom Right */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
            <span className="bg-black text-white font-bold text-xs md:text-sm px-6 py-3 md:px-8 md:py-4 rounded-sm shadow-2xl border border-white/20 transition-all duration-300 group-hover:bg-gray-900 inline-flex items-center gap-2">
              Meet the Riders
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
