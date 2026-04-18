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
    <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-pink-100 bg-white/90 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_18px_40px_rgba(236,72,153,0.12)]">
      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-400 via-pink-300 to-transparent opacity-70" />

      {/* subtle logo */}
      {logoSrc ? (
        <div className="pointer-events-none absolute right-5 top-5 z-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-100/70 bg-white/70 p-2 shadow-sm backdrop-blur-[2px] md:h-16 md:w-16 md:p-2.5">
          <img
            src={logoSrc}
            alt={`${product.name} logo`}
            className="h-full w-full object-contain opacity-90 transition duration-300 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="relative z-10 space-y-5">
        {/* header */}
        <div className="space-y-3 pr-16 md:pr-20">
          <span className="inline-flex rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-600">
            {product.category}
          </span>

          <h3 className="text-2xl font-bold tracking-tight text-neutral-950 transition-colors duration-300 group-hover:text-pink-600">
            {product.name}
          </h3>
        </div>

        {/* details */}
        <ul className="space-y-3 text-sm text-neutral-700">
          {product.details.map((detail, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>

{/* footer */}
<div className="border-t border-pink-100 pt-4">
  <a
    href="#how-to-order"
    className="inline-flex text-sm font-medium italic text-neutral-500 transition-colors duration-300 hover:text-pink-600 group-hover:text-pink-500"
  >
    Message to order →
  </a>
</div>
      </div>
    </div>
  );
}