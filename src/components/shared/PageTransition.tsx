'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

// Konfigurasi animasi masuk dan keluar untuk konten halaman
const pageTransitionAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, // Diperlambat dari 0.6 ke 0.8
      ease: easeInOut,
      staggerChildren: 0.15 // Diperlambat sedikit
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.6, ease: easeInOut } // Diperlambat dari 0.4 ke 0.6
  }
};

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageTransition Component - High Tech "System Boot" Edition
 * Memberikan efek loading layar terminal/sistem yang sedang memuat modul,
 * diakhiri dengan animasi logo terbang ke Navbar secara lebih perlahan.
 */
export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("INITIALIZING_CORE...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Simulasi Teks Log Terminal yang berubah-ubah
    const texts = [
      "INITIALIZING_CORE...",
      "LOADING_UI_MODULES...",
      "ESTABLISHING_CONNECTION...",
      "DECRYPTING_ASSETS...",
      "SYSTEM_READY_V.1.0"
    ];
    
    let step = 0;
    const textInterval = setInterval(() => {
      step++;
      if (step < texts.length) {
        setLoadingText(texts[step]);
      }
    }, 400); // Ganti teks diperlambat menjadi setiap 400ms

    // 2. Simulasi Progress Bar dari 0% ke 100%
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 12) + 3, 100);
      });
    }, 120); // Pengisian bar diperlambat dari 80ms ke 120ms

    // 3. Durasi Total Loading Screen Diperpanjang (2 Detik)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Diperpanjang dari 1200ms ke 2000ms

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            // Waktu background fade out diperlambat
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }} 
            className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Ambient Background untuk Loading Screen */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] border border-indigo-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-8">
              
              {/* Core System Rings Animation */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-10">
                {/* Ring Luar */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  exit={{ opacity: 0, scale: 0, transition: { duration: 0.8 } }} // Menghilang lebih lambat
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }} // Berputar lebih lambat
                  className="absolute inset-0 border border-indigo-500/20 border-t-indigo-500 rounded-full"
                />
                {/* Ring Dalam */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  exit={{ opacity: 0, scale: 0, transition: { duration: 0.8 } }} // Menghilang lebih lambat
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }} // Berputar lebih lambat
                  className="absolute inset-3 border border-purple-500/20 border-b-purple-500 rounded-full"
                />
                
                {/* Center Logo - Animasi Terbang ke Navbar */}
                <motion.img 
                  src="/img/oshtore.png" 
                  alt="Logo Oshtore" 
                  className="relative z-50 w-auto h-20 object-contain"
                  exit={{ 
                    x: "calc(-50vw + 60px)", 
                    y: "calc(-50vh + 50px)", 
                    scale: 0.4, 
                    opacity: [1, 1, 0], 
                    transition: { 
                      duration: 1.5, // Durasi terbang diperlambat dari 0.8s menjadi 1.5s
                      ease: [0.42, 0, 0.58, 1], // Menggunakan easing "ease-in-out" standar agar pergerakan mulus merata
                      times: [0, 0.85, 1] // Opacity memudar lebih lambat di akhir perjalanan
                    }
                  }}
                />
              </div>

              {/* Progress Bar Container */}
              <motion.div 
                exit={{ opacity: 0, y: 20, transition: { duration: 0.8 } }} // Menghilang lebih lambat
                className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4 relative shadow-inner"
              >
                {/* Indikator Bar */}
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(79,70,229,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </motion.div>

              {/* Terminal Log Text & Persentase */}
              <motion.div 
                exit={{ opacity: 0, y: 20, transition: { duration: 0.8 } }} // Menghilang lebih lambat
                className="w-full flex justify-between items-center text-[10px] sm:text-xs font-mono"
              >
                <div className="text-indigo-300 flex items-center gap-2 drop-shadow-md truncate pr-4">
                  <span className="text-emerald-400 font-black">&gt;</span> 
                  {loadingText}
                  <motion.span 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-1.5 h-3.5 bg-emerald-400 inline-block align-middle"
                  />
                </div>
                <span className="text-emerald-400 font-bold tracking-widest shrink-0">{progress}%</span>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten Halaman Sebenarnya */}
      {!isLoading && (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageTransitionAnim}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}