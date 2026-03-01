import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import './globals.css'; // Pastikan Anda memiliki file CSS global untuk Tailwind

// Mengonfigurasi Font Plus Jakarta Sans untuk kesan premium
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Oshtore | Jasa Landing Page & Sistem Bisnis Profesional',
  description: 'Tingkatkan konversi penjualan dan efisiensi operasional bisnis Anda dengan solusi digital dari Oshtore.',
  icons: {
    icon: '/img/oshtore-logo1-removebg-.png',
  },
};

/**
 * ROOT LAYOUT
 * Wrapper utama yang menyatukan Navbar, Konten (children), dan Footer.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Diubah ke mode gelap (bg-[#020617] text-slate-100) agar senada dengan Navbar & Footer baru */}
      <body className={`${jakarta.variable} font-sans bg-[#020617] text-slate-100 min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-indigo-500/30`}>
        
        {/* Dekorasi Background (Latar Belakang Halus Mode Gelap) */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Ornamen Indigo di Kanan Atas */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
          
          {/* Ornamen Purple di Kiri Bawah */}
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]"></div>
          
          {/* Ornamen Blue Tambahan */}
          <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]"></div>
        </div>

        {/* Komponen Navigasi Utama */}
        <Navbar />
        
        {/* Main Content: Tempat halaman (page.tsx) akan dirender */}
        {/* Menggunakan pt-32 agar konten tidak tertutup oleh Navbar melayang yang baru */}
        <main className="flex-grow pt-32 min-h-[60vh]">
          {children}
        </main>

        {/* Komponen Footer */}
        <Footer />
        
        {/* WhatsApp Floating Button (Opsional untuk konversi cepat) */}
        <a 
          href="https://wa.me/6282371542230"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-40 p-4 bg-[#25D366] text-white rounded-2xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all active:scale-95 md:hidden"
          title="Chat WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.417 0 6.556-5.333 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.52.909 3.415 1.389 5.335 1.389 5.466 0 9.911-4.444 9.911-9.911 0-2.652-1.032-5.147-2.905-7.021-1.873-1.874-4.368-2.907-7.022-2.907-5.467 0-9.911 4.444-9.911 9.911 0 1.94.57 3.83 1.65 5.441l-1.011 3.691 3.788-.992zm11.458-7.391c-.301-.15-1.782-.879-2.057-.979-.275-.1-.475-.15-.675.15-.2.3-.775 1.054-.95 1.254-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.411-1.487-.892-.795-1.494-1.777-1.669-2.076-.175-.3-.018-.463.132-.612.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.52l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.23 5.125 4.532.715.311 1.273.497 1.709.635.719.227 1.373.195 1.89.117.576-.088 1.782-.728 2.032-1.43.25-.702.25-1.303.175-1.43-.075-.127-.275-.202-.575-.352z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}