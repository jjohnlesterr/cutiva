import { cn } from "@/lib/utils";

export function IconCircle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-400 text-white shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}