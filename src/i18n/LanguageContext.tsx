import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "hi" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations) => string;
}

// Central translation dictionary (keys reused across components/pages)
export const translations = {
  siteTitle: "Maa Durga SS Stiles & Aluminium Workshop",
  tagline_hi: "मजबूत स्टील, सुंदर डिज़ाइन — आपके घर और दुकान के लिए",
  tagline_en: "Strong steel, elegant design for your home and business.",
  hero_description_hi:
    "हम ग्रिल, गेट, रेलिंग, अल्युमिनियम खिड़कियाँ और कस्टम फैब्रिकेशन का भरोसेमंद काम करते हैं — ऑन-साइट माप, बेहतर क्वालिटी और समय पर डिलीवरी के साथ।",
  hero_description_en:
    "We specialize in SS grills, main gates, railings, aluminium windows and custom fabrication with precise on-site measurement, quality materials and timely delivery.",
  cta_viewWork_hi: "हमारा काम देखें",
  cta_viewWork_en: "View Our Work",
  cta_contact_hi: "कॉल करें",
  cta_contact_en: "Call Now",
  nav_home_hi: "होम",
  nav_home_en: "Home",
  nav_work_hi: "वर्क",
  nav_work_en: "Work",
  nav_contact_hi: "संपर्क",
  nav_contact_en: "Contact",
  section_services_title_hi: "हमारी सेवाएँ",
  section_services_title_en: "Our Services",
  section_why_title_hi: "क्यों चुनें Maa Durga Workshop?",
  section_why_title_en: "Why Choose Maa Durga Workshop?",
  section_work_title_hi: "हमारा काम",
  section_work_title_en: "Our Work",
  section_contact_title_hi: "संपर्क करें",
  section_contact_title_en: "Contact Us",
  contact_call_label_hi: "तुरंत कॉल करें",
  contact_call_label_en: "Call Now",
  contact_phone_label_hi: "फोन",
  contact_phone_label_en: "Phone",
  contact_form_name_hi: "नाम",
  contact_form_name_en: "Name",
  contact_form_phone_hi: "फोन नंबर",
  contact_form_phone_en: "Phone Number",
  contact_form_message_hi: "आपकी आवश्यकता",
  contact_form_message_en: "Your requirement",
  contact_form_submit_hi: "भेजें (डेमो)",
  contact_form_submit_en: "Submit (Demo)",
  contact_form_thanks_hi: "धन्यवाद! आपकी डेमो रिक्वेस्ट सेव हो गई (कोई असली सबमिशन नहीं)।",
  contact_form_thanks_en:
    "Thank you! Your demo request is captured (no real submission).",
  filter_all_hi: "सभी",
  filter_all_en: "All",
  filter_gates_hi: "गेट",
  filter_gates_en: "Gates",
  filter_railings_hi: "रेलिंग",
  filter_railings_en: "Railings",
  filter_aluminium_hi: "अल्युमिनियम",
  filter_aluminium_en: "Aluminium",
  footer_address_hi:
    "वर्कशॉप: नज़दीकी इंडस्ट्रियल एरिया, शहर, जिला (डेमो पता - कृपया असली पता डालें)।",
  footer_address_en:
    "Workshop: Nearby industrial area, City, District (demo address - replace with actual).",
  footer_rights_hi: "सर्वाधिकार सुरक्षित.",
  footer_rights_en: "All rights reserved.",
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "maa-durga-lang";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>("hi");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "hi" || saved === "en") {
        setLangState(saved);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  const t = (key: keyof typeof translations): string => {
    const base = translations[key];
    if (typeof base !== "string") return "";
    // keys are suffixed with _hi/_en where needed; for shared keys fall back directly
    if (key.endsWith("_hi") || key.endsWith("_en")) {
      // caller should choose appropriate key; we keep generic for compatibility
      return base;
    }
    return base;
  };

  const value: LanguageContextValue = { lang, setLang, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};