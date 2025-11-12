import React from 'react';

const steps = [
  {
    titleEn: 'Site Visit & Measurement',
    titleHi: 'साइट विज़िट और माप',
    desc: 'We visit your site, understand your requirement and take accurate measurements.',
  },
  {
    titleEn: 'Design & Material Finalization',
    titleHi: 'डिज़ाइन और मटेरियल फाइनल',
    desc: 'Choose SS pattern, pipe size, glass or aluminium section as per budget and look.',
  },
  {
    titleEn: 'Fabrication & Finishing',
    titleHi: 'फैब्रिकेशन और फिनिशिंग',
    desc: 'Work done with proper welding, grinding and smooth finishing at workshop.',
  },
  {
    titleEn: 'Fitting & After-Service',
    titleHi: 'फिटिंग और आफ्टर सर्विस',
    desc: 'On-site installation with alignment check and support for future service.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 space-y-3">
      <h3 className="text-sm font-heading font-semibold text-slate-100">
        Work Process / काम करने की प्रक्रिया
      </h3>
      <p className="text-[9px] text-slate-400">
        Clear steps to build trust with your customers. Edit timing and details as per your style.
      </p>
      <ol className="space-y-1.5 text-[9px] text-slate-300">
        {steps.map((s, index) => (
          <li
            key={s.titleEn}
            className="flex items-start gap-2"
          >
            <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/15 border border-primary/50 text-[8px] flex items-center justify-center text-primary font-semibold">
              {index + 1}
            </div>
            <div>
              <p className="font-semibold text-slate-100">
                {s.titleEn}
              </p>
              <p className="text-slate-500">
                {s.titleHi}
              </p>
              <p className="text-[8px] text-slate-400">
                {s.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ProcessSection;