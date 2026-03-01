import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Monitor, 
  Smartphone, 
  Search, 
  Clock, 
  ShieldCheck,
  Star,
  Layers
} from 'lucide-react';

/**
 * LANDING PAGE CATALOG
 * Fokus: Penawaran paket jasa pembuatan landing page (UMKM & Bisnis)
 */
export default function LandingPageCatalog() {
  const packages = [
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
          color: "slate"
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
          color: "slate"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-16 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 pt-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold mb-6">
          <Star size={16} className="fill-indigo-700" /> Solusi Konversi Tinggi
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
          Landing Page yang <span className="text-indigo-600">Menjual</span> untuk Bisnis Anda
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed mb-8">
          Kami mendesain landing page yang tidak hanya indah dipandang, tetapi juga dioptimasi secara teknis untuk mengubah pengunjung menjadi pembeli setia.
        </p>
      </section>

      {/* 2. KEY BENEFITS */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Smartphone />, title: "Mobile Friendly", desc: "Tampilan sempurna di HP" },
            { icon: <Zap />, title: "Loading Kilat", desc: "Mencegah pengunjung kabur" },
            { icon: <Search />, title: "SEO Ready", desc: "Mudah ditemukan di Google" },
            { icon: <Layers />, title: "High Conversion", desc: "Fokus pada penjualan" }
          ].map((benefit, i) => (
            <div key={i} className="text-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
              <p className="text-xs text-slate-500">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRICING GRID */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {packages.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">{cat.category}</h2>
                <div className="h-px bg-slate-200 flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`relative group bg-white border-2 ${item.popular ? 'border-indigo-600 shadow-2xl shadow-indigo-100' : 'border-slate-100 shadow-sm'} p-8 md:p-10 rounded-[2.5rem] hover:scale-[1.02] transition-all flex flex-col`}
                  >
                    {item.popular && (
                      <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                        Paling Populer
                      </div>
                    )}

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-2">{item.name}</h3>
                      <div className="text-4xl font-black text-slate-900">{item.price}</div>
                    </div>

                    <div className="space-y-4 mb-10 flex-grow">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-slate-600 font-medium leading-tight">
                          <CheckCircle2 size={18} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-slate-50 flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm bg-indigo-50 w-fit px-3 py-1 rounded-lg">
                        <Clock size={14} /> {item.update}
                      </div>
                      <a 
                        href={`https://wa.me/6282371542230?text=Halo%20Oshtore,%20saya%20tertarik%20dengan%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        className={`w-full py-4 rounded-2xl font-black text-center transition-all active:scale-95 shadow-lg ${
                          item.color === 'indigo' 
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200' 
                            : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'
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
      <section className="px-6">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 p-10 rounded-[3rem] text-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
            <Zap className="text-amber-500" size={32} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Waktu Pengerjaan Kilat</h3>
          <p className="text-slate-500 text-lg mb-2">Hanya butuh <span className="text-indigo-600 font-bold text-2xl">1-2 HARI</span> saja.</p>
          <p className="text-sm text-slate-400">Tergantung antrian, namun kami selalu memprioritaskan kecepatan tanpa mengurangi kualitas detail.</p>
        </div>
      </section>

      {/* 5. PORTFOLIO LINK CTA */}
      <section className="px-6 py-10 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Belum Yakin? Lihat Hasil Kerja Kami</h3>
        <a 
          href="https://fosht" 
          target="_blank"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all group"
        >
          Lihat Portofolio Lengkap <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      {/* 6. FINAL CTA */}
      <section className="px-6 mb-10">
        <div className="max-w-7xl mx-auto bg-indigo-600 p-10 md:p-16 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Konsultasikan Branding Anda Gratis</h2>
            <p className="text-indigo-100 mb-10 max-w-xl mx-auto">Tanya-tanya dulu diperbolehkan. Kami bantu tentukan paket mana yang paling cocok untuk skala bisnis Anda saat ini.</p>
            <a 
              href="https://wa.me/6282371542230" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-xl active:scale-95"
            >
              Hubungi WhatsApp Oshtore
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}