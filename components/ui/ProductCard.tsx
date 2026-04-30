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

  return (
    <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[1.75rem] border border-pink-100 bg-white/90 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">

      {/* 🔥 PINK TOP ACCENT (binalik) */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-transparent opacity-80" />

      {/* LOGO */}
      {logoSrc && (
        <div className="pointer-events-none absolute right-5 top-5 z-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-100/70 bg-white/70 p-2 shadow-sm backdrop-blur-[2px]">
          <img
            src={logoSrc}
            alt={`${product.name} logo`}
            className="h-full w-full object-contain opacity-90"
          />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">

        {/* HEADER */}
        <div className="space-y-3 pr-16">
          <span className="inline-flex rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-600">
            {product.category}
          </span>

          <h3 className="text-xl font-bold tracking-tight text-neutral-950">
            {product.name}
          </h3>
        </div>

        {/* DETAILS */}
        <ul className="mt-4 space-y-3 text-sm text-neutral-700">
          {product.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
              <span className="leading-relaxed line-clamp-2">
                {detail}
              </span>
            </li>
          ))}
        </ul>

        {/* BUTTON FIXED SA BABA */}
        <div className="mt-auto pt-6">
          <a
            href="#how-to-order"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(236,72,153,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(236,72,153,0.35)]"
          >
            Message to Order
          </a>
        </div>
      </div>
    </div>
  );
}