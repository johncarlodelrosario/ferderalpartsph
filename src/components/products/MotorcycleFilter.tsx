"use client";

import { Motorcycle } from "@/lib/types";
import { ChevronDown } from "lucide-react";

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
    <div className="mb-8 flex flex-col items-center justify-center">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 text-center">
        Filter by Motorcycle
      </h2>

      <div className="relative w-full max-w-xs">
        <select
          value={selectedMotorcycle || ""}
          onChange={(e) => onSelectMotorcycle(e.target.value || null)}
          className="w-full appearance-none bg-gray-800 text-white font-semibold py-3 px-5 pr-10 rounded-lg border border-gray-700 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 cursor-pointer"
        >
          <option value="">All Motorcycles</option>
          {motorcycles.map((moto) => (
            <option key={moto.id} value={moto.name}>
              {moto.name}
            </option>
          ))}
        </select>

        {/* Custom Dropdown Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
