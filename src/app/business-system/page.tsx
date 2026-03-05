'use client'; 

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ArrowDown, ShieldCheck, Server, Cloud, Code, Terminal, Workflow, Filter, SearchCode, Lock } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
// Import data dari file terpisah — update harga/fitur cukup di systemCatalog.tsx
import { SYSTEM_CATALOG, TECH_STACK, FILTERS } from '@/data/systemCatalog';
import PipelineSection from '@/components/shared/PipelineSection';



export default function SystemPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(SYSTEM_CATALOG);

  const handleFilterChange = (filterValue: string) => {
    if (filterValue === activeFilter) return;
    setIsAnimating(true);
    setActiveFilter(filterValue);
    setTimeout(() => {
      setDisplayedItems(filterValue === 'all' ? SYSTEM_CATALOG : SYSTEM_CATALOG.filter(i => i.category === filterValue));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <PageTransition className="flex flex-col gap-24 pb-24 relative z-10 overflow-hidden bg-[#020617]">

      {/* 1. HERO */}
      <section className="px-4 sm:px-6 pt-4 md:pt-16 text-center max-w-5xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 hidden md:block">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500" strokeDasharray="2 2" />
            <circle cx="10" cy="50" r="1" className="fill-blue-500" />
            <circle cx="50" cy="50" r="1.5" className="fill-indigo-500 animate-pulse" />
            <circle cx="90" cy="50" r="1" className="fill-purple-500" />
          </svg>
        </div>
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 sm:mb-8 backdrop-blur-md">
          <Server size={14} className="animate-pulse" /> Solusi IT & Automasi Bisnis
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-4 sm:mb-6 tracking-tighter">
          <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>Tinggalkan Cara Lama,</div>
          <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            Beralih ke <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Sistem Pintar.</span>
          </div>
        </h1>
        <p className="animate-fade-in-up text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto" style={{ animationDelay: '0.5s' }}>
          Dari sistem kasir (POS), ekstraksi data kompetitor, hingga bot otomatis. Kami membangun arsitektur digital kustom yang bekerja 24/7 tanpa human-error.
        </p>
        <div className="animate-fade-in-up flex flex-row justify-center w-full gap-2 sm:gap-5 relative z-10" style={{ animationDelay: '0.7s' }}>
          <a href="#systems" className="flex-1 sm:flex-none px-2 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl sm:rounded-full font-bold text-xs sm:text-lg hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-pulse-border border-2 border-transparent">
            <span className="hidden sm:inline">Lihat Layanan Kami</span><span className="sm:hidden">Lihat Layanan</span>
            <ArrowDown size={18} className="animate-float flex-shrink-0" />
          </a>
          <a href="https://wa.me/62895366766999" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none px-2 sm:px-6 py-3.5 sm:py-4 bg-slate-900/50 text-white border border-white/10 rounded-2xl sm:rounded-full font-bold text-xs sm:text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 group">
            <span className="hidden sm:inline">Konsultasi Arsitektur</span><span className="sm:hidden">Tanya Sistem</span>
            <Code size={16} className="group-hover:rotate-12 transition-transform flex-shrink-0" />
          </a>
        </div>
      </section>

      {/* 2. VALUE PROPS & TECH STACK */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { title: "Scalable Apps", desc: "Tangguh tangani ribuan data.", icon: <Workflow className="text-blue-400" /> },
              { title: "Security First", desc: "Enkripsi data berlapis.", icon: <ShieldCheck className="text-indigo-400" /> },
              { title: "Cloud Based", desc: "Akses sistem 24/7 di mana saja.", icon: <Cloud className="text-purple-400" /> },
              { title: "Privacy Safe", desc: "Database eksklusif milik Anda.", icon: <Lock className="text-emerald-400" /> }
            ].map((item, i) => (
              <div key={i} className={`animate-fade-in-up group p-4 sm:p-8 bg-[#0a0f24]/60 border border-white/5 rounded-2xl sm:rounded-[2rem] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-xl relative overflow-hidden ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`} style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform shadow-lg [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">{item.icon}</div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-[10px] sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="animate-fade-in-up border border-white/5 bg-white/[0.01] rounded-3xl p-6 sm:p-10 backdrop-blur-sm" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-center text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-6 sm:mb-8">Teknologi Modern yang Kami Gunakan</h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
              {TECH_STACK.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 grayscale hover:grayscale-0 transition-all">
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                  <span className="text-white text-xs sm:text-sm font-semibold hidden sm:block">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATALOG */}
      <section id="systems" className="px-4 sm:px-6 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="animate-slide-in-left flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-6">
              <Terminal size={28} className="text-indigo-500 hidden sm:block" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">Katalog <span className="text-indigo-400">Layanan Khusus</span></h2>
            </div>
            <p className="text-sm text-slate-400 flex items-center gap-2"><Filter size={16} className="text-indigo-500" /> Filter berdasarkan kebutuhan:</p>
          </div>
          <div className="animate-fade-in-up flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-white/10" style={{ animationDelay: '0.3s' }}>
            {FILTERS.map((filter, index) => (
              <button key={index} onClick={() => handleFilterChange(filter.value)} disabled={isAnimating}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeFilter === filter.value ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] scale-105' : 'bg-[#020617] text-slate-400 hover:text-white border border-white/10 hover:border-indigo-500/50 hover:bg-white/5'} ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
              >{filter.label}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 min-h-[400px]">
            {!isAnimating && displayedItems.length === 0 && (
              <div className="col-span-2 flex flex-col items-center justify-center p-12 text-center border border-white/5 border-dashed rounded-[2rem] filter-item-enter">
                <SearchCode size={48} className="text-slate-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-300 mb-2">Layanan Tidak Ditemukan</h3>
                <p className="text-slate-500">Silakan pilih kategori lain atau hubungi kami untuk kebutuhan kustom.</p>
              </div>
            )}
            {displayedItems.map((sys, idx) => (
              <div key={`${activeFilter}-${sys.id}`} className={`relative group bg-[#020617]/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)] ${isAnimating ? 'filter-item-exit' : 'filter-item-enter'}`} style={{ animationDelay: isAnimating ? '0s' : `${idx * 0.1}s` }}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all" />
                <div className="flex justify-between items-start mb-6 sm:mb-8 relative z-10">
                  <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-colors">{sys.icon}</div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-900/30 border border-indigo-500/20 px-3 py-1 rounded-full text-center max-w-[50%] leading-tight">
                    <span className="hidden sm:inline">Kecocokan: </span>{sys.bestFor}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-4 relative z-10">{sys.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8 leading-relaxed relative z-10 min-h-[40px] sm:min-h-[60px]">{sys.description}</p>
                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow relative z-10">
                  {sys.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-medium group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${fIdx * 50}ms` }}>
                      <CheckCircle2 size={16} className="text-indigo-500 flex-shrink-0 mt-0.5" /> {feat}
                    </div>
                  ))}
                </div>
                <div className="pt-5 sm:pt-8 border-t border-white/10 flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Estimasi Biaya</div>
                    <div className="text-lg sm:text-2xl font-black text-white">{sys.price}</div>
                  </div>
                  <a href={`https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20tertarik%20untuk%20diskusi%20tentang%20${encodeURIComponent(sys.title)}`} target="_blank" rel="noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)] active:scale-95 group/btn shrink-0 ml-2">
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PIPELINE */}
      <PipelineSection />

    </PageTransition>
  );
}