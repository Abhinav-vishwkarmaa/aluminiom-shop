import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary/15 via-slate-900 to-slate-950 border border-primary/20 rounded-2xl p-4 mt-2 flex flex-col gap-2 shadow-soft-elevated">
      <h3 className="text-sm font-heading font-semibold text-slate-50">
        Ready to Discuss Your SS & Aluminium Work?
      </h3>
      <p className="text-[9px] text-slate-300">
        अभी कॉल करें या लोकेशन शेयर करें। हम साइट विज़िट, सही माप, डिज़ाइन सुझाव और बेहतरीन फिनिश के साथ काम करते हैं।
        This is demo text, update with your real commitment and specialties.
      </p>
      <div className="flex flex-wrap gap-2 text-[9px]">
        <a
          href="tel:+9198XXXXXX01"
          className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold py-2 transition-colors"
        >
          Call Now / अभी कॉल करें
        </a>
        <Link
          to="/contact"
          className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-primary font-semibold py-2 border border-primary/40 transition-colors"
        >
          Send Inquiry / पूछताछ भेजें
        </Link>
      </div>
      <p className="text-[8px] text-slate-500">
        Note: This is a static demo. Connect buttons to WhatsApp, direct call or form submission as per your need.
      </p>
    </section>
  );
};

export default CTASection;