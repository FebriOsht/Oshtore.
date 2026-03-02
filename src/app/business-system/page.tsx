'use client'; 

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown,
  ShieldCheck,
  Server,
  Cloud,
  Code,
  Terminal,
  Workflow,
  Filter,
  SearchCode,
  BarChart3,
  Database,
  Bot,
  Cpu,
  Lock,
  Smartphone
} from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

/**
 * DATA KATALOG SISTEM (Disatukan di sini agar pratinjau Canvas tidak error)
 * Untuk proyek lokal Anda, Anda bisa memindahkan ini kembali ke src/data/systemCatalog.tsx
 */
const TECH_STACK = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
];

const SYSTEM_CATALOG = [
  {
    id: 1,
    title: "Sistem Kasir (POS) Custom",
    description: "Sistem kasir yang didesain khusus sesuai SOP bisnis Anda. Termasuk manajemen inventori dasar, laporan keuangan otomatis, dan sistem diskon kustom.",
    icon: <BarChart3 className="text-blue-400" size={32} />,
    features: ["Laporan Penjualan Real-time", "Manajemen Multi-cabang", "Integrasi Pembayaran Digital", "Cetak Struk & Nota Digital", "Otoritas Akses Pegawai"],
    price: "Mulai Rp 7.500.000",
    bestFor: "Retail, F&B, Toko Modern",
    category: "retail"
  },
  {
    id: 2,
    title: "Manajemen Inventori & Gudang",
    description: "Solusi otomatisasi untuk bisnis dengan pergerakan barang tinggi. Dilengkapi algoritma pengingat stok, manajemen supplier, dan audit digital.",
    icon: <Database className="text-indigo-400" size={32} />,
    features: ["Peringatan Stok Rendah (Auto)", "Audit & Opname Digital", "Manajemen Supplier & PO", "History Keluar/Masuk Barang", "Barcode/QR Scanner Support"],
    price: "Mulai Rp 9.500.000",
    bestFor: "Gudang, Distributor, Pabrik",
    category: "gudang"
  },
  {
    id: 3,
    title: "Web Scraping & Data Mining",
    description: "Ekstraksi data skala besar dari marketplace atau website kompetitor. Dibangun dengan sistem rotasi proxy untuk menghindari blokir.",
    icon: <SearchCode className="text-emerald-400" size={32} />,
    features: ["Ekstraksi Data Marketplace", "Scraping Direktori Bisnis", "Format Output (Excel/CSV/JSON)", "Bypass Anti-Bot Lanjutan", "Scraping Terjadwal"],
    price: "Mulai Rp 3.500.000",
    bestFor: "Riset Pasar, Agen Properti",
    category: "data"
  },
  {
    id: 4,
    title: "Bot Otomasi & Scripting",
    description: "Otomatisasi alur kerja digital seperti bot manajemen WhatsApp, bot Telegram interaktif, atau script RPA (Robotic Process Automation).",
    icon: <Bot className="text-amber-400" size={32} />,
    features: ["Bot Telegram / WhatsApp", "Auto Input Data (Web Automation)", "Notifikasi Real-time Server", "Integrasi API Pihak Ketiga", "Log Aktivitas Terpusat"],
    price: "Mulai Rp 4.500.000",
    bestFor: "Customer Service, Admin",
    category: "otomasi"
  },
  {
    id: 5,
    title: "Dashboard ERP / Admin Monitoring",
    description: "Sistem manajemen sumber daya perusahaan terintegrasi. Memantau keuangan, HRD, dan operasional dalam satu dashboard interaktif.",
    icon: <Cpu className="text-purple-400" size={32} />,
    features: ["Grafik Pertumbuhan Interaktif", "CRM (Manajemen Pelanggan)", "Manajemen Kinerja Pegawai (KPI)", "Ekspor Laporan Kompleks", "Akses Cloud Terenkripsi"],
    price: "Mulai Rp 15.000.000",
    bestFor: "Owner Bisnis, Manajer Level Atas",
    category: "manajemen"
  },
  {
    id: 6,
    title: "Custom Enterprise Web App",
    description: "Pembangunan aplikasi web skala besar dengan arsitektur mikroservis untuk kebutuhan bisnis yang sangat unik dan kompleks.",
    icon: <Server className="text-teal-400" size={32} />,
    features: ["Arsitektur Skalabel (AWS/GCP)", "Keamanan Data Enkripsi Tinggi", "Full Source Code Kepemilikan", "Dukungan Teknis Prioritas", "UI/UX Tailor-made"],
    price: "Hubungi Kami",
    bestFor: "Perusahaan Skala Besar",
    category: "enterprise"
  }
];

/**
 * BUSINESS SYSTEM PAGE
 * Menampilkan layanan khusus IT, web kustom, dan otomasi.
 * Dilengkapi dengan fitur Filter Kategori Animatif dan optimasi Mobile.
 */
export default function SystemPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(SYSTEM_CATALOG);

  const filters = [
    { label: "Semua", value: "all" },
    { label: "Retail & F&B", value: "retail" },
    { label: "Gudang & Pabrik", value: "gudang" },
    { label: "Owner & Manajer", value: "manajemen" },
    { label: "Riset & Data", value: "data" },
    { label: "CS & Otomasi", value: "otomasi" },
    { label: "Enterprise", value: "enterprise" },
  ];

  const handleFilterChange = (filterValue: string) => {
    if (filterValue === activeFilter) return;
    
    setIsAnimating(true);
    setActiveFilter(filterValue);
    
    setTimeout(() => {
      if (filterValue === 'all') {
        setDisplayedItems(SYSTEM_CATALOG);
      } else {
        const filtered = SYSTEM_CATALOG.filter(item => item.category === filterValue);
        setDisplayedItems(filtered);
      }
      setIsAnimating(false);
    }, 300);
  };

  return (
    // Background dipaksa ke mode gelap (#020617)
    <PageTransition className="flex flex-col gap-24 pb-24 relative z-10 overflow-hidden bg-[#020617]">
      
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes pulseBorder { 0% { border-color: rgba(79, 70, 229, 0.2); } 50% { border-color: rgba(79, 70, 229, 0.8); } 100% { border-color: rgba(79, 70, 229, 0.2); } }
        
        /* Sequential Terminal Animation (Durasi 28s) */
        @keyframes clearTerminal { 0%, 94% { opacity: 1; } 95%, 100% { opacity: 0; } }
        @keyframes showL1 { 0%, 94% { max-height: 500px; opacity: 1; margin-bottom: 16px; overflow: visible; } 95%, 100% { max-height: 0; opacity: 0; margin-bottom: 0; overflow: hidden; } }
        @keyframes showL2 { 0%, 19% { max-height: 0; opacity: 0; margin-bottom: 0; overflow: hidden; } 20%, 94% { max-height: 500px; opacity: 1; margin-bottom: 16px; overflow: visible; } 95%, 100% { max-height: 0; opacity: 0; margin-bottom: 0; overflow: hidden; } }
        @keyframes showL3 { 0%, 39% { max-height: 0; opacity: 0; margin-bottom: 0; overflow: hidden; } 40%, 94% { max-height: 500px; opacity: 1; margin-bottom: 16px; overflow: visible; } 95%, 100% { max-height: 0; opacity: 0; margin-bottom: 0; overflow: hidden; } }
        @keyframes showL4 { 0%, 59% { max-height: 0; opacity: 0; margin-bottom: 0; overflow: hidden; } 60%, 94% { max-height: 500px; opacity: 1; margin-bottom: 16px; overflow: visible; } 95%, 100% { max-height: 0; opacity: 0; margin-bottom: 0; overflow: hidden; } }
        @keyframes showClear { 0%, 79% { max-height: 0; opacity: 0; overflow: hidden; } 80%, 94% { max-height: 50px; opacity: 1; overflow: visible; } 95%, 100% { max-height: 0; opacity: 0; overflow: hidden; } }

        @keyframes typeL1 { 0% { width: 0; } 5%, 100% { width: 28ch; } }
        @keyframes typeL2 { 0%, 20% { width: 0; } 25%, 100% { width: 27ch; } }
        @keyframes typeL3 { 0%, 40% { width: 0; } 45%, 100% { width: 25ch; } }
        @keyframes typeL4 { 0%, 60% { width: 0; } 65%, 100% { width: 26ch; } }
        @keyframes typeClear { 0%, 80% { width: 0; } 82%, 100% { width: 5ch; } }

        @keyframes revL1 { 0%, 6% { opacity: 0; transform: translateY(-5px); } 8%, 100% { opacity: 1; transform: translateY(0); } }
        @keyframes revL2 { 0%, 26% { opacity: 0; transform: translateY(-5px); } 28%, 100% { opacity: 1; transform: translateY(0); } }
        @keyframes revL3 { 0%, 46% { opacity: 0; transform: translateY(-5px); } 48%, 100% { opacity: 1; transform: translateY(0); } }
        @keyframes revL4 { 0%, 66% { opacity: 0; transform: translateY(-5px); } 68%, 100% { opacity: 1; transform: translateY(0); } }

        @keyframes cursorL1 { 0%, 19% { opacity: 1; } 20%, 100% { opacity: 0; } }
        @keyframes cursorL2 { 0%, 19% { opacity: 0; } 20%, 39% { opacity: 1; } 40%, 100% { opacity: 0; } }
        @keyframes cursorL3 { 0%, 39% { opacity: 0; } 40%, 59% { opacity: 1; } 60%, 100% { opacity: 0; } }
        @keyframes cursorL4 { 0%, 59% { opacity: 0; } 60%, 79% { opacity: 1; } 80%, 100% { opacity: 0; } }
        @keyframes cursorClear { 0%, 79% { opacity: 0; } 80%, 94% { opacity: 1; } 95%, 100% { opacity: 0; } }

        @keyframes blinkCursor { 0%, 49% { border-color: transparent; background-color: transparent; } 50%, 100% { border-color: #34d399; background-color: #34d399; } }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slide-in-left { animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slide-in-right { animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-pulse-border { animation: pulseBorder 3s infinite; }
        
        .filter-item-enter { animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .filter-item-exit { opacity: 0; transform: scale(0.95); transition: all 0.3s ease; }
        
        .term-container { animation: clearTerminal 28s infinite; }
        .term-l1 { animation: showL1 28s infinite; }
        .term-l2 { animation: showL2 28s infinite; }
        .term-l3 { animation: showL3 28s infinite; }
        .term-l4 { animation: showL4 28s infinite; }
        .term-clear { animation: showClear 28s infinite; }

        .type-l1 { display: inline-block; overflow: hidden; white-space: nowrap; vertical-align: bottom; animation: typeL1 28s steps(28, end) infinite; }
        .type-l2 { display: inline-block; overflow: hidden; white-space: nowrap; vertical-align: bottom; animation: typeL2 28s steps(27, end) infinite; }
        .type-l3 { display: inline-block; overflow: hidden; white-space: nowrap; vertical-align: bottom; animation: typeL3 28s steps(25, end) infinite; }
        .type-l4 { display: inline-block; overflow: hidden; white-space: nowrap; vertical-align: bottom; animation: typeL4 28s steps(26, end) infinite; }
        .type-clear { display: inline-block; overflow: hidden; white-space: nowrap; vertical-align: bottom; animation: typeClear 28s steps(5, end) infinite; }

        .rev-l1 { animation: revL1 28s infinite; }
        .rev-l2 { animation: revL2 28s infinite; }
        .rev-l3 { animation: revL3 28s infinite; }
        .rev-l4 { animation: revL4 28s infinite; }

        .cursor-1 { animation: cursorL1 28s infinite; }
        .cursor-2 { animation: cursorL2 28s infinite; }
        .cursor-3 { animation: cursorL3 28s infinite; }
        .cursor-4 { animation: cursorL4 28s infinite; }
        .cursor-clear { animation: cursorClear 28s infinite; }
        
        .blinker { display: inline-block; width: 8px; height: 16px; background-color: #34d399; margin-left: 4px; vertical-align: middle; animation: blinkCursor 0.8s step-end infinite; }
      `}} />

      {/* 1. HERO SECTION */}
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
          <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            Tinggalkan Cara Lama,
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            Beralih ke <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Sistem Pintar.</span>
          </div>
        </h1>
        
        <p className="animate-fade-in-up text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto" style={{ animationDelay: '0.5s' }}>
          Dari sistem kasir (POS), ekstraksi data kompetitor, hingga bot otomatis. Kami membangun arsitektur digital kustom yang bekerja 24/7 tanpa human-error.
        </p>
        
        <div className="animate-fade-in-up flex flex-row justify-center w-full gap-2 sm:gap-5 relative z-10" style={{ animationDelay: '0.7s' }}>
          <a href="#systems" className="flex-1 sm:flex-none px-2 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl sm:rounded-full font-bold text-xs sm:text-lg hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-pulse-border border-2 border-transparent">
            <span className="hidden sm:inline">Lihat Layanan Kami</span>
            <span className="sm:hidden">Lihat Layanan</span>
            <ArrowDown size={18} className="animate-float flex-shrink-0"/>
          </a>
          <a href="https://wa.me/62895366766999" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none px-2 sm:px-6 py-3.5 sm:py-4 bg-slate-900/50 text-white border border-white/10 rounded-2xl sm:rounded-full font-bold text-xs sm:text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 group">
            <span className="hidden sm:inline">Konsultasi Arsitektur</span>
            <span className="sm:hidden">Tanya Sistem</span>
            <Code size={16} className="group-hover:rotate-12 transition-transform flex-shrink-0" />
          </a>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION & TECH STACK */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {[
              { title: "Scalable Apps", desc: "Tangguh tangani ribuan data.", icon: <Workflow className="text-blue-400" /> },
              { title: "Security First", desc: "Enkripsi data berlapis.", icon: <ShieldCheck className="text-indigo-400" /> },
              { title: "Cloud Based", desc: "Akses sistem 24/7 di mana saja.", icon: <Cloud className="text-purple-400" /> },
              { title: "Privacy Safe", desc: "Database eksklusif milik Anda.", icon: <Lock className="text-emerald-400" /> }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`animate-fade-in-up group p-4 sm:p-8 bg-[#0a0f24]/60 border border-white/5 rounded-2xl sm:rounded-[2rem] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-xl relative overflow-hidden ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
                style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform shadow-lg [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  {item.icon}
                </div>
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

      {/* 3. CATALOG GRID WITH FILTER */}
      <section id="systems" className="px-4 sm:px-6 scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          
          <div className="animate-slide-in-left flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-6">
              <Terminal size={28} className="text-indigo-500 hidden sm:block" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">Katalog <span className="text-indigo-400">Layanan Khusus</span></h2>
            </div>
            
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <Filter size={16} className="text-indigo-500" /> Filter berdasarkan kebutuhan:
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="animate-fade-in-up flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-white/10" style={{ animationDelay: '0.3s' }}>
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => handleFilterChange(filter.value)}
                disabled={isAnimating}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] scale-105 border-transparent'
                    : 'bg-[#020617] text-slate-400 hover:text-white border border-white/10 hover:border-indigo-500/50 hover:bg-white/5'
                } ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Grid Layout untuk Hasil Filter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 min-h-[400px] relative">
            {!isAnimating && displayedItems.length === 0 && (
              <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center p-12 text-center border border-white/5 border-dashed rounded-[2rem] filter-item-enter">
                <SearchCode size={48} className="text-slate-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-300 mb-2">Layanan Tidak Ditemukan</h3>
                <p className="text-slate-500">Silakan pilih kategori lain atau hubungi kami untuk kebutuhan kustom.</p>
              </div>
            )}

            {displayedItems.map((sys, idx) => (
              <div 
                key={`${activeFilter}-${sys.id}`}
                className={`relative group bg-[#020617]/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)] ${isAnimating ? 'filter-item-exit' : 'filter-item-enter'}`}
                style={{ animationDelay: isAnimating ? '0s' : `${idx * 0.1}s` }}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
                
                <div className="flex justify-between items-start mb-6 sm:mb-8 relative z-10">
                  <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-colors">
                    {sys.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-900/30 border border-indigo-500/20 px-3 py-1 rounded-full text-center max-w-[50%] leading-tight">
                    <span className="hidden sm:inline">Kecocokan: </span>{sys.bestFor}
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-4 relative z-10">{sys.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8 leading-relaxed relative z-10 min-h-[40px] sm:min-h-[60px]">
                  {sys.description}
                </p>

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
                  <a 
                    href={`https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20tertarik%20untuk%20diskusi%20tentang%20${encodeURIComponent(sys.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 text-white rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)] active:scale-95 group/btn shrink-0 ml-2"
                  >
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION (Terminal Animation) */}
      <section className="px-4 sm:px-6">
        <div className="animate-fade-in-up max-w-5xl mx-auto bg-[#0a0f24] border border-white/10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="bg-white/5 border-b border-white/10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-20 relative">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-slate-400 truncate px-2">oshtore_deploy.exe</div>
            <div className="w-8 sm:w-12"></div>
          </div>

          <div className="p-5 sm:p-10 md:p-12 relative z-10">
            <div className="mb-6 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white mb-2 font-mono tracking-tight flex items-center gap-2 sm:gap-3">
                <Terminal className="text-indigo-500 w-5 h-5 sm:w-8 sm:h-8 shrink-0" /> Pipeline Pengerjaan
              </h2>
            </div>

            <div className="flex flex-col font-mono text-[10px] sm:text-sm bg-[#020617] p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-white/5 shadow-inner min-h-[320px] sm:min-h-[350px]">
              <div className="term-container flex flex-col w-full overflow-hidden">
                
                {/* STEP 1 */}
                <div className="term-l1 flex flex-col w-full">
                  <div className="flex items-center text-slate-300 w-full overflow-hidden">
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 hidden sm:inline">admin@oshtore:~$</span>
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 sm:hidden">~$</span>
                    <span className="type-l1 text-indigo-300">./execute_phase_01 --analyze</span>
                    <span className="cursor-1 blinker shrink-0"></span>
                  </div>
                  <div className="rev-l1 pl-2 sm:pl-4 border-l-2 border-indigo-500/30 ml-1 sm:ml-2 py-2 mt-2">
                    <span className="text-yellow-400">[PROCESS]</span> Analisis sistem...<br/>
                    <span className="text-green-400">[SUCCESS]</span> Alur dipetakan.<br/>
                    <h4 className="font-bold text-white mt-2 break-words">&gt;&gt; Tahap 01: System Requirement</h4>
                    <p className="text-slate-400 mt-1 whitespace-normal break-words pr-2">Merumuskan logika aplikasi, database, dan batas sistem secara spesifik.</p>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="term-l2 flex flex-col w-full">
                  <div className="flex items-center text-slate-300 w-full overflow-hidden">
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 hidden sm:inline">admin@oshtore:~$</span>
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 sm:hidden">~$</span>
                    <span className="type-l2 text-indigo-300">./build_architecture --uiux</span>
                    <span className="cursor-2 blinker shrink-0"></span>
                  </div>
                  <div className="rev-l2 pl-2 sm:pl-4 border-l-2 border-indigo-500/30 ml-1 sm:ml-2 py-2 mt-2">
                    <span className="text-yellow-400">[RENDER]</span> Menggambar UI...<br/>
                    <span className="text-green-400">[SUCCESS]</span> Antarmuka siap.<br/>
                    <h4 className="font-bold text-white mt-2 break-words">&gt;&gt; Tahap 02: UI/UX Architecture</h4>
                    <p className="text-slate-400 mt-1 whitespace-normal break-words pr-2">Desain antarmuka yang mudah dioperasikan staf non-teknis sekalipun.</p>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="term-l3 flex flex-col w-full">
                  <div className="flex items-center text-slate-300 w-full overflow-hidden">
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 hidden sm:inline">admin@oshtore:~$</span>
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 sm:hidden">~$</span>
                    <span className="type-l3 text-indigo-300">npm run agile-development</span>
                    <span className="cursor-3 blinker shrink-0"></span>
                  </div>
                  <div className="rev-l3 pl-2 sm:pl-4 border-l-2 border-indigo-500/30 ml-1 sm:ml-2 py-2 mt-2">
                    <span className="text-yellow-400">[CODING]</span> Menulis backend...<br/>
                    <span className="text-green-400">[TESTING]</span> 0 Bugs ditemukan.<br/>
                    <h4 className="font-bold text-white mt-2 break-words">&gt;&gt; Tahap 03: Agile Development</h4>
                    <p className="text-slate-400 mt-1 whitespace-normal break-words pr-2">Penulisan script Python/Node.js yang aman beserta pengujian beban (load test).</p>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="term-l4 flex flex-col w-full">
                  <div className="flex items-center text-slate-300 w-full overflow-hidden">
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 hidden sm:inline">admin@oshtore:~$</span>
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 sm:hidden">~$</span>
                    <span className="type-l4 text-indigo-300">sudo deploy --server cloud</span>
                    <span className="cursor-4 blinker shrink-0"></span>
                  </div>
                  <div className="rev-l4 pl-2 sm:pl-4 border-l-2 border-indigo-500/30 ml-1 sm:ml-2 py-2 mt-2">
                    <span className="text-yellow-400">[UPLOAD]</span> Transfer ke server...<br/>
                    <span className="text-green-400">[ONLINE]</span> Sistem live.<br/>
                    <h4 className="font-bold text-white mt-2 break-words">&gt;&gt; Tahap 04: Deployment & Handover</h4>
                    <p className="text-slate-400 mt-1 whitespace-normal break-words pr-2">Aplikasi di-hosting ke cloud server, penyerahan Source Code, dan masa garansi.</p>
                  </div>
                </div>

                {/* COMMAND CLEAR */}
                <div className="term-clear flex flex-col w-full">
                  <div className="flex items-center text-slate-300 w-full overflow-hidden">
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 hidden sm:inline">admin@oshtore:~$</span>
                    <span className="text-emerald-400 font-bold mr-2 shrink-0 sm:hidden">~$</span>
                    <span className="type-clear text-indigo-300">clear</span>
                    <span className="cursor-clear blinker shrink-0"></span>
                  </div>
                </div>

              </div>
              
              {/* Kursor stand-by */}
              <div className="flex items-center mt-auto opacity-100">
                <span className="text-emerald-400 font-bold mr-2 shrink-0 hidden sm:inline">admin@oshtore:~$</span>
                <span className="text-emerald-400 font-bold mr-2 shrink-0 sm:hidden">~$</span>
                <span className="blinker shrink-0" style={{ animationDelay: '0.4s' }}></span>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="px-4 sm:px-6 mb-10">
        <div className="animate-fade-in-up max-w-4xl mx-auto bg-gradient-to-br from-indigo-600/20 to-blue-900/20 p-8 sm:p-16 rounded-[2rem] sm:rounded-[3.5rem] text-center border border-indigo-500/30 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-6 tracking-tight">Punya Ide Sistem Sendiri?</h2>
            <p className="text-xs sm:text-lg text-indigo-200/80 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Kami tidak membatasi imajinasi Anda. Diskusikan alur bisnis yang ingin Anda otomatisasi, dan kami akan membangun kerangka kodenya.
            </p>
            <a 
              href="https://wa.me/62895366766999" 
              className="animate-button-pulse inline-flex items-center justify-center w-full sm:w-auto gap-2 sm:gap-3 px-6 sm:px-12 py-3.5 sm:py-5 bg-white text-indigo-900 rounded-xl sm:rounded-full font-black text-sm sm:text-lg hover:bg-slate-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              Jadwalkan Technical Meeting <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}