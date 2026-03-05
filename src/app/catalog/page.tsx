'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import {
  Download,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Shield,
  FileText,
  Monitor,
  Settings,
  Zap,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import { LANDING_PAGE_PACKAGES } from '@/data/landingPageCatalog';
import { SYSTEM_CATALOG } from '@/data/systemCatalog';

// ── Watermark SVG baked ke CSS — sama strateginya dengan /pricing ──
const WATERMARK_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='130'%3E%3Ctext transform='rotate(-25)' x='-40' y='75' font-family='monospace' font-size='14' fill='%236366f1' opacity='0.065' font-weight='bold' letter-spacing='2'%3E@OSHTORE%3C/text%3E%3Ctext transform='rotate(-25)' x='60' y='135' font-family='monospace' font-size='10' fill='%236366f1' opacity='0.04' letter-spacing='1'%3Eoshtore.vercel.app%3C/text%3E%3C/svg%3E")`;

// ── Mini accordion untuk preview FAQ inline ──────────────────────────────────
function AccordionItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.06 }}
      onClick={() => setOpen(!open)}
      className={`border rounded-2xl cursor-pointer transition-all duration-300 ${open ? 'bg-white/[0.04] border-white/10' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}
    >
      <div className="flex items-center gap-4 p-5">
        <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${open ? 'bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.7)]' : 'bg-white/20'}`} />
        <span className={`flex-grow text-sm font-semibold ${open ? 'text-white' : 'text-slate-300'}`}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={16} className={open ? 'text-white' : 'text-slate-500'} />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="overflow-hidden"
          >
            <p className="mx-5 mb-5 pl-5 border-l-2 border-indigo-500/30 text-sm text-slate-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CatalogPage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // PDF di-host di /public/oshtore-catalog.pdf
    const link = document.createElement('a');
    link.href = '/oshtore-catalog.pdf';
    link.download = 'Katalog-Jasa-Oshtore-2026.pdf';
    link.click();
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <PageTransition className="flex flex-col gap-20 pb-24 relative z-10 overflow-hidden bg-[#020617]">

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .animate-fade-in-up { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-float { animation: float 4s ease-in-out infinite; will-change: transform; }
        .btn-shimmer {
          background: linear-gradient(90deg, #4f46e5, #6366f1, #818cf8, #6366f1, #4f46e5);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }

        /* Watermark fixed overlay */
        .wm-layer {
          position: fixed;
          inset: 0;
          z-index: 50;
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
          background-image: ${WATERMARK_SVG};
          background-repeat: repeat;
          background-size: 240px 130px;
          mix-blend-mode: screen;
        }
      `}} />

      {/* Watermark */}
      <div className="wm-layer" aria-hidden="true" />

      {/* Static ambient blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* ── HERO ── */}
      <section className="px-4 sm:px-6 pt-10 md:pt-20 max-w-5xl mx-auto w-full relative z-10">
        <div className="animate-fade-in-up text-center" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 backdrop-blur-md">
            <FileText size={13} /> Katalog Resmi Oshtore 2026
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter">
            Semua Layanan<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              dalam Satu Katalog
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Telusuri seluruh paket layanan kami — dari landing page premium hingga business system custom. Download PDF resmi untuk referensi offline.
          </p>

          {/* Download CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="btn-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-white text-sm sm:text-base shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-shadow active:scale-95 disabled:opacity-70"
            >
              {downloading ? (
                <>Menyiapkan PDF... <span className="animate-spin">⏳</span></>
              ) : (
                <><Download size={18} /> Download Katalog PDF</>
              )}
            </button>
            <a
              href="https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20ingin%20konsultasi%20layanan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm sm:text-base border border-white/10 text-white hover:bg-white/5 transition-all"
            >
              Konsultasi Gratis <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="animate-fade-in-up grid grid-cols-3 gap-3 sm:gap-6 mt-14" style={{ animationDelay: '0.3s' }}>
          {[
            { val: '4 Halaman', label: 'Isi Katalog PDF', icon: <FileText size={16} className="text-indigo-400" /> },
            { val: 'Gratis', label: 'Download & Konsultasi', icon: <Star size={16} className="text-amber-400" /> },
            { val: 'Watermarked', label: 'Dokumen Terproteksi', icon: <Shield size={16} className="text-emerald-400" /> },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center p-4 sm:p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
              <div className="mb-2">{s.icon}</div>
              <div className="text-sm sm:text-base font-black text-white">{s.val}</div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 1: LANDING PAGE ── */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-11 h-11 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center shrink-0">
              <Monitor size={20} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">Layanan 01</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Landing Page Premium</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow hidden sm:block" />
            <a href="/landing-page" className="shrink-0 text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-bold transition-colors">
              Detail <ExternalLink size={12} />
            </a>
          </motion.div>

          <div className="space-y-10">
            {LANDING_PAGE_PACKAGES.map((cat, ci) => (
              <div key={ci}>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-5 pl-1">{cat.category}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {cat.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: ii * 0.1 }}
                      className={`relative group bg-[#0a0f24]/60 backdrop-blur-xl border p-7 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 flex flex-col ${
                        item.popular ? 'border-indigo-500/50 shadow-[0_0_30px_rgba(79,70,229,0.1)]' : 'border-white/5 hover:border-white/10'
                      }`}
                    >
                      {item.popular && (
                        <div className="absolute -top-3.5 right-7 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
                          Terfavorit
                        </div>
                      )}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-[50px] group-hover:bg-indigo-500/8 transition-colors duration-700" />
                      <div className="relative z-10 flex flex-col h-full">
                        <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 ${item.popular ? 'text-indigo-400' : 'text-slate-500'}`}>{item.name}</p>
                        <div className="text-3xl font-black text-white tracking-tighter mb-1">{item.price}</div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
                          <Clock size={10} className="text-indigo-400" /> {item.update}
                        </div>
                        <div className="space-y-3 flex-grow mb-6">
                          {item.features.map((f, fi) => (
                            <div key={fi} className="flex items-start gap-3 text-sm text-slate-300">
                              <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${item.color === 'indigo' ? 'text-indigo-400' : 'text-blue-400'}`} />
                              {f}
                            </div>
                          ))}
                        </div>
                        <a
                          href={`https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20tertarik%20dengan%20${encodeURIComponent(item.name)}`}
                          target="_blank"
                          rel="noreferrer"
                          className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all active:scale-95 flex items-center justify-center gap-2 group/btn ${
                            item.popular
                              ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)]'
                              : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          Pesan Sekarang <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-11 h-11 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center shrink-0">
              <Settings size={20} className="text-purple-400" />
            </div>
            <div>
              <p className="text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">Layanan 02</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Business System Custom</h2>
            </div>
            <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow hidden sm:block" />
            <a href="/business-system" className="shrink-0 text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-bold transition-colors">
              Detail <ExternalLink size={12} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {SYSTEM_CATALOG.map((sys, idx) => (
              <motion.div
                key={sys.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="relative group bg-[#0a0f24]/60 backdrop-blur-xl border border-white/5 p-7 rounded-[2rem] hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/5 rounded-full blur-[40px] group-hover:bg-purple-500/10 transition-colors duration-700" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-colors">
                      {sys.icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-300 bg-purple-900/30 border border-purple-500/20 px-2.5 py-1 rounded-full text-center leading-tight max-w-[45%]">
                      {sys.bestFor}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 tracking-tight">{sys.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-grow">{sys.description}</p>
                  <div className="space-y-2.5 mb-5">
                    {sys.features.map((f, fi) => (
                      <div key={fi} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 size={12} className="text-purple-400 mt-0.5 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Estimasi</p>
                      <p className="text-base font-black text-white">{sys.price}</p>
                    </div>
                    <a
                      href={`https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20tertarik%20dengan%20${encodeURIComponent(sys.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center hover:bg-purple-500 transition-all active:scale-95 group/btn"
                    >
                      <ArrowRight size={16} className="text-white group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD REMINDER ── */}
      <section className="px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto relative overflow-hidden rounded-[2.5rem] border border-indigo-500/20 p-10 sm:p-14 text-center bg-gradient-to-br from-indigo-900/30 via-[#0a0f24] to-purple-900/20"
        >
          <div className="absolute inset-0 bg-[url('/cubes.png')] opacity-[0.04] mix-blend-overlay" />
          <div className="relative z-10">
            <div className="animate-float w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText size={24} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">Simpan Katalog untuk Referensi Offline</h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
              PDF 4 halaman berisi semua paket, harga, proses kerja, dan informasi pembayaran. Dokumen terproteksi watermark resmi Oshtore.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="btn-shimmer inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-white text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-shadow active:scale-95"
              >
                <Download size={17} />
                {downloading ? 'Menyiapkan...' : 'Download PDF Sekarang'}
              </button>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Shield size={13} className="text-emerald-400" /> Gratis  ·
                <Zap size={13} className="text-amber-400" /> Instan  ·
                <CheckCircle2 size={13} className="text-indigo-400" /> Watermarked
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Pertanyaan Sebelum Memesan</h2>
            <p className="text-slate-400 text-sm">Yang sering ditanyakan calon klien sebelum memutuskan.</p>
          </motion.div>
          <div className="space-y-3 mb-8">
            {[
              { q: "Apakah konsultasi awal gratis?", a: "Ya, 100% gratis dan tanpa komitmen apapun. Anda bebas tanya-tanya bahkan minta estimasi harga tanpa kewajiban memesan." },
              { q: "Berapa DP yang harus dibayar?", a: "Down Payment 50% di awal. Pelunasan 50% setelah proyek selesai dan Anda puas." },
              { q: "Apakah source code akan saya miliki?", a: "Akses server secara default dipegang Oshtore. Jika Anda ingin memiliki source code, hal ini perlu disepakati secara tertulis sebelum proyek dimulai." },
              { q: "Berapa lama garansi setelah proyek selesai?", a: "1 bulan maintenance gratis. Error akibat kesalahan kami diperbaiki gratis tanpa batas waktu. Error akibat perubahan dari sisi klien dikenakan biaya maintenance." },
            ].map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} idx={i} />
            ))}
          </div>
          <div className="text-center">
            <a href="/faq" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-indigo-500/30 text-indigo-400 text-sm font-bold hover:bg-indigo-500/10 transition-all group">
              Lihat Semua FAQ <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}