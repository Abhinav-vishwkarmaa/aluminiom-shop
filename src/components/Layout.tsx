import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useLanguage } from '../i18n/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { to: '/', labelEn: 'Home', labelHi: 'होम' },
  { to: '/work', labelEn: 'Our Work', labelHi: 'हमारा काम' },
  { to: '/contact', labelEn: 'Contact', labelHi: 'संपर्क' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const label = (hi: string, en: string) => (lang === 'hi' ? hi : en);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-main)] font-body">
      <header className="sticky top-0 z-30 bg-[var(--color-bg-soft)]/98 backdrop-blur border-b border-[var(--color-border-subtle)]">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="flex flex-col leading-tight">
              <h1 className="text-sm xs:text-base sm:text-lg font-semibold font-heading tracking-wide text-primary">
                {label(
                  'Maa Durga SS Stiles & Aluminium Workshop',
                  'Maa Durga SS Stiles & Aluminium Workshop'
                )}
              </h1>
              <p className="text-[10px] xs:text-xs text-[var(--color-text-muted)]">
                {label(
                  'SS रेलिंग • एल्युमिनियम विंडो • गेट & फैब्रिकेशन',
                  'SS Railings • Aluminium Windows • Fabrication'
                )}
              </p>
            </div>
          </div>

          {/* Desktop language switch */}
          <div className="hidden sm:flex items-center gap-1 text-[10px]">
            <button
              type="button"
              onClick={() => setLang('hi')}
              className={`px-2 py-1 rounded-full border ${
                lang === 'hi'
                  ? 'bg-primary text-white border-primary'
                  : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-soft)]'
              }`}
            >
              हिंदी
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded-full border ${
                lang === 'en'
                  ? 'bg-primary text-white border-primary'
                  : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-soft)]'
              }`}
            >
              ENG
            </button>
          </div>

          {/* Mobile hamburger + language */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setLang('hi')}
              className={`px-2 py-1 rounded-full border text-[9px] ${
                lang === 'hi'
                  ? 'bg-primary text-white border-primary'
                  : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)]'
              }`}
              aria-label="Switch to Hindi"
            >
              हिंदी
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded-full border text-[9px] ${
                lang === 'en'
                  ? 'bg-primary text-white border-primary'
                  : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)]'
              }`}
              aria-label="Switch to English"
            >
              ENG
            </button>
            <button
              type="button"
              className="w-8 h-8 flex flex-col items-center justify-center gap-1 rounded-full border border-[var(--color-border-subtle)] text-[var(--color-text-main)]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <span className="w-4 h-[1.5px] bg-slate-200" />
              <span className="w-4 h-[1.5px] bg-slate-200" />
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex max-w-5xl mx-auto px-2 pb-2 gap-2 text-xs xs:text-sm">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  'px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap',
                  active
                    ? 'bg-primary text-white border-primary shadow-soft-elevated'
                    : 'border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-soft)] hover:text-primary',
                ].join(' ')}
              >
                {label(item.labelHi, item.labelEn)}
              </Link>
            );
          })}
        </nav>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="sm:hidden max-w-5xl mx-auto px-2 pb-2 flex flex-col gap-1 text-xs bg-[var(--color-bg-soft)]/98 border-t border-[var(--color-border-subtle)]">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'px-3 py-2 rounded-lg transition-colors',
                    active
                      ? 'bg-primary text-white shadow-soft-elevated'
                      : 'text-[var(--color-text-main)] hover:bg-[var(--color-bg-soft)]',
                  ].join(' ')}
                >
                  {label(item.labelHi, item.labelEn)}
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-6">{children}</div>
      </main>
 
      <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-soft)]/98">
        <div className="max-w-5xl mx-auto px-4 py-4 text-[10px] xs:text-xs text-[var(--color-text-soft)] flex flex-col gap-1">
          <p>
            © {new Date().getFullYear()} Maa Durga SS Stiles & Aluminium Workshop.{' '}
            {label('सर्वाधिकार सुरक्षित.', 'All rights reserved.')}
          </p>
          <p className="text-[var(--color-text-muted)]/90">
            {label(
              'SS रेलिंग, अल्युमिनियम विंडो/डोर, ग्लास वर्क और कस्टम फैब्रिकेशन — घर, दुकान और कमर्शियल प्रोजेक्ट के लिए।',
              'High-quality SS railings, aluminium windows/doors, glass work and custom fabrication for homes, shops and commercial spaces.'
            )}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;