"use client";

import { Brand } from "@/lib/types";
import { X } from "lucide-react";

interface BrandFilterProps {
  brands: Brand[];
  selectedBrand: string | null;
  onSelectBrand: (brand: string | null) => void;
}

export default function BrandFilter({
  brands,
  selectedBrand,
  onSelectBrand,
}: BrandFilterProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <button
          onClick={() => onSelectBrand(null)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
            selectedBrand === null
              ? "bg-red-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          All Brands
        </button>
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => onSelectBrand(brand.name)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              selectedBrand === brand.name
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {brand.name}
          </button>
        ))}
        {selectedBrand && (
          <button
            onClick={() => onSelectBrand(null)}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Clear filter"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
