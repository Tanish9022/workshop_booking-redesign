import React from 'react';

/**
 * UX IMPROVEMENTS:
 * 1. Visual Consistency: Light-themed design matches the rest of the application.
 * 2. Readability: High-contrast text on gray-100 background.
 * 3. Spacing: Added mt-20 to provide a clear break between content and footer.
 * 4. Accessibility: Maintained aria-labels and semantic structure.
 * 5. Minimal Design: Clean lines with subtle shadow-sm for depth.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200 px-6 py-10 mt-20 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
        
        {/* Column 1: Brand & Description */}
        <div className="lg:col-span-1">
          <div className="text-2xl font-black tracking-tighter mb-4 text-gray-900">
            WORKSHOP<span className="text-blue-600">PORTAL</span>
          </div>
          <p className="text-gray-600 font-medium leading-relaxed mb-6">
            The leading platform for high-impact engineering workshops. We bridge the gap between academia and industry for the next generation of builders.
          </p>
          <div className="flex items-center gap-3">
            {/* Social Links with aria-labels */}
            {['github', 'twitter', 'discord'].map((social) => (
              <a 
                key={social}
                href={`#${social}`}
                className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs"
                aria-label={`Follow us on ${social}`}
              >
                <span className="sr-only">{social}</span>
                {/* SVG placeholders for social icons */}
                <div className="w-5 h-5 bg-current rounded-sm opacity-40"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Platform Links */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6">Platform</h4>
          <ul className="space-y-3">
            {['Home', 'Workshops', 'Upcoming Events', 'Pricing'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 font-bold transition-colors min-h-[44px] inline-flex items-center">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6">Resources</h4>
          <ul className="space-y-3">
            {['Documentation', 'Community', 'Success Stories', 'Affiliates'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 font-bold transition-colors min-h-[44px] inline-flex items-center">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter/Action */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-6">Join the Movement</h4>
          <p className="text-gray-600 font-medium mb-6 text-sm">Get notified about new high-impact workshops.</p>
          <div className="flex flex-col gap-3">
             <button 
               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all shadow-md shadow-blue-100"
               aria-label="Subscribe to newsletter"
             >
               Book Now
             </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs font-bold tracking-tight">
          &copy; {currentYear} WorkshopPortal. All rights reserved.
        </p>
        <div className="flex gap-6 text-gray-500 text-[10px] font-black uppercase tracking-widest">
           <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
           <a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
