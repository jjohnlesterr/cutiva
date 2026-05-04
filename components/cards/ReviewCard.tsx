import { Review } from "@/lib/reviews";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const isCta = review.text === "CTA_FACEBOOK";

  if (isCta) {
    return (
      <div className="relative h-full overflow-hidden rounded-2xl border border-pink-200 bg-gradient-to-br from-[#fff1f7] via-white to-[#fff7fb] p-4 shadow-[0_10px_25px_rgba(236,72,153,0.10)] transition-all duration-300 hover:shadow-[0_16px_32px_rgba(236,72,153,0.15)] md:rounded-[1.75rem] md:p-6">
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-pink-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-rose-100/60 blur-2xl" />

        <div className="relative flex h-full flex-col justify-between">
          <div className="space-y-3 md:space-y-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_rgba(236,72,153,0.15)] md:h-14 md:w-14 md:rounded-2xl">
              <svg
                className="h-5 w-5 text-pink-600 md:h-7 md:w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h8M8 14h5m-7 7h12a2 2 0 0 0 2-2V7.828a2 2 0 0 0-.586-1.414l-2.828-2.828A2 2 0 0 0 15.172 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
                />
              </svg>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <h3 className="text-lg font-bold tracking-tight text-neutral-950 md:text-2xl">
                Read More Reviews
              </h3>

              <p className="text-xs leading-5 text-neutral-600 md:text-[15px] md:leading-7">
                Want to see more real customer feedback and successful
                transactions? Visit our Facebook page for additional reviews.
              </p>
            </div>
          </div>

          <div className="mt-5 md:mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61585690502630"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-gradient-to-r from-[#f9a8d4] via-[#f472b6] to-[#ec4899] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(236,72,153,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(236,72,153,0.4)] md:px-5 md:py-3 md:text-sm"
            >
              Visit Facebook Page
              <svg className="h-3.5 w-3.5 md:h-4 md:w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3.75 10a.75.75 0 0 1 .75-.75h9.19L10.97 6.53a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H4.5a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group h-full rounded-2xl border border-pink-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-pink-200 hover:shadow-[0_16px_32px_rgba(236,72,153,0.10)] md:rounded-[1.75rem] md:p-6">
      <div className="space-y-3 md:space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5 md:gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-3 w-3 md:h-4 md:w-4 ${
                  i < review.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-yellow-100 text-yellow-100"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 md:h-10 md:w-10">
            <svg className="h-3.5 w-3.5 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.17 6A5.001 5.001 0 0 0 3 10.83V18h7v-7H6.07A3.001 3.001 0 0 1 9 8V6H7.17Zm9 0A5.001 5.001 0 0 0 12 10.83V18h7v-7h-3.93A3.001 3.001 0 0 1 18 8V6h-1.83Z" />
            </svg>
          </div>
        </div>

        <p className="text-xs leading-5 text-neutral-700 md:text-[15px] md:leading-8">
          {review.text}
        </p>

        <div className="flex items-center gap-2 pt-1 md:gap-3 md:pt-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-50 text-xs font-semibold text-pink-700 md:h-11 md:w-11 md:text-sm">
            {review.name.charAt(0)}
          </div>

          <div>
            <p className="text-xs font-semibold text-neutral-950 md:text-base">
              {review.name}
            </p>
            <p className="text-[10px] text-neutral-500 md:text-sm">
              {review.name === "John Lester Tan"
                ? "Loyal customer"
                : "Customer"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}