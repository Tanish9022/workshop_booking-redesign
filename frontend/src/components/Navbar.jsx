import React, { useState, useEffect } from 'react';

/**
 * UX IMPROVEMENTS:
 * 1. Sticky & Shadow: Sticky positioning with shadow on scroll for better navigation.
 * 2. Accessibility: Aria-labels, semantic nav, keyboard-friendly hamburger.
 * 3. Mobile Hamburger: Functional mobile menu with smooth layout.
 * 4. Active State: Highlights active links (Home/Workshops).
 * 5. Touch Target: Menu items and buttons meet 44px+ height.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'
      }`}
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-black text-gray-900 tracking-tighter" aria-label="WorkshopPortal Home">
            WORKSHOP<span className="text-blue-600">PORTAL</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">Home</a>
          <a href="/workshops" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Workshops</a>
          <button 
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-100 min-h-[44px]"
            aria-label="Book a workshop"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none min-h-[44px] min-w-[44px]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-6 py-8 flex flex-col space-y-4">
          <a href="/" className="text-lg font-bold text-blue-600 px-4 py-2 bg-blue-50 rounded-lg">Home</a>
          <a href="/workshops" className="text-lg font-bold text-gray-600 px-4 py-2 hover:bg-gray-50 rounded-lg">Workshops</a>
          <button 
            className="w-full mt-4 px-6 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-100"
            aria-label="Book a workshop mobile"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
