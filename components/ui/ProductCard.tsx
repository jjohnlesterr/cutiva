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
    <div className="relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-2xl border border-pink-100 bg-white/90 p-3 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:min-h-[280px] sm:rounded-[1.75rem] sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-transparent opacity-80" />

      {logoSrc && (
        <div className="pointer-events-none absolute right-3 top-3 z-0 flex h-10 w-10 items-center justify-center rounded-xl border border-pink-100/70 bg-white/70 p-1.5 shadow-sm backdrop-blur-[2px] sm:right-5 sm:top-5 sm:h-14 sm:w-14 sm:rounded-2xl sm:p-2">
          <img
            src={logoSrc}
            alt={`${product.name} logo`}
            className="h-full w-full object-contain opacity-90"
          />
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        <div className="space-y-2 pr-10 sm:space-y-3 sm:pr-16">
          <span className="inline-flex rounded-full border border-pink-100 bg-pink-50 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-pink-600 sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.18em]">
            {product.category}
          </span>

          <h3 className="text-sm font-bold tracking-tight text-neutral-950 sm:text-xl">
            {product.name}
          </h3>
        </div>

        <ul className="mt-3 space-y-2 text-[11px] text-neutral-700 sm:mt-4 sm:space-y-3 sm:text-sm">
          {product.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-2 sm:gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500 sm:mt-2" />
              <span className="line-clamp-2 leading-snug sm:leading-relaxed">
                {detail}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 sm:pt-6">
          <a
            href="#how-to-order"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-3 py-2 text-[11px] font-semibold text-white shadow-[0_10px_25px_rgba(236,72,153,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(236,72,153,0.35)] sm:px-5 sm:py-3 sm:text-sm"
          >
            Message to Order
          </a>
        </div>
      </div>
    </div>
  );
}