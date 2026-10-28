import { Suspense } from "react";
import ProductsContent from "./ProductsContent";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="container-custom py-12 bg-black min-h-screen">
          <div className="max-w-[80%] mx-auto w-full text-center text-gray-400">
            Loading products...
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
