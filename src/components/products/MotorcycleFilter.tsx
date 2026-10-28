"use client";

import { Motorcycle } from "@/lib/types";
import { X } from "lucide-react";

interface MotorcycleFilterProps {
  motorcycles: Motorcycle[];
  selectedMotorcycle: string | null;
  onSelectMotorcycle: (motorcycle: string | null) => void;
}

export default function MotorcycleFilter({
  motorcycles,
  selectedMotorcycle,
  onSelectMotorcycle,
}: MotorcycleFilterProps) {
  if (motorcycles.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 text-center">
        Filter by Motorcycle
      </h2>
      <div className="flex flex-wrap items-center gap-3 justify-center">
        <button
          onClick={() => onSelectMotorcycle(null)}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            selectedMotorcycle === null
              ? "bg-red-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          All Motorcycles
        </button>
        {motorcycles.map((moto) => (
          <button
            key={moto.id}
            onClick={() => onSelectMotorcycle(moto.name)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              selectedMotorcycle === moto.name
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {moto.name}
          </button>
        ))}
        {selectedMotorcycle && (
          <button
            onClick={() => onSelectMotorcycle(null)}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Clear motorcycle filter"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
