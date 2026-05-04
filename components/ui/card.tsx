import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-pink-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(236,72,153,0.10)] md:rounded-[1.5rem] md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}