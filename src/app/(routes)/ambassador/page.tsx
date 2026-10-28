"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

// Ambassador team — shown as cards at the bottom
const teamAmbassadors = [
  {
    id: "team-1",
    name: "Ambassador Name 1",
    role: "Regional Ambassador",
    image: "/ambassador-team-1.jpg",
    quote: "Trusted on every kilometer.",
  },
  {
    id: "team-2",
    name: "Ambassador Name 2",
    role: "Events Ambassador",
    image: "/ambassador-team-2.jpg",
    quote: "Quality you can feel.",
  },
  {
    id: "team-3",
    name: "Ambassador Name 3",
    role: "Youth Ambassador",
    image: "/ambassador-team-3.jpg",
    quote: "Ride safe, ride strong.",
  },
  {
    id: "team-4",
    name: "Ambassador Name 4",
    role: "Community Ambassador",
    image: "/ambassador-team-4.jpg",
    quote: "Bringing riders together, one ride at a time.",
  },
  {
    id: "team-5",
    name: "Ambassador Name 5",
    role: "Racing Ambassador",
    image: "/ambassador-team-5.jpg",
    quote: "Performance you can count on at every turn.",
  },
  {
    id: "team-6",
    name: "Ambassador Name 6",
    role: "Brand Ambassador",
    image: "/ambassador-team-6.jpg",
    quote: "Federal Parts — quality that speaks for itself.",
  },
];

export default function AmbassadorPage() {
  return (
    <div className="w-full bg-gray-950 text-white min-h-screen">
      {/* Top Landscape Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden"
      >
        <Image
          src="/Federal Parts Racing Team Banner.png"
          alt="Federal Parts Racing Team"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
          >
            Our Ambassadors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-300 mt-2 text-base md:text-lg"
          >
            Proudly representing Federal Parts Philippines on the road
          </motion.p>
        </div>
      </motion.div>

      {/* ── Ambassador Cards ── */}
      <div className="py-12 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Meet Our Ambassadors
            </h2>
            <p className="text-gray-400 mt-2">
              Federal Parts representatives across the country
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamAmbassadors.map((member, index) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Star className="w-3.5 h-3.5" />
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                    {member.name}
                  </h3>
                  <div className="relative pl-4 border-l-2 border-red-600 mt-3">
                    <Quote className="absolute -left-2 -top-1 w-4 h-4 text-red-600 bg-gray-900" />
                    <p className="text-sm italic text-gray-400">
                      {member.quote}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
