"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#cc0000] shadow-md sticky top-0 z-50">
      {/* Main Header */}
      <div className="container-custom py-4 h-[72px] md:h-[80px] relative">
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center h-full">
            {/* Logo - Adjusted sizing for mobile and desktop */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 -mt-4 md:-mt-6 ml-2">
              <Image
                src="/federalfinallogo.jpg"
                alt="Federal Parts Philippines Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#cc0000] border-t border-white/20 py-4 shadow-lg absolute w-full">
          <div className="container-custom px-4">
            <Navigation mobile onClose={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
