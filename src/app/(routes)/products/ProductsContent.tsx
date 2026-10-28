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
  const [selectedMotorcycle, setSelectedMotorcycle] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (brandParam) {
      const brand = brands.find((b) => b.name.toLowerCase() === brandParam.toLowerCase());
      if (brand) setSelectedBrand(brand.name);
    }
  }, [brandParam]);

  useEffect(() => {
    if (motorcycleParam) {
      const moto = motorcycles.find((m) => m.name.toLowerCase() === motorcycleParam.toLowerCase());
      if (moto) setSelectedMotorcycle(moto.name);
    }
  }, [motorcycleParam]);

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    if (searchParam) setSearchQuery(searchParam);
  }, [searchParam]);

  const availableMotorcycles = useMemo(() => {
    if (selectedBrand) return motorcycles.filter((m) => m.brand === selectedBrand);
    return motorcycles;
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedBrand && selectedMotorcycle) {
      const stillValid = availableMotorcycles.some((m) => m.name === selectedMotorcycle);
      if (!stillValid) setSelectedMotorcycle(null);
    }
  }, [selectedBrand, selectedMotorcycle, availableMotorcycles]);

  const productsBeforeCategory = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((p) => {
      const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
      const matchesMotorcycle = selectedMotorcycle ? p.motorcycle.includes(selectedMotorcycle) : true;
      let matchesSearch = true;
      if (query) {
        const haystack = [p.name, p.partNumber, p.oemNumber, p.model, p.brand, p.category, p.subCategory || "", ...p.motorcycle].join(" ").toLowerCase();
        matchesSearch = haystack.includes(query);
      }
      return matchesBrand && matchesMotorcycle && matchesSearch;
    });
  }, [selectedBrand, selectedMotorcycle, searchQuery]);

  const availableCategories = useMemo(() => {
    const unique = Array.from(new Set(productsBeforeCategory.map((p) => p.category)));
    return unique.sort();
  }, [productsBeforeCategory]);

  useEffect(() => {
    if (selectedCategory) {
      const stillValid = availableCategories.includes(selectedCategory);
      if (!stillValid) setSelectedCategory(null);
    }
  }, [selectedCategory, availableCategories]);

  const filteredProducts = useMemo(() => {
    return productsBeforeCategory.filter((p) => {
      const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
      return matchesCategory;
    });
  }, [productsBeforeCategory, selectedCategory]);

  return (
    <div className="container-custom py-12 bg-black min-h-screen">
      <div className="max-w-[80%] mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="section-title text-white">Our Products</h1>
          <p className="section-subtitle text-gray-400">Browse our extensive collection of high-quality automotive parts</p>
        </motion.div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <BrandFilter
          brands={brands}
          selectedBrand={selectedBrand}
          onSelectBrand={(brand) => {
            setSelectedBrand(brand);
            setSelectedMotorcycle(null);
            setSelectedCategory(null);
          }}
        />

        <MotorcycleFilter
          motorcycles={availableMotorcycles}
          selectedMotorcycle={selectedMotorcycle}
          onSelectMotorcycle={(moto) => {
            setSelectedMotorcycle(moto);
            setSelectedCategory(null);
          }}
        />

        {selectedMotorcycle && availableCategories.length > 0 && (
          <CategoryFilter
            categories={availableCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {(selectedBrand || selectedMotorcycle || selectedCategory || searchQuery.trim()) && (
          <div className="text-center text-sm text-gray-400 mb-6">
            Showing <span className="font-semibold text-gray-200">{filteredProducts.length}</span>{" "}
            product{filteredProducts.length !== 1 ? "s" : ""}
            {searchQuery.trim() && (<> matching <span className="text-red-500">&ldquo;{searchQuery.trim()}&rdquo;</span></>)}
            {selectedBrand && (<> for <span className="text-red-500">{selectedBrand}</span></>)}
            {selectedMotorcycle && (<> — <span className="text-red-500">{selectedMotorcycle}</span></>)}
            {selectedCategory && (<> · <span className="text-red-500">{selectedCategory}</span></>)}
          </div>
        )}

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
