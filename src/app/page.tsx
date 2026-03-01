'use client';

import React from 'react';
import Link from 'next/link';
import { motion, easeInOut } from 'framer-motion';
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
  Smartphone
} from 'lucide-react';
import { Button } from './components/ui/Button'; // Disesuaikan path-nya agar sesuai struktur folder

// --- Animation Configuration ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-indigo-500/30 overflow-hidden">
      
      {/* --- Ambient Background & Noise --- */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <main className="pt-6 md:pt-10 pb-32">
        {/* --- Hero Section --- */}
        <section className="px-6 text-center max-w-6xl mx-auto mb-32 relative z-10">
          
          {/* Floating Badges Decoration (Desktop Only) */}
          <motion.div variants={floatingAnim} initial="initial" animate="animate" className="hidden lg:flex absolute top-4 -left-4 xl:-left-16 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-2xl opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
            <div className="bg-indigo-500/20 p-2 rounded-xl"><Code size={18} className="text-indigo-400" /></div>
            <span className="text-sm font-semibold text-slate-400">Clean Code</span>
          </motion.div>

          <motion.div variants={floatingAnimReverse} initial="initial" animate="animate" className="hidden lg:flex absolute bottom-12 -right-4 xl:-right-16 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-2xl opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
            <div className="bg-purple-500/20 p-2 rounded-xl"><Smartphone size={18} className="text-purple-400" /></div>
            <span className="text-sm font-semibold text-slate-400">Responsive UI</span>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center relative"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold mb-8 backdrop-blur-md">
              <Sparkles size={14} className="text-indigo-400 animate-pulse" /> #1 Trusted Digital Solution
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] mb-8 tracking-tighter">
              Accelerate Your Business into the <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl rounded-full"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 drop-shadow-sm">
                  Digital Era.
                </span>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Building elegant, fast, and results-driven digital infrastructure. Leave the old ways behind, start automating today.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
              <Button className="!px-8 !py-4 text-base w-full sm:w-auto group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Consultation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="secondary" className="!px-8 !py-4 text-base w-full sm:w-auto hover:bg-white/10 transition-colors">
                View Pricing & Services
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Services / Categories Section --- */}
        <section className="px-6 max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Landing Page Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative bg-[#0B0F19]/80 backdrop-blur-xl border border-white/5 p-10 md:p-12 rounded-[2.5rem] hover:border-indigo-500/40 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 text-indigo-400 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_30px_rgba(79,70,229,0.1)]">
                  <Monitor size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Premium Landing Page</h3>
                <p className="text-slate-400 mb-8 text-base leading-relaxed">
                  Boost your sales conversions with an exclusive design, fully responsive across all devices, and optimized for load speed (SEO Friendly).
                </p>
                <div className="space-y-4 mb-10">
                  {["Exclusive UI/UX Design", "Free 1-Year Domain & Hosting", "Copywriting & SEO Optimization"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 font-medium text-sm">
                      <div className="p-1 bg-indigo-500/10 rounded-full"><CheckCircle2 size={16} className="text-indigo-400" /></div> {item}
                    </div>
                  ))}
                </div>
                <Link href="/landing-page" className="block w-full">
                  <Button variant="outline" className="w-full group-hover:bg-indigo-500/10 group-hover:text-white transition-all">View Website Catalog</Button>
                </Link>
              </div>
            </motion.div>

            {/* Business System Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative bg-[#0B0F19]/80 backdrop-blur-xl border border-white/5 p-10 md:p-12 rounded-[2.5rem] hover:border-purple-500/40 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-500/5 text-purple-400 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                  <Settings size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Custom Business System</h3>
                <p className="text-slate-400 mb-8 text-base leading-relaxed">
                  Automate your business operations with smart custom systems. Reduce human error and monitor data in real-time.
                </p>
                <div className="space-y-4 mb-10">
                  {["POS & Inventory System", "Owner Monitoring Dashboard", "Employee Management (HRIS)"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 font-medium text-sm">
                      <div className="p-1 bg-purple-500/10 rounded-full"><CheckCircle2 size={16} className="text-purple-400" /></div> {item}
                    </div>
                  ))}
                </div>
                <Link href="/system" className="block w-full">
                  <Button variant="primary" className="w-full shadow-purple-500/20 bg-purple-600 hover:bg-purple-500">Explore System Solutions</Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Stats Section --- */}
        <section className="mt-32 px-6 max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { val: "50+", lab: "Projects Completed", ico: <Rocket size={26} className="text-indigo-400" /> },
              { val: "100%", lab: "Client Satisfaction", ico: <Users size={26} className="text-purple-400" /> },
              { val: "24/7", lab: "Technical Support", ico: <Zap size={26} className="text-blue-400" /> },
              { val: "6 Mos", lab: "System Warranty", ico: <ShieldCheck size={26} className="text-teal-400" /> }
            ].map((stat, i) => (
              <motion.div 
                variants={fadeInUp} 
                key={i} 
                className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[2rem] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group"
              >
                <div className="mb-5 bg-white/5 p-4 rounded-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-lg">{stat.ico}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{stat.val}</div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest text-center">{stat.lab}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- Call to Action Section --- */}
        <section className="mt-32 px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-900 p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden shadow-[0_20px_60px_rgba(79,70,229,0.2)]"
          >
            {/* CTA Decoration */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]" 
            />

            <div className="relative z-10 flex flex-col items-center">
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
                Start Your Transformation
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight max-w-3xl">
                Ready to Step Ahead of Your Competitors?
              </h2>
              <p className="text-indigo-100/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Don't delay your business digitization. Discuss your ideas and operational needs with our team for free today.
              </p>
              <Button className="!px-10 !py-5 !text-lg bg-white !text-indigo-900 hover:bg-indigo-50 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300">
                Contact via WhatsApp
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}