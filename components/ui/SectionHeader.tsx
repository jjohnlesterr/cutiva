interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  title,
  description,
  badge,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={`space-y-3 ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      }`}
    >
      {badge && (
        <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-pink-600 md:px-4 md:text-xs">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-sm text-neutral-600 md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}