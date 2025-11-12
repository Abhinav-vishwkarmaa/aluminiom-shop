import React from 'react';

const services = [
  {
    titleEn: 'Stainless Steel Railings',
    titleHi: 'स्टेनलेस स्टील रेलिंग',
    descEn: 'Balcony, staircase, terrace railings with 304 grade SS, matte or mirror finish.',
    descHi: 'बैलकनी, सीढ़ी, टैरेस के लिए 304 ग्रेड एसएस रेलिंग, मजबूत व आकर्षक डिजाइन।',
    tag: 'SS 304 / Modern Designs',
  },
  {
    titleEn: 'Aluminium Windows & Doors',
    titleHi: 'एल्युमिनियम खिड़की व दरवाज़े',
    descEn: 'Sliding / openable windows, partitions and doors with quality hardware.',
    descHi: 'स्मूद स्लाइडिंग, साउंड-रेड्यूसिंग, टिकाऊ एल्युमिनियम सेक्शन।',
    tag: 'Sliding / Casement / Partition',
  },
  {
    titleEn: 'Glass Railings & Canopy',
    titleHi: 'ग्लास रेलिंग व शेड',
    descEn: 'Smart glass railings for balcony and stairs with SS support.',
    descHi: 'टफनड ग्लास के साथ मॉडर्न लुक, सुरक्षित फिटिंग।',
    tag: 'Toughened Glass',
  },
  {
    titleEn: 'Main Gates & Fabrication',
    titleHi: 'मेन गेट व फैब्रिकेशन',
    descEn: 'Custom SS / MS gates, grills, safety doors and structure work.',
    descHi: 'डिज़ाइन अनुसार गेट, ग्रिल, शेड और स्ट्रक्चर वर्क।',
    tag: 'Custom Design',
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-slate-950/40 border border-slate-900 rounded-2xl p-4 space-y-3">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-sm font-heading font-semibold text-slate-100">
          Our Services / हमारी सेवाएँ
        </h3>
        <p className="text-[9px] text-slate-500">
          Designed for mobile-first viewing, easy to scan for your customers.
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5">
        {services.map((s) => (
          <div
            key={s.titleEn}
            className="h-full bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-col justify-between gap-1.5"
          >
            <div>
              <p className="text-[10px] font-semibold text-primary uppercase tracking-wide">
                {s.tag}
              </p>
              <p className="text-xs font-semibold text-slate-50">
                {s.titleEn}
              </p>
              <p className="text-[10px] text-slate-300">
                {s.titleHi}
              </p>
            </div>
            <p className="text-[9px] text-slate-400 leading-relaxed">
              {s.descEn}
              {' '}
              <span className="text-slate-500">{s.descHi}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;