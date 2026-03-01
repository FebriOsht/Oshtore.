import React from 'react';
import { Instagram, Github, Globe, ArrowRight } from 'lucide-react';

/**
 * Footer Component
 * Komponen ini digunakan di seluruh halaman melalui layout.tsx
 */
const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Glow Effect Garis Atas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Kolom 1: Brand & Sosial Media */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">O</div>
              <span className="text-xl font-black text-white">OSHTORE</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Solusi digital premium untuk UMKM dan Bisnis. Kami membangun sistem yang mempercepat pertumbuhan dan efisiensi Anda.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors"><Github size={20} /></a>
              <a href="https://fosht" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Kolom 2: Layanan */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">Layanan</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="/landing-page" className="hover:text-indigo-400 transition-colors">Premium Landing Page</a></li>
              <li><a href="/system" className="hover:text-indigo-400 transition-colors">Sistem Kasir (POS)</a></li>
              <li><a href="/system" className="hover:text-indigo-400 transition-colors">Manajemen Inventori</a></li>
              <li><a href="/system" className="hover:text-indigo-400 transition-colors">Custom Dashboard</a></li>
            </ul>
          </div>

          {/* Kolom 3: Navigasi */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">Navigasi</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="https://fosht" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Lihat Portofolio</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cara Pemesanan</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-[0.2em]">Hubungi Kami</h4>
            <p className="text-sm text-slate-400 mb-6 font-medium">febriansyahoshtore@gmail.com</p>
            <a 
              href="mailto:febriansyahoshtore@gmail.com" 
              className="inline-flex items-center gap-2 text-indigo-400 font-bold text-sm group"
            >
              Kirim Pertanyaan <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} OSHTORE. Hak Cipta Dilindungi.</p>
          <p className="italic">Built with passion by Febriansyah — Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;