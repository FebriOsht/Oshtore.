import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { SystemService } from '@/types/service'; // Asumsi path type setelah dirapikan

interface SystemCardProps {
  service: SystemService;
}

const SystemCard: React.FC<SystemCardProps> = ({ service }) => {
  return (
    <div className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20 hover:-translate-y-2">
      {/* Header Card (Ikon & Judul) */}
      <div className="p-8 pb-6 relative overflow-hidden">
        {/* Latar Belakang Ikon Abstrak */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-50 dark:bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
        
        <div className="relative z-10">
          <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-white transition-all duration-500">
            {/* Mengasumsikan service.icon adalah komponen lucide-react */}
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Konten Utama (Fitur-fitur) */}
      <div className="p-8 pt-0 flex-grow flex flex-col">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
          Fitur Utama
          <div className="h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-2"></div>
        </h4>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {service.features.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tombol Aksi */}
        <div className="mt-auto">
          <a
            href={`/system/${service.slug}`} // Asumsi ada routing detail
            className="flex items-center justify-between w-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-slate-900 dark:text-white font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300"
          >
            Pelajari Lebih Lanjut
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SystemCard;