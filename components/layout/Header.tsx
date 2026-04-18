'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Products', id: 'products' },
  { label: 'How to Order', id: 'how-to-order' },
  { label: 'Reviews', id: 'reviews' },
];

type HeaderTheme = 'dark' | 'light';

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const headerOffset = 110;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const updateHeaderState = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 16);

      if (currentScrollY > 140 && delta > 6) {
        setShowHeader(false);
      }

      if (delta < -6 || currentScrollY <= 20) {
        setShowHeader(true);
      }

      const scrollPosition = currentScrollY + 140;
      let currentSection = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);

      const probeX = window.innerWidth / 2;
      const probeY = 110;
      const elementUnderHeader = document.elementFromPoint(probeX, probeY);
      const themedSection = elementUnderHeader?.closest('[data-header-theme]');
      const theme = themedSection?.getAttribute('data-header-theme');

      setHeaderTheme(theme === 'light' ? 'light' : 'dark');

      lastScrollY.current = currentScrollY;
    };

    updateHeaderState();

    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState);

    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = useMemo(() => {
    const isLight = headerTheme === 'light';

    return {
      shell: isLight
        ? `
          border border-black/8
          bg-white/78
          shadow-[0_12px_40px_rgba(15,23,42,0.10)]
          backdrop-blur-2xl
        `
        : `
          border border-white/12
          bg-[#160617]/52
          shadow-[0_12px_40px_rgba(10,0,20,0.38)]
          backdrop-blur-2xl
        `,

      glow: isLight
        ? 'bg-gradient-to-r from-white/70 via-white/30 to-pink-100/60'
        : 'bg-gradient-to-r from-white/10 via-transparent to-fuchsia-300/10',

      stroke: isLight
        ? 'bg-gradient-to-r from-white/90 via-transparent to-pink-200/70 opacity-90'
        : 'bg-gradient-to-r from-white/12 via-white/0 to-pink-300/12 opacity-70',

      navWrap: isLight
        ? 'border border-black/8 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md'
        : 'border border-white/10 bg-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-md',

      navBase: isLight
        ? 'text-black/70 hover:text-black hover:bg-black/[0.05]'
        : 'text-white/80 hover:text-[#241926] hover:bg-[#f6eef4]',

      navActive: isLight
        ? 'bg-black text-white shadow-[0_8px_24px_rgba(15,23,42,0.18)]'
        : 'bg-white text-[#1a0820] shadow-[0_8px_24px_rgba(255,255,255,0.16)]',

      menuBtn: isLight
        ? 'border-black/10 bg-black/[0.04] text-black hover:bg-black/[0.08]'
        : 'border-white/10 bg-white/5 text-white hover:bg-white/10',

      mobileMenu: isLight
        ? 'border border-black/8 bg-white/88 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl'
        : 'border border-white/10 bg-[#160617]/92 shadow-[0_16px_40px_rgba(10,0,20,0.36)] backdrop-blur-2xl',

      mobileItem: isLight
        ? 'text-black/72 hover:bg-black/[0.05] hover:text-black'
        : 'text-white/84 hover:bg-white/10 hover:text-white',
    };
  }, [headerTheme]);

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 transition-all duration-500 ${
        showHeader
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto w-[calc(100%-1rem)] max-w-6xl px-2 md:px-4">
        <div
          className={`
            relative flex h-[74px] items-center justify-between overflow-hidden
            rounded-full px-4 md:px-6
            transition-all duration-500
            ${styles.shell}
            ${isScrolled ? 'scale-[0.985]' : 'scale-100'}
          `}
        >
          <div
            className={`pointer-events-none absolute inset-0 rounded-full ${styles.glow}`}
          />
          <div
            className={`pointer-events-none absolute inset-0 rounded-full ${styles.stroke}`}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[32%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />

          <Link
            href="/"
            className="relative z-10 flex items-center transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo1.png"
              alt="Cutiva logo"
              width={150}
              height={48}
              className="h-auto w-[105px] object-contain md:w-[140px]"
              priority
            />
          </Link>

          <nav
            className={`relative z-10 hidden items-center gap-2 rounded-full px-2 py-1.5 md:flex ${styles.navWrap}`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    rounded-full px-4 py-2.5 text-sm font-semibold tracking-[0.01em]
                    transition-all duration-300
                    ${isActive ? styles.navActive : styles.navBase}
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`
              relative z-10 flex items-center justify-center rounded-full
              border p-2.5 transition-all duration-300 md:hidden
              ${styles.menuBtn}
            `}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M6 6l12 12M6 18L18 6"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-3 md:hidden">
            <div className={`rounded-[1.5rem] p-3 ${styles.mobileMenu}`}>
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        rounded-2xl px-4 py-3 text-left text-sm font-medium transition-all duration-300
                        ${isActive ? styles.navActive : styles.mobileItem}
                      `}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}