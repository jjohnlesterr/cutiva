'use client';

import { useEffect, useMemo, useState } from 'react';
import { ProductCard } from '@/components/cards/ProductCard';
import { Section } from '@/components/layout/Section';
import { GradientButton } from '@/components/ui/GradientButton';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { products, categories } from '@/lib/products';
import { cn } from '@/lib/utils';

const PRODUCTS_PER_PAGE = 6;

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < filteredProducts.length;
  const canShowLess = visibleCount > PRODUCTS_PER_PAGE;

  useEffect(() => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [selectedCategory]);

  return (
    <Section id="products" className="py-12 md:py-16" containerClassName="px-3 md:px-8">
      <div className="space-y-10 md:space-y-12">
        <SectionHeader
          title="Explore Our Collection"
          description="Premium subscriptions across editing, AI, education, and video streaming categories."
        />

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'cursor-pointer rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 md:px-5 md:py-2.5 md:text-sm',
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow'
                  : 'border border-pink-100 bg-white text-neutral-700 hover:bg-pink-50 hover:text-pink-600'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {(hasMoreProducts || canShowLess) && (
          <div className="flex justify-center gap-3 pt-2">
            {canShowLess && (
              <button
                onClick={() => setVisibleCount(PRODUCTS_PER_PAGE)}
                className="rounded-full border border-pink-200 px-6 py-3 text-sm font-semibold text-pink-600 hover:bg-pink-50"
              >
                Show Less
              </button>
            )}

            {hasMoreProducts && (
              <GradientButton
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + PRODUCTS_PER_PAGE, filteredProducts.length)
                  )
                }
                className="px-8 py-3 text-sm"
              >
                Load More
              </GradientButton>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}