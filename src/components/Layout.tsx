import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { to: '/', label: 'Home', labelHi: 'होम' },
  { to: '/work', label: 'Our Work', labelHi: 'हमारा काम' },
  { to: '/contact', label: 'Contact', labelHi: 'संपर्क' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50 font-body">
      <header className="sticky top-0 z-30 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <Logo />
          <div className="flex flex-col leading-tight">
            <h1 className="text-sm xs:text-base sm:text-lg font-semibold font-heading tracking-wide text-primary">
              Maa Durga SS Stiles & Aluminium Workshop
            </h1>
            <p className="text-[10px] xs:text-xs text-slate-400">
              Stainless Steel Railings • Aluminium Windows • Fabrication
            </p>
          </div>
        </div>
        <nav className="max-w-5xl mx-auto px-2 pb-2 flex gap-2 text-xs xs:text-sm overflow-x-auto no-scrollbar">
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
                    : 'border-slate-700/70 text-slate-300 hover:bg-slate-900 hover:text-primary',
                ].join(' ')}
              >
                <span className="font-medium mr-1">{item.label}</span>
                <span className="text-[10px] text-slate-400">{item.labelHi}</span>
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-6">{children}</div>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/95">
        <div className="max-w-5xl mx-auto px-4 py-4 text-[10px] xs:text-xs text-slate-500 flex flex-col gap-1">
          <p>© {new Date().getFullYear()} Maa Durga SS Stiles & Aluminium Workshop. All rights reserved.</p>
          <p className="text-slate-500/80">
            High-quality stainless steel railings, aluminium windows/doors, glass work and custom fabrication for homes,
            shops and commercial spaces.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;