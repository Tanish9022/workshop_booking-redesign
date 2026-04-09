import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#020617] border-b border-gray-800 sticky top-0 z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-semibold text-white tracking-tight" aria-label="WorkshopPortal Home">
              Workshop<span className="text-gray-400">Portal</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Home</a>
            <a href="/workshops" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Workshops</a>
            <button 
              className="ml-4 bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
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
          <div className="px-6 py-6 space-y-2 bg-[#020617] border-t border-gray-800">
            <a href="/" className="text-gray-400 hover:text-white block px-4 py-2 text-base font-medium transition">Home</a>
            <a href="/workshops" className="text-gray-400 hover:text-white block px-4 py-2 text-base font-medium transition">Workshops</a>
            <div className="pt-2">
              <button 
                className="w-full bg-white text-black px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-200 transition"
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
