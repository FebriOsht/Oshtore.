'use client';

import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown,
  Zap, 
  Monitor, 
  Smartphone, 
  Search, 
  Clock, 
  ShieldCheck,
  Star,
  Layers,
  Code,
  ExternalLink
} from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

/**
 * DATA KATALOG LANDING PAGE
 * (Dipindahkan ke sini agar pratinjau Canvas tidak error)
 * Di proyek lokal (VS Code), Anda dapat memindahkan ini kembali ke src/data/landingPageCatalog.ts
 */
const LANDING_PAGE_PACKAGES = [
  {
    category: "Paket UMKM",
    items: [
      {
        name: "UMKM Basic",
        price: "Rp 950.000",
        update: "Gratis Update 2 Bulan",
        features: [
          "Landing Page (1 Halaman)",
          "UI/UX Modern & Clean",
          "Domain .com/.net (1 Thn)",
          "Optimasi SEO Dasar",
          "Integrasi WhatsApp",
          "Loading Super Cepat"
        ],
        color: "indigo"
      },
      {
        name: "UMKM Special",
        price: "Rp 1.450.000",
        update: "Gratis Update 2 Bulan",
        features: [
          "Semua Fitur Paket Basic",
          "Branding Warna Usaha",
          "Logo / Foto / Video Asset",
          "Galeri Produk & Pemesanan",
          "Integrasi Media Sosial",
          "Section Blog/Berita"
        ],
        color: "indigo",
        popular: true
      }
    ]
  },
  {
    category: "Paket Bisnis",
    items: [
      {
        name: "Bisnis Basic",
        price: "Rp 1.300.000",
        update: "Gratis Update 3 Bulan",
        features: [
          "Landing Page Profesional",
          "UI/UX Eksklusif",
          "Domain Premium (1 Thn)",
          "Google Analytics Integration",
          "Lokasi Google Maps",
          "Optimasi SEO Lanjutan"
        ],
        color: "blue"
      },
      {
        name: "Bisnis Special",
        price: "Rp 1.900.000",
        update: "Gratis Update 3 Bulan",
        features: [
          "Semua Fitur Paket Bisnis Basic",
          "Custom Branding & Logo",
          "Copywriting Persuasif",
          "Advanced Contact Form",
          "Integrasi Marketing Tools",
          "Prioritas Pengerjaan"
        ],
        color: "blue",
        popular: false
      }
    ]
  }
];

/**
 * HALAMAN UTAMA (KATALOG LANDING PAGE)
 * Menampilkan pilihan paket pembuatan landing page dengan animasi premium.
 */
export default function LandingPageCatalog() {
  return (
    // Background dipaksa ke mode gelap (#020617)
    <PageTransition className="flex flex-col gap-24 pb-24 relative z-10 overflow-hidden bg-[#020617]">
      
      {/* Injeksi Custom Keyframes Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes buttonPulse {
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(79, 70, 229, 0); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slide-in-left { animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slide-in-right { animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-reveal-scale { animation: revealScale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-glow { animation: glowPulse 4s ease-in-out infinite; }
        .animate-button-pulse { animation: buttonPulse 2s infinite; }
      `}} />

      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 pt-4 md:pt-8 text-center max-w-5xl mx-auto relative">
        <div className="absolute top-10 left-10 text-indigo-500/20 animate-float-slow hidden md:block">
          <Code size={64} />
        </div>
        <div className="absolute bottom-10 right-10 text-blue-500/20 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
          <Layers size={64} />
        </div>

        <div className="animate-reveal-scale inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 backdrop-blur-md" style={{ animationDelay: '0.1s' }}>
          <Star size={14} className="fill-indigo-400 animate-pulse" /> Solusi Konversi Tinggi
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter overflow-hidden">
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Landing Page yang 
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-pulse">
              Menjual
            </span> untuk Bisnis Anda
          </div>
        </h1>
        
        <p className="animate-fade-in-up text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto" style={{ animationDelay: '0.6s' }}>
          Kami mendesain landing page premium yang tidak hanya memanjakan mata, tetapi dioptimasi secara teknis untuk mengubah pengunjung menjadi pembeli setia.
        </p>
        
        <div className="animate-reveal-scale flex flex-row justify-center w-full gap-2 sm:gap-5 relative z-10" style={{ animationDelay: '0.8s' }}>
          <a href="#pricing" className="animate-button-pulse flex-1 sm:flex-none px-2 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl sm:rounded-full font-bold text-xs sm:text-lg hover:from-indigo-500 hover:to-blue-500 transition-all flex items-center justify-center gap-1.5 sm:gap-3 active:scale-95 border border-indigo-500/50">
            <span className="hidden sm:inline">Lihat Paket Harga</span>
            <span className="sm:hidden">Paket Harga</span>
            <ArrowDown size={18} className="animate-float flex-shrink-0" style={{ animationDuration: '1.5s' }}/>
          </a>
          
          <a href="http://fosht.vercel.app" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none px-2 sm:px-8 py-3.5 sm:py-4 bg-white/5 text-white border border-white/10 rounded-2xl sm:rounded-full font-bold text-xs sm:text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-1.5 sm:gap-2 group">
            <span className="hidden sm:inline">Lihat Portofolio</span>
            <span className="sm:hidden">Portofolio</span>
            <ExternalLink size={16} className="group-hover:rotate-12 transition-transform flex-shrink-0" />
          </a>
        </div>
      </section>

      {/* 2. KEY BENEFITS */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {[
            { icon: <Smartphone />, title: "Mobile Friendly", desc: "Tampilan responsif di semua ukuran HP." },
            { icon: <Zap />, title: "Loading Kilat", desc: "Cegah pengunjung kabur dengan akses cepat." },
            { icon: <Search />, title: "SEO Ready", desc: "Struktur rapi mudah ditemukan Google." },
            { icon: <Layers />, title: "High Conversion", desc: "Tata letak fokus pada penjualan." }
          ].map((benefit, i) => (
            <div 
              key={i} 
              className="animate-fade-in-up group p-4 sm:p-8 bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-[2rem] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.1)]"
              style={{ animationDelay: `${0.8 + (i * 0.15)}s` }}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-all [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                {benefit.icon}
              </div>
              <h4 className="font-bold text-white text-sm sm:text-lg mb-1 sm:mb-2">{benefit.title}</h4>
              <p className="text-[10px] sm:text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRICING GRID */}
      <section id="pricing" className="px-6 scroll-mt-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {LANDING_PAGE_PACKAGES.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className="animate-slide-in-left flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">{cat.category}</h2>
                <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`animate-fade-in-up relative group bg-[#0a0f24]/50 backdrop-blur-xl border ${
                      item.popular 
                        ? 'border-indigo-500/50 shadow-[0_0_40px_rgba(79,70,229,0.15)] bg-indigo-950/20' 
                        : 'border-white/5 hover:border-white/10'
                    } p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 flex flex-col`}
                    style={{ animationDelay: `${0.3 + (idx * 0.2)}s` }}
                  >
                    {item.popular && (
                      <div className="absolute -top-4 right-6 sm:right-10 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.4)] animate-pulse">
                        Pilihan Terfavorit
                      </div>
                    )}
                    <div className="mb-8 sm:mb-10">
                      <h3 className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 ${item.popular ? 'text-indigo-400' : 'text-slate-400'}`}>
                        {item.name}
                      </h3>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">{item.price}</div>
                    </div>
                    <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 flex-grow">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 sm:gap-4 text-slate-300 font-medium text-sm sm:text-base group-hover:translate-x-2 transition-transform" style={{ transitionDelay: `${fIdx * 50}ms` }}>
                          <CheckCircle2 size={18} className={`${item.color === 'indigo' ? 'text-indigo-400' : 'text-blue-400'} mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col gap-4 sm:gap-5">
                      <div className="flex items-center gap-2 text-slate-400 font-medium text-xs sm:text-sm">
                        <Clock size={14} className={item.color === 'indigo' ? 'text-indigo-400' : 'text-blue-400'} /> {item.update}
                      </div>
                      <a 
                        href={`https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20tertarik%20dengan%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg text-center transition-all duration-300 active:scale-95 ${
                          item.popular 
                            ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]' 
                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        Pesan Paket Ini
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROCESS/WAKTU */}
      <section className="px-4 sm:px-6 mt-10">
        <div className="animate-reveal-scale max-w-5xl mx-auto bg-indigo-950/20 border border-indigo-500/10 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] text-center relative overflow-hidden">
          <div className="animate-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10">
            <div className="animate-float w-16 h-16 sm:w-20 sm:h-20 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-[0_0_30px_rgba(79,70,229,0.2)]">
              <Zap className="text-indigo-400 animate-pulse w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">Waktu Pengerjaan Kilat</h3>
            <p className="text-slate-300 text-lg sm:text-xl mb-3 sm:mb-4">Selesai hanya dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-black text-2xl sm:text-3xl">1 - 2 HARI</span> kerja.</p>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">Kami memadukan framework modern (Next.js) dan alur kerja efisien untuk memberikan hasil super cepat tanpa mengorbankan kualitas UI/UX.</p>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="px-4 sm:px-6 mb-10">
        <div className="animate-fade-in-up max-w-7xl mx-auto bg-gradient-to-br from-indigo-900 to-[#020617] p-8 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.1)] border border-indigo-500/20">
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10">
            <div className="animate-float inline-flex items-center justify-center p-3 bg-indigo-500/20 rounded-2xl mb-6 sm:mb-8 border border-indigo-500/30" style={{ animationDelay: '1s' }}>
              <Code size={24} className="text-indigo-300" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 tracking-tighter">Butuh Sistem Kustom <br className="hidden sm:block"/>Selain Landing Page?</h2>
            <p className="text-indigo-200/80 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl leading-relaxed">
              Kami melayani pembuatan Sistem Kasir (POS), Manajemen Inventori, dan Dashboard Owner khusus untuk mempercepat operasional bisnis Anda.
            </p>
            <a 
              href="/business-system" 
              className="animate-button-pulse inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-indigo-600 text-white rounded-2xl sm:rounded-full font-black text-sm sm:text-lg hover:bg-indigo-500 transition-all active:scale-95 group border border-indigo-500/50"
            >
              Lihat Katalog Sistem 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}