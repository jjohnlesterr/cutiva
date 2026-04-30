'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(236,72,153,0.4)]"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}