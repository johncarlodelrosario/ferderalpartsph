"use client";

import { X } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 text-center">
        Filter by Category
      </h2>
      <div className="flex flex-wrap items-center gap-3 justify-center">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
            selectedCategory === null
              ? "bg-red-600 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              selectedCategory === category
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
        {selectedCategory && (
          <button
            onClick={() => onSelectCategory(null)}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Clear category filter"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
