import React from 'react';

type WorkItem = {
  title: string;
  hi: string;
  description: string;
  location: string;
  type: string;
};

const demoWork: WorkItem[] = [
  {
    title: 'SS Railing with Glass for Duplex House',
    hi: 'डुप्लेक्स हाउस के लिए ग्लास के साथ एसएस रेलिंग',
    description:
      '304 grade SS with toughened glass, smooth edges and premium finish. Ideal for modern homes.',
    location: 'Demo: City Name / Local Area',
    type: 'SS Railing + Glass',
  },
  {
    title: 'Aluminium Sliding Windows for Flat',
    hi: 'फ्लैट के लिए एल्युमिनियम स्लाइडिंग विंडो',
    description:
      'High-quality sliding channels, mosquito mesh option and proper water drainage.',
    location: 'Demo: Residential Apartment',
    type: 'Aluminium Windows',
  },
  {
    title: 'Designer SS Main Gate',
    hi: 'डिज़ाइनर एसएस मेन गेट',
    description:
      'Custom laser-cut pattern with solid frame for durability and grand entrance.',
    location: 'Demo: Bungalow / Kothi',
    type: 'SS Gate',
  },
  {
    title: 'Shop Front Glass & Aluminium Frame',
    hi: 'शोरूम फ्रंट ग्लास और एल्युमिनियम फ्रेम',
    description:
      'Clean, modern commercial frontage with toughened glass and powder-coated sections.',
    location: 'Demo: Commercial Market',
    type: 'Glass + Aluminium',
  },
];

const WorkGallery: React.FC = () => {
  return (
    <section className="bg-slate-950/50 border border-slate-900 rounded-2xl p-4 space-y-3">
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-sm font-heading font-semibold text-slate-100">
          Our Work Showcase / हमारा काम
        </h2>
        <p className="text-[8px] text-slate-500">
          Replace demo details with your real project photos and locations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {demoWork.map((item, idx) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col"
          >
            <div className="relative h-28 bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950 flex items-center justify-center">
              <div className="w-28 h-16 rounded-lg bg-slate-950/80 border border-slate-800 shadow-soft-elevated flex items-center justify-center text-[8px] text-slate-400 text-center px-2">
                Demo Image {idx + 1}
                <br />
                Add your real project photo here.
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-3 flex-1 flex flex-col gap-1.5">
              <p className="text-[10px] font-semibold text-primary">
                {item.type}
              </p>
              <p className="text-xs font-semibold text-slate-50">
                {item.title}
              </p>
              <p className="text-[10px] text-slate-400">
                {item.hi}
              </p>
              <p className="text-[8px] text-slate-400">
                {item.description}
              </p>
              <p className="text-[8px] text-slate-500 mt-0.5">
                Location: {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;