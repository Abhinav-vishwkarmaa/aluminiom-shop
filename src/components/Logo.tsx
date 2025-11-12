import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-soft-elevated border border-slate-900/70">
      <span className="text-[10px] xs:text-[11px] font-semibold text-white leading-tight text-center">
        Maa
        <br />
        Durga
      </span>
    </div>
  );
};

export default Logo;