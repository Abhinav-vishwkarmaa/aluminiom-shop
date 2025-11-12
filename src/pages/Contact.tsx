import React from 'react';
import { Phone, MapPin, Mail, Clock } from '../sections/icons';

const Contact: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 shadow-soft-elevated">
        <h2 className="text-xl font-heading font-semibold text-primary mb-1">
          संपर्क करें / Contact Us
        </h2>
        <p className="text-xs text-slate-400 mb-3">
          मजबूत काम, साफ फिनिश और समय पर डिलीवरी। अभी कॉल करें या लोकेशन पर विज़िट करें।
          Reliable fabrication for homes, showrooms and commercial projects.
        </p>
        <div className="grid gap-3 text-xs text-slate-200">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 text-primary">
              <Phone />
            </div>
            <div>
              <p className="font-semibold">Mobile / WhatsApp</p>
              <p>+91-98XXXXXX01</p>
              <p className="text-[10px] text-slate-400">
                Call for site visit, measurement and quotation.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="mt-0.5 text-primary">
              <MapPin />
            </div>
            <div>
              <p className="font-semibold">Workshop Location</p>
              <p>Maa Durga SS Stiles & Aluminium Workshop</p>
              <p className="text-[10px] text-slate-400">
                Add your full address here for customers to find easily on Google Maps.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="mt-0.5 text-primary">
              <Mail />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>info@maadurgassaluminium.com</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="mt-0.5 text-primary">
              <Clock />
            </div>
            <div>
              <p className="font-semibold">Timings</p>
              <p>Mon - Sun: 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
        <h3 className="text-sm font-semibold text-slate-100 mb-2">
          Quick Inquiry / त्वरित पूछताछ (Demo Form)
        </h3>
        <p className="text-[10px] text-slate-500 mb-3">
          This is a demo form UI. Connect it later with your preferred backend, WhatsApp API, or email.
        </p>
        <form className="space-y-3 text-xs">
          <div className="space-y-1">
            <label className="block text-slate-400">Name / नाम</label>
            <input
              className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="Enter your name / अपना नाम लिखें"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-slate-400">Mobile Number / मोबाइल</label>
            <input
              className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="Your active WhatsApp / आपका व्हाट्सएप नंबर"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-slate-400">Requirement / आवश्यकता</label>
            <textarea
              rows={3}
              className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
              placeholder="SS railing, aluminium window, glass railing, main gate, partition, etc."
            />
          </div>
          <button
            type="button"
            className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold py-2.5 shadow-soft-elevated transition-colors"
          >
            Submit Demo (Not Connected)
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;