import React from 'react';
import { 
  Instagram, 
  Github, 
  Globe, 
  ArrowRight, 
  Mail, 
  MapPin 
} from 'lucide-react';

/**
 * FOOTER COMPONENT - OSHTORE
 * Desain: Premium Dark Theme / Glassmorphism
 * Disesuaikan agar menyatu dengan nuansa High-Tech situs.
 * Dioptimalkan untuk Mobile agar tidak menumpuk memanjang.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
      {/* Dekorasi Cahaya Latar Belakang (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* GRID UTAMA - Dioptimalkan untuk Mobile (2 kolom) & Desktop (4 kolom) */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20">
          
          {/* Kolom 1: Info Brand (Membentang penuh di layar super kecil jika perlu, tapi kita set col-span-2 di mobile agar lega) */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] group-hover:rotate-6 transition-transform">
                O
              </div>
              <span className="text-xl md:text-2xl font-black tracking-widest text-white uppercase">
                OSHTORE<span className="text-indigo-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Membantu bisnis dan UMKM bertransformasi ke ranah digital dengan Landing Page konversi tinggi dan Sistem Operasional yang cerdas.
            </p>
            <div className="flex gap-3 md:gap-4 mt-2">
              {[
                { icon: <Instagram size={16} className="md:w-[18px] md:h-[18px]" />, href: "https://www.instagram.com/03.febriansyah", label: "Instagram" },
                { icon: <Github size={16} className="md:w-[18px] md:h-[18px]" />, href: "https://github.com/FebriOsht", label: "Github" },
                { icon: <Globe size={16} className="md:w-[18px] md:h-[18px]" />, href: "http://fosht.vercel.app", label: "Portfolio" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Layanan (Jadi 1 kolom di HP, sejajar dengan Perusahaan) */}
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-4 md:mb-8 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">Layanan Utama</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-400">
              <li><a href="/landing-page" className="hover:text-indigo-400 transition-colors flex items-start gap-2 group"><div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 transition-all mt-1.5 shrink-0"></div> Jasa Landing Page</a></li>
              <li><a href="/business-system" className="hover:text-indigo-400 transition-colors flex items-start gap-2 group"><div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 transition-all mt-1.5 shrink-0"></div> Sistem Kasir (POS)</a></li>
              <li><a href="/business-system" className="hover:text-indigo-400 transition-colors flex items-start gap-2 group"><div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 transition-all mt-1.5 shrink-0"></div> Manajemen Inventori</a></li>
              <li><a href="/business-system" className="hover:text-indigo-400 transition-colors flex items-start gap-2 group"><div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 transition-all mt-1.5 shrink-0"></div> Custom Dashboard</a></li>
            </ul>
          </div>

          {/* Kolom 3: Navigasi Cepat (Jadi 1 kolom di HP, sejajar dengan Layanan) */}
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-4 md:mb-8 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">Perusahaan</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-slate-400">
              <li><a href="http://fosht.vercel.app" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors block">Lihat Portofolio</a></li>
              <li><a href="/about" className="hover:text-indigo-400 transition-colors block">Tentang Oshtore</a></li>
              <li><a href="/ordering-method" className="hover:text-indigo-400 transition-colors block">Cara Pemesanan</a></li>
              <li><a href="/terms-conditions" className="hover:text-indigo-400 transition-colors block">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Support (Membentang penuh di bawah Layanan & Perusahaan pada mode mobile) */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 mt-4 lg:mt-0 pt-6 lg:pt-0 border-t border-white/5 lg:border-t-0">
            <h4 className="font-bold text-white mb-1 md:mb-2 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">Hubungi Kami</h4>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 lg:gap-4">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-indigo-500 mt-0.5 shrink-0 md:w-[18px] md:h-[18px]" />
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-tighter mb-0.5">Email Business</p>
                  <a href="mailto:oshtoreid@gmail.com" className="text-xs md:text-sm text-slate-300 hover:text-indigo-400 transition-colors break-all">
                    oshtoreid@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-indigo-500 mt-0.5 shrink-0 md:w-[18px] md:h-[18px]" />
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-tighter mb-0.5">Lokasi</p>
                  <p className="text-xs md:text-sm text-slate-300">Bandar Lampung, Indonesia</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/62895366766999" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 bg-white/[0.03] border border-white/10 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-white/10 hover:border-indigo-500/50 transition-all group mt-2 w-full sm:w-auto lg:w-full"
            >
              Diskusi via WhatsApp
              <ArrowRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Baris Bawah: Copyright */}
        <div className="pt-6 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <p className="text-[10px] md:text-xs text-slate-500 font-medium">
              &copy; {currentYear} <span className="text-slate-300 font-bold">OSHTORE</span>. Seluruh Hak Cipta Dilindungi.
            </p>
            <p className="text-[8px] md:text-[10px] text-slate-600 italic">
              Crafting Digital Excellence for Tomorrow.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-slate-500 font-mono bg-white/[0.02] px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/5">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            SYSTEM STATUS: ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;