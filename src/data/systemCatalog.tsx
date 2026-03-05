import React from 'react';
import { 
  BarChart3, 
  Database, 
  SearchCode, 
  Bot, 
  Cpu, 
  Server 
} from 'lucide-react';

export const TECH_STACK = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
];

export const FILTERS = [
  { label: "Semua", value: "all" },
  { label: "Retail & F&B", value: "retail" },
  { label: "Gudang & Pabrik", value: "gudang" },
  { label: "Owner & Manajer", value: "manajemen" },
  { label: "Riset & Data", value: "data" },
  { label: "CS & Otomasi", value: "otomasi" },
  { label: "Enterprise", value: "enterprise" },
];

export const SYSTEM_CATALOG = [
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