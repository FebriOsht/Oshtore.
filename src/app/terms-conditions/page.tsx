'use client';

import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import { Scale, AlertTriangle, FileWarning, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition'; // Path import telah diperbaiki

// --- Konfigurasi Animasi Framer Motion ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: easeInOut
  }
};

export default function TermsAndConditionsPage() {
  const termsData = [
    {
      title: "1. Pendahuluan",
      content: "Selamat datang di Oshtore. Syarat dan Ketentuan (S&K) ini mengatur penggunaan layanan pengembangan website, landing page, dan sistem kustom yang disediakan oleh Oshtore. Dengan menggunakan layanan kami, Anda (Klien) menyetujui untuk terikat dengan syarat dan ketentuan di bawah ini."
    },
    {
      title: "2. Proses Pemesanan & Pembayaran",
      content: (
        <ul className="space-y-3 mt-2">
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 font-bold">✓</span>Proyek akan resmi dimulai setelah Klien membayarkan Down Payment (DP) minimal sebesar 50% dari total nilai proyek yang disepakati.</li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 font-bold">✓</span>Sisa pembayaran (Pelunasan 50%) wajib dibayarkan sebelum sistem/website diunggah ke server utama (Live Production) atau penyerahan source code.</li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 font-bold">✓</span>Pembayaran yang sudah masuk (DP) tidak dapat dikembalikan (non-refundable) jika proyek dibatalkan secara sepihak oleh Klien di tengah pengerjaan.</li>
        </ul>
      )
    },
    {
      title: "3. Revisi & Perubahan Ruang Lingkup",
      content: (
        <ul className="space-y-3 mt-2">
          <li className="flex gap-3"><span className="text-purple-400 mt-1 font-bold">✓</span>Kami menyediakan jatah revisi minor (perubahan warna, teks, tata letak sederhana) sesuai dengan paket yang dipilih (umumnya 2-3 kali revisi).</li>
          <li className="flex gap-3"><span className="text-purple-400 mt-1 font-bold">✓</span>Revisi tidak mencakup perubahan arsitektur dasar, penambahan fitur besar, atau perombakan UI/UX total setelah desain awal disetujui.</li>
          <li className="flex gap-3"><span className="text-purple-400 mt-1 font-bold">✓</span>Penambahan fitur di luar kesepakatan awal (Out of Scope) akan dikenakan biaya tambahan dan memerlukan penyesuaian timeline pengerjaan.</li>
        </ul>
      )
    },
    {
      title: "4. Hak Kekayaan Intelektual (Source Code)",
      content: "Setelah pembayaran dilunasi 100%, hak kepemilikan atas aplikasi/website (Source Code) beralih sepenuhnya kepada Klien. Namun, Oshtore berhak menggunakan desain antarmuka (UI) sebagai portofolio perusahaan kecuali terdapat kesepakatan Non-Disclosure Agreement (NDA) tertulis."
    },
    {
      title: "5. Garansi & Pemeliharaan (Maintenance)",
      content: (
        <ul className="space-y-3 mt-2">
          <li className="flex gap-3"><span className="text-emerald-400 mt-1 font-bold">✓</span>Oshtore memberikan garansi perbaikan bug/error secara gratis selama masa garansi yang disepakati (umumnya 1-6 bulan tergantung paket).</li>
          <li className="flex gap-3"><span className="text-emerald-400 mt-1 font-bold">✓</span>Garansi ini hangus apabila Klien atau pihak ketiga (developer lain) melakukan modifikasi langsung pada source code tanpa sepengetahuan dan izin tertulis dari Oshtore.</li>
          <li className="flex gap-3"><span className="text-emerald-400 mt-1 font-bold">✓</span>Garansi tidak mencakup error yang disebabkan oleh kegagalan server pihak ketiga (hosting provider), pembaruan API eksternal yang usang, atau serangan siber (DDoS/Hacking).</li>
        </ul>
      )
    },
    {
      title: "6. Konten & Tanggung Jawab Hukum",
      content: "Klien bertanggung jawab penuh atas seluruh materi (teks, gambar, video, logo) yang diberikan kepada Oshtore untuk dimasukkan ke dalam website/sistem. Oshtore tidak bertanggung jawab atas tuntutan hak cipta (copyright infringement) dari pihak ketiga atas materi yang disediakan oleh Klien."
    },
    {
      title: "7. Keterlambatan Materi dari Klien",
      content: "Proses pengerjaan sangat bergantung pada kecepatan Klien dalam memberikan materi (aset gambar, teks copywriting, akses server). Keterlambatan pengiriman materi dari Klien akan otomatis menggeser deadline (timeline) penyelesaian proyek."
    }
  ];

  return (
    // Background dipaksa gelap #020617
    <PageTransition className="flex flex-col pb-24 relative z-10 overflow-hidden bg-[#020617] transition-colors duration-500">
      
      {/* HEADER SECTION */}
      <section className="px-4 sm:px-6 pt-24 md:pt-32 pb-12 text-center max-w-4xl mx-auto relative">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>

        {/* Decorative Floating Elements */}
        <motion.div 
          animate={floatAnimation} 
          className="absolute top-10 left-0 md:-left-10 text-indigo-500/30 hidden md:block"
        >
          <FileText size={48} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} 
          className="absolute bottom-10 right-0 md:-right-10 text-purple-500/30 hidden md:block"
        >
          <ShieldCheck size={56} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-white/5 border border-white/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-colors">
            <Scale size={32} />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 tracking-tight transition-colors">
            Syarat & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Ketentuan</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl transition-colors">
            Pembaruan Terakhir: 1 Maret 2026. <br/>
            Harap baca dengan saksama sebelum menggunakan layanan pengembangan dari Oshtore.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Note Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-10 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 sm:p-6 flex gap-4 items-start shadow-none transition-colors"
          >
            <AlertTriangle className="text-amber-400 shrink-0 mt-1 transition-colors" size={24} />
            <div>
              <h4 className="text-amber-400 font-bold mb-1 transition-colors">Informasi Penting</h4>
              <p className="text-amber-200/80 text-sm leading-relaxed transition-colors">
                Dokumen ini merupakan perjanjian yang mengikat secara hukum. Melakukan pembayaran uang muka (Down Payment) menandakan bahwa Anda telah menyetujui seluruh syarat dan ketentuan di bawah ini.
              </p>
            </div>
          </motion.div>

          {/* Clauses List */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 sm:space-y-8"
          >
            {termsData.map((term, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-[2rem] hover:bg-white/[0.04] hover:shadow-none transition-all duration-300 group"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-3 transition-colors">
                  <FileWarning className="text-indigo-500 hidden sm:block opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" size={20} />
                  {term.title}
                </h3>
                <div className="text-sm sm:text-base text-slate-400 leading-relaxed transition-colors">
                  {term.content}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 sm:px-6 mt-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 p-8 sm:p-12 rounded-[3rem] text-center flex flex-col items-center shadow-none transition-colors"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 transition-colors">Masih ada pertanyaan terkait kontrak kerja?</h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl transition-colors">
            Tim kami siap menjelaskan setiap detail klausul di atas. Transparansi adalah kunci dari kolaborasi yang sukses.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/62895366766999" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-900 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors"
          >
            Hubungi Kami <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </section>

    </PageTransition>
  );
}