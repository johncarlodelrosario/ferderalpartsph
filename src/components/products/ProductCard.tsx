"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const brandColors = {
    Honda: "bg-red-900 text-red-300",
    Yamaha: "bg-blue-900 text-blue-300",
    Suzuki: "bg-green-900 text-green-300",
  };

  const formatPrice = (price: number) => {
    return `₱${price.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-800 flex flex-col h-full"
    >
      {/* Product Image — shorter */}
      <div className="relative h-36 bg-gray-800 overflow-hidden shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2 gap-2">
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
              brandColors[product.brand as keyof typeof brandColors] ||
              "bg-gray-800 text-gray-300"
            }`}
          >
            {product.brand}
          </span>
          <span className="text-[11px] text-gray-500 truncate">
            {product.partNumber}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <p className="text-xs text-gray-400 mb-2 line-clamp-2">
          {product.description}
        </p>

        {/* Motorcycle compatibility tags — show only first 3 + count */}
        {product.motorcycle && product.motorcycle.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {product.motorcycle.slice(0, 3).map((moto) => (
              <span
                key={moto}
                className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full"
              >
                {moto}
              </span>
            ))}
            {product.motorcycle.length > 3 && (
              <span className="text-[10px] bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">
                +{product.motorcycle.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="mb-2">
          <span className="text-[11px] text-gray-500">Model: </span>
          <span className="text-xs text-gray-300 font-medium line-clamp-1">
            {product.model}
          </span>
        </div>

        {/* Price + View Details — pushed to bottom */}
        <div className="mt-auto">
          <div className="mb-2">
            <span className="text-lg font-bold text-red-500">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="pt-2 border-t border-gray-800">
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center text-red-500 hover:text-red-400 text-sm font-semibold group-hover:underline"
            >
              View Details
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
