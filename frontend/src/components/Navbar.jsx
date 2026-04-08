import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-white/10" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-2 transition-all" aria-label="WorkshopPortal Home">
              Workshop<span className="text-slate-800">Portal</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <a href="/" className="text-slate-600 hover:text-blue-600 px-1 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">Home</a>
            <a href="/workshops" className="text-slate-600 hover:text-blue-600 px-1 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">Workshops</a>
            <button 
              className="ml-4 bg-blue-600 text-white px-7 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200 transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Book a Workshop"
            >
              Book Workshop
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 bg-white border-t border-slate-100 shadow-xl rounded-b-2xl">
            <a href="/" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all">Home</a>
            <a href="/workshops" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all">Workshops</a>
            <div className="pt-2">
              <button 
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl text-base font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
                aria-label="Book a Workshop mobile"
              >
                Book Workshop
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
