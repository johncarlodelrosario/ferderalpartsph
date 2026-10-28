import Link from "next/link";
import Image from "next/image";
import { Facebook, MapPin, Phone, Search } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#cc0000] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              {/* Logo Image - Much Larger */}
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src="/federalfinallogo.jpg"
                  alt="Federal Parts Philippines Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <h3 className="text-2xl font-bold text-white mb-3">
              Federal Parts Philippines
            </h3>
            <p className="text-red-100">
              Your trusted source for high-quality, affordable automotive parts.
              Powered by PT. Astra Otoparts, one of Asia's leading auto
              component manufacturers.
            </p>
            <div className="mt-4">
              {/* Pinalitan ng itim para lumitaw sa pulang background */}
              <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                #MostReliable
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <div className="space-y-3 text-red-100">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span>
                  Fochun Industrial Compound, Santol, Balagtas, Bulacan, North
                  Luzon, Balagtas, Philippines, 3016
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span>09543827627 / 09171440541</span>
              </div>
            </div>

            {/* Find a Dealer - Added */}
            <div className="mt-6">
              <Link
                href="/dealer"
                className="inline-flex items-center gap-2 bg-white text-[#cc0000] hover:bg-gray-200 px-5 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
                Find a Dealer
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/FederalPartsPhilippines"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#cc0000] hover:bg-gray-200 p-3 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-red-100">
                <span className="font-semibold text-white">Location:</span>
                <br />
                Fochun Industrial Compound
                <br />
                Santol, Balagtas, Bulacan
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-700 mt-8 pt-8 text-center text-red-100 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Federal Parts Philippines. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
