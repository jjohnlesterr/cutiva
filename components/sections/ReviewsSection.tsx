import { ReviewCard } from '@/components/ui/ReviewCard';
import { reviews } from '@/lib/reviews';

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="border-b border-pink-100 bg-gradient-to-b from-[#fffdfd] to-[#fff8fc] py-10 md:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="space-y-8 md:space-y-12">

          {/* HEADER */}
          <div className="mx-auto max-w-xl space-y-3 text-center">
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-pink-600 md:px-4 md:text-xs">
              Testimonials
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
              What Our Clients Say
            </h2>

            <p className="text-sm leading-relaxed text-neutral-600 md:text-lg">
              Real feedback from customers who trust Cutiva.
            </p>
          </div>

          {/* GRID */}
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
            {reviews.map((review) => {
              const isCta = review.text === 'CTA_FACEBOOK';

              return (
                <div
                  key={review.id}
                  className={`${isCta ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <ReviewCard review={review} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}