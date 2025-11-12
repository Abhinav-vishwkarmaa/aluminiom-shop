import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const HeroHighlight: React.FC = () => {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';

  return (
    <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-soft-elevated">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 border border-primary/30 w-max text-[9px] text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {isHi
            ? 'Maa Durga SS Stiles & Aluminium Workshop'
            : 'Maa Durga SS Stiles & Aluminium Workshop'}
        </div>
        <div>
          <h2 className="text-2xl leading-snug font-heading font-semibold text-slate-50">
            {isHi
              ? 'मजबूत SS रेलिंग और एल्युमिनियम वर्क, भरोसेमंद क्वालिटी के साथ'
              : 'Premium SS railings & aluminium work with reliable quality'}
          </h2>
          <p className="mt-2 text-[11px] text-slate-300">
            {isHi
              ? 'SS ग्रिल, मेन गेट, रेलिंग, एल्युमिनियम विंडो और कस्टम फैब्रिकेशन — साइट विज़िट, डिज़ाइन सुझाव और प्रॉपर फिटिंग के साथ।'
              : 'SS grills, main gates, railings, aluminium windows and custom fabrication with site visit, design guidance and proper fitting.'}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[9px] text-slate-300">
          <div className="space-y-0.5">
            <p className="font-semibold text-slate-100">
              {isHi ? 'SS रेलिंग' : 'SS Railings'}
            </p>
            <p>
              {isHi
                ? 'बालकनी, सीढ़ी, टैरेस — मैट / मिरर फिनिश।'
                : 'Balcony, staircase, terrace with matte / mirror finish.'}
            </p>
          </div>
          <div className="space-y-0.5">
            <p className="font-semibold text-slate-100">
              {isHi ? 'एल्युमिनियम विंडो और डोर' : 'Aluminium Windows & Doors'}
            </p>
            <p>
              {isHi
                ? 'स्लाइडिंग, केसमेंट, ग्लास और मच्छर जाली के विकल्प।'
                : 'Sliding, casement, glass and mosquito net options.'}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          <Link
            to="/contact"
            className="inline-flex-1 flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-[10px] font-semibold py-2.5 shadow-soft-elevated transition-colors"
          >
            {isHi ? 'साइट विज़िट बुक करें' : 'Book Site Visit'}
          </Link>
          <Link
            to="/work"
            className="inline-flex-1 flex-1 min-w-[110px] inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-primary text-[10px] font-semibold py-2.5 border border-slate-700 transition-colors"
          >
            {isHi ? 'हमारा काम देखें' : 'View Our Work'}
          </Link>
        </div>
        <div className="mt-1 grid grid-cols-3 gap-2 text-[8px] text-slate-400">
          <div>
            {isHi ? '• 304 ग्रेड SS मटेरियल' : '• 304 grade SS material'}
          </div>
          <div>
            {isHi
              ? '• लेवल में ऑन-साइट फिटिंग'
              : '• On-site fitting with proper alignment'}
          </div>
          <div>
            {isHi
              ? '• रेसिडेंशियल और कमर्शियल प्रोजेक्ट्स'
              : '• Residential & commercial projects'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHighlight;