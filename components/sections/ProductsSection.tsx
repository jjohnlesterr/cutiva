'use client';

import { useEffect, useMemo, useState } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { products, categories } from '@/lib/products';

const PRODUCTS_PER_PAGE = 6;

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;

  useEffect(() => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [selectedCategory]);

  return (
    <section
      id="products"
      className="border-b border-pink-100 bg-gradient-to-b from-[#fff8fc] to-[#fffdfd] py-14 md:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="space-y-12">
          
          {/* HEADER */}
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
              Explore Our Collection
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600 md:text-lg">
              Premium subscriptions across editing, AI, education, and video streaming categories.
            </p>
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow'
                    : 'border border-pink-100 bg-white text-neutral-700 hover:text-pink-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* LOAD MORE / LESS */}
          {(hasMoreProducts || visibleCount > PRODUCTS_PER_PAGE) && (
            <div className="flex justify-center gap-3">
              
              {visibleCount > PRODUCTS_PER_PAGE && (
                <button
                  onClick={() => setVisibleCount(PRODUCTS_PER_PAGE)}
                  className="rounded-full border border-pink-200 px-6 py-3 text-sm font-semibold text-pink-600 hover:bg-pink-50"
                >
                  Show Less
                </button>
              )}

              {hasMoreProducts && (
                <button
                  onClick={() =>
                    setVisibleCount((prev) =>
                      Math.min(prev + PRODUCTS_PER_PAGE, filteredProducts.length)
                    )
                  }
                  className="rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-8 py-3 text-sm font-semibold text-white shadow hover:scale-[1.02]"
                >
                  Load More
                </button>
              )}

            </div>
          )}
        </div>
      </div>
    </section>
  );
}