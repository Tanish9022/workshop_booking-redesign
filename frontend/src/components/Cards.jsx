import React from 'react';

const Card = React.memo(({ title, description, date, price, duration }) => {
  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-400 transition-all duration-300">
      <div className="h-56 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center border border-gray-700">
            <svg className="w-8 h-8 text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-4 right-4 bg-white text-black px-4 py-1 rounded-md text-sm font-bold">
          {price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 transition-colors leading-tight">{title}</h3>
        <p className="text-gray-500 mb-6 line-clamp-2 text-sm leading-relaxed">{description}</p>
        
        <div className="space-y-3 pt-4 border-t border-gray-100">
          <div className="flex items-center text-xs font-semibold text-gray-600">
            <div className="w-8 h-8 rounded-md bg-gray-50 flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            {date}
          </div>
          <div className="flex items-center text-xs font-semibold text-gray-600">
             <div className="w-8 h-8 rounded-md bg-gray-50 flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            {duration}
          </div>
        </div>
        
        <button className="mt-6 w-full bg-[#020617] text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
          Details & Application
        </button>
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
