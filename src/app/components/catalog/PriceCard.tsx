import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

// Definisi tipe data lokal (untuk memastikan file ini mandiri)
export interface LandingPagePackage {
  name: string;
  price: string;
  update: string;
  features: string[];
  color: 'indigo' | 'slate';
  popular?: boolean;
}

interface PriceCardProps {
  data: LandingPagePackage;
}

/**
 * Komponen PriceCard
 * Digunakan untuk menampilkan paket harga pada katalog Landing Page.
 */
export const PriceCard: React.FC<PriceCardProps> = ({ data }) => {
  return (
    <div className={`relative bg-white border-2 ${
      data.popular 
        ? 'border-indigo-600 shadow-2xl shadow-indigo-100' 
        : 'border-slate-100 shadow-sm'
    } p-8 md:p-10 rounded-[2.5rem] hover:scale-[1.02] transition-all flex flex-col h-full`}>
      
      {/* Label Populer */}
      {data.popular && (
        <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
          Paling Populer
        </div>
      )}

      {/* Header Harga */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-2">
          {data.name}
        </h3>
        <div className="text-4xl font-black text-slate-900">
          {data.price}
        </div>
      </div>

      {/* List Fitur */}
      <div className="space-y-4 mb-10 flex-grow">
        {data.features.map((feat, idx) => (
          <div key={idx} className="flex items-start gap-3 text-slate-600 font-medium leading-tight text-sm">
            <CheckCircle2 size={18} className="text-indigo-500 mt-0.5 flex-shrink-0" />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      {/* Footer & CTA */}
      <div className="pt-8 border-t border-slate-50 flex flex-col gap-4 mt-auto">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs bg-indigo-50 w-fit px-3 py-1 rounded-lg">
          <Clock size={14} /> {data.update}
        </div>
        <Button 
          variant={data.color === 'indigo' ? 'primary' : 'secondary'}
          fullWidth
          onClick={() => window.open(`https://wa.me/6282371542230?text=Halo%20Oshtore,%20saya%20tertarik%20dengan%20${encodeURIComponent(data.name)}`, '_blank')}
        >
          Pesan Paket Ini
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;