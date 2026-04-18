import { ReviewCard } from '@/components/ui/ReviewCard';
import { reviews } from '@/lib/reviews';

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="border-b border-pink-100 bg-gradient-to-b from-[#fffdfd] to-[#fff8fc] py-14 md:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="space-y-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
              Testimonials
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
              What Our Clients Say
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Hear directly from satisfied customers who trust Cutiva for
              affordable premium access and smooth transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}