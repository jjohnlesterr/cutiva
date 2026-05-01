'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

const productLogoMap: Record<string, string> = {
  capcut: '/logo/capcut2.png',
  canva: '/logo/canva1.png',
  picsart: '/logo/picsart1.png',
  'alight-motion': '/logo/alightmotion.png',
  meitu: '/logo/meituvip.png',
  wink: '/logo/wink.svg',
  vsco: '/logo/vsco.png',

  'grok-ai': '/logo/grok.png',
  'gemini-ai': '/logo/gemini.png',
  quillbot: '/logo/quillbot1.png',
  'krisp-ai': '/logo/krispai.png',
  chatgpt: '/logo/chatgpt.png',
  grammarly: '/logo/grammarly1.png',

  'zoom-pro': '/logo/zoom.png',
  wps: '/logo/wps.svg',
  symbolab: '/logo/symbolab.png',
  studocu: '/logo/studocu1.png',
  skillshare: '/logo/skillshare.png',
  linkedin: '/logo/linkedin.png',
  'microsoft-365': '/logo/microsoft.png',
  duolingo: '/logo/duolingo.png',

  'hbo-max': '/logo/hbomax1.png',
  bilibili: '/logo/bilibili.png',
  iqiyi: '/logo/iqiyi.jpg',
  mubi: '/logo/mubi.svg',
  youtube: '/logo/youtube1.png',
  vivamax: '/logo/vivamax.png',
  viu: '/logo/viu1.png',
  'iwant-tfc': '/logo/iwanttfc.png',
};

export function ProductCard({ product }: ProductCardProps) {
  const logoSrc = productLogoMap[product.id];

  const [expanded, setExpanded] = useState(false);

  const visibleDetails = expanded
    ? product.details
    : product.details.slice(0, 3);

  const hiddenCount = product.details.length - 3;
  const hasMore = hiddenCount > 0;

  return (
    <div className="relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white/90 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:min-h-[280px] sm:rounded-[1.75rem] sm:p-6">

      {/* TOP ACCENT */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-transparent opacity-80" />

      {/* LOGO */}
      {logoSrc && (
        <div className="pointer-events-none absolute right-3 top-3 z-0 flex h-10 w-10 items-center justify-center rounded-xl border border-pink-100/70 bg-white/70 p-1.5 shadow-sm sm:right-5 sm:top-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:p-2">
          <img
            src={logoSrc}
            alt={product.name}
            className="h-full w-full object-contain opacity-90"
          />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">

        {/* HEADER */}
        <div className="space-y-2 pr-10 sm:space-y-3 sm:pr-16">
          <span className="inline-flex rounded-full border border-pink-100 bg-pink-50 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-pink-600 sm:px-3 sm:py-1 sm:text-[11px]">
            {product.category}
          </span>

          <h3 className="text-sm font-bold text-neutral-950 sm:text-xl">
            {product.name}
          </h3>
        </div>

        {/* DETAILS */}
        <ul className="mt-3 min-h-[70px] space-y-2 text-[11px] text-neutral-700 sm:mt-4 sm:text-sm">
          {visibleDetails.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
              <span className="leading-snug">{detail}</span>
            </li>
          ))}
        </ul>

        {/* MORE OPTIONS */}
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 inline-flex w-fit cursor-pointer items-center rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-600 transition-all duration-300 hover:border-pink-200 hover:bg-pink-100 hover:text-pink-700 active:scale-95"
          >
            {expanded
              ? 'Show less'
              : `+${hiddenCount} more options`}
          </button>
        )}

        {/* CTA */}
        <div className="mt-auto pt-5 sm:pt-6">
          <a
            href="#how-to-order"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(236,72,153,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(236,72,153,0.35)] sm:px-5 sm:py-3 sm:text-sm"
          >
            Message to Order
          </a>
        </div>

      </div>
    </div>
  );
}