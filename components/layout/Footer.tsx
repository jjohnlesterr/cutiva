"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTelegramPlane, FaTiktok } from "react-icons/fa";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585690502630",
    icon: FaFacebookF,
    className: "text-[#1877F2]",
  },
  {
    label: "Telegram",
    href: "https://t.me/cutivaprems",
    icon: FaTelegramPlane,
    className: "text-[#229ED9]",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@cavellefinds?is_from_webapp=1&sender_device=pc",
    icon: FaTiktok,
    className: "text-white",
  },
];

const footerColumns = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "How to Order", href: "/#how-to-order" },
      { label: "Reviews", href: "/#reviews" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05030a] py-12 md:py-16">
      <FooterBackground />

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <FooterBrand />
          <FooterLinks />
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

function FooterBackground() {
  return (
    <>
      <div
        className="absolute inset-0 bg-[url('/footer-bg1.png')] bg-cover bg-no-repeat opacity-95"
        style={{
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05030a]/70 via-[#12071d]/35 to-[#05030a]/10" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[1200px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-30px] left-1/2 h-[180px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
    </>
  );
}

function FooterBrand() {
  return (
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
        {socialLinks.map((social) => (
          <SocialIconLink key={social.label} {...social} />
        ))}
      </div>
    </div>
  );
}

function SocialIconLink({
  label,
  href,
  icon: Icon,
  className,
}: {
  label: string;
  href: string;
  icon: React.ElementType;
  className: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-400/70 hover:bg-white/10"
    >
      <Icon className={`text-[18px] ${className}`} />
    </a>
  );
}

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 text-center md:text-left">
      {footerColumns.map((column) => (
        <div key={column.title}>
          <h4 className="mb-4 text-sm font-semibold text-white">
            {column.title}
          </h4>

          <ul className="space-y-2 text-sm">
            {column.links.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/70 transition-all duration-200 hover:text-pink-300 hover:underline"
    >
      {children}
    </Link>
  );
}