'use client';

import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  Code2, 
  TestTube, 
  Rocket, 
  ArrowRight,
  ShieldCheck,
  Clock,
  CreditCard,
  Sparkles
} from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeInOut } }
};

// OPTIMIZED: willChange akan ditambahkan langsung di elemen yang menggunakan ini
const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: easeInOut }
};

export default function HowToOrderPage() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi Awal (Gratis)",
      desc: "Ceritakan visi, kendala operasional, dan kebutuhan sistem/website Anda. Kami akan menganalisis dan memberikan rekomendasi solusi digital yang paling efisien tanpa biaya.",
      icon: <MessageSquare size={32} className="text-indigo-400" />,
      colorClass: "indigo"
    },
    {
      num: "02",
      title: "Proposal & Persetujuan",
      desc: "Kami menyusun blueprint proyek, estimasi waktu (timeline), dan penawaran harga. Proyek resmi dimulai setelah persetujuan bersama dan pembayaran Down Payment (DP).",
      icon: <FileText size={32} className="text-purple-400" />,
      colorClass: "purple"
    },
    {
      num: "03",
      title: "Desain & Development",
      desc: "Tim kami mulai merancang antarmuka (UI/UX) dan menulis kode struktur sistem. Anda akan mendapatkan pembaruan berkala agar proyek dipastikan tetap on-track.",
      icon: <Code2 size={32} className="text-blue-400" />,
      colorClass: "blue"
    },
    {
      num: "04",
      title: "Testing & Penyesuaian",
      desc: "Sistem diuji coba secara ketat untuk memastikan performa yang cepat dan bebas dari bug. Anda dapat melakukan review dan meminta revisi sesuai kesepakatan.",
      icon: <TestTube size={32} className="text-emerald-400" />,
      colorClass: "emerald"
    },
    {
      num: "05",
      title: "Handover & Go-Live",
      desc: "Setelah pelunasan, sistem diluncurkan ke server utama. Kami menyerahkan source code, memberikan panduan penggunaan (training), dan memulai masa garansi.",
      icon: <Rocket size={32} className="text-amber-400" />,
      colorClass: "amber"
    }
  ];

  const getColorStyles = (color: string) => {
    switch(color) {
      case 'purple': return { bg: 'bg-purple-500/10', border: 'border-purple-500/20', glow: 'bg-purple-500/20' };
      case 'blue': return { bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'bg-blue-500/20' };
      case 'emerald': return { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'bg-emerald-500/20' };
      case 'amber': return { bg: 'bg-amber-500/10', border: 'border-amber-500/20', glow: 'bg-amber-500/20' };
      default: return { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', glow: 'bg-indigo-500/20' };
    }
  };

  return (
    <PageTransition className="flex flex-col gap-24 pb-24 relative z-10 overflow-hidden bg-[#020617] transition-colors duration-500">
      
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 pt-24 md:pt-32 text-center max-w-5xl mx-auto relative">

        {/* OPTIMIZED: Blob hero → static, hapus animate scale/opacity infinite */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating elements — diberi willChange */}
        <motion.div 
          animate={floatAnimation}
          style={{ willChange: 'transform' }}
          className="absolute top-20 left-10 md:left-20 text-indigo-500/50 hidden md:block"
        >
          <Sparkles size={32} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], transition: { duration: 4, repeat: Infinity, ease: easeInOut } }}
          style={{ willChange: 'transform' }}
          className="absolute bottom-20 right-10 md:right-20 text-purple-500/50 hidden md:block"
        >
          <Code2 size={40} />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center relative z-10"
        >
          <motion.div variants={scaleIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 backdrop-blur-md shadow-sm">
            <Clock size={14} className="animate-pulse" /> Proses Cepat & Transparan
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter transition-colors">
            Bagaimana Cara <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Memulai Proyek?
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-sm sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto transition-colors">
            Kami merancang alur kerja yang terstruktur untuk memastikan proyek Anda selesai tepat waktu, sesuai anggaran, dan dengan kualitas enterprise.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. TIMELINE / STEPS SECTION */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-8 sm:gap-12"
          >
            {steps.map((step, idx) => {
              const styles = getColorStyles(step.colorClass);
              
              return (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center group"
                >
                  {/* Garis Konektor (Desktop) */}
                  {idx !== steps.length - 1 && (
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="hidden md:block absolute left-[5.5rem] top-24 bottom-[-3rem] w-px bg-gradient-to-b from-white/10 to-transparent transition-colors"
                    />
                  )}

                  {/* Nomor Urut & Ikon */}
                  <div className="shrink-0 flex items-center justify-center relative">
                    <div className={`absolute inset-0 ${styles.glow} blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#0a0f24] border border-white/10 rounded-[2rem] flex flex-col items-center justify-center relative z-10 shadow-xl group-hover:border-indigo-500/50 group-hover:-translate-y-2 transition-all duration-300">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-500 mb-1 transition-colors">STEP</span>
                      <span className="text-2xl sm:text-3xl font-black text-white transition-colors">{step.num}</span>
                    </div>
                  </div>

                  {/* Konten Kartu */}
                  <div className="flex-grow bg-white/[0.02] border border-white/5 p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] backdrop-blur-md group-hover:bg-white/[0.04] transition-colors w-full hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4">
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border w-fit shrink-0 ${styles.bg} ${styles.border} transition-colors`}
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white transition-colors">{step.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed pl-0 sm:pl-[5.5rem] transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. POLICY / GUARANTEE INFO */}
      <section className="px-4 sm:px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <ShieldCheck size={28} className="text-indigo-400" />, title: "Garansi Kualitas", desc: "Kami memberikan masa garansi pemeliharaan (maintenance) untuk memastikan sistem bebas error paska rilis." },
            { icon: <CreditCard size={28} className="text-emerald-400" />, title: "Pembayaran Aman", desc: "Sistem termin pembayaran (DP & Pelunasan) berdasarkan milestone pengerjaan yang jelas." },
            { icon: <Code2 size={28} className="text-purple-400" />, title: "Hak Milik Source Code", desc: "Source code aplikasi kustom sepenuhnya menjadi hak milik Anda tanpa biaya lisensi tersembunyi." }
          ].map((info, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              key={i} 
              className="bg-[#0a0f24]/50 border border-white/5 p-8 rounded-[2rem] text-center flex flex-col items-center hover:border-white/10 transition-colors shadow-lg"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="p-4 bg-white/5 rounded-2xl mb-6 transition-colors"
              >
                {info.icon}
              </motion.div>
              <h4 className="text-lg font-bold text-white mb-3 transition-colors">{info.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed transition-colors">{info.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="px-4 sm:px-6 mb-10 mt-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600/20 to-purple-900/20 p-10 sm:p-16 rounded-[3rem] text-center border border-indigo-500/30 relative overflow-hidden backdrop-blur-xl shadow-2xl transition-colors"
        >
          {/* OPTIMIZED: Hapus motion.div animate backgroundPosition — static saja */}
          <div className="absolute inset-0 bg-[url('/cubes.png')] opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight transition-colors">Siap Memulai Tahap Pertama?</h2>
            <p className="text-sm sm:text-lg text-indigo-200/80 mb-10 max-w-xl mx-auto leading-relaxed transition-colors">
              Diskusikan kebutuhan Anda dengan kami hari ini. Konsultasi awal sepenuhnya gratis dan tanpa komitmen apapun.
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
            </div>
          </div>
        </motion.div>
      </section>

    </PageTransition>
  );
}