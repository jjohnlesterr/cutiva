'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { products, categories } from '@/lib/products';

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="products"
      className="border-b border-pink-100 bg-gradient-to-b from-[#fff8fc] to-[#fffdfd] py-14 md:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-100/70 px-4 py-1 text-sm font-medium text-pink-700 shadow-sm">
              Curated Collection
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
                Explore Our Collection
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                Premium subscriptions across editing, AI, education, and
                video streaming categories.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-[0_10px_25px_rgba(236,72,153,0.25)]'
                    : 'border border-pink-100 bg-white text-neutral-700 shadow-sm hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}