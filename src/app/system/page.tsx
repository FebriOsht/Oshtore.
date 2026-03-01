import React from 'react';
import { 
  Cpu, 
  BarChart3, 
  Database, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck,
  Server,
  Cloud
} from 'lucide-react';

/**
 * BUSINESS SYSTEM PAGE
 * Fokus: Katalog solusi otomasi & sistem manajemen bisnis
 */
export default function SystemPage() {
  const systems = [
    {
      title: "Sistem Kasir (POS) Custom",
      description: "Sistem kasir yang disesuaikan dengan alur unik bisnis Anda. Bukan sekadar input data, tapi alat bantu ambil keputusan.",
      icon: <BarChart3 className="text-indigo-600" size={32} />,
      features: ["Laporan Penjualan Real-time", "Manajemen Multi-cabang", "Integrasi Pembayaran Digital", "Cetak Struk & Nota Digital"],
      price: "Mulai Rp 3.500.000",
      bestFor: "Retail, F&B, Toko Kelontong Modern"
    },
    {
      title: "Manajemen Inventori (Stok)",
      description: "Hentikan kerugian akibat stok mati atau kehilangan barang. Pantau setiap pergerakan barang secara otomatis.",
      icon: <Database className="text-indigo-600" size={32} />,
      features: ["Peringatan Stok Rendah", "Audit Stok Otomatis", "Manajemen Supplier", "History Keluar/Masuk Barang"],
      price: "Mulai Rp 2.500.000",
      bestFor: "Gudang, Distributor, E-commerce"
    },
    {
      title: "Dashboard Admin & Monitoring",
      description: "Pantau performa bisnis dari mana saja. Visualisasi data yang memudahkan Anda melihat tren pertumbuhan.",
      icon: <Cpu className="text-indigo-600" size={32} />,
      features: ["Grafik Pertumbuhan Interaktif", "Manajemen Data Pelanggan", "Sistem Otoritas Multi-user", "Ekspor Data ke Excel/PDF"],
      price: "Mulai Rp 2.000.000",
      bestFor: "Owner Bisnis, Manajer Operasional"
    },
    {
      title: "Custom Web Application",
      description: "Punya alur kerja yang sangat spesifik? Kami bangun sistem dari nol yang 100% mengikuti cara kerja Anda.",
      icon: <Server className="text-indigo-600" size={32} />,
      features: ["Arsitektur Skalabel", "Keamanan Data Tinggi", "Full Source Code", "Dukungan Teknis Prioritas"],
      price: "Hubungi Kami",
      bestFor: "Perusahaan dengan Alur Kerja Khusus"
    }
  ];

  return (
    <div className="flex flex-col gap-16 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 pt-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold mb-6">
          <Zap size={16} /> Otomasi & Efisiensi
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
          Percepat Kerja Bisnis Anda dengan <span className="text-indigo-600">Sistem Pintar</span>
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-8">
          Jangan biarkan proses manual menghambat pertumbuhan Anda. Kami membangun sistem yang bekerja 24/7 untuk memastikan operasional Anda berjalan mulus tanpa kesalahan manusia.
        </p>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Efisiensi Waktu", 
              desc: "Otomatisasi tugas berulang sehingga tim Anda bisa fokus pada hal yang lebih strategis.",
              icon: <Zap className="text-amber-500" /> 
            },
            { 
              title: "Akurasi Data", 
              desc: "Minimalisir human error dengan sistem validasi data yang ketat dan otomatis.",
              icon: <ShieldCheck className="text-green-500" /> 
            },
            { 
              title: "Akses Kapan Saja", 
              desc: "Berbasis cloud yang memungkinkan Anda memantau bisnis dari rumah maupun saat perjalanan.",
              icon: <Cloud className="text-blue-500" /> 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CATALOG GRID */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {systems.map((sys, idx) => (
              <div key={idx} className="group bg-white border border-slate-200 p-8 md:p-10 rounded-[2.5rem] hover:border-indigo-600 transition-all hover:shadow-2xl hover:shadow-indigo-100/50 flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-indigo-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {sys.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
                    {sys.bestFor}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4">{sys.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {sys.description}
                </p>

                <div className="space-y-3 mb-10 flex-grow">
                  {sys.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle2 size={16} className="text-indigo-500" /> {feat}
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Investasi Mulai</div>
                    <div className="text-xl font-black text-indigo-600">{sys.price}</div>
                  </div>
                  <a 
                    href={`https://wa.me/6282371542230?text=Halo%20Oshtore,%20saya%20tertarik%20dengan%20${encodeURIComponent(sys.title)}`}
                    target="_blank"
                    className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-indigo-600 transition-all shadow-lg active:scale-95"
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="px-6 py-20 bg-slate-900 rounded-[3rem] mx-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Alur Pengerjaan Sistem</h2>
            <p className="text-slate-400">Kami memastikan sistem yang dibangun benar-benar menyelesaikan masalah Anda.</p>
          </div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Konsultasi Alur", desc: "Kami mempelajari bagaimana bisnis Anda berjalan saat ini." },
              { step: "02", title: "Perancangan UI & Arsitektur", desc: "Membuat desain antarmuka yang mudah digunakan oleh staf Anda." },
              { step: "03", title: "Development & Testing", desc: "Proses coding dan uji coba ketat untuk memastikan tidak ada error." },
              { step: "04", title: "Training & Handover", desc: "Pelatihan penggunaan sistem untuk Anda dan tim hingga mahir." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-4xl font-black text-indigo-500/30 group-hover:text-indigo-500 transition-colors tabular-nums">{item.step}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="px-6 text-center py-10">
        <h2 className="text-3xl font-black text-slate-900 mb-6">Butuh Sistem Custom yang Berbeda?</h2>
        <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
          Konsultasikan kebutuhan spesifik Anda. Kami siap merancang solusi teknologi yang pas untuk skala bisnis Anda saat ini.
        </p>
        <a 
          href="https://wa.me/6282371542230" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95"
        >
          Diskusi Sistem Sekarang
        </a>
      </section>

    </div>
  );
}