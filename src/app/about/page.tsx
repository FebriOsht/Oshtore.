'use client';

import React, { useState } from 'react';
import { motion, easeInOut } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe, 
  Code2, 
  ArrowRight,
  MapPin,
  Sparkles
} from 'lucide-react';
// Path import PageTransition diperbaiki
import PageTransition from '@/components/shared/PageTransition'; 

// --- Konfigurasi Animasi Framer Motion ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeInOut } }
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: easeInOut
  }
};

export default function AboutPage() {
  const [imgError, setImgError] = useState(false);

  return (
    // Background dipaksa gelap #020617
    <PageTransition className="flex flex-col gap-24 pb-24 relative z-10 overflow-hidden bg-[#020617]">
      
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 pt-24 md:pt-32 text-center max-w-5xl mx-auto relative">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>

        {/* Decorative Floating Elements */}
        <motion.div 
          animate={floatAnimation} 
          className="absolute top-10 left-10 md:left-20 text-indigo-500/50 hidden md:block"
        >
          <Sparkles size={36} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }} 
          className="absolute bottom-10 right-10 md:right-20 text-purple-500/50 hidden md:block"
        >
          <Code2 size={48} />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center relative z-10"
        >
          <motion.div variants={scaleIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6 backdrop-blur-md shadow-sm">
            <Globe size={14} className="animate-pulse" /> Tentang Kami
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-4 tracking-tighter transition-colors">
            Membangun Masa Depan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Digital Bisnis Anda.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-3xl mx-auto transition-colors">
            Oshtore adalah agensi pengembangan teknologi yang berfokus pada penciptaan Landing Page konversi tinggi dan Sistem Operasional kustom. Berbasis di Bandar Lampung, kami melayani klien dari seluruh Indonesia.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. THE STORY / MISSION */}
      <section className="px-4 sm:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-[#0a0f24]/80 border border-white/10 p-8 sm:p-12 rounded-[3rem] backdrop-blur-xl overflow-hidden h-full flex flex-col justify-center transition-colors">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-fit"
              >
                <Code2 size={48} className="text-indigo-400 mb-6" strokeWidth={1} />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 transition-colors">Visi Kami</h3>
              <p className="text-slate-400 leading-relaxed transition-colors">
                Mendemokratisasi akses teknologi kelas enterprise. Kami percaya bahwa setiap bisnis, baik UMKM pemula maupun korporasi besar, berhak memiliki infrastruktur digital yang cepat, aman, dan elegan tanpa harus mempekerjakan tim IT in-house yang mahal.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-purple-400" size={24} />
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors">Misi Kami</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Menciptakan desain antarmuka (UI/UX) yang intuitif dan berpusat pada pengguna.",
                  "Menulis kode yang bersih (clean code) untuk performa kecepatan maksimal.",
                  "Memberikan solusi otomatisasi untuk memangkas biaya operasional bisnis.",
                  "Menjaga kerahasiaan dan keamanan data klien dengan standar tertinggi."
                ].map((item, idx) => (
                  <motion.li 
                    whileHover={{ x: 5 }}
                    key={idx} 
                    className="flex items-start gap-3 text-slate-400 text-sm sm:text-base leading-relaxed transition-all cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. CORE VALUES (Grid) */}
      <section className="px-4 sm:px-6 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 transition-colors">Nilai Inti Oshtore</h2>
            <p className="text-slate-400 transition-colors">Pondasi dari setiap baris kode yang kami tulis.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Inovasi", desc: "Selalu menggunakan stack teknologi terbaru (Next.js, React) untuk hasil yang relevan di masa depan.", icon: <Rocket className="text-blue-400" /> },
              { title: "Kecepatan", desc: "Waktu muat halaman kilat dan proses pengerjaan yang efisien tanpa mengorbankan kualitas.", icon: <Zap className="text-amber-400" /> },
              { title: "Keamanan", desc: "Penerapan enkripsi dan standar keamanan tinggi untuk melindungi data bisnis Anda.", icon: <ShieldCheck className="text-emerald-400" /> },
              { title: "Kolaborasi", desc: "Kami tidak sekadar vendor, melainkan partner diskusi Anda untuk memecahkan masalah bisnis.", icon: <Users className="text-purple-400" /> }
            ].map((val, i) => (
              <motion.div 
                variants={fadeInUp} 
                whileHover={{ y: -8 }}
                key={i} 
                className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 transition-colors">{val.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed transition-colors">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FOUNDER / TEAM SECTION */}
      <section className="px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#0a0f24]/50 border border-white/10 p-8 sm:p-12 md:p-16 rounded-[3rem] backdrop-blur-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-colors"
        >
          {/* Efek Cahaya */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"
          ></motion.div>

          <div className="w-40 h-40 sm:w-48 sm:h-48 shrink-0 relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2rem] rotate-6 opacity-50 blur-lg group-hover:rotate-12 transition-transform duration-500"></div>
            <div className="relative w-full h-full bg-[#020617] border border-white/10 rounded-[2rem] flex items-center justify-center overflow-hidden z-10 shadow-xl transition-colors">
              {/* Gambar Profil Founder dengan Error Handling React */}
              {!imgError ? (
                <img 
                  src="/img/febriosht.jpeg" 
                  alt="Febri Osht - Founder Oshtore" 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Code2 size={48} className="text-indigo-400 group-hover:scale-110 transition-transform duration-500" />
              )}
            </div>
          </div>

          <div className="text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold mb-4 transition-colors">
              <MapPin size={12} className="text-indigo-400" /> Bandar Lampung, ID
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white mb-2 transition-colors">Febri Osht</h3>
            <p className="text-indigo-400 font-bold mb-6 tracking-widest uppercase text-xs transition-colors">Founder & Lead Developer</p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl transition-colors">
              "Kecintaan pada teknologi dan desain mendorong saya mendirikan Oshtore. Tujuan kami sederhana: menerjemahkan kerumitan teknologi menjadi solusi yang elegan, mudah digunakan, dan berdampak nyata bagi pertumbuhan bisnis klien kami."
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 hover:text-white transition-colors"
              >
                <Globe size={18} />
              </motion.a>
              <a href="mailto:oshtoreid@gmail.com" className="text-sm font-bold text-indigo-400 hover:text-white transition-colors flex items-center gap-2 group/link">
                Sapa Kami <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="px-4 sm:px-6 mb-10 mt-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600/20 to-purple-900/20 p-10 sm:p-16 rounded-[3rem] text-center border border-indigo-500/30 relative overflow-hidden backdrop-blur-xl transition-colors"
        >
          {/* Tekstur/Pattern */}
          <motion.div 
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"
          ></motion.div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight transition-colors">Mari Bangun Sesuatu <br/> yang Hebat Bersama.</h2>
            <p className="text-sm sm:text-lg text-indigo-200/80 mb-10 max-w-xl mx-auto leading-relaxed transition-colors">
              Punya ide proyek, butuh perombakan website, atau sekadar ingin berkonsultasi tentang digitalisasi bisnis? Kami siap mendengarkan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/62895366766999" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-indigo-900 rounded-full font-black text-sm sm:text-base hover:bg-slate-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Mulai Konsultasi <ArrowRight size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/landing-page" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-sm sm:text-base hover:bg-white/10 transition-colors"
              >
                Lihat Layanan Kami
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

    </PageTransition>
  );
}