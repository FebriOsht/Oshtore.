'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, easeInOut, useInView } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Users,
  Monitor,
  Settings,
  Rocket,
  Sparkles,
  Code,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';

// --- Internal Button Component ---
const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline', 
  className?: string,
  onClick?: () => void
}) => {
  const baseStyle = "inline-flex items-center justify-center font-bold transition-all duration-300";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
    outline: "border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Komponen Angka Animasi ---
const AnimatedNumber = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      // Menentukan interval waktu (ms) per langkah animasi
      const incrementTime = (duration * 1000) / value;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === value) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

// --- Animation Configuration ---
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

const floatingAnim = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 5, repeat: Infinity, ease: easeInOut }
  }
};

const floatingAnimReverse = {
  initial: { y: 0 },
  animate: {
    y: [10, -10, 10],
    transition: { duration: 6, repeat: Infinity, ease: easeInOut }
  }
};

export default function LandingPage() {
  return (
    // Background utama dipaksa menjadi gelap (#020617 - slate-950)
    <PageTransition className="flex flex-col gap-24 pb-24 relative z-10 overflow-hidden bg-[#020617] transition-colors duration-500">
      
      {/* --- Ambient Background & Noise --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.15, 0.25, 0.15] // Opacity tinggi untuk mode gelap
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.1, 0.2, 0.1] // Opacity tinggi untuk mode gelap
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/15 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <main className="pt-6 md:pt-10 pb-24 md:pb-32">
        {/* --- Hero Section --- */}
        <section className="px-4 sm:px-6 text-center max-w-6xl mx-auto mb-24 md:mb-40 relative z-10">
          
          {/* Decorative Floating Elements */}
          <motion.div variants={floatingAnim} initial="initial" animate="animate" className="hidden xl:flex absolute top-10 -left-20 items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl transition-colors">
            <div className="bg-indigo-500/20 p-2 rounded-xl transition-colors"><Code size={20} className="text-indigo-400" /></div>
            <span className="text-sm font-bold text-slate-300 tracking-wide transition-colors">Next-Gen Stack</span>
          </motion.div>

          <motion.div variants={floatingAnimReverse} initial="initial" animate="animate" className="hidden xl:flex absolute bottom-20 -right-20 items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl transition-colors">
            <div className="bg-emerald-500/20 p-2 rounded-xl transition-colors"><Rocket size={20} className="text-emerald-400" /></div>
            <span className="text-sm font-bold text-slate-300 tracking-wide transition-colors">Fast Deployment</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center relative"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 text-indigo-300 text-[10px] md:text-xs font-black tracking-[0.15em] uppercase mb-8 md:mb-10 backdrop-blur-xl transition-colors">
              <Sparkles size={12} className="text-indigo-400 animate-pulse md:w-3.5 md:h-3.5" /> #1 Agensi Transformasi Digital
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-[2.5rem] leading-[1.1] sm:text-6xl md:text-8xl lg:text-[6.5rem] font-black text-white md:leading-[0.95] mb-6 md:mb-10 tracking-tighter px-2 transition-colors">
              Level Up Your <br className="hidden md:block" />
              <span className="relative inline-block mt-2 md:mt-0">
                <span className="absolute -inset-2 md:-inset-4 bg-indigo-500/20 blur-xl md:blur-2xl rounded-full transition-colors"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-sm transition-colors">
                  Digital Presence.
                </span>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-sm sm:text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium px-4 transition-colors">
              Kami tidak hanya membangun website. Kami membangun infrastruktur digital yang elegan, kencang, dan didesain khusus untuk melipatgandakan profit bisnis Anda.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-3 md:gap-5 w-full sm:w-auto px-4">
              <Button 
                onClick={() => window.open('https://wa.me/62895366766999', '_blank')}
                className="!px-6 md:!px-10 !py-3.5 md:!py-5 text-sm md:text-lg w-full sm:w-auto group relative overflow-hidden !rounded-full shadow-[0_0_30px_rgba(79,70,229,0.4)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                  Konsultasi Gratis Sekarang
                  <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <a href="/catalog" className="w-full sm:w-auto block">
                <Button variant="secondary" className="!px-6 md:!px-10 !py-3.5 md:!py-5 text-sm md:text-lg w-full !rounded-full backdrop-blur-sm">
                  Lihat Katalog Jasa
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Professional Stats Section --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10 mb-24 md:mb-48">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {[
              { val: 50, suffix: "+", lab: "Proyek Selesai", ico: <Rocket size={24} className="text-indigo-400 transition-colors" /> },
              { val: 100, suffix: "%", lab: "Kepuasan Klien", ico: <Users size={24} className="text-purple-400 transition-colors" /> },
              { val: 24, suffix: "/7", lab: "Dukungan Teknis", ico: <Zap size={24} className="text-blue-400 transition-colors" /> },
              { val: 6, suffix: " Bln", lab: "Garansi Sistem", ico: <ShieldCheck size={24} className="text-teal-400 transition-colors" /> }
            ].map((stat, i) => (
              <motion.div 
                variants={fadeInUp} 
                key={i} 
                className="flex flex-col items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group relative overflow-hidden shadow-lg backdrop-blur-sm"
              >
                {/* Aksen Latar Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
                
                <div className="mb-5 bg-white/5 p-4 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm border border-white/5 relative z-10">
                  {stat.ico}
                </div>
                
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-indigo-300 transition-colors relative z-10 flex items-baseline">
                  <AnimatedNumber value={stat.val} />
                  <span className="text-2xl md:text-3xl font-bold ml-1">{stat.suffix}</span>
                </div>
                
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest text-center relative z-10 group-hover:text-slate-300 transition-colors">
                  {stat.lab}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- Services Dual Section --- */}
        <section className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 md:gap-10"
          >
            {/* Landing Page Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative bg-[#0B0F19]/60 backdrop-blur-2xl border border-white/5 p-8 sm:p-10 md:p-14 rounded-[2rem] md:rounded-[3.5rem] hover:border-indigo-500/40 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 bg-indigo-500/10 rounded-full blur-[80px] md:blur-[100px] group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 text-indigo-400 rounded-[1.25rem] md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 border border-indigo-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                  <Monitor size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight transition-colors">Premium <br className="hidden md:block"/>Landing Page</h3>
                
                <p className="text-slate-400 mb-8 md:mb-10 text-sm md:text-lg leading-relaxed flex-grow transition-colors">
                  Ubah pengunjung menjadi pembeli dengan desain eksklusif yang memanjakan mata, sangat ringan di HP, dan dioptimasi penuh untuk SEO Google.
                </p>
                
                <div className="space-y-3 md:space-y-5 mb-8 md:mb-12">
                  {["Desain UI/UX Eksklusif & Modern", "Free Domain & Hosting (1 Tahun)", "Optimasi Kecepatan Kilat (90+ score)"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4 text-slate-300 font-medium text-xs md:text-sm leading-snug transition-colors">
                      <div className="p-1 bg-indigo-500/20 rounded-full border border-indigo-500/30 mt-0.5 shrink-0 transition-colors"><CheckCircle2 size={14} className="text-indigo-400 md:w-4 md:h-4" /></div> {item}
                    </div>
                  ))}
                </div>
                
                <a href="/landing-page-service" className="block w-full mt-auto">
                  <Button variant="outline" className="w-full !rounded-xl md:!rounded-2xl border-indigo-500/30 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all !py-3.5 md:!py-5 flex items-center justify-center gap-2 text-sm md:text-base">
                    Eksplor Jasa Landing Page <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Business System Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative bg-[#0B0F19]/60 backdrop-blur-2xl border border-white/5 p-8 sm:p-10 md:p-14 rounded-[2rem] md:rounded-[3.5rem] hover:border-purple-500/40 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-[80px] md:blur-[100px] group-hover:bg-purple-500/20 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-purple-500/5 text-purple-400 rounded-[1.25rem] md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 border border-purple-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                  <Settings size={32} className="md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 tracking-tight transition-colors">Business <br className="hidden md:block"/>System Custom</h3>
                
                <p className="text-slate-400 mb-8 md:mb-10 text-sm md:text-lg leading-relaxed flex-grow transition-colors">
                  Otomatisasi operasional bisnis Anda dengan sistem pintar. Dari POS, inventori, hingga dashboard owner yang bisa dipantau dari mana saja.
                </p>
                
                <div className="space-y-3 md:space-y-5 mb-8 md:mb-12">
                  {["Sistem Kasir & Inventori (POS)", "Dashboard Monitoring Real-time", "Otomatisasi Bot & Web Scraping"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 md:gap-4 text-slate-300 font-medium text-xs md:text-sm leading-snug transition-colors">
                      <div className="p-1 bg-purple-500/20 rounded-full border border-purple-500/30 mt-0.5 shrink-0 transition-colors"><CheckCircle2 size={14} className="text-purple-400 md:w-4 md:h-4" /></div> {item}
                    </div>
                  ))}
                </div>
                
                <a href="/system" className="block w-full mt-auto">
                  <Button className="w-full !rounded-xl md:!rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.2)] bg-purple-600 hover:bg-purple-500 !py-3.5 md:!py-5 flex items-center justify-center gap-2 text-sm md:text-base text-white transition-colors">
                    Eksplor Solusi Sistem <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Featured Portfolio Teaser --- */}
        <section className="mt-24 md:mt-48 px-4 sm:px-6 text-center max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight transition-colors">Sudah Saatnya Bisnis Anda <br className="hidden md:block"/>Naik Kelas secara Digital.</h2>
            <p className="text-slate-400 text-sm sm:text-base md:text-xl max-w-2xl mx-auto px-2 transition-colors">Lihat bagaimana kami membantu puluhan klien membangun identitas visual dan sistem yang tangguh.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative p-[2px] md:p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full md:rounded-[3rem] inline-block w-full sm:w-auto shadow-lg"
          >
            <a 
              href="https://fosht.vercel.app" 
              target="_blank"
              rel="noreferrer"
              className="flex sm:inline-flex items-center justify-center gap-3 md:gap-4 px-6 md:px-12 py-4 md:py-6 bg-[#020617] text-white rounded-full md:rounded-[2.8rem] font-black text-sm sm:text-base md:text-xl hover:bg-transparent hover:text-white transition-all group w-full"
            >
              Lihat Portofolio Lengkap <ExternalLink size={18} className="md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* --- Call to Action Section --- */}
        <section className="mt-24 md:mt-48 px-4 sm:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-900 via-[#0a0f24] to-purple-950 p-10 sm:p-16 md:p-28 rounded-[2.5rem] md:rounded-[4rem] text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/5 transition-colors"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
            
            {/* CTA Background Decor */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-40 -left-40 w-64 h-64 md:w-96 md:h-96 bg-indigo-500/20 rounded-full blur-[80px] md:blur-[120px]" 
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-40 -right-40 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-[80px] md:blur-[120px]" 
            />

            <div className="relative z-10 flex flex-col items-center">
              <div className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-[10px] md:text-sm font-bold mb-6 md:mb-10 backdrop-blur-xl tracking-widest uppercase transition-colors">
                Mulai Transformasi Anda
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-8 tracking-tight leading-tight md:leading-[0.95] max-w-4xl transition-colors">
                Siap Melangkah Lebih Jauh <br className="hidden md:block"/> dari Kompetitor Anda?
              </h2>
              <p className="text-indigo-100/70 text-sm sm:text-lg md:text-2xl mb-10 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed px-2 transition-colors">
                Diskusikan ide dan kebutuhan operasional bisnis Anda dengan tim ahli kami hari ini secara gratis.
              </p>
              
              <Button 
                onClick={() => window.open('https://wa.me/62895366766999', '_blank')}
                className="w-full sm:w-auto !px-8 md:!px-12 !py-4 md:!py-6 text-sm md:!text-xl !bg-white !text-indigo-950 hover:!bg-slate-200 hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.25)] transition-all duration-300 !rounded-2xl md:!rounded-full font-black flex items-center justify-center gap-2"
              >
                Hubungi via WhatsApp <MessageSquareIcon className="w-5 h-5 md:w-6 md:h-6 text-indigo-900" />
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}

// Icon helper
function MessageSquareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.417 0 6.556-5.333 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.52.909 3.415 1.389 5.335 1.389 5.466 0 9.911-4.444 9.911-9.911 0-2.652-1.032-5.147-2.905-7.021-1.873-1.874-4.368-2.907-7.022-2.907-5.467 0-9.911 4.444-9.911 9.911 0 1.94.57 3.83 1.65 5.441l-1.011 3.691 3.788-.992zm11.458-7.391c-.301-.15-1.782-.879-2.057-.979-.275-.1-.475-.15-.675.15-.2.3-.775 1.054-.95 1.254-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.411-1.487-.892-.795-1.494-1.777-1.669-2.076-.175-.3-.018-.463.132-.612.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.52l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.116 3.23 5.125 4.532.715.311 1.273.497 1.709.635.719.227 1.373.195 1.89.117.576-.088 1.782-.728 2.032-1.43.25-.702.25-1.303.175-1.43-.075-.127-.275-.202-.575-.352z"/>
    </svg>
  );
}