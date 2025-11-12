import React from 'react';

const points = [
  {
    en: 'On-site measurement and fitting support',
    hi: 'साइट पर माप और फिटिंग की सुविधा',
  },
  {
    en: 'Use of durable SS 304 and premium aluminium sections',
    hi: 'टिकाऊ SS 304 और प्रीमियम एल्युमिनियम सेक्शन का उपयोग',
  },
  {
    en: 'Clean welding, grinding and finishing quality',
    hi: 'साफ वेल्डिंग, बढ़िया ग्राइंडिंग और मजबूत फिनिश',
  },
  {
    en: 'Lightweight, mobile-first website design content ready',
    hi: 'मोबाइल यूज़र्स के लिए आसान और तेज़ वेबसाइट सामग्री',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-slate-950/60 border border-slate-900 rounded-2xl p-4 space-y-3">
      <h3 className="text-sm font-heading font-semibold text-slate-100">
        Why Choose Us? / हमें क्यों चुनें?
      </h3>
      <p className="text-[9px] text-slate-400">
        These demo points help customers quickly understand your strengths. Replace with your exact details.
      </p>
      <ul className="space-y-1.5 text-[9px] text-slate-300">
        {points.map((p) => (
          <li
            key={p.en}
            className="flex items-start gap-1.5"
          >
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>
              <span className="font-medium text-slate-100">{p.en}</span>
              <span className="block text-slate-500">{p.hi}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;