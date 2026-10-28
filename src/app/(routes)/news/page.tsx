"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NewsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const launchImages = [
    { src: "/launching/IMG_4087.jpg", alt: "Federal Parts Launch Event 1" },
    { src: "/launching/IMG_4243.jpg", alt: "Federal Parts Launch Event 2" },
    { src: "/launching/IMG_4258.jpg", alt: "Federal Parts Launch Event 3" },
    { src: "/launching/IMG_4289.jpg", alt: "Federal Parts Launch Event 4" },
    { src: "/launching/IMG_4392.jpg", alt: "Federal Parts Launch Event 5" },
    { src: "/launching/IMG_4399.jpg", alt: "Federal Parts Launch Event 6" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % launchImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? launchImages.length - 1 : prev - 1,
    );
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Super Landscape Banner (reduced height) */}
      <section className="relative w-full">
        {/* Back Button Overlay */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white bg-black/40 hover:bg-black/60 px-4 py-2 rounded-lg backdrop-blur-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Banner Image - fixed short height, object-cover for super landscape feel */}
        <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]">
          <Image
            src="/Federal Parts Philippines News & Updates.png"
            alt="Federal Parts Philippines - News & Updates"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Official Launch Article */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800"
          >
            {/* Launch Header */}
            <div className="bg-gradient-to-r from-red-950 to-red-900 p-6 md:p-8 border-b border-red-900">
              <div className="flex flex-wrap items-center gap-4 text-sm text-red-300">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  January 30, 2026
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Centris Elements, Quezon City
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Official Launch
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Federal Parts Philippines Has Officially Arrived!
              </h2>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Event Description */}
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  On January 30 at Centris Elements, Quezon City, we proudly
                  celebrated the{" "}
                  <strong className="text-white">Official Brand Launch</strong>
                  —marking the beginning of a new era for Filipino riders.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-red-950 rounded-lg p-4 text-center border border-red-900">
                    <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                      Japanese-Leveled
                    </h4>
                    <p className="text-2xl font-bold text-white">Engineering</p>
                  </div>
                  <div className="bg-red-950 rounded-lg p-4 text-center border border-red-900">
                    <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                      Indonesian
                    </h4>
                    <p className="text-2xl font-bold text-white">DNA</p>
                  </div>
                  <div className="bg-red-950 rounded-lg p-4 text-center border border-red-900">
                    <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                      China-Level
                    </h4>
                    <p className="text-2xl font-bold text-white">
                      Affordability
                    </p>
                  </div>
                </div>

                <p className="text-gray-400">
                  The event brought together our dealers, media partners, and
                  brand ambassadors, all united to welcome a brand built on
                  Japanese-leveled engineering, Indonesian DNA, and China-level
                  affordability.
                </p>
              </div>

              {/* Photo Gallery */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Event Gallery
                </h3>

                {/* Main Image Display */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src={launchImages[currentImageIndex].src}
                    alt={launchImages[currentImageIndex].alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {launchImages.length}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-3">
                  {launchImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                        currentImageIndex === index
                          ? "ring-2 ring-red-600 ring-offset-2 ring-offset-gray-900"
                          : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Facebook Posts */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Social Media Highlights
                </h3>
                <p className="text-gray-400 mb-6">
                  Check out our Facebook posts from the launch event
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ height: "250px" }}
                    >
                      <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FFederalPartsPhilippines%2Fposts%2Fpfbid0FqHE9HQGKh2oyDwPHgviT8SmEyCycfkZcoBEGsR9UhjLS8WmfFPXEK4HvtZnPieGl&show_text=true&width=500"
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Post 1"
                      ></iframe>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ height: "250px" }}
                    >
                      <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FFederalPartsPhilippines%2Fposts%2Fpfbid02SXNgEotSAxCRShj97XdS5nmu9KkDC2Ddk55SZRDM5T2kcLuLcis4yxYs49yrjFwCl&show_text=true&width=500"
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Post 2"
                      ></iframe>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ height: "250px" }}
                    >
                      <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FFederalPartsPhilippines%2Fposts%2Fpfbid0WzRRim21hLXZbJ9x9Kpxfwjz31pHT7fUG1Q86o67cLYZMUKuMSCWQeCjmxXFhMAxl&show_text=true&width=500"
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Post 3"
                      ></iframe>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ height: "250px" }}
                    >
                      <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2FFederalPartsPhilippines%2Fposts%2Fpfbid0jW86TVEQiKjRbPam3m8E1oCD4NoncHeGx2Z19RjPoSTjpAHS6bweLwzcioUzqwSel&show_text=true&width=500"
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Post 4"
                      ></iframe>
                    </div>
                  </div>

                  {/* NEW EMBEDS START HERE */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ height: "250px" }}
                    >
                      <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFederalPartsPhilippines%2Fposts%2Fpfbid04wM2YxLhcwVJFNCB8SJaWbkcYuiPhC5ssD9CXWWDF9yuusgFp5UE7kQqxg915SJol&show_text=true&width=500"
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Post 5"
                      ></iframe>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ height: "250px" }}
                    >
                      <iframe
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1614790406301721%2F&show_text=false&width=560&t=0"
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Reel 1"
                      ></iframe>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ height: "250px" }}
                    >
                      <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFederalPartsPhilippines%2Fposts%2Fpfbid02Dt6MQQS1wctYT89BfwaicZNXJpMqXRuW1wFnLXFGmzWkTnb5CSFC6487VMsahgPel&show_text=true&width=500"
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Post 6"
                      ></iframe>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
                    <div
                      className="relative w-full"
                      style={{ height: "250px" }}
                    >
                      <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FFederalPartsPhilippines%2Fposts%2Fpfbid02JbzU3TfgTMXryn6BUSqpkrohVLLu4baQP72g5reRYhXUMykFB9WfUv1mNKH9Tebcl&show_text=true&width=500"
                        width="100%"
                        height="100%"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Post 7"
                      ></iframe>
                    </div>
                  </div>
                  {/* NEW EMBEDS END HERE */}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* More News Section */}
      <section className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-400 mb-6">
              Follow us on social media for more updates and announcements
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/FederalPartsPhilippines"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
