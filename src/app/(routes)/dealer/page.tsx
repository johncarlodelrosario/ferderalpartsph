"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, MapPin, Phone, Search, Navigation2 } from "lucide-react";

interface Dealer {
  name: string;
  address: string;
  city: string;
  province: string;
  phone: string;
  facebook?: string;
}

const dealers: Dealer[] = [
  // ==== Bulacan ====
  {
    name: "Federal Parts Philippines (Main Office)",
    address: "Fochun Industrial Compound, Santol, Balagtas, Bulacan, 3016",
    city: "Balagtas",
    province: "Bulacan",
    phone: "09543827627 / 09171440541",
    facebook: "https://web.facebook.com/FederalPartsPhilippines",
  },
  // ==== Metro Manila ====
  {
    name: "Auto Supply Central - Quezon City",
    address: "123 EDSA, Cubao, Quezon City, Metro Manila",
    city: "Quezon City",
    province: "Metro Manila",
    phone: "0917-000-0001",
  },
  {
    name: "Manila Auto Parts Trading",
    address: "456 Rizal Avenue, Santa Cruz, Manila, Metro Manila",
    city: "Manila",
    province: "Metro Manila",
    phone: "0917-000-0002",
  },
  {
    name: "Pasig Motor Supply",
    address: "789 Ortigas Avenue, Pasig City, Metro Manila",
    city: "Pasig",
    province: "Metro Manila",
    phone: "0917-000-0003",
  },
  // ==== Cavite ====
  {
    name: "Cavite Auto Depot",
    address: "Km 32 Aguinaldo Highway, Dasmariñas, Cavite",
    city: "Dasmariñas",
    province: "Cavite",
    phone: "0917-000-0004",
  },
  {
    name: "Bacoor Parts Center",
    address: "12 Molino Boulevard, Bacoor, Cavite",
    city: "Bacoor",
    province: "Cavite",
    phone: "0917-000-0005",
  },
  // ==== Laguna ====
  {
    name: "Laguna Motor Parts",
    address: "34 National Highway, Calamba, Laguna",
    city: "Calamba",
    province: "Laguna",
    phone: "0917-000-0006",
  },
  {
    name: "Sta. Rosa Auto Supply",
    address: "56 Balibago Road, Santa Rosa, Laguna",
    city: "Santa Rosa",
    province: "Laguna",
    phone: "0917-000-0007",
  },
  // ==== Pampanga ====
  {
    name: "Pampanga Auto Center",
    address: "78 MacArthur Highway, San Fernando, Pampanga",
    city: "San Fernando",
    province: "Pampanga",
    phone: "0917-000-0008",
  },
  // ==== Pangasinan ====
  {
    name: "Pangasinan Parts Trading",
    address: "90 Perez Boulevard, Dagupan, Pangasinan",
    city: "Dagupan",
    province: "Pangasinan",
    phone: "0917-000-0009",
  },
  // ==== Cebu ====
  {
    name: "Cebu Auto Supply",
    address: "101 Osmeña Boulevard, Cebu City, Cebu",
    city: "Cebu City",
    province: "Cebu",
    phone: "0917-000-0010",
  },
  {
    name: "Mandaue Motor Parts",
    address: "112 A.C. Cortes Avenue, Mandaue City, Cebu",
    city: "Mandaue",
    province: "Cebu",
    phone: "0917-000-0011",
  },
  // ==== Davao ====
  {
    name: "Davao Auto Depot",
    address: "134 J.P. Laurel Avenue, Davao City, Davao del Sur",
    city: "Davao City",
    province: "Davao del Sur",
    phone: "0917-000-0012",
  },
  // ==== Cagayan de Oro ====
  {
    name: "CDO Motor Supply",
    address: "156 Velez Street, Cagayan de Oro, Misamis Oriental",
    city: "Cagayan de Oro",
    province: "Misamis Oriental",
    phone: "0917-000-0013",
  },
];

export default function DealerPage() {
  const [search, setSearch] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("All");

  const provinces = useMemo(() => {
    const unique = Array.from(new Set(dealers.map((d) => d.province))).sort();
    return ["All", ...unique];
  }, []);

  const filteredDealers = useMemo(() => {
    const q = search.toLowerCase().trim();
    return dealers.filter((dealer) => {
      const matchesProvince =
        selectedProvince === "All" || dealer.province === selectedProvince;
      const matchesSearch =
        q === "" ||
        dealer.name.toLowerCase().includes(q) ||
        dealer.address.toLowerCase().includes(q) ||
        dealer.city.toLowerCase().includes(q) ||
        dealer.province.toLowerCase().includes(q);
      return matchesProvince && matchesSearch;
    });
  }, [search, selectedProvince]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 transition-colors duration-300">
      {/* Hero with Top Banner Image */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Motorcycle Parts and Location Network.png"
          alt="Motorcycle Parts and Location Network"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Find a Dealer
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg drop-shadow-md">
            Locate authorized Federal Parts Philippines dealers near you. Search
            by name, city, or province to find genuine, high-quality automotive
            parts.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="container-custom -mt-8 mb-12 relative z-20">
        <div className="bg-[#121212] border border-gray-800 rounded-xl shadow-xl shadow-black/50 p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by dealer name, city, or province..."
              className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cc0000] focus:border-transparent transition-colors"
            />
          </div>
          <select
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#cc0000] focus:border-transparent transition-colors"
          >
            {provinces.map((province) => (
              <option key={province} value={province} className="bg-[#1a1a1a]">
                {province === "All" ? "All Provinces" : province}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Dealer List */}
      <section className="container-custom pb-20">
        <p className="text-gray-400 mb-6">
          Showing{" "}
          <span className="font-semibold text-gray-100">
            {filteredDealers.length}
          </span>{" "}
          {filteredDealers.length === 1 ? "dealer" : "dealers"}
        </p>

        {filteredDealers.length === 0 ? (
          <div className="bg-[#121212] border border-gray-800 rounded-xl shadow-lg p-12 text-center">
            <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              No dealers found
            </h3>
            <p className="text-gray-400">
              Try a different search term or select another province.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.map((dealer, index) => (
              <div
                key={`${dealer.name}-${index}`}
                className="bg-[#121212] border border-gray-800 rounded-xl shadow-md hover:shadow-xl hover:shadow-black/60 transition-all duration-200 overflow-hidden flex flex-col"
              >
                <div className="bg-[#cc0000] px-5 py-3">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {dealer.name}
                  </h3>
                </div>
                <div className="p-5 flex-1 flex flex-col space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#cc0000] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm">{dealer.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#cc0000] flex-shrink-0" />
                    <a
                      href={`tel:${dealer.phone.replace(/\s|\//g, "")}`}
                      className="text-gray-300 text-sm hover:text-[#cc0000] transition-colors"
                    >
                      {dealer.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="inline-block bg-[#1a1a1a] border border-gray-700 px-2 py-1 rounded">
                      {dealer.city}
                    </span>
                    <span className="inline-block bg-[#1a1a1a] border border-gray-700 px-2 py-1 rounded">
                      {dealer.province}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        dealer.address,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#cc0000] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      <Navigation2 className="w-4 h-4" />
                      Directions
                    </a>
                    {dealer.facebook && (
                      <a
                        href={dealer.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Become a Dealer CTA */}
        <div className="mt-16 bg-[#cc0000] rounded-xl p-8 md:p-12 text-center text-white shadow-lg shadow-red-900/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Interested in Becoming a Dealer?
          </h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Join our growing network of trusted Federal Parts Philippines
            dealers and bring quality automotive parts to your community.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#cc0000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
