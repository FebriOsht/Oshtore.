'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

/**
 * Navbar Component
 * Desain Floating Glass Pill yang dinamis:
 * 1. Logo & Teks kembali ke Home (/).
 * 2. Menu menyesuaikan dengan halaman yang aktif. Tautan Harga hanya muncul di halaman layanan spesifik.
 * 3. Terdapat Dropdown untuk Info Perusahaan (About, Terms, Order).
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  // Menangani deteksi scroll & deteksi path saat ini
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logika halaman yang disesuaikan dengan AppRoutes baru
  const isHomePage = currentPath === '/';
  const isLandingPage = currentPath.includes('landing-page');
  const isSystemPage = currentPath.includes('business-system');
  const isInfoPage = currentPath.includes('about') || currentPath.includes('terms-conditions') || currentPath.includes('ordering-method');

  return (
    <div className="fixed top-4 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-4 py-2 rounded-full border ${
          scrolled 
            ? 'w-full max-w-5xl bg-slate-950/80 backdrop-blur-xl border-indigo-500/30 shadow-[0_8px_32px_rgba(79,70,229,0.25)]' 
            : 'w-full max-w-7xl bg-slate-900/40 backdrop-blur-md border-white/10 shadow-xl'
        }`}
      >
        {/* Logo Section - Mengarah ke Home (/) */}
        <a href="/" className="flex items-center gap-3 group cursor-pointer pl-1 sm:pl-2">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            <img 
              src="/img/oshtore.png" 
              alt="Oshtore Logo" 
              className="relative z-10 w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-indigo-600', 'rounded-full');
                e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-xs sm:text-base">O</span>';
              }}
            />
          </div>
          {/* Teks Logo sekarang selalu tampil (hidden class dihapus), ukuran font disesuaikan untuk mobile */}
          <span className="text-lg sm:text-xl font-black tracking-widest text-white uppercase">
            OSHTORE<span className="text-indigo-500">.</span>
          </span>
        </a>

        {/* Desktop Links (Floating Style) */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {/* Link Dinamis Internal Halaman - Tidak muncul di Home */}
          {!isHomePage && isLandingPage ? (
            <>
              <a href="#pricing" className="px-5 py-2 text-sm font-bold text-indigo-400 hover:text-white hover:bg-indigo-500/20 rounded-full transition-all">Daftar Harga</a>
              <div className="w-px h-4 bg-white/10 mx-1"></div>
            </>
          ) : !isHomePage && isSystemPage ? (
            <>
              <a href="#systems" className="px-5 py-2 text-sm font-bold text-blue-400 hover:text-white hover:bg-blue-500/20 rounded-full transition-all">Katalog Sistem</a>
              <div className="w-px h-4 bg-white/10 mx-1"></div>
            </>
          ) : null}

          {/* Menu Utama */}
          <a href="/landing-page" className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${isLandingPage ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}>
            Landing Page
          </a>
          <a href="/business-system" className={`px-5 py-2 text-sm font-bold rounded-full transition-all ${isSystemPage ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}>
            Business System
          </a>
          
          {/* Dropdown Menu Informasi */}
          <div 
            className="relative"
            onMouseEnter={() => setInfoDropdownOpen(true)}
            onMouseLeave={() => setInfoDropdownOpen(false)}
          >
            <button className={`px-5 py-2 text-sm font-bold rounded-full transition-all flex items-center gap-1 ${isInfoPage ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}>
              Informasi <ChevronDown size={14} className={`transition-transform duration-300 ${infoDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Isi Dropdown */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${infoDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 w-48 shadow-2xl flex flex-col gap-1">
                <a href="/about" className="px-4 py-2.5 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all">Tentang Kami</a>
                <a href="/ordering-method" className="px-4 py-2.5 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all">Cara Pemesanan</a>
                <a href="/terms-conditions" className="px-4 py-2.5 text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all">Syarat & Ketentuan</a>
              </div>
            </div>
          </div>

          <a href="http://fosht.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-slate-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-full transition-all">
            Portfolio <ExternalLink size={14} />
          </a>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 pr-1">
          <a 
            href="https://wa.me/62895366766999" 
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-bold hover:bg-indigo-500 transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] active:scale-95"
          >
            Konsultasi <span className="hidden lg:inline">Gratis</span>
          </a>
          <button 
            className="lg:hidden text-white p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-x-4 top-20 rounded-3xl overflow-hidden transition-all duration-300 origin-top pointer-events-auto ${
        mobileMenuOpen ? 'scale-y-100 opacity-100 shadow-2xl' : 'scale-y-0 opacity-0'
      }`}>
        <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-6 flex flex-col max-h-[80vh] overflow-y-auto no-scrollbar">
          
          {/* Section: Navigasi Halaman Utama */}
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-1">Layanan Kami</p>
            
            {/* Tautan Internal hanya muncul jika bukan di halaman utama */}
            {!isHomePage && isLandingPage && (
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-lg font-bold text-indigo-400 flex items-center justify-between bg-indigo-500/5 rounded-xl border border-indigo-500/20 mb-2">
                Lihat Daftar Harga <ChevronRight size={18} />
              </a>
            )}
            {!isHomePage && isSystemPage && (
              <a href="#systems" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-lg font-bold text-blue-400 flex items-center justify-between bg-blue-500/5 rounded-xl border border-blue-500/20 mb-2">
                Katalog Sistem <ChevronRight size={18} />
              </a>
            )}
            
            <a href="/landing-page" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 text-lg font-bold rounded-xl transition-colors ${isLandingPage ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}`}>
              Landing Page
            </a>
            <a href="/business-system" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 text-lg font-bold rounded-xl transition-colors ${isSystemPage ? 'text-white bg-white/10' : 'text-slate-300 hover:bg-white/5'}`}>
              Business System
            </a>
          </div>

          <div className="h-px bg-white/5 my-2"></div>

          {/* Section: Informasi Perusahaan */}
          <div className="flex flex-col gap-2 my-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-1">Informasi</p>
            <a href="/about" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-2.5 text-base font-bold rounded-xl transition-colors ${currentPath.includes('about') ? 'text-white bg-white/10' : 'text-slate-400 hover:bg-white/5'}`}>Tentang Kami</a>
            <a href="/ordering-method" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-2.5 text-base font-bold rounded-xl transition-colors ${currentPath.includes('ordering-method') ? 'text-white bg-white/10' : 'text-slate-400 hover:bg-white/5'}`}>Cara Pemesanan</a>
            <a href="/terms-conditions" onClick={() => setMobileMenuOpen(false)} className={`px-4 py-2.5 text-base font-bold rounded-xl transition-colors ${currentPath.includes('terms-conditions') ? 'text-white bg-white/10' : 'text-slate-400 hover:bg-white/5'}`}>Syarat & Ketentuan</a>
            <a href="http://fosht.vercel.app" target="_blank" rel="noreferrer" className="px-4 py-2.5 text-base font-bold text-indigo-400 flex items-center justify-between hover:bg-indigo-500/10 rounded-xl transition-colors mt-2">
              Lihat Portfolio <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="h-px bg-white/5 my-2"></div>
          
          <a href="https://wa.me/62895366766999" className="w-full py-4 mt-4 bg-indigo-600 text-white text-center rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95 transition-transform">
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;