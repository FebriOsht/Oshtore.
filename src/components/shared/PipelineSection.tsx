'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ScanSearch,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle,
  Terminal,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: '01',
    icon: <ScanSearch size={28} strokeWidth={1.5} />,
    color: '#6366f1',        // indigo
    glow:  'rgba(99,102,241,0.35)',
    label: 'System Requirement',
    tag:   'Analisis',
    desc:  'Merumuskan logika aplikasi, skema database, dan batas sistem secara spesifik berdasarkan alur bisnis Anda.',
    outputs: ['Dokumen spesifikasi teknis', 'ERD & diagram alur sistem', 'Estimasi timeline final'],
    cmd:   './execute_phase_01 --analyze',
    log:   '[SUCCESS] Alur sistem dipetakan.',
  },
  {
    num: '02',
    icon: <PenTool size={28} strokeWidth={1.5} />,
    color: '#3b82f6',        // blue
    glow:  'rgba(59,130,246,0.35)',
    label: 'UI/UX Architecture',
    tag:   'Desain',
    desc:  'Antarmuka didesain agar mudah dioperasikan staf non-teknis — intuitif, konsisten, dan sesuai identitas bisnis.',
    outputs: ['Wireframe & prototype interaktif', 'Design system & komponen UI', 'Review & approval Anda'],
    cmd:   './build_architecture --uiux',
    log:   '[SUCCESS] Antarmuka disetujui.',
  },
  {
    num: '03',
    icon: <Code2 size={28} strokeWidth={1.5} />,
    color: '#8b5cf6',        // purple
    glow:  'rgba(139,92,246,0.35)',
    label: 'Agile Development',
    tag:   'Pengembangan',
    desc:  'Penulisan kode Python / Node.js terstruktur, diikuti load test dan bug sweep sebelum masuk staging server.',
    outputs: ['Backend API terverifikasi', 'Unit test & load test lulus', 'Staging demo untuk Anda review'],
    cmd:   'npm run agile-development',
    log:   '[TESTING] 0 bugs found — ready for deploy.',
  },
  {
    num: '04',
    icon: <Rocket size={28} strokeWidth={1.5} />,
    color: '#10b981',        // emerald
    glow:  'rgba(16,185,129,0.35)',
    label: 'Deployment & Handover',
    tag:   'Go Live',
    desc:  'Sistem naik ke server produksi. Akses infrastruktur dipegang Oshtore; source code diserahkan jika disepakati di awal.',
    outputs: ['Sistem live di cloud server', 'Garansi bug 1–6 bulan', 'Maintenance support tersedia'],
    cmd:   'sudo deploy --env production',
    log:   '[ONLINE] System is live. Uptime 100%.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TerminalChip({ cmd, log, color }: { cmd: string; log: string; color: string }) {
  return (
    <div className="mt-5 rounded-xl overflow-hidden border border-white/5 bg-[#020617]/80 font-mono text-[11px]">
      {/* bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-white/5">
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-green-500/70" />
        <span className="ml-2 text-slate-500 text-[10px]">oshtore_deploy.sh</span>
      </div>
      {/* content */}
      <div className="px-4 py-3 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 shrink-0">~$</span>
          <span className="text-slate-300">{cmd}</span>
        </div>
        <div className="pl-5" style={{ color }}>
          {log}
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`flex items-start gap-0 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>

      {/* ── Card ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-[calc(50%-28px)] group"
      >
        <div
          className="relative rounded-2xl border border-white/[0.07] bg-[#080d1e]/80 backdrop-blur-xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/15"
          style={{ boxShadow: `0 0 0 0 ${step.glow}` }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 40px -8px ${step.glow}`)}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 0 0 ${step.glow}`)}
        >
          {/* ambient corner glow */}
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[60px] opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
            style={{ background: step.color }}
          />

          {/* top row: icon + tag */}
          <div className="relative z-10 flex items-start justify-between mb-5">
            <div
              className="w-13 h-13 p-3 rounded-xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background: `${step.color}18`,
                borderColor: `${step.color}30`,
                color: step.color,
              }}
            >
              {step.icon}
            </div>
            <span
              className="text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border"
              style={{ color: step.color, background: `${step.color}12`, borderColor: `${step.color}25` }}
            >
              {step.tag}
            </span>
          </div>

          {/* title */}
          <div className="relative z-10 mb-1">
            <span className="text-[11px] font-bold text-slate-600 tracking-widest font-mono">PHASE {step.num}</span>
          </div>
          <h3 className="relative z-10 text-xl font-black text-white tracking-tight mb-3">{step.label}</h3>
          <p className="relative z-10 text-sm text-slate-400 leading-relaxed mb-5">{step.desc}</p>

          {/* outputs */}
          <div className="relative z-10 space-y-2">
            {step.outputs.map((out, oi) => (
              <div key={oi} className="flex items-start gap-2.5 text-[13px] text-slate-300">
                <CheckCircle
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: step.color }}
                />
                {out}
              </div>
            ))}
          </div>

          {/* terminal chip */}
          <div className="relative z-10">
            <TerminalChip cmd={step.cmd} log={step.log} color={step.color} />
          </div>
        </div>
      </motion.div>

      {/* ── Centre spine: number bubble + connector dot ── */}
      <div className="w-14 shrink-0 flex flex-col items-center pt-7">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center font-black text-sm border-2 shrink-0"
          style={{
            background: `${step.color}18`,
            borderColor: step.color,
            color: step.color,
            boxShadow: `0 0 20px ${step.glow}`,
          }}
        >
          {step.num}
        </motion.div>
      </div>

      {/* ── Spacer opposite side ── */}
      <div className="w-[calc(50%-28px)]" />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function PipelineSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-40px' });

  return (
    <section className="px-4 sm:px-6 relative">

      {/* Section header */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 24 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold uppercase tracking-widest mb-6">
          <Terminal size={13} /> Pipeline Pengerjaan
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Dari Ide ke Sistem{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            yang Berjalan
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Empat fase terstruktur — transparan, terukur, dan tanpa kejutan di tengah jalan.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">

        {/* Vertical spine line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />

        <div className="flex flex-col gap-10">
          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* End node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center mt-10 gap-3"
        >
          <div className="w-px h-10 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold">
            <CheckCircle size={16} /> Sistem Anda Sudah Live
          </div>
        </motion.div>
      </div>

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-5xl mx-auto mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl border border-white/[0.07] bg-[#080d1e]/60 backdrop-blur-xl"
      >
        <div>
          <p className="text-white font-black text-lg tracking-tight">Siap mulai project Anda?</p>
          <p className="text-slate-400 text-sm mt-0.5">Konsultasi teknis gratis, tanpa komitmen.</p>
        </div>
        <a
          href="https://wa.me/62895366766999?text=Halo%20Oshtore,%20saya%20ingin%20konsultasi%20sistem"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95"
        >
          Jadwalkan Technical Meeting <ArrowRight size={15} />
        </a>
      </motion.div>

    </section>
  );
}