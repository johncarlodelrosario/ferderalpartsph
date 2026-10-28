"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MapPin, MessageCircle } from "lucide-react";
import { products } from "@/lib/data/products";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="container-custom py-12 text-center bg-black min-h-screen">
        <h2 className="text-2xl font-bold text-white mb-4">
          Product Not Found
        </h2>
        <Link href="/products" className="text-red-500 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `₱${price.toLocaleString("en-PH", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // Direct link to your Facebook Page
  const messengerUrl = "https://www.facebook.com/FederalPartsPhilippines";

  return (
    <div className="container-custom py-12 bg-black min-h-screen">
      <div className="max-w-[70%] mx-auto w-full">
        <Link
          href="/products"
          className="inline-flex items-center text-red-500 hover:text-red-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Product Image/Info */}
            <div>
              <div className="relative bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-5 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  priority
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-900 text-red-300 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.brand}
                </span>
                <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
                {product.subCategory && (
                  <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {product.subCategory}
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-bold text-white mb-2">
                {product.name}
              </h1>
              <p className="text-gray-400 mb-4 text-sm">
                {product.description}
              </p>

              <div className="mb-5 p-4 bg-red-950 rounded-lg border border-red-900">
                <span className="text-sm text-gray-400 block mb-1">Price</span>
                <span className="text-2xl font-bold text-red-500">
                  {formatPrice(product.price)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-sm text-gray-500">Part Number</span>
                  <p className="font-semibold text-white">
                    {product.partNumber}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">OEM Number</span>
                  <p className="font-semibold text-white">
                    {product.oemNumber}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Model</span>
                  <p className="font-semibold text-white">{product.model}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">QTY/Box</span>
                  <p className="font-semibold text-white">
                    {product.quantityPerBox}
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Section - Direct Messenger */}
            <div className="bg-gray-800 rounded-lg p-5 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-white mb-3">
                Inquire About This Product
              </h2>
              <p className="text-gray-400 mb-5 text-sm">
                For inquiries about this product, please contact us directly
                through Facebook Messenger.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-gray-300 text-sm">
                    09543827627 / 09171440541
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Fochun Industrial Compound, Santol, Balagtas, Bulacan
                  </span>
                </div>
              </div>

              <a
                href={messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Message Us on Facebook
              </a>

              <p className="text-xs text-gray-500 mt-4 text-center">
                This will open our Facebook Page.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
