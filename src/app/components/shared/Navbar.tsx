import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Menangani navigasi utama dengan efek glassmorphism saat di-scroll.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Menangani efek scroll untuk perubahan gaya navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Oshtore */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform shadow-lg shadow-indigo-200">
            O
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Oshtore<span className="text-indigo-600">.</span>
          </span>
        </a>

        {/* Menu Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="/landing-page" className="hover:text-indigo-600 transition-colors">Landing Page</a>
          <a href="/system" className="hover:text-indigo-600 transition-colors">Business System</a>
          <a 
            href="https://fosht" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-400 hover:text-indigo-600 transition-colors"
          >
            Portfolio <ExternalLink size={14} />
          </a>
        </div>

        {/* Tombol CTA & Toggle Mobile */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/6282371542230" 
            className="hidden sm:block px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200 active:scale-95"
          >
            Konsultasi Gratis
          </a>
          
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2">
          <a href="/landing-page" className="font-bold text-slate-900 py-2">Landing Page</a>
          <a href="/system" className="font-bold text-slate-900 py-2">Business System</a>
          <a href="https://fosht" className="font-bold text-slate-400 py-2 flex items-center gap-2">Portfolio <ExternalLink size={14} /></a>
          <a href="https://wa.me/6282371542230" className="w-full py-3 bg-indigo-600 text-white text-center rounded-xl font-bold">Konsultasi Gratis</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;