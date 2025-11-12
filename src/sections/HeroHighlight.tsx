import React from 'react';
import { Link } from 'react-router-dom';

const HeroHighlight: React.FC = () => {
  return (
    <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-soft-elevated">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 border border-primary/30 w-max text-[9px] text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Maa Durga SS Stiles & Aluminium Workshop
        </div>
        <div>
          <h2 className="text-2xl leading-snug font-heading font-semibold text-slate-50">
            मजबूत SS रेलिंग और एल्युमिनियम वर्क,
            <span className="text-primary"> भरोसेमंद क्वालिटी के साथ</span>
          </h2>
          <p className="mt-2 text-[11px] text-slate-300">
            Premium stainless steel railings, aluminium windows, glass railing, main gates and custom fabrication
            for homes, bungalows, showrooms and commercial projects. Site visit, design suggestion and fitting support.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[9px] text-slate-300">
          <div className="space-y-0.5">
            <p className="font-semibold text-slate-100">SS Railings / एसएस रेलिंग</p>
            <p>Balcony, stairs, terrace with matte / mirror finish.</p>
          </div>
          <div className="space-y-0.5">
            <p className="font-semibold text-slate-100">Aluminium Windows & Doors</p>
            <p>Sliding, casement, toughened glass, mosquito net options.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          <Link
            to="/contact"
            className="inline-flex-1 flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-[10px] font-semibold py-2.5 shadow-soft-elevated transition-colors"
          >
            Book Site Visit / साइट विज़िट बुक करें
          </Link>
          <Link
            to="/work"
            className="inline-flex-1 flex-1 min-w-[110px] inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-primary text-[10px] font-semibold py-2.5 border border-slate-700 transition-colors"
          >
            View Work / हमारा काम देखें
          </Link>
        </div>
        <div className="mt-1 grid grid-cols-3 gap-2 text-[8px] text-slate-400">
          <div>• 304 grade SS material</div>
          <div>• On-site fitting in proper alignment</div>
          <div>• Serving residential & commercial clients</div>
        </div>
      </div>
    </section>
  );
};

export default HeroHighlight;