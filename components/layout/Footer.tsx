"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTelegramPlane, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05030a] py-12 md:py-16">
      {/* Base background image */}
      <div
        className="absolute inset-0 bg-[url('/footer-bg1.png')] bg-cover bg-no-repeat opacity-95"
        style={{
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}
      />

      {/* Brightness layer para hindi masyadong dark */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05030a]/70 via-[#12071d]/35 to-[#05030a]/10" />

      {/* Soft purple glow sa lower area */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[1200px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />

      {/* Extra glossy highlight para mas buhay yung waves */}
      <div className="pointer-events-none absolute bottom-[-30px] left-1/2 h-[180px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-400/10 blur-[120px]" />

      {/* Subtle top fade para smooth yung blend from section above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-5 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/logo1.png"
                alt="Cutiva logo"
                width={140}
                height={40}
                className="h-auto w-[120px] drop-shadow-[0_0_12px_rgba(255,220,140,0.18)] md:w-[140px]"
              />
            </div>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-white/75 md:mx-0">
              Premium digital accounts made accessible — for creative tools, AI
              platforms, education, and streaming.
            </p>

            <div className="flex justify-center gap-3 pt-2 md:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61585690502630"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/70 hover:bg-white/10"
              >
                <FaFacebookF className="text-[18px] text-[#1877F2]" />
              </a>

              <a
                href="https://t.me/cutivaprems"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/70 hover:bg-white/10"
              >
                <FaTelegramPlane className="text-[18px] text-[#229ED9]" />
              </a>

              <a
                href="https://www.tiktok.com/@cavellefinds?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/70 hover:bg-white/10"
              >
                <FaTiktok className="text-[18px] text-white" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#products"
                    className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#how-to-order"
                    className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
                  >
                    How to Order
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#reviews"
                    className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">
                Information
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm text-white/60">
            © 2026 Cutiva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}