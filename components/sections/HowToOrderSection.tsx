import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export function HowToOrderSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose your product',
      description: 'Browse our collection and pick what you need'
    },
    {
      number: '02',
      title: 'Message us',
      description: 'Reach out via Facebook or Telegram'
    },
    {
      number: '03',
      title: 'Confirm & pay',
      description: 'We’ll verify details and finalize payment'
    },
    {
      number: '04',
      title: 'Get access',
      description: 'Receive your premium account instantly'
    }
  ];

  return (
    <section
      id="how-to-order"
      className="border-b border-pink-100 bg-[#fffdfd] py-10 md:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="space-y-10 md:space-y-16">

          <div className="mx-auto max-w-xl space-y-3 text-center">
            <h2 className="text-3xl font-bold text-neutral-950 md:text-5xl">
              How to Order
            </h2>

            <p className="text-sm text-neutral-600 md:text-base">
              Getting your premium account is quick and easy — just follow these steps.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-pink-100 bg-white p-3 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(236,72,153,0.12)] md:rounded-[1.5rem] md:p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-400 text-xs font-bold text-white md:mb-4 md:h-12 md:w-12 md:text-base">
                  {step.number}
                </div>

                <h3 className="text-sm font-semibold text-neutral-900 md:text-base">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs text-neutral-600 md:mt-2 md:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61585690502630"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-pink-100 bg-white px-4 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)] md:rounded-[1.5rem] md:px-6 md:py-5"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-sm text-white shadow-md transition group-hover:scale-110 md:h-11 md:w-11 md:text-lg">
                  <FaFacebook />
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-900 md:text-base">
                    Facebook
                  </p>
                  <p className="text-xs text-neutral-500 md:text-sm">
                    Message us directly
                  </p>
                </div>
              </div>

              <span className="text-xs font-medium text-pink-600 transition group-hover:translate-x-1 md:text-sm">
                Open →
              </span>
            </a>

            <a
              href="https://t.me/cutivaprems"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-pink-100 bg-white px-4 py-3 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)] md:rounded-[1.5rem] md:px-6 md:py-5"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-sm text-white shadow-md transition group-hover:scale-110 md:h-11 md:w-11 md:text-lg">
                  <FaTelegramPlane />
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-900 md:text-base">
                    Telegram
                  </p>
                  <p className="text-xs text-neutral-500 md:text-sm">
                    Chat with us instantly
                  </p>
                </div>
              </div>

              <span className="text-xs font-medium text-pink-600 transition group-hover:translate-x-1 md:text-sm">
                Open →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}