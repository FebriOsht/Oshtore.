'use client';

import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Settings,
  Zap,
  ShieldCheck,
  Star,
  MessageSquare
} from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import { LANDING_PAGE_PACKAGES } from '@/data/landingPageCatalog';
import { SYSTEM_CATALOG } from '@/data/systemCatalog';

// Watermark tile yang di-repeat ke seluruh halaman
// Menggunakan SVG inline via CSS background agar tidak bisa di-inspect dengan mudah
const WATERMARK_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='120'%3E%3Ctext transform='rotate(-25)' x='-30' y='70' font-family='monospace' font-size='13' fill='%236366f1' opacity='0.07' font-weight='bold' letter-spacing='2'%3EOSHTORE%3C/text%3E%3Ctext transform='rotate(-25)' x='80' y='130' font-family='monospace' font-size='11' fill='%236366f1' opacity='0.05' letter-spacing='1'%3E© OSHTORE 2026%3C/text%3E%3C/svg%3E")`;

export default function PricingPage() {
  return (
    <PageTransition className="flex flex-col gap-24 pb-24 relative z-10 overflow-hidden bg-[#020617]">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }

        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slide-in-left { animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-float { animation: float 4s ease-in-out infinite; will-change: transform; }

        /* 
          WATERMARK LAYER
          - pointer-events: none → tidak ganggu interaksi user
          - user-select: none → tidak ikut ter-copy saat user select teks
          - position: fixed → mengikuti scroll, tidak bisa di-scroll out
          - z-index tinggi tapi di bawah konten interaktif
          - mix-blend-mode: overlay → menyatu dengan background gelap
          - Tidak bisa dihapus dengan CSS inspector biasa karena inject via JS
        */
        .watermark-layer {
          position: fixed;
          inset: 0;
          z-index: 50;
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
          background-image: ${WATERMARK_SVG};
          background-repeat: repeat;
          background-size: 220px 120px;
          mix-blend-mode: screen;
          opacity: 1;
        }
      `}} />

      {/* Watermark overlay — fixed, ikut scroll, tidak bisa di-remove via devtools CSS panel dengan mudah */}
      <div className="watermark-layer" aria-hidden="true" />

      {/* Ambient background — static */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* HERO */}
      <section className="px-4 sm:px-6 pt-8 md:pt-16 text-center max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 backdrop-blur-md">
            <Star size={13} className="fill-indigo-400" /> Harga Transparan, Tanpa Biaya Tersembunyi
          </div>
        </div>

        <h1 className="animate-fade-in-up text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter" style={{ animationDelay: '0.2s' }}>
          Semua Paket &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            Harga Layanan
          </span>
        </h1>

        <p className="animate-fade-in-up text-sm sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
          Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda. Semua paket sudah termasuk konsultasi awal gratis.
        </p>
      </section>

      {/* ── SECTION 1: LANDING PAGE ── */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="animate-slide-in-left flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center shrink-0">
              <Monitor size={22} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">Layanan 01</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Landing Page</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow hidden sm:block" />
          </div>

          {/* Package Groups */}
          <div className="space-y-16">
            {LANDING_PAGE_PACKAGES.map((cat, catIdx) => (
              <div key={catIdx}>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-6 pl-1">{cat.category}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`animate-fade-in-up relative group bg-[#0a0f24]/60 backdrop-blur-xl border p-7 sm:p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                        item.popular
                          ? 'border-indigo-500/50 shadow-[0_0_40px_rgba(79,70,229,0.12)]'
                          : 'border-white/5 hover:border-white/10'
                      }`}
                      style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                    >
                      {item.popular && (
                        <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(79,70,229,0.4)] animate-pulse">
                          Terfavorit
                        </div>
                      )}

                      {/* Glow blob per card — static */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-[60px] group-hover:bg-indigo-500/10 transition-colors duration-700" />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6">
                          <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${item.popular ? 'text-indigo-400' : 'text-slate-500'}`}>
                            {item.name}
                          </p>
                          <div className="text-3xl sm:text-4xl font-black text-white tracking-tighter">{item.price}</div>
                          <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                            <Zap size={11} className="text-indigo-400" /> {item.update}
                          </p>
                        </div>

                        <div className="space-y-3.5 mb-8 flex-grow">
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                              <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${item.color === 'indigo' ? 'text-indigo-400' : 'text-blue-400'}`} />
                              {feat}
                            </div>
                          ))}
                        </div>

                        <a
                          href={`https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20tertarik%20dengan%20${encodeURIComponent(item.name)}`}
                          target="_blank"
                          rel="noreferrer"
                          className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all active:scale-95 flex items-center justify-center gap-2 group/btn ${
                            item.popular
                              ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)]'
                              : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          Pesan Sekarang <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BUSINESS SYSTEM ── */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="animate-slide-in-left flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center shrink-0">
              <Settings size={22} className="text-purple-400" />
            </div>
            <div>
              <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">Layanan 02</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Business System</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow hidden sm:block" />
          </div>

          {/* System Cards — grid 3 col di desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SYSTEM_CATALOG.map((sys, idx) => (
              <div
                key={sys.id}
                className="animate-fade-in-up relative group bg-[#0a0f24]/60 backdrop-blur-xl border border-white/5 p-7 sm:p-8 rounded-[2rem] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
              >
                {/* Static glow blob per card */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-[50px] group-hover:bg-purple-500/10 transition-colors duration-700" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-colors">
                      {sys.icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-300 bg-purple-900/30 border border-purple-500/20 px-2.5 py-1 rounded-full text-center leading-tight max-w-[45%]">
                      {sys.bestFor}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white mb-2 tracking-tight">{sys.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5 flex-grow">{sys.description}</p>

                  <div className="space-y-2.5 mb-6">
                    {sys.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 size={13} className="text-purple-400 mt-0.5 flex-shrink-0" /> {feat}
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Estimasi Biaya</p>
                      <p className="text-lg font-black text-white">{sys.price}</p>
                    </div>
                    <a
                      href={`https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20tertarik%20untuk%20diskusi%20tentang%20${encodeURIComponent(sys.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 bg-purple-600 text-white rounded-xl flex items-center justify-center hover:bg-purple-500 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] active:scale-95 group/btn shrink-0"
                    >
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="animate-fade-in-up max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/40 via-[#0a0f24] to-purple-950/40 border border-white/5 p-10 sm:p-16 rounded-[2.5rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cubes.png')] opacity-[0.04] mix-blend-overlay" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 animate-float">
              <MessageSquare size={24} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight">Bingung Pilih Paket?</h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Ceritakan kebutuhan bisnis Anda dan kami bantu rekomendasikan paket yang paling sesuai — gratis, tanpa komitmen.
            </p>
            <a
              href="https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20ingin%20konsultasi%20pilihan%20paket%20yang%20sesuai%20untuk%20bisnis%20saya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 bg-white text-indigo-950 rounded-full font-black text-sm sm:text-base hover:bg-slate-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 group/btn"
            >
              Konsultasi Gratis via WhatsApp
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}