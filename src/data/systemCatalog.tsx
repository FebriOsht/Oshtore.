import React from 'react';
import { 
  BarChart3, 
  Database, 
  SearchCode, 
  Bot, 
  Cpu, 
  Server 
} from 'lucide-react';

export const SYSTEM_CATALOG = [
  {
    title: "Sistem Kasir (POS) Custom",
    description: "Sistem kasir yang disesuaikan dengan alur unik bisnis Anda. Bukan sekadar input data, tapi alat bantu ambil keputusan dengan fitur khusus.",
    icon: <BarChart3 className="text-blue-400" size={32} />,
    features: ["Laporan Penjualan Real-time", "Manajemen Multi-cabang", "Integrasi Pembayaran Digital", "Cetak Struk & Nota Digital", "Otoritas Akses Pegawai"],
    price: "Mulai Rp 4.500.000",
    bestFor: "Retail, F&B, Toko Modern"
  },
  {
    title: "Manajemen Inventori & Gudang",
    description: "Hentikan kerugian akibat stok mati atau kehilangan barang. Pantau setiap pergerakan barang, retur, dan supplier secara otomatis.",
    icon: <Database className="text-indigo-400" size={32} />,
    features: ["Peringatan Stok Rendah (Auto)", "Audit & Opname Digital", "Manajemen Supplier & PO", "History Keluar/Masuk Barang", "Barcode/QR Scanner Support"],
    price: "Mulai Rp 5.000.000",
    bestFor: "Gudang, Distributor, Pabrik"
  },
  {
    title: "Web Scraping & Data Mining",
    description: "Kumpulkan puluhan ribu data dari internet secara otomatis. Cocok untuk riset kompetitor, ekstraksi harga, atau database prospek.",
    icon: <SearchCode className="text-emerald-400" size={32} />,
    features: ["Ekstraksi Data Marketplace", "Scraping Direktori Bisnis", "Format Output (Excel/CSV/JSON)", "Bypass Anti-Bot Standar", "Scraping Terjadwal"],
    price: "Mulai Rp 1.500.000",
    bestFor: "Riset Pasar, Agen Properti"
  },
  {
    title: "Bot Otomasi & Scripting",
    description: "Gantikan pekerjaan manual yang berulang dengan Bot cerdas. Kirim pesan massal, input data otomatis, atau notifikasi sistem.",
    icon: <Bot className="text-amber-400" size={32} />,
    features: ["Bot Telegram / WhatsApp", "Auto Input Data (Web Automation)", "Notifikasi Real-time Server", "Integrasi API Pihak Ketiga", "Script Maintenance 1 Bulan"],
    price: "Mulai Rp 2.000.000",
    bestFor: "Customer Service, Admin"
  },
  {
    title: "Dashboard ERP / Admin Monitoring",
    description: "Pantau seluruh performa bisnis dari mana saja. Visualisasi data tingkat lanjut yang memudahkan Anda melihat tren dan kebocoran.",
    icon: <Cpu className="text-purple-400" size={32} />,
    features: ["Grafik Pertumbuhan Interaktif", "CRM (Manajemen Pelanggan)", "Manajemen Kinerja Pegawai (KPI)", "Ekspor Laporan Kompleks", "Akses Cloud Aman"],
    price: "Mulai Rp 6.500.000",
    bestFor: "Owner Bisnis, Manajer Level Atas"
  },
  {
    title: "Custom Enterprise Web App",
    description: "Punya alur kerja yang sangat spesifik dan belum ada software-nya di pasaran? Kami bangun sistem dari nol khusus untuk Anda.",
    icon: <Server className="text-teal-400" size={32} />,
    features: ["Arsitektur Skalabel (AWS/GCP)", "Keamanan Data Enkripsi Tinggi", "Full Source Code Kepemilikan", "Dukungan Teknis Prioritas", "UI/UX Tailor-made"],
    price: "Custom Pricing",
    bestFor: "Perusahaan Skala Besar"
  }
];

export const TECH_STACK = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
];