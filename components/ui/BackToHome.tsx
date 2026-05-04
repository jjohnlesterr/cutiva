import Link from "next/link";

export function BackToHome() {
  return (
    <Link
      href="/"
      className="mb-8 inline-flex items-center gap-2 text-accent transition-colors hover:text-accent/80"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back to Home
    </Link>
  );
}