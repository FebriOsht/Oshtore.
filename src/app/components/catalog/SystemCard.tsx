import React, { ReactNode } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// Definisi tipe data lokal
export interface BusinessSystemItem {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  price: string;
  bestFor: string;
}

interface SystemCardProps {
  data: BusinessSystemItem;
}

/**
 * Komponen SystemCard
 * Digunakan untuk menampilkan solusi sistem bisnis pada katalog Business System.
 */
export const SystemCard: React.FC<SystemCardProps> = ({ data }) => {
  return (
    <div className="group bg-white border border-slate-200 p-8 md:p-10 rounded-[2.5rem] hover:border-indigo-600 transition-all hover:shadow-2xl hover:shadow-indigo-100/50 flex flex-col h-full">
      
      {/* Header & Ikon */}
      <div className="flex justify-between items-start mb-8">
        <div className="p-4 bg-indigo-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          {data.icon}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
          Cocok Untuk: {data.bestFor}
        </span>
      </div>
      
      {/* Konten Utama */}
      <h3 className="text-2xl font-black text-slate-900 mb-4">{data.title}</h3>
      <p className="text-slate-500 mb-8 leading-relaxed text-sm">
        {data.description}
      </p>

      {/* List Keunggulan */}
      <div className="space-y-3 mb-10 flex-grow">
        {data.features.map((feat, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
            <CheckCircle2 size={14} className="text-indigo-500" /> {feat}
          </div>
        ))}
      </div>

      {/* Footer Harga & CTA */}
      <div className="pt-8 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Investasi Mulai</div>
          <div className="text-lg font-black text-indigo-600">{data.price}</div>
        </div>
        <button 
          className="p-3 bg-slate-900 text-white rounded-xl hover:bg-indigo-600 transition-all shadow-lg active:scale-95"
          onClick={() => window.open(`https://wa.me/6282371542230?text=Halo%20Oshtore,%20saya%20tertarik%20dengan%20${encodeURIComponent(data.title)}`, '_blank')}
          title="Tanya melalui WhatsApp"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SystemCard;