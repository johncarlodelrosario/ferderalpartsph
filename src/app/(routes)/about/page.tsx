"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Racing Team Banner */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-10">
          <Image
            src="/Federal Parts Racing Team Banner.png"
            alt="Federal Parts Racing Team"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/ambassador"
            className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Meet Our Ambassadors
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
