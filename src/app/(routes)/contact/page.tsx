"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Facebook,
  Send,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // Main page background is now permanently dark
    <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 bg-[#0a0a0a] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title text-gray-100">Contact Us</h1>
        <p className="section-subtitle text-gray-400">
          Have questions? We'd love to hear from you. Get in touch with us
          today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-[#121212] rounded-lg shadow-xl shadow-black/50 p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-200">Location</h3>
                    <p className="text-gray-400">
                      Fochun Industrial Compound, Santol, Balagtas, Bulacan,
                      North Luzon, Balagtas, Philippines, 3016
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-200">Phone</h3>
                    <p className="text-gray-400">09543827627 / 09171440541</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Facebook className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-200">
                      Social Media
                    </h3>
                    <a
                      href="https://web.facebook.com/FederalPartsPhilippines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:underline"
                    >
                      Federal Parts Philippines
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1515] rounded-lg border border-gray-800 p-6">
              <h3 className="font-semibold text-red-400 mb-2">
                Business Hours
              </h3>
              <p className="text-gray-400">
                Monday - Saturday: 8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-400">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#121212] rounded-lg shadow-xl shadow-black/50 p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">
              Send Us a Message
            </h2>

            {/* Success or Error Alert Messages */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-800 text-green-400 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  Thank you! Your message has been sent successfully. We will
                  get back to you soon.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-800 text-red-400 rounded-lg flex items-start gap-3">
                <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  Oops! Something went wrong. Please try again later or contact
                  us directly via phone.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-[#1a1a1a] text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-[#1a1a1a] text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-[#1a1a1a] text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors disabled:opacity-50"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-2 bg-[#1a1a1a] text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-colors disabled:opacity-50 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center shadow-lg shadow-red-900/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
