import { cn } from "@/lib/utils";

export function InfoPageLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute right-16 top-40 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className={cn("container relative mx-auto max-w-3xl px-4 md:px-8", className)}>
        {children}
      </div>
    </main>
  );
}