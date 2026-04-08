import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-black text-white tracking-tight">
            Workshop<span className="text-blue-500">Portal</span>
          </div>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.3em]">
            &copy; 2026 Premium Education Platform.
          </p>
          <div className="flex gap-8">
            {['Twitter', 'GitHub', 'Discord'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-slate-500 hover:text-blue-400 transition-all transform hover:-translate-y-1 font-black text-[10px] uppercase tracking-widest"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900/50 text-center">
          <p className="text-slate-700 font-bold text-[10px] uppercase tracking-[0.5em]">
            Designed for the next generation of engineers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
