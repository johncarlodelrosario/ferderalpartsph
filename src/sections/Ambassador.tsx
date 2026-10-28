"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function TrustBadgesSection() {
  return (
    <section className="w-full bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full"
      >
        {/* Purong itim na header */}
        <div className="w-full bg-black text-white px-6 md:px-12 py-9 md:py-16 flex flex-row justify-between items-center">
          {/* Left Side - Ambassadors */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold tracking-wide uppercase"
          >
            Ambassadors
          </motion.h2>

          {/* Right Side - Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs md:text-sm text-gray-400 font-semibold tracking-[0.2em] uppercase text-right"
          >
            THE FACES OF FEDERAL PARTS
          </motion.p>
        </div>

        <Link
          href="/ambassador"
          className="group block relative w-full overflow-hidden"
        >
          <Image
            src="/Federal Parts Racing Team Banner.png"
            alt="Federal Parts Racing Team - Meet our ambassadors"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Box Design sa Bottom Right na may margin */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
            <span className="bg-black text-white font-bold text-xs md:text-sm px-6 py-3 md:px-8 md:py-4 rounded-sm shadow-2xl border border-white/20 transition-all duration-300 group-hover:bg-gray-900 inline-flex items-center gap-2">
              Meet Our Ambassadors
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
