"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Bike, Trophy, Star, Award, Quote } from "lucide-react";

// Rider data — replace image paths & details with real info
const riders = [
  {
    id: "rider-1",
    name: "Rider Name 1",
    role: "Lead Racing Rider",
    image: "/riders/rider-1.jpg",
    quote:
      "Federal Parts gives me the reliability and performance I need every time I ride.",
    description:
      "A veteran of the local circuit, this rider has represented Federal Parts across multiple racing events, consistently pushing the limits of speed and durability. Powered by PT. Astra Otoparts, the bike stays race-ready year-round.",
  },
  {
    id: "rider-2",
    name: "Rider Name 2",
    role: "Racing Rider",
    image: "/riders/rider-2.jpg",
    quote: "Trusted parts make every kilometer feel effortless.",
    description:
      "Depending on Federal Parts for reliability on every ride, this rider keeps going strong from the mountains of North Luzon to the coastal routes — quality parts keep the ride going.",
  },
  {
    id: "rider-3",
    name: "Rider Name 3",
    role: "Racing Rider",
    image: "/riders/rider-3.jpg",
    quote: "Quality you can feel from the first twist of the throttle.",
    description:
      "A strong advocate for safe riding and grassroots motorsports, this rider connects Federal Parts with the everyday Filipino rider — proving that premium quality doesn't have to come at a premium price.",
  },
  {
    id: "rider-4",
    name: "Rider Name 4",
    role: "Racing Rider",
    image: "/riders/rider-4.jpg",
    quote: "Every corner, every straight — Federal Parts holds up.",
    description:
      "This rider relies on Federal Parts for consistent braking and power delivery on tight corners and technical sections. A rising talent in the regional racing scene.",
  },
  {
    id: "rider-5",
    name: "Rider Name 5",
    role: "Racing Rider",
    image: "/riders/rider-5.jpg",
    quote: "Rough terrain, smooth performance — that's the difference.",
    description:
      "Taking Federal Parts off the beaten path, this rider tests durability on gravel, mud, and steep inclines. Built tough for the harshest conditions the Philippines has to offer.",
  },
  {
    id: "rider-6",
    name: "Rider Name 6",
    role: "Brand Ambassador Rider",
    image: "/riders/rider-6.jpg",
    quote: "Representing quality on and off the bike.",
    description:
      "Beyond the track, this rider embodies the Federal Parts spirit — engaging with the community, sharing riding tips, and proving that reliability and performance go hand in hand.",
  },
];

export default function RidersPage() {
  return (
    <div className="w-full bg-gray-950 text-white min-h-screen">
      {/* ── Top Landscape Banner ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden"
      >
        <Image
          src="/Proven Under Pressure Racing Team.png"
          alt="Federal Parts Racing Team"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/40 to-transparent" />

        {/* Back link */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-red-600 text-white text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            <Trophy className="w-4 h-4" />
            Federal Parts Racing Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
          >
            Proven Under Pressure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-300 mt-2 text-base md:text-lg max-w-2xl"
          >
            Meet the riders who represent Federal Parts Philippines on every
            road, every race, and every challenge.
          </motion.p>
        </div>
      </motion.div>

      {/* ── Riders Grid ── */}
      <div className="container-custom py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Our Riders
          </h2>
          <p className="text-gray-400 mt-2">
            Powered by PT. Astra Otoparts — trusted by Filipino riders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {riders.map((rider, index) => (
            <motion.article
              key={rider.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Rider picture */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-800">
                <Image
                  src={rider.image}
                  alt={rider.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    <Bike className="w-3.5 h-3.5" />
                    {rider.role}
                  </span>
                </div>
              </div>

              {/* Rider description */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                  {rider.name}
                </h3>

                <div className="relative pl-4 border-l-2 border-red-600 my-3">
                  <Quote className="absolute -left-2 -top-1 w-4 h-4 text-red-600 bg-gray-900" />
                  <p className="text-sm italic text-gray-400">{rider.quote}</p>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {rider.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Bottom CTA Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        ></motion.div>
      </div>
    </div>
  );
}
