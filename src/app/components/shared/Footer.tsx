import React from 'react';
import { Instagram, Github, Globe, ArrowRight } from 'lucide-react';

/**
 * Footer Component
 * Berisi informasi brand, link cepat, dan ajakan kontak.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Info Brand & Sosmed */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">O</div>
              <span className="text-xl font-bold text-slate-900">Oshtore</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Membantu bisnis dan UMKM bertransformasi digital dengan Landing Page konversi tinggi dan Sistem Bisnis yang efisien.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all" title="Instagram"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all" title="Github"><Github size={16} /></a>
              <a href="https://fosht" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all" title="Portfolio"><Globe size={16} /></a>
            </div>
          </div>

          {/* Link Layanan */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Layanan Kami</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="/landing-page" className="hover:text-indigo-600 transition-colors">Jasa Landing Page</a></li>
              <li><a href="/system" className="hover:text-indigo-600 transition-colors">Sistem Kasir (POS)</a></li>
              <li><a href="/system" className="hover:text-indigo-600 transition-colors">Manajemen Inventori</a></li>
              <li><a href="/system" className="hover:text-indigo-600 transition-colors">Custom Business App</a></li>
            </ul>
          </div>

          {/* Link Perusahaan */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="https://fosht" className="hover:text-indigo-600 transition-colors">Lihat Portofolio</a></li>
              <li><a href="#about" className="hover:text-indigo-600 transition-colors">Tentang Kami</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Kontak</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Kontak Langsung */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Mulai Proyek?</h4>
            <p className="text-sm text-slate-500 mb-4">Punya ide sistem atau butuh website cepat? Mari bicarakan.</p>
            <a href="mailto:febriansyahoshtore@gmail.com" className="text-sm font-bold text-indigo-600 flex items-center gap-2 group">
              febriansyahoshtore@gmail.com
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Hak Cipta & Credit */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">&copy; {currentYear} Oshtore. Hak Cipta Dilindungi.</p>
          <p className="text-xs text-slate-400 italic">Dikembangkan dengan Next.js & TypeScript oleh Febriansyah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;