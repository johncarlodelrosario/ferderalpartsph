"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { brands, motorcycles, products } from "@/lib/data/products";
import BrandFilter from "@/components/products/BrandFilter";
import MotorcycleFilter from "@/components/products/MotorcycleFilter";
import CategoryFilter from "@/components/products/CategoryFilter";
import SearchBar from "@/components/products/SearchBar";
import ProductGrid from "@/components/products/ProductGrid";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const brandParam = searchParams.get("brand");
  const motorcycleParam = searchParams.get("motorcycle");
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("q");

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedMotorcycle, setSelectedMotorcycle] = useState<string | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // --- 1. URL Params Initialization ---
  useEffect(() => {
    if (brandParam) {
      const brand = brands.find(
        (b) => b.name.toLowerCase() === brandParam.toLowerCase(),
      );
      if (brand) setSelectedBrand(brand.name);
    }
  }, [brandParam]);

  useEffect(() => {
    if (motorcycleParam) {
      const moto = motorcycles.find(
        (m) => m.name.toLowerCase() === motorcycleParam.toLowerCase(),
      );
      if (moto) setSelectedMotorcycle(moto.name);
    }
  }, [motorcycleParam]);

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    if (searchParam) setSearchQuery(searchParam);
  }, [searchParam]);

  // --- 2. Base Products (Brand + Search) ---
  const baseFilteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((p) => {
      const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
      let matchesSearch = true;
      if (query) {
        const haystack = [
          p.name,
          p.partNumber,
          p.oemNumber,
          p.model,
          p.brand,
          p.category,
          p.subCategory || "",
          ...p.motorcycle,
        ]
          .join(" ")
          .toLowerCase();
        matchesSearch = haystack.includes(query);
      }
      return matchesBrand && matchesSearch;
    });
  }, [selectedBrand, searchQuery]);

  // --- 3. Available Categories (Base sa Brand at Motorcycle) ---
  const availableCategories = useMemo(() => {
    const filtered = baseFilteredProducts.filter((p) => {
      const matchesMotorcycle = selectedMotorcycle
        ? p.motorcycle.includes(selectedMotorcycle)
        : true;
      return matchesMotorcycle;
    });
    return Array.from(new Set(filtered.map((p) => p.category))).sort();
  }, [baseFilteredProducts, selectedMotorcycle]);

  // I-clear ang category kung wala na sa listahan
  useEffect(() => {
    if (selectedCategory && !availableCategories.includes(selectedCategory)) {
      setSelectedCategory(null);
    }
  }, [selectedCategory, availableCategories]);

  // --- 4. Available Motorcycles (Base sa Brand at Category) ---
  // ITO ANG PINAKA-IMPORTANTENG PARTE PARA SA REQUIREMENT MO
  const availableMotorcycles = useMemo(() => {
    let motos = motorcycles;

    // Filter by Brand
    if (selectedBrand) {
      motos = motos.filter((m) => m.brand === selectedBrand);
    }

    // Filter by Category (Kung may napiling category)
    if (selectedCategory) {
      // Kunin lahat ng motor na may product sa napiling category
      const motosWithCategory = new Set(
        products
          .filter((p) => p.category === selectedCategory)
          .flatMap((p) => p.motorcycle), // p.motorcycle is an array of strings
      );
      motos = motos.filter((m) => motosWithCategory.has(m.name));
    }

    // Filter by Search (Kung may search query)
    if (searchQuery.trim()) {
      const motosWithSearch = new Set(
        baseFilteredProducts.flatMap((p) => p.motorcycle),
      );
      motos = motos.filter((m) => motosWithSearch.has(m.name));
    }

    return motos;
  }, [selectedBrand, selectedCategory, searchQuery, baseFilteredProducts]);

  // I-clear ang motor kung biglang nawala ito sa listahan (hal. nagpalit ng category)
  useEffect(() => {
    if (
      selectedMotorcycle &&
      !availableMotorcycles.some((m) => m.name === selectedMotorcycle)
    ) {
      setSelectedMotorcycle(null);
    }
  }, [selectedMotorcycle, availableMotorcycles]);

  // --- 5. Final Filtered Products (Para sa Display) ---
  const filteredProducts = useMemo(() => {
    return baseFilteredProducts.filter((p) => {
      const matchesMotorcycle = selectedMotorcycle
        ? p.motorcycle.includes(selectedMotorcycle)
        : true;
      const matchesCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      return matchesMotorcycle && matchesCategory;
    });
  }, [baseFilteredProducts, selectedMotorcycle, selectedCategory]);

  // Custom handler para sa Brand
  const handleSelectBrand = (brandName: string | null) => {
    setSelectedBrand(brandName);
  };

  return (
    <div className="container-custom py-12 bg-black min-h-screen">
      <div className="max-w-[80%] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title text-white">Our Products</h1>
          <p className="section-subtitle text-gray-400">
            Browse our extensive collection of high-quality automotive parts
          </p>
        </motion.div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <BrandFilter
          brands={brands}
          selectedBrand={selectedBrand}
          onSelectBrand={handleSelectBrand}
        />

        {/* Dito natin ipinapasa ang naka-filter na motor base sa category */}
        <MotorcycleFilter
          motorcycles={availableMotorcycles}
          selectedMotorcycle={selectedMotorcycle}
          onSelectMotorcycle={setSelectedMotorcycle}
        />

        {availableCategories.length > 0 && (
          <CategoryFilter
            categories={availableCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {(selectedBrand ||
          selectedMotorcycle ||
          selectedCategory ||
          searchQuery.trim()) && (
          <div className="text-center text-sm text-gray-400 mb-6">
            Showing{" "}
            <span className="font-semibold text-gray-200">
              {filteredProducts.length}
            </span>{" "}
            product{filteredProducts.length !== 1 ? "s" : ""}
            {searchQuery.trim() && (
              <>
                {" "}
                matching{" "}
                <span className="text-red-500">
                  &ldquo;{searchQuery.trim()}&rdquo;
                </span>
              </>
            )}
            {selectedBrand && (
              <>
                {" "}
                for <span className="text-red-500">{selectedBrand}</span>
              </>
            )}
            {selectedMotorcycle && (
              <>
                {" "}
                — <span className="text-red-500">{selectedMotorcycle}</span>
              </>
            )}
            {selectedCategory && (
              <>
                {" "}
                · <span className="text-red-500">{selectedCategory}</span>
              </>
            )}
          </div>
        )}

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
