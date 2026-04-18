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
      className="border-b border-pink-100 bg-gradient-to-b from-[#fff8fc] to-white py-14 md:py-14"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="space-y-16">

          {/* HEADER */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pink-600">
              Simple Process
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-neutral-950">
              How to Order
            </h2>

            <p className="text-neutral-600">
              Getting your premium account is quick and easy — just follow these steps.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-[1.5rem] border border-pink-100 bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(236,72,153,0.12)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-400 text-white font-bold">
                  {step.number}
                </div>

                <h3 className="font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/profile.php?id=61585690502630"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer flex items-center justify-between rounded-[1.5rem] border border-pink-100 bg-white px-6 py-5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-lg shadow-md transition group-hover:scale-110">
                  <FaFacebook />
                </div>

                <div>
                  <p className="font-semibold text-neutral-900">
                    Facebook
                  </p>
                  <p className="text-sm text-neutral-500">
                    Message us directly
                  </p>
                </div>
              </div>

              <span className="text-sm text-pink-600 font-medium group-hover:translate-x-1 transition">
                Open →
              </span>
            </a>

            {/* TELEGRAM */}
            <a
              href="https://t.me/cutivaprems"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer flex items-center justify-between rounded-[1.5rem] border border-pink-100 bg-white px-6 py-5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(236,72,153,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white text-lg shadow-md transition group-hover:scale-110">
                  <FaTelegramPlane />
                </div>

                <div>
                  <p className="font-semibold text-neutral-900">
                    Telegram
                  </p>
                  <p className="text-sm text-neutral-500">
                    Chat with us instantly
                  </p>
                </div>
              </div>

              <span className="text-sm text-pink-600 font-medium group-hover:translate-x-1 transition">
                Open →
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}