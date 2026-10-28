"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Visit Us</h2>
          <p className="section-subtitle">
            Find us at our location in Balagtas, Bulacan
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Location Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Federal Parts Philippines
                  </h3>
                  <p className="text-gray-600">
                    Fochun Industrial Compound, Santol, Balagtas, Bulacan, North
                    Luzon
                  </p>
                  <p className="text-gray-600">Balagtas, Philippines, 3016</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-2">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Open Now
                  </span>
                  <span>|</span>
                  <span>Mon-Sat: 8:00 AM - 5:00 PM</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/dir//Fochun+Industrial+Compound,+Santol,+Balagtas,+Bulacan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] lg:h-auto min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.124567890123!2d120.88765432101234!3d14.823456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33964a1234567890%3A0x1234567890abcdef!2sFochun%20Industrial%20Compound!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Federal Parts Philippines Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
