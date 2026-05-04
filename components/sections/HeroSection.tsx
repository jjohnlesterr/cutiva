"use client";

import { motion, type Variants } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-12 sm:pt-28 sm:pb-16 md:min-h-screen md:pt-46 md:pb-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.img
          src="/hero2.png"
          alt="Hero background"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120312]/30 via-[#1b0620]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[4%] top-[14%] h-28 w-28 rounded-full bg-pink-400/10 blur-3xl sm:h-40 sm:w-40 md:left-[6%] md:top-[18%] md:h-56 md:w-56"
        />

        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] right-[4%] h-32 w-32 rounded-full bg-fuchsia-300/10 blur-3xl sm:h-44 sm:w-44 md:right-[8%] md:h-64 md:w-64"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-2xl text-center md:text-left">
              <div className="space-y-5 sm:space-y-6">
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.1}
                  className="text-[4rem] font-black leading-[0.92] tracking-[-0.05em] text-white drop-shadow-[0_6px_25px_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl lg:text-[88px]"
                >
                  Premium
                  <span className="block">Accounts</span>
                  <span className="block bg-gradient-to-r from-[#f7b8ff] via-white to-[#f1c8ff] bg-clip-text text-transparent">
                    Made Simple
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="mx-auto max-w-md text-2xl font-semibold tracking-tight text-[#f3d2ff] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:text-xl md:mx-0 md:max-w-none md:text-2xl lg:text-3xl"
                >
                  Access more. Spend less.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.3}
                  className="pt-1"
                >
                  <GradientButton
                    asChild
                    className="group w-full max-w-[320px] border border-white/30 from-[#f9a8d4]/95 via-[#f472b6]/95 to-[#ec4899]/95 px-7 py-3.5 text-sm backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_45px_rgba(236,72,153,0.5)] sm:w-auto sm:px-8 sm:text-base"
                  >
                    <a href="#products">
                      <span>View Products</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 5 7 7-7 7" />
                      </svg>
                    </a>
                  </GradientButton>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[540px]"
            >
              <motion.div
                animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.03, 1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 rounded-[2rem] bg-pink-400/10 blur-2xl sm:-inset-3 md:-inset-6 md:rounded-[2.5rem] md:blur-3xl"
              />

              <div className="relative rounded-[1.5rem] border border-white/20 bg-white/12 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:p-6 md:rounded-[2rem] md:p-9">
                <div className="mb-5 flex justify-center md:justify-start">
                  <motion.span
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.45}
                    className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5d3ff] sm:text-[11px] md:tracking-[0.28em]"
                  >
                    About Cutiva
                  </motion.span>
                </div>

                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.55}
                  className="mb-4 text-center text-[1.9rem] font-semibold leading-tight tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)] sm:text-xl md:text-left md:text-3xl"
                >
                  Premium access, without the premium price.
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.65}
                  className="text-center text-[15px] leading-8 text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:text-base sm:leading-8 md:text-left"
                >
                  Cutiva gives you affordable and reliable access to premium
                  digital subscriptions — from video streaming platforms and
                  editing software to AI-powered tools.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
