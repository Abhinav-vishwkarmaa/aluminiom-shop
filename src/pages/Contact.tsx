import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from '../sections/icons';
import { useLanguage } from '../i18n/LanguageContext';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-8">
      <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 shadow-soft-elevated">
        <h2 className="text-xl font-heading font-semibold text-primary mb-1">
          {isHi ? 'संपर्क करें' : 'Contact Us'}
        </h2>
        <p className="text-xs text-slate-400 mb-3">
          {isHi
            ? 'मजबूत काम, साफ फिनिश और समय पर डिलीवरी के लिए अभी कॉल करें या वर्कशॉप पर विज़िट करें।'
            : 'For strong work, clean finishing and on-time delivery, call now or visit the workshop.'}
        </p>
        <div className="grid gap-3 text-xs text-slate-200">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 text-primary">
              <Phone />
            </div>
            <div>
              <p className="font-semibold">
                {isHi ? 'मोबाइल / व्हाट्सएप' : 'Mobile / WhatsApp'}
              </p>
              <p className="flex flex-wrap items-center gap-2">
                <a
                  href="tel:+917860448080"
                  className="text-primary hover:underline"
                >
                  +91-7860448080
                </a>
                
                <a
                  href="tel:+917860448080"
                  className="inline-flex mt-1 items-center justify-center px-3 py-1.5 rounded-full bg-primary text-white text-[9px] font-semibold hover:bg-primary-dark"
                >
                  {isHi ? 'अभी कॉल करें' : 'Call Now'}
                </a>
              </p>
              <p className="text-[10px] text-slate-400">
                {isHi
                  ? 'साइट विज़िट, नाप और अनुमान के लिए कॉल करें।'
                  : 'Call for site visit, measurement and quotation.'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="mt-0.5 text-primary">
              <MapPin />
            </div>
            <div>
              <p className="font-semibold">
                {isHi ? 'वर्कशॉप लोकेशन' : 'Workshop Location'}
              </p>
              <p>2JW5+3CP, SH 81, Dharmpur, Uttar Pradesh 273302</p>
              <a
                href="https://www.google.com/maps?s=web&lqi=ChJkaGFyYW1wdXIgY2hhdXJhaGFIv7HpzIC6gIAIWiAQABABGAAYASISZGhhcmFtcHVyIGNoYXVyYWhhMgJoaZIBBXN0b3JlqgE7EAEyHxABIhsUPDfzhJu_q4xVF3_5PEVk6lU7UcPLbKf-5FIyFhACIhJkaGFyYW1wdXIgY2hhdXJhaGE&vet=12ahUKEwiR9aGDju2QAxVRi2MGHYwWEdcQ1YkKegQIJBAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KbXLQHDAAZQ5MWmk4NxJ0tbN&daddr=2JW5%2B3CP,+SH+81,+Dharmpur,+Uttar+Pradesh+273302"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-1 items-center justify-center px-3 py-1.5 rounded-full bg-primary text-white text-[9px] font-semibold hover:bg-primary-dark"
              >
                {isHi ? 'Google Map पर देखें' : 'View on Google Maps'}
              </a>
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
              <p className="font-semibold">
                {isHi ? 'समय' : 'Timings'}
              </p>
              <p>
                {isHi
                  ? 'सोम - रवि: सुबह 9:00 से रात 8:00 बजे तक'
                  : 'Mon - Sun: 9:00 AM - 8:00 PM'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
        <h3 className="text-sm font-semibold text-slate-100 mb-2">
          {isHi
            ? 'त्वरित पूछताछ (डेमो फॉर्म)'
            : 'Quick Inquiry (Demo Form)'}
        </h3>
        <p className="text-[10px] text-slate-500 mb-3">
          {isHi
            ? 'यह एक डेमो फॉर्म UI है। इसे बाद में अपने बैकएंड, व्हाट्सएप API या ईमेल से कनेक्ट कर सकते हैं।'
            : 'This is a demo form UI. Later you can connect it to your backend, WhatsApp API, or email.'}
        </p>
        <form
          className="space-y-3 text-xs"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2500);
          }}
        >
          <div className="space-y-1">
            <label className="block text-slate-400">
              {isHi ? 'नाम' : 'Name'}
            </label>
            <input
              className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder={
                isHi ? 'अपना नाम लिखें' : 'Enter your name'
              }
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-slate-400">
              {isHi ? 'मोबाइल नंबर' : 'Mobile Number'}
            </label>
            <input
              className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder={
                isHi
                  ? 'आपका व्हाट्सएप / कॉन्टैक्ट नंबर'
                  : 'Your WhatsApp / contact number'
              }
              required
            />
          </div>
          <div className="space-y-1">
            <label className="block text-slate-400">
              {isHi ? 'आपकी आवश्यकता' : 'Your Requirement'}
            </label>
            <textarea
              rows={3}
              className="w-full rounded-lg bg-slate-950/70 border border-slate-700 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
              placeholder={
                isHi
                  ? 'SS railing, aluminium window, main gate, partition आदि लिखें'
                  : 'Describe SS railing, aluminium window, main gate, partition, etc.'
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-semibold py-2.5 shadow-soft-elevated transition-colors"
          >
            {isHi
              ? 'सबमिट (डेमो - असली सबमिशन नहीं)'
              : 'Submit (Demo - Not Connected)'}
          </button>
          {submitted && (
            <p className="text-[10px] text-emerald-400 mt-1">
              {isHi
                ? 'धन्यवाद! यह डेमो मैसेज है, अभी कोई असली डेटा नहीं भेजा जाता।'
                : 'Thank you! This is a demo message; no real data is sent.'}
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default Contact;