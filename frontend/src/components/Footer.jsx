import React from 'react';

/**
 * UX IMPROVEMENTS:
 * 1. Visual Hierarchy: Grid-based layout for clear information groups.
 * 2. Mobile-First: Stacks on mobile, 4-columns on desktop.
 * 3. Accessibility: Aria-labels for social links and semantic structure.
 * 4. Touch Targets: Links and social icons are large enough for touch (min 44px equivalent area).
 * 5. Student-Friendly: Clean, professional, and includes direct navigation.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
        
        {/* Column 1: Brand & Description */}
        <div className="lg:col-span-1">
          <div className="text-2xl font-black tracking-tighter mb-6">
            WORKSHOP<span className="text-blue-500">PORTAL</span>
          </div>
          <p className="text-gray-400 font-medium leading-relaxed mb-8">
            The leading platform for high-impact engineering workshops. We bridge the gap between academia and industry for the next generation of builders.
          </p>
          <div className="flex items-center gap-4">
            {/* Social Links with aria-labels */}
            {['github', 'twitter', 'discord'].map((social) => (
              <a 
                key={social}
                href={`#${social}`}
                className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                aria-label={`Follow us on ${social}`}
              >
                <span className="sr-only">{social}</span>
                {/* SVG placeholders for social icons */}
                <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-8">Platform</h4>
          <ul className="space-y-4">
            {['Home', 'Workshops', 'Upcoming Events', 'Pricing'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white font-bold transition-colors min-h-[44px] inline-flex items-center">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-8">Resources</h4>
          <ul className="space-y-4">
            {['Documentation', 'Community', 'Success Stories', 'Affiliates'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white font-bold transition-colors min-h-[44px] inline-flex items-center">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter/Action */}
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest text-blue-500 mb-8">Join the Movement</h4>
          <p className="text-gray-400 font-medium mb-6">Get notified about new high-impact workshops.</p>
          <div className="flex flex-col gap-3">
             <button 
               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all"
               aria-label="Subscribe to newsletter"
             >
               Book Now
             </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm font-bold tracking-tight">
          &copy; {currentYear} WorkshopPortal. All rights reserved.
        </p>
        <div className="flex gap-8 text-gray-500 text-xs font-black uppercase tracking-widest">
           <a href="#privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
           <a href="#terms" className="hover:text-blue-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
