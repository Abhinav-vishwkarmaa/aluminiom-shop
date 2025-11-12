import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

type WorkItem = {
  titleHi: string;
  titleEn: string;
  descriptionHi: string;
  descriptionEn: string;
  locationHi: string;
  locationEn: string;
  typeHi: string;
  typeEn: string;
};

const demoWork: WorkItem[] = [
  {
    titleHi: 'SS रेलिंग विद ग्लास - डुप्लेक्स हाउस',
    titleEn: 'SS Railing with Glass for Duplex House',
    descriptionHi:
      '304 ग्रेड SS और टफन्ड ग्लास के साथ प्रीमियम फिनिश, मॉडर्न इंटीरियर के लिए डेमो प्रोजेक्ट।',
    descriptionEn:
      '304 grade SS with toughened glass, smooth edges and premium finish. Demo for modern duplex homes.',
    locationHi: 'डेमो: सिटी नेम / लोकल एरिया',
    locationEn: 'Demo: City Name / Local Area',
    typeHi: 'SS रेलिंग + ग्लास',
    typeEn: 'SS Railing + Glass',
  },
  {
    titleHi: 'एल्युमिनियम स्लाइडिंग विंडो - फ्लैट',
    titleEn: 'Aluminium Sliding Windows for Flat',
    descriptionHi:
      'क्वालिटी चैनल, स्मूथ स्लाइड और मच्छर जाली ऑप्शन के साथ विंडो (डेमो).',
    descriptionEn:
      'High-quality sliding channels with mosquito mesh option and proper drainage (demo).',
    locationHi: 'डेमो: रेजिडेंशियल अपार्टमेंट',
    locationEn: 'Demo: Residential Apartment',
    typeHi: 'एल्युमिनियम विंडो',
    typeEn: 'Aluminium Windows',
  },
  {
    titleHi: 'डिज़ाइनर SS मेन गेट',
    titleEn: 'Designer SS Main Gate',
    descriptionHi:
      'कस्टम लेज़र कट पैटर्न और हेवी फ्रेम के साथ मेन गेट (डेमो).',
    descriptionEn:
      'Custom laser-cut pattern with solid frame for durability and grand entrance (demo).',
    locationHi: 'डेमो: बंगला / कोठी',
    locationEn: 'Demo: Bungalow / Kothi',
    typeHi: 'SS गेट',
    typeEn: 'SS Gate',
  },
  {
    titleHi: 'शोरूम फ्रंट ग्लास + एल्युमिनियम फ्रेम',
    titleEn: 'Shop Front Glass & Aluminium Frame',
    descriptionHi:
      'टफन्ड ग्लास और पाउडर-कोटेड सेक्शन के साथ क्लीन कमर्शियल फ्रंट (डेमो).',
    descriptionEn:
      'Clean commercial front with toughened glass and powder-coated aluminium sections (demo).',
    locationHi: 'डेमो: कमर्शियल मार्केट',
    locationEn: 'Demo: Commercial Market',
    typeHi: 'ग्लास + एल्युमिनियम',
    typeEn: 'Glass + Aluminium',
  },
];

const WorkGallery: React.FC = () => {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-950/50 border border-slate-900 rounded-2xl p-4 space-y-3">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <h2 className="text-sm font-heading font-semibold text-slate-100">
            {isHi ? 'हमारा काम (डेमो प्रोजेक्ट्स)' : 'Our Work (Demo Projects)'}
          </h2>
          <p className="text-[8px] text-slate-500">
            {isHi
              ? 'नीचे दिए गए सभी प्रोजेक्ट डेमो हैं। इन्हें अपने असली फोटो और लोकेशन से बदल सकते हैं।'
              : 'All projects below are demo. Replace them with your actual photos and locations.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {demoWork.map((item, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col"
            >
              {/* Demo image placeholder */}
              <div className="relative h-28 bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950 flex items-center justify-center">
                <div className="w-28 h-16 rounded-lg bg-slate-950/80 border border-slate-800 shadow-soft-elevated flex items-center justify-center text-[8px] text-slate-400 text-center px-2">
                  {isHi
                    ? `डेमो इमेज ${idx + 1}\nयहाँ अपना असली प्रोजेक्ट फोटो लगाएँ`
                    : `Demo Image ${idx + 1}\nAdd your real project photo here`}
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <button
                type="button"
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="p-3 flex-1 flex flex-col gap-1.5 text-left"
              >
                <p className="text-[10px] font-semibold text-primary">
                  {isHi ? item.typeHi : item.typeEn}
                </p>
                <p className="text-xs font-semibold text-slate-50">
                  {isHi ? item.titleHi : item.titleEn}
                </p>
                <p className="text-[10px] text-slate-400">
                  {isHi ? item.descriptionHi : item.descriptionEn}
                </p>
                <p className="text-[8px] text-slate-500 mt-0.5">
                  {isHi ? `स्थान: ${item.locationHi}` : `Location: ${item.locationEn}`}
                </p>
                <p className="mt-auto text-[8px] text-primary/80">
                  {isHi
                    ? isOpen
                      ? 'कम डिटेल देखें'
                      : 'पूरा डिटेल देखें'
                    : isOpen
                    ? 'View less details'
                    : 'View full details'}
                </p>
              </button>

              {/* Simple inline "modal" details (expandable) */}
              {isOpen && (
                <div className="px-3 pb-3 text-[8px] text-slate-400">
                  <ul className="list-disc list-inside space-y-0.5">
                    <li>
                      {isHi
                        ? 'यह केवल सैंपल लेआउट है। अपने असली प्रोजेक्ट स्पेसिफिकेशन और फोटो लगाएँ।'
                        : 'This is just a sample layout. Replace with actual project specs and photos.'}
                    </li>
                    <li>
                      {isHi
                        ? 'SS 304 / एल्युमिनियम सेक्शन, क्वालिटी फिनिशिंग (डेमो टेक्स्ट)।'
                        : 'SS 304 / aluminium sections, quality finishing (demo text).'}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkGallery;