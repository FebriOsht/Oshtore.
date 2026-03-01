'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Desain Floating Glass Pill modern dengan dukungan Mobile Menu
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menangani deteksi scroll untuk mengubah style Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-4 py-2 rounded-full border ${
          scrolled 
            ? 'w-full max-w-5xl bg-slate-950/80 backdrop-blur-xl border-indigo-500/30 shadow-[0_8px_32px_rgba(79,70,229,0.25)] translate-y-0' 
            : 'w-full max-w-7xl bg-slate-900/40 backdrop-blur-md border-white/10 shadow-xl translate-y-2'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer pl-2">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Efek Glow di belakang logo */}
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            {/* Logo Asli */}
            <img 
              src="/img/oshtore-logo1-removebg-.png" 
              alt="Oshtore Logo" 
              className="relative z-10 w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                // Fallback jika gambar gagal dimuat
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-indigo-600', 'rounded-full');
                e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold">O</span>';
              }}
            />
          </div>
          <span className="text-xl font-black tracking-widest text-white uppercase hidden sm:block">
            OSHTORE<span className="text-indigo-500">.</span>
          </span>
        </div>

        {/* Desktop Links (Floating Style) */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          <a href="/landing-page" className="px-5 py-2 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Landing Page</a>
          <a href="/system" className="px-5 py-2 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Business System</a>
          <a href="https://fosht" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-indigo-300 hover:text-white hover:bg-indigo-500/20 rounded-full transition-all">
            Portfolio <ExternalLink size={14} />
          </a>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 pr-1">
          <a 
            href="https://wa.me/6282371542230" 
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-bold hover:bg-indigo-500 transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] active:scale-95"
          >
            Konsultasi <span className="hidden lg:inline">Gratis</span>
          </a>
          <button 
            className="md:hidden text-white p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-x-4 top-20 rounded-3xl overflow-hidden transition-all duration-300 origin-top pointer-events-auto ${
        mobileMenuOpen ? 'scale-y-100 opacity-100 shadow-2xl' : 'scale-y-0 opacity-0'
      }`}>
        <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-6 flex flex-col gap-2">
          <a href="/landing-page" className="px-4 py-3 text-lg font-bold text-white hover:bg-white/10 rounded-xl transition-colors">Landing Page</a>
          <a href="/system" className="px-4 py-3 text-lg font-bold text-white hover:bg-white/10 rounded-xl transition-colors">Business System</a>
          <a href="https://fosht" className="px-4 py-3 text-lg font-bold text-indigo-300 flex items-center gap-2 hover:bg-white/10 rounded-xl transition-colors">
            Portfolio <ExternalLink size={18} />
          </a>
          <div className="h-px bg-white/10 my-2"></div>
          <a href="https://wa.me/6282371542230" className="w-full py-4 mt-2 bg-indigo-600 text-white text-center rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/25 active:scale-95 transition-transform">
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;