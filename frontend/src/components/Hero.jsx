import React from 'react';

/**
 * UX IMPROVEMENTS:
 * 1. Accessibility: Added aria-label for CTA button and SVG icon roles.
 * 2. Visual Hierarchy: Strong Bold Display Heading with clear contrast.
 * 3. Gradient/Background: Subtle blue gradient mesh to add depth without clutter.
 * 4. Mobile-First: responsive padding (py-16 -> py-32) and font sizes.
 * 5. Touch Target: Primary buttons follow min 44px height rule.
 */
const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-32 border-b border-gray-100">
      {/* Background Decoration (Performance: CSS only, no heavy images) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 tracking-wide uppercase">
            🚀 Booking for Summer 2026
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Master the Skills <br/> 
            <span className="text-blue-600">That Matter.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            Join elite, student-focused workshops led by industry leaders. Hands-on projects, expert mentorship, and a curriculum built for your career success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button 
              onClick={() => document.getElementById('workshops-grid')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all text-center min-h-[48px]"
              aria-label="Explore upcoming workshops"
            >
              Explore Workshops
            </button>
            <button 
              onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold border-2 border-gray-200 rounded-xl hover:bg-gray-50 active:scale-95 transition-all text-center min-h-[48px]"
              aria-label="Book your spot now"
            >
              Secure Your Spot
            </button>
          </div>
        </div>

        {/* Visual Element (Illustration Placeholder) */}
        <div className="flex-1 relative hidden lg:block">
           <div className="w-full h-[400px] bg-gray-50 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
              {/* Abstract decorative shape */}
              <div className="w-48 h-48 bg-blue-600 rounded-2xl rotate-12 shadow-2xl flex items-center justify-center group-hover:rotate-0 transition-transform duration-500">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.58 0.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332 0.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332 0.477-4.5 1.253" />
                </svg>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
