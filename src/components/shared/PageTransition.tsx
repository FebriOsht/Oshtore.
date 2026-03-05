'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

const pageTransitionAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: easeInOut,
      staggerChildren: 0.15
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.6, ease: easeInOut }
  }
};

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("INITIALIZING_CORE...");
  const [progress, setProgress] = useState(0);

  // OPTIMIZED: Semua ref untuk cleanup yang bersih
  const progressRafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const texts = [
      "INITIALIZING_CORE...",
      "LOADING_UI_MODULES...",
      "ESTABLISHING_CONNECTION...",
      "DECRYPTING_ASSETS...",
      "SYSTEM_READY_V.1.0"
    ];

    // OPTIMIZED: Teks terminal pakai setTimeout berantai, bukan setInterval
    // Lebih presisi dan tidak overlap
    let step = 0;
    const scheduleNextText = () => {
      if (step >= texts.length - 1) return;
      step++;
      setLoadingText(texts[step]);
      textTimerRef.current = setTimeout(scheduleNextText, 400);
    };
    textTimerRef.current = setTimeout(scheduleNextText, 400);

    // OPTIMIZED: Progress bar pakai requestAnimationFrame
    // Jauh lebih smooth dari setInterval, tidak ada frame drop
    const totalDuration = 2000; // ms — sama dengan timeout di bawah
    let startTime: number | null = null;

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = elapsed / totalDuration;

      // easeOutCubic — terasa cepat di awal, melambat di akhir (natural loading feel)
      const eased = 1 - Math.pow(1 - Math.min(rawProgress, 1), 3);
      const currentProgress = Math.floor(eased * 100);

      setProgress(currentProgress);

      if (rawProgress < 1) {
        progressRafRef.current = requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
      }
    };

    progressRafRef.current = requestAnimationFrame(animateProgress);

    // OPTIMIZED: Timer loading tetap 2000ms — sama dengan versi asli
    // Tidak lebih lama, tidak lebih cepat. User experience tidak berubah.
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      if (progressRafRef.current) cancelAnimationFrame(progressRafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }} 
            className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Ambient Background — texture dipindah ke lokal /public/cubes.png */}
            <div className="absolute inset-0 bg-[url('/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

            {/* OPTIMIZED: Pulse blob — pakai CSS animate-pulse bawaan Tailwind
                Sama persis visualnya, tapi CSS animation lebih ringan dari Framer Motion */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] border border-indigo-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-8">
              
              {/* Core System Rings Animation
                  OPTIMIZED: Ring tetap pakai Framer Motion rotate karena ini elemen kecil (ringan)
                  tapi diberi will-change: transform agar browser siapkan GPU layer sejak awal */}
              <div className="relative w-24 h-24 flex items-center justify-center mb-10">
                <motion.div 
                  animate={{ rotate: 360 }}
                  exit={{ opacity: 0, scale: 0, transition: { duration: 0.8 } }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: 'transform' }}
                  className="absolute inset-0 border border-indigo-500/20 border-t-indigo-500 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  exit={{ opacity: 0, scale: 0, transition: { duration: 0.8 } }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ willChange: 'transform' }}
                  className="absolute inset-3 border border-purple-500/20 border-b-purple-500 rounded-full"
                />
                
                {/* Logo terbang ke Navbar — tidak ada perubahan visual */}
                <motion.img 
                  src="/img/oshtore.png" 
                  alt="Logo Oshtore" 
                  className="relative z-50 w-auto h-20 object-contain"
                  style={{ willChange: 'transform, opacity' }}
                  exit={{ 
                    x: "calc(-50vw + 60px)", 
                    y: "calc(-50vh + 50px)", 
                    scale: 0.4, 
                    opacity: [1, 1, 0], 
                    transition: { 
                      duration: 1.5,
                      ease: [0.42, 0, 0.58, 1],
                      times: [0, 0.85, 1]
                    }
                  }}
                />
              </div>

              {/* Progress Bar */}
              <motion.div 
                exit={{ opacity: 0, y: 20, transition: { duration: 0.8 } }}
                className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4 relative shadow-inner"
              >
                {/* OPTIMIZED: Pakai CSS width transition, bukan Framer Motion style prop
                    Lebih ringan karena tidak perlu JS per-frame untuk update width */}
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(79,70,229,0.8)] transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </motion.div>

              {/* Terminal Log Text & Persentase */}
              <motion.div 
                exit={{ opacity: 0, y: 20, transition: { duration: 0.8 } }}
                className="w-full flex justify-between items-center text-[10px] sm:text-xs font-mono"
              >
                <div className="text-indigo-300 flex items-center gap-2 drop-shadow-md truncate pr-4">
                  <span className="text-emerald-400 font-black">&gt;</span> 
                  {loadingText}
                  {/* OPTIMIZED: Cursor blink pakai CSS animate-pulse bawaan Tailwind */}
                  <span className="w-1.5 h-3.5 bg-emerald-400 inline-block align-middle animate-pulse" />
                </div>
                <span className="text-emerald-400 font-bold tracking-widest shrink-0">{progress}%</span>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten Halaman */}
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