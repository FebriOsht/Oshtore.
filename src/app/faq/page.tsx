'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { 
  ChevronDown, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Shield,
  CreditCard,
  Clock,
  Code2,
  RefreshCw,
  HelpCircle,
  Zap
} from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

const FAQ_DATA = [
  {
    category: "Sebelum Pesan",
    icon: <HelpCircle size={18} className="text-indigo-400" />,
    color: "indigo",
    questions: [
      {
        q: "Apakah saya harus paham teknologi untuk bisa memesan?",
        a: "Sama sekali tidak perlu. Justru tugas kami yang menerjemahkan kebutuhan bisnis Anda ke dalam teknologi. Cukup ceritakan: bisnis Anda apa, targetnya siapa, dan masalah apa yang ingin diselesaikan — sisanya kami urus."
      },
      {
        q: "Bagaimana cara memulai? Apakah langsung bayar?",
        a: "Tidak langsung bayar. Alurnya: (1) Hubungi kami via WhatsApp, (2) Konsultasi gratis untuk analisis kebutuhan, (3) Kami kirim proposal + harga, (4) Baru bayar DP setelah Anda setuju. Tidak ada tekanan sama sekali."
      },
      {
        q: "Apakah bisa lihat contoh hasil kerja Oshtore dulu?",
        a: "Tentu! Kunjungi portofolio kami di fosht.vercel.app — semua proyek yang ditampilkan adalah hasil nyata yang sudah kami kerjakan untuk klien. Bukan mockup, bukan template."
      },
      {
        q: "Saya masih ragu, apakah konsultasinya benar-benar gratis?",
        a: "100% gratis dan tanpa komitmen apapun. Anda bebas konsultasi, tanya-tanya, bahkan minta estimasi harga — tanpa kewajiban lanjut memesan. Kami percaya keputusan terbaik datang dari informasi yang cukup."
      },
      {
        q: "Oshtore melayani seluruh Indonesia atau hanya daerah tertentu?",
        a: "Kami melayani seluruh Indonesia secara remote. Klien kami tersebar dari Sabang sampai Papua. Konsultasi, pengerjaan, hingga serah terima semuanya bisa dilakukan online tanpa tatap muka."
      }
    ]
  },
  {
    category: "Proses & Waktu",
    icon: <Clock size={18} className="text-blue-400" />,
    color: "blue",
    questions: [
      {
        q: "Berapa lama waktu pengerjaan landing page?",
        a: "Landing page standar selesai dalam 1–3 hari kerja setelah semua materi (teks, logo, foto) diterima. Paket dengan fitur lebih kompleks bisa 3–5 hari. Keterlambatan biasanya terjadi jika materi dari klien belum lengkap."
      },
      {
        q: "Berapa lama pengerjaan sistem/aplikasi custom?",
        a: "Tergantung kompleksitas. Sistem POS sederhana: 2–3 minggu. Dashboard ERP atau sistem dengan banyak modul: 4–8 minggu. Timeline pasti akan kami cantumkan di proposal sebelum proyek dimulai."
      },
      {
        q: "Apa yang perlu saya siapkan sebelum pengerjaan dimulai?",
        a: "Untuk landing page: logo (jika ada), foto produk/usaha, teks deskripsi, warna brand. Untuk sistem: alur kerja bisnis saat ini, data apa yang ingin dicatat, siapa saja pengguna sistem. Kalau belum punya semua ini, tenang — kami bisa bantu menyusunnya."
      },
      {
        q: "Apakah saya bisa memantau progress pengerjaan?",
        a: "Ya. Kami memberikan update berkala via WhatsApp di setiap tahap penting: setelah desain selesai, setelah development, dan sebelum launch. Anda bisa memberikan feedback di setiap tahap tersebut."
      }
    ]
  },
  {
    category: "Harga & Pembayaran",
    icon: <CreditCard size={18} className="text-emerald-400" />,
    color: "emerald",
    questions: [
      {
        q: "Berapa DP yang harus dibayar di awal?",
        a: "Down Payment (DP) sebesar 50% dari total harga proyek. Pelunasan 50% dibayarkan setelah proyek selesai dan Anda puas, sebelum file diserahkan atau website di-launch ke domain utama."
      },
      {
        q: "Metode pembayaran apa saja yang diterima?",
        a: "Transfer bank (BCA, Mandiri, BRI, BNI), GoPay, OVO, DANA, dan QRIS. Kami akan mengirimkan invoice resmi untuk setiap transaksi sebagai bukti pembayaran yang sah."
      },
      {
        q: "Apakah ada biaya tersembunyi setelah proyek selesai?",
        a: "Harga proyek yang disepakati di awal adalah harga final. Namun ada dua hal yang perlu diketahui: (1) Perpanjangan domain/hosting tahunan ke penyedia layanan — ini sudah sifatnya umum dan kami beritahu jauh-jauh hari. (2) Biaya maintenance: 1 bulan pertama gratis. Setelah itu, jika ada perbaikan akibat permintaan atau kesalahan dari sisi Anda, dikenakan biaya maintenance. Namun jika error terjadi karena kesalahan dari kami, perbaikan tetap gratis tanpa syarat."
      },
      {
        q: "Bagaimana jika saya sudah bayar DP tapi ingin membatalkan proyek?",
        a: "DP bersifat non-refundable karena sudah masuk ke biaya perencanaan dan alokasi waktu tim. Namun jika pembatalan terjadi karena kelalaian di pihak kami, kami siap mendiskusikan solusi yang adil. Transparansi adalah nilai utama kami."
      },
      {
        q: "Apakah harga di website bisa ditawar atau ada diskon?",
        a: "Harga yang tertera adalah harga dasar untuk spesifikasi standar. Untuk proyek dengan scope lebih besar atau pemesanan lebih dari satu layanan sekaligus, kami membuka diskusi harga. Hubungi kami dan ceritakan kebutuhan lengkap Anda."
      }
    ]
  },
  {
    category: "Revisi & Garansi",
    icon: <RefreshCw size={18} className="text-purple-400" />,
    color: "purple",
    questions: [
      {
        q: "Berapa kali saya bisa minta revisi?",
        a: "Tergantung paket: Paket UMKM 2x revisi minor, Paket Bisnis 3x revisi minor. Revisi minor mencakup perubahan teks, warna, atau tata letak sederhana. Perubahan besar seperti ganti konsep desain total atau tambah fitur baru dihitung di luar jatah revisi."
      },
      {
        q: "Apa yang dimaksud 'garansi' dan berapa lama?",
        a: "Garansi berarti kami perbaiki bug atau error yang terjadi secara gratis selama masa garansi (1–6 bulan tergantung paket). Bukan garansi uang kembali. Garansi berlaku selama tidak ada pihak lain yang memodifikasi kode tanpa sepengetahuan kami."
      },
      {
        q: "Bagaimana jika ada bug setelah masa garansi habis?",
        a: "Kami tetap bisa membantu dengan biaya maintenance yang sangat terjangkau. Klien lama mendapat prioritas penanganan dan harga khusus dibanding klien baru."
      },
      {
        q: "Apakah saya bisa minta tambah fitur setelah proyek selesai?",
        a: "Bisa. Pengembangan lanjutan (fitur baru, integrasi tambahan, dll) bisa dilakukan kapan saja dengan estimasi biaya dan waktu baru. Kami senang tumbuh bersama bisnis klien."
      }
    ]
  },
  {
    category: "Teknis & Kepemilikan",
    icon: <Code2 size={18} className="text-amber-400" />,
    color: "amber",
    questions: [
      {
        q: "Siapa yang memiliki source code setelah proyek selesai?",
        a: "Secara default, akses dan infrastruktur dipegang oleh Oshtore. Namun jika Anda ingin memiliki seluruh source code, hal ini bisa disepakati di awal sebelum proyek dimulai dan akan dicantumkan dalam perjanjian. Tidak ada biaya lisensi tahunan — kepemilikan bersifat permanen."
      },
      {
        q: "Di mana website/sistem saya akan di-hosting?",
        a: "Kami menentukan provider hosting yang paling sesuai dengan kebutuhan teknis proyek Anda. Secara default, akses server dan infrastruktur dipegang oleh Oshtore untuk menjaga stabilitas sistem. Jika Anda ingin menerima seluruh source code dan akses penuh, hal ini bisa disepakati di awal sebelum proyek dimulai."
      },
      {
        q: "Apakah website yang dibuat bisa saya edit sendiri setelah jadi?",
        a: "Tergantung permintaan di awal. Jika Anda ingin bisa edit konten sendiri (teks, gambar, produk), kami bisa tambahkan CMS (Content Management System) ke dalam scope proyek. Sampaikan kebutuhan ini saat konsultasi."
      },
      {
        q: "Apakah Oshtore akan menggunakan desain saya sebagai portofolio?",
        a: "Ya, secara default kami berhak menampilkan hasil kerja sebagai portofolio. Jika Anda keberatan (misalnya karena alasan bisnis sensitif), kami bisa tandatangani NDA (Non-Disclosure Agreement) atas permintaan tertulis."
      },
      {
        q: "Teknologi apa yang digunakan? Apakah modern dan tahan lama?",
        a: "Kami menggunakan Next.js, React, Node.js, Python, dan PostgreSQL — stack yang digunakan perusahaan teknologi kelas dunia. Bukan WordPress, bukan drag-and-drop builder. Ini berarti performa lebih cepat, keamanan lebih tinggi, dan lebih mudah dikembangkan di masa depan."
      }
    ]
  },
  {
    category: "Keamanan & Privasi",
    icon: <Shield size={18} className="text-teal-400" />,
    color: "teal",
    questions: [
      {
        q: "Apakah data bisnis saya aman saat konsultasi?",
        a: "Sangat aman. Informasi yang Anda bagikan selama konsultasi bersifat rahasia dan tidak akan disebarkan ke pihak ketiga manapun. Kami menjaga kepercayaan klien sebagai prioritas utama."
      },
      {
        q: "Apakah sistem yang dibangun aman dari hacking?",
        a: "Kami menerapkan standar keamanan seperti enkripsi data, proteksi SQL injection, HTTPS, dan autentikasi berlapis. Tidak ada sistem yang 100% kebal, tapi kami membangun dengan best practice keamanan industri."
      },
      {
        q: "Apakah Oshtore bisa mengakses data bisnis saya setelah serah terima?",
        a: "Tidak. Setelah serah terima, semua akses (database, server, panel admin) ada di tangan Anda. Kami tidak menyimpan backup data Anda di server kami. Anda punya kendali penuh dan privasi Anda terjaga."
      }
    ]
  }
];

const colorMap: Record<string, { badge: string; dot: string; line: string }> = {
  indigo: { badge: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400', dot: 'bg-indigo-500', line: 'border-indigo-500/30' },
  blue:   { badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',       dot: 'bg-blue-500',   line: 'border-blue-500/30' },
  emerald:{ badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', dot: 'bg-emerald-500', line: 'border-emerald-500/30' },
  purple: { badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400', dot: 'bg-purple-500', line: 'border-purple-500/30' },
  amber:  { badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',    dot: 'bg-amber-500',  line: 'border-amber-500/30' },
  teal:   { badge: 'bg-teal-500/10 border-teal-500/20 text-teal-400',       dot: 'bg-teal-500',   line: 'border-teal-500/30' },
};

function AccordionItem({ q, a, color, index }: { q: string; a: string; color: string; index: number }) {
  const [open, setOpen] = useState(false);
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: easeInOut }}
      className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
        open 
          ? `bg-white/[0.04] border-white/10 shadow-lg` 
          : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.03] hover:border-white/8'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
      >
        {/* Dot indicator */}
        <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${open ? `${c.dot} shadow-[0_0_8px_rgba(99,102,241,0.6)]` : 'bg-white/20'}`} />
        
        <span className={`flex-grow text-sm sm:text-base font-semibold transition-colors duration-300 ${open ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {q}
        </span>
        
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className={`shrink-0 transition-colors duration-300 ${open ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeInOut }}
            className="overflow-hidden"
          >
            <div className={`mx-5 sm:mx-6 mb-5 pl-5 border-l-2 ${c.line}`}>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const totalQuestions = FAQ_DATA.reduce((acc, cat) => acc + cat.questions.length, 0);

  const displayed = activeCategory 
    ? FAQ_DATA.filter(c => c.category === activeCategory)
    : FAQ_DATA;

  return (
    <PageTransition className="flex flex-col gap-20 pb-24 relative z-10 overflow-hidden bg-[#020617]">

      {/* Static ambient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]" />
      </div>

      {/* ── HERO ── */}
      <section className="px-4 sm:px-6 pt-10 md:pt-20 text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 backdrop-blur-md">
            <Sparkles size={13} className="animate-pulse" /> {totalQuestions} Pertanyaan Terjawab
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter">
            Ada yang Ingin<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Ditanyakan?
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Kami kumpulkan semua pertanyaan yang sering muncul sebelum klien memutuskan untuk bekerja sama. Kalau masih ada yang mengganjal, WhatsApp kami terbuka 24 jam.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { val: '< 5 menit', label: 'Respons WhatsApp' },
              { val: 'Gratis', label: 'Konsultasi Awal' },
              { val: '0', label: 'Biaya Tersembunyi' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center px-5 py-3 bg-white/[0.03] border border-white/5 rounded-2xl">
                <span className="text-lg sm:text-xl font-black text-white">{stat.val}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FILTER CATEGORY ── */}
      <section className="px-4 sm:px-6 relative z-10 -mt-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                activeCategory === null
                  ? 'bg-indigo-600 text-white border-transparent shadow-[0_0_15px_rgba(79,70,229,0.4)] scale-105'
                  : 'bg-white/[0.03] text-slate-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              Semua
            </button>
            {FAQ_DATA.map((cat) => {
              const c = colorMap[cat.color];
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category === activeCategory ? null : cat.category)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                    activeCategory === cat.category
                      ? `${c.badge} scale-105 shadow-md`
                      : 'bg-white/[0.03] text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.icon}
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="px-4 sm:px-6 relative z-10 -mt-4">
        <div className="max-w-4xl mx-auto space-y-14">
          <AnimatePresence mode="wait">
            {displayed.map((cat) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: easeInOut }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${colorMap[cat.color].badge}`}>
                    {cat.icon}
                    {cat.category}
                  </div>
                  <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-grow" />
                  <span className="text-xs text-slate-600 shrink-0">{cat.questions.length} pertanyaan</span>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  {cat.questions.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      q={item.q}
                      a={item.a}
                      color={cat.color}
                      index={idx}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeInOut }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/40 via-[#0a0f24] to-purple-950/40 border border-white/5 p-10 sm:p-16 rounded-[2.5rem] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/cubes.png')] opacity-[0.04] mix-blend-overlay" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare size={24} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              Pertanyaan Anda Belum Ada di Sini?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Tim kami siap menjawab apapun yang masih mengganjal. Chat langsung via WhatsApp — biasanya kami balas dalam hitungan menit.
            </p>
            <a
              href="https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20punya%20pertanyaan%20sebelum%20memesan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 bg-white text-indigo-950 rounded-full font-black text-sm sm:text-base hover:bg-slate-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 group/btn"
            >
              Tanya Langsung via WhatsApp
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

    </PageTransition>
  );
}