import React from 'react';

/**
 * UX IMPROVEMENTS:
 * 1. Card-based Layout: Clear separation and hierarchy.
 * 2. Elevation: Smooth hover shadow and micro-interactions.
 * 3. Typography: Larger headers, readable body text.
 * 4. Accessibility: Aria-labels for CTA, semantic tags.
 * 5. Touch Target: 44px+ height button.
 */
const WorkshopCard = ({ title, description, date, price, duration }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Card Header (Visual focus) */}
      <div className="h-48 bg-gray-50 relative flex items-center justify-center">
         <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110 duration-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
         </div>
         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1 rounded-lg text-sm font-bold shadow-sm border border-blue-50">
           {price}
         </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50 mb-6">
          <div className="flex items-center gap-3 text-gray-500 text-xs font-bold uppercase tracking-wider">
             <div className="w-7 h-7 bg-gray-50 rounded-lg flex items-center justify-center">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
             </div>
             {date}
          </div>
          <div className="flex items-center gap-3 text-gray-500 text-xs font-bold uppercase tracking-wider">
             <div className="w-7 h-7 bg-gray-50 rounded-lg flex items-center justify-center">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             {duration}
          </div>
        </div>

        <button 
          className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-100 min-h-[44px]"
          aria-label={`View details and apply for ${title}`}
        >
          Details & Application
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;
