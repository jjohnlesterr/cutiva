import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  id,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-pink-100 bg-[#fffdfd] py-10 md:py-14",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 md:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}