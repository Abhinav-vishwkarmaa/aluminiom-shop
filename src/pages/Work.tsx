import React from 'react';
import WorkGallery from '../sections/WorkGallery';
import ProcessSection from '../sections/ProcessSection';
import { useLanguage } from '../i18n/LanguageContext';

const Work: React.FC = () => {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';

  return (
    <div className="space-y-8">
      {/* Page heading localized */}
      <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 shadow-soft-elevated">
        <h1 className="text-lg font-heading font-semibold text-primary mb-1">
          {isHi ? 'हमारा काम' : 'Our Work'}
        </h1>
        <p className="text-[10px] text-slate-400">
          {isHi
            ? 'कुछ सैंपल प्रोजेक्ट्स नीचे दिए गए हैं। इन्हें अपने असली फोटो और डिटेल से आसानी से बदल सकते हैं।'
            : 'Sample projects are shown below. Replace them easily with your real photos and details.'}
        </p>
      </section>

      {/* Existing gallery and process sections (these can read lang internally if extended later) */}
      <WorkGallery />
      <ProcessSection />
    </div>
  );
};

export default Work;